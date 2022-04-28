from __future__ import annotations

from rich import print as p
from rich import traceback

traceback.install(show_locals=True)
import abc
import glob
import os
import re
from dataclasses import dataclass
from typing import Any, TextIO

OUTPUT_FILE = "analyzer.d.ts"
IDENT = "    "

BASE_DIR = "ptaplayer"
APIIPC = os.path.join(BASE_DIR, "apiipc\\")
ENUMS_DIR = os.path.join(APIIPC, "generated", "enums\\")
EVENTS_DIR = os.path.join(APIIPC, "generated", "events\\")
SIM_DIR = os.path.join(APIIPC, "generated", "sim\\")
SYSTEM_DIR = os.path.join(APIIPC, "generated", "system\\")
UI_DIR = os.path.join(APIIPC, "generated", "ui\\")
IPC_FACTORY_FILE = os.path.join(APIIPC, "generated", "IPCFactory.java")
MANUL_FILE = "manual.d.ts"

if not os.path.exists(BASE_DIR):
    p(f"Directory '{BASE_DIR}' (= decompiled ptaplayer) not found")
    exit(1)
if not os.path.exists(MANUL_FILE):
    p(f"File '{MANUL_FILE}' (= manual file) not found")
    exit(1)

JAVA2JS_TYPE_MAPPING = {
    "string": "string",
    "int": "number",
    "integer": "number",
    "short": "number",
    "long": "number",
    "float": "number",
    "double": "number",
    "boolean": "boolean",
    # ---------- #
    "object": "object",
    "void": "void",
    "byte": "byte",
    # ---------- #
    "ipaddress": "IP",
    "ipv6address": "IPv6",
    "macaddress": "MAC",
    "uuid": "UUID",
    # ---------- #
    "ip": "IP",
    "ipv6": "IPv6",
    "mac": "MAC",
    "uuid": "UUID",
    # ---------- #
    "number": "number",
    "unknown": "unknown",
    "undefined": "undefined",
    "null": "null",
    "baseclass": "BaseClass",
    "baseui": "BaseUI",
    "ipcobject": "BaseClass",
    "null_uuid": "NULL_UUID",
}


def parse_type(type: str) -> str:
    type = type.strip().lstrip("_")
    if (
        type == "{}"
        or type == "[]"
        or (type.startswith("{") and type.endswith("}"))
        or re.match(r"-?\d+", type)
    ):
        return type
    # if type.startswith("{") and type.endswith("}"):
    #     return "{" + (", ".join([parse_type(x) for x in type[1:-1].split(",")])) + "}"
    if "|" in type:
        return " | ".join([parse_type(x) for x in type.split("|")])
    if type.startswith("[") and type.endswith("]"):
        return "[" + (", ".join([parse_type(x) for x in type[1:-1].split(",")])) + "]"
    if type.startswith("..."):
        return "..." + parse_type(type[3:])
    if type.endswith("[]"):
        return parse_type(type[:-2]) + "[]"
    return JAVA2JS_TYPE_MAPPING.get(type.lower(), "_" + type)


def generate_def(name: str, type: str, parse: bool = True):
    return f"{name}: {parse_type(type) if parse else type}"


def is_method_unknown(method: MethodData) -> bool:
    if method.return_type != "unknown":
        return False
    for param in method.params.values():
        if not re.match(r"(\.{3})?_+", param.name) or not re.match(
            r"unknown(\[\])?", param.type
        ):
            return False
    return True


class CodeGeneratable(abc.ABC):
    @abc.abstractmethod
    def generate_code(self) -> str:
        ...

    def write_code(self, io: TextIO, new_line: bool = True):
        io.write(self.generate_code())
        if new_line:
            io.write("\n")


@dataclass
class EnumEntry(CodeGeneratable):
    value: Any
    name: str

    def generate_code(self) -> str:
        return f"{self.name} = {self.value}"


@dataclass
class EnumData(CodeGeneratable):
    name: str
    entries: list[EnumEntry]

    def generate_code(self) -> str:
        output = f"declare enum _{self.name} {{\n"
        for entry in self.entries:
            output += f"{IDENT}{entry.generate_code()},\n"
        output += "}"
        return output


@dataclass
class EventValue(CodeGeneratable):
    name: str
    type: str

    def generate_code(self) -> str:
        return generate_def(self.name, self.type)


@dataclass
class EventData(CodeGeneratable):
    obj_name: str
    event_name: str
    values: list[EventValue]

    def generate_code(self) -> str:
        output = (
            f'{IDENT}registerEvent(eventName: "{self.event_name}", obj: object | null,'
            " callback: eventCallback<{"
        )
        if len(self.values) != 0:
            output += "\n"
            for value in self.values:
                output += f"{IDENT*2}{value.generate_code()},\n"
            output += IDENT
        output += "}>): void;"
        return output


@dataclass
class ParamData(CodeGeneratable):
    name: str
    type: str

    def generate_code(self) -> str:
        return generate_def(self.name, self.type)


@dataclass
class TypeData(CodeGeneratable):
    name: str
    value: str
    comment: str

    def generate_code(self) -> str:
        return f"{self.comment}type {self.name} = {self.value};"


@dataclass
class MethodData(CodeGeneratable):
    name: str
    return_type: str
    params: dict[str, ParamData]
    parrent: ObjectData
    comment_string_before: str = ""
    comment_string_after: str = ""

    def generate_code(self) -> str:
        if self.name == "getProcess" and self.parrent.name == "Device":
            # Ref: C:/Program Files/Cisco Packet Tracer *VERZE*/help/default/scriptModules_customUdp.htm
            if (
                len(self.params) != 1
                or parse_type(next(iter(self.params.values())).type) != "string"
            ) and not is_method_unknown(self):
                raise Exception("Device.getProcess() method signature differs")
            return "\n".join(
                [
                    f'{IDENT}{self.name}({next(iter(self.params.values())).name}: "{process}"): _{process};'
                    for process in processes
                ]
            )
        comment = self.comment_string_before.strip()
        if len(comment) > 0:
            comment = IDENT + comment + "\n"
        return (
            f"{comment}{IDENT}{self.name}({', '.join([param.generate_code() for param in self.params.values()])}):"
            f" {parse_type(self.return_type)};{(' '+self.comment_string_after).strip()}"
        )


@dataclass
class ObjectData(CodeGeneratable):
    name: str
    parrent: str
    methods: dict[str, MethodData]
    events: list[EventData]
    comment_string: str = ""

    def generate_code(self) -> str:
        output = ""
        if len(self.events) != 0:
            output += f"declare interface _{self.name}Events {{\n"
            for event in self.events:
                output += f"{event.generate_code()}\n"
            output += "}\n"

        output += (
            f"declare interface _{self.name}Base extends {parse_type(self.parrent)} {{"
        )
        if len(self.methods) != 0:
            output += "\n"
            for method in self.methods.values():
                output += f"{method.generate_code()}\n"
        output += "}\n"
        output += f"{self.comment_string}declare type _{self.name} = _{self.name}Base;"
        return output


enums: dict[str, EnumData] = {}
events: dict[str, list[EventData]] = {}
analyzed_objects: dict[str, ObjectData] = {}
processes: list[str]

manual_objects: dict[str, ObjectData] = {}
manual_types: list[TypeData] = []
manual_header: str = ""


def parse_enum():
    for path in glob.glob(ENUMS_DIR + "*"):
        with open(path) as file:
            match = re.search(
                r"\w+ enum (\w+)\s*{\s*((?:\w+?\(.+?\),?\s*?)+);",
                file.read(),
                re.MULTILINE,
            )
            if match is None:
                raise Exception("Cannot parse enum file")
            entries = []
            for x in re.finditer(r"(\w+)\((.+)\)", match[2], re.MULTILINE):
                entries.append(EnumEntry(x[2], x[1]))
            enums[match[1]] = EnumData(match[1], entries)


def parse_events():
    for path in glob.glob(EVENTS_DIR + "*Event.java"):
        filename = os.path.basename(path)
        obj_name = filename[: -len("Event.java")]
        with open(path) as file:
            for current_event in re.finditer(
                r"public static class (\w+) extends \w+Event\s*{(?:.|\s)*?}",
                file.read(),
                re.MULTILINE,
            ):
                event_values = []
                for event_value in re.finditer(
                    r"public (\w+) (\w+);", current_event[0], re.MULTILINE
                ):
                    event_values.append(EventValue(event_value[2], event_value[1]))
                events.setdefault(obj_name, []).append(
                    EventData(obj_name, current_event[1], event_values)
                )


def parse_objects():
    paths = (
        glob.glob(SIM_DIR + "*") + glob.glob(SYSTEM_DIR + "*") + glob.glob(UI_DIR + "*")
    )
    for path in paths:
        with open(path) as file:
            obj_name = None
            parrent = None
            for line in file:
                match = re.match(r"public class (\w+) extends (\w+)", line)
                if match is not None:
                    obj_name = match[1]
                    parrent = match[2]
                    break
            if obj_name is None or parrent is None:
                raise Exception("Cannot parse enum file")
            # IPC je definováno v templatu
            if obj_name == "IPC":
                continue

            methods = {}
            obj_data = ObjectData(obj_name, parrent, methods, [])
            for method in re.finditer(
                r"public (\w+) (\w+)\((.*)\)", file.read(), re.MULTILINE
            ):
                params: dict[str, ParamData] = {}
                for param in re.finditer(r"final (\w+) (\w+)", method[3]):
                    params[param[2]] = ParamData(param[2], param[1])

                # Nevím, co s těmito .read() metodami. Třídy, které tuto metodu mají,
                # tak ji mají jako override .read() metody na IPCData (= parrent).
                # Toto do jisté míry ve výsledku replikuji avšak parametr `encodedBuffer`
                # má typ `unknown`.
                if (
                    method[2] == "read"
                    and len(params) == 1
                    and "encodedBuffer" in params
                ):
                    continue

                methods[method[2]] = MethodData(method[2], method[1], params, obj_data)
            analyzed_objects[obj_data.name] = obj_data


def parse_ipcfactory():
    global processes
    with open(IPC_FACTORY_FILE) as file:
        match = re.search(
            r"protected Process instantiateProcess(.|\s)+?^    }",
            file.read(),
            re.MULTILINE,
        )
        if match is None:
            raise Exception("Cannot parse IPCFactory file")
        processes = re.findall(r"return new (\w+)\(this", match[0])


def parse_source():
    parse_enum()
    parse_events()
    parse_objects()
    parse_ipcfactory()


parse_source()

# Parsování zdroje dokončeno, nyní parsování manual.d.ts


def parse_manual():
    global manual_header
    with open(MANUL_FILE, encoding="utf8") as file:
        for line in file:
            manual_header += line
            if "HEAD END" in line:
                break
        for match in re.finditer(
            r"(/\*(?:\s|.)*?\s*)?(?:(?:declare\s+interface\s+(\w+)\s+extends\s+(\w+)\s*{((?:.|\s)*?)^})|(?:type\s+(\w+)\s*=\s*(.*);))",
            file.read(),
            re.MULTILINE,
        ):
            if match[2] is not None:
                # declare interface ...
                methods = {}
                obj = ObjectData(
                    match[2].lstrip("_"),
                    match[3].lstrip("_"),
                    methods,
                    [],
                    match[1] or "",
                )
                for method_match in re.finditer(
                    r"((?:\/\*(?:\s|.)*?)|(?:\/\/.*?)\s*)?(\w+)\((.*)\):\s*(.*);( *\/\/.*$)?",
                    match[4],
                    re.MULTILINE,
                ):
                    params = {}

                    for param_match in re.finditer(
                        r"((?:\.{3})?\w+): (.+?)(?=,|$)", method_match[3]
                    ):
                        suffix = ""
                        while True:
                            if param_match[1] + suffix in params:
                                suffix += "_"
                            else:
                                break
                        params[param_match[1] + suffix] = ParamData(
                            param_match[1], param_match[2]
                        )

                    methods[method_match[2]] = MethodData(
                        method_match[2],
                        method_match[4],
                        params,
                        obj,
                        method_match[1] or "",
                        method_match[5] or "",
                    )

                manual_objects[match[2].lstrip("_")] = obj
            else:
                # type
                manual_types.append(TypeData(match[5], match[6], match[1] or ""))


parse_manual()

# Parsování kompletně dokončeno, nyní merge

merged_objects: dict[str, ObjectData] = {}


def merge():
    analyzed_object_keys = set(analyzed_objects.keys())
    manual_object_keys = set(manual_objects.keys())
    objects_in_both = analyzed_object_keys & manual_object_keys

    for obj_key in analyzed_object_keys - objects_in_both:
        merged_objects[analyzed_objects[obj_key].name] = analyzed_objects[obj_key]
    for obj_key in manual_object_keys - objects_in_both:
        merged_objects[manual_objects[obj_key].name] = manual_objects[obj_key]

    for obj_key in objects_in_both:
        analyzed_obj = analyzed_objects[obj_key]
        manual_obj = manual_objects[obj_key]

        methods = {}
        new_obj = ObjectData(
            analyzed_obj.name,
            analyzed_obj.parrent,
            methods,
            events.setdefault(analyzed_obj.name, []),
            manual_obj.comment_string,
        )

        analyzed_method_keys = set(analyzed_obj.methods.keys())
        manual_meethod_keys = set(manual_obj.methods.keys())
        methods_in_both = analyzed_method_keys & manual_meethod_keys

        for method_key in analyzed_method_keys - methods_in_both:
            methods[method_key] = analyzed_obj.methods[method_key]
        for method_key in manual_meethod_keys - methods_in_both:
            methods[method_key] = manual_obj.methods[method_key]
        for method_key in methods_in_both:
            analyzed_method = analyzed_obj.methods[method_key]
            manual_method = manual_obj.methods[method_key]
            # new_params = {}
            new_params = analyzed_method.params

            parsed_analyzed = parse_type(analyzed_method.return_type)
            parsed_manual = parse_type(manual_method.return_type)

            def resolve_type(ana: str, man: str) -> str:
                ana = ana.strip()
                man = man.strip()
                if ana != man:
                    if man in ("unknown", "void"):
                        return ana
                    if man == "string" and (ana in ("MAC", "IP", "IPv6", "UUID")):
                        return ana
                    if man == "number" and ana.lstrip("_") in enums:
                        return ana
                    if (
                        (man == "_Cable" and ana == "_Link")
                        or (man == "_Menu" and ana == "_PopupMenu")
                        or (man == "_ConsoleLine" and ana == "_TerminalLine")
                    ):
                        return ana

                    match = re.search(
                        r"\|\s*((?:null)|(?:undefined)|(?:-?\d+)|(?:NULL_UUID))$", man
                    )
                    if match is not None:
                        return (
                            resolve_type(ana, man[: match.start()]) + " | " + match[1]
                        )
                    else:
                        try:
                            p(
                                f"{analyzed_obj.name}.{method_key}(...):\n  ana: {ana}\n  man: {man}\n"
                            )
                            input("(picking type from analyzer)")
                            return ana
                        except KeyboardInterrupt:
                            exit()
                else:
                    return ana

            return_type = resolve_type(parsed_analyzed, parsed_manual)

            new_method = MethodData(
                analyzed_method.name,
                return_type,
                new_params,
                new_obj,
                manual_method.comment_string_before,
                manual_method.comment_string_after,
            )

            methods[analyzed_method.name] = new_method
        merged_objects[new_obj.name] = new_obj


def cleanup():
    for obj in merged_objects.values():
        if obj.parrent in merged_objects:
            parrent = merged_objects[obj.parrent]
            for method in list(obj.methods.values()):
                if method.name in parrent.methods:
                    parrent_method = parrent.methods[method.name]
                    if is_method_unknown(method) or (
                        [parse_type(x.type) for x in method.params.values()],
                        parse_type(method.return_type),
                    ) == (
                        [parse_type(x.type) for x in parrent_method.params.values()],
                        parse_type(parrent_method.return_type),
                    ):
                        del obj.methods[method.name]
                        continue
                    if is_method_unknown(parrent_method):
                        continue
                    # if len(method.params) == len(parrent_method.params):
                    #     if len(method.params) == 1 and next(iter(method.params.values())).type == "number" and next(iter(parrent_method.params.values())).type in enums:
                    #         del obj.methods[method.name]
                    #         continue
                    if (
                        method.return_type == "number"
                        and parrent_method.return_type in enums
                    ):
                        del obj.methods[method.name]
                        continue

                    p(f"{parrent.name}.{method.name}():")
                    p(
                        (
                            [x.type for x in parrent_method.params.values()],
                            parrent_method.return_type,
                        )
                    )
                    p(f"{obj.name}.{method.name}():")
                    p(([x.type for x in method.params.values()], method.return_type))
                    try:
                        input()
                    except KeyboardInterrupt:
                        exit()


merge()
cleanup()


# A nyní konečně codegen...


with open(OUTPUT_FILE, "w", encoding="utf8") as file:
    file.write(manual_header)
    file.write("\n")

    for type in manual_types:
        type.write_code(file)
    file.write("\n")

    for enum in enums.values():
        enum.write_code(file)

    file.write("\n\n")

    for object in merged_objects.values():
        object.write_code(file)
        file.write("\n")
