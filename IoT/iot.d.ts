
/* ===== UNDOCUMENTED - START ===== */
declare const INPUT = 0;
declare const OUTPUT = 1;
declare const LOW = 0;
declare const HIGH = 1023;
declare const A0 = 6;
declare const A1 = 7;
declare const A2 = 8;
declare const A3 = 9;


/**
 * This value is passed to `mouseEvent()` as `x`.
 * @see mouseEvent for details
 */
declare var mouseX: number;
/**
 * This value is passed to `mouseEvent()` as `y`.
 * @see mouseEvent for details
 */
declare var mouseY: number;
/**
 * This value is passed to `mouseEvent()` as `pressed`.
 * @see mouseEvent for details
 */
declare var bMouseDown: boolean;

/**
 * Keys are added via `attachInterrupt()` and removed via `detachInterrupt()`
 */
declare var _interrupts: {[key: string]: () => any};
/**
 * Calls attached interrupt for target slot.
 */
declare function _processInterrupt(slot: number): void;
/**
 * I guess that it should be `attachInterrupt()` internals but I can't get it to work
 * @param slot Must be in range 0-9 (inclusive) (= avalible ports/slots) and error is thrown if not
 * @param _ Callback maybe?
 */
declare function _registerInterrupt(slot: number, _: any): void;
/**
 * I guess that it should be `detachInterrupt()` internals but I can't get it to work
 * @param slot Must be in range 0-9 (inclusive) (= avalible ports/slots) and error is thrown if not
 */
declare function _unregisterInterrupt(slot: number): void;

declare function getZLevel(): number;
declare function setBaseZLevel(level: number): void;

declare function map(_: any, __: any, ___: any, ____: any, _____: any, ): number;
/* ===== UNDOCUMENTED  - END ===== */


// Program Structure and Events
/**
 * If defined, this function is called once when the program starts.
 * @example
 * function setup() {
 *  pinMode(0, INPUT);
 * }
 */
declare function setup(): void;
/**
 * If defined, this function is called continuously when the program is running. The frequency of the calls depends on the complexity of this function, the number of other devices running programs and their complexity, and the machine's processing power.
 * @example
 * function loop() {
 *   Serial.println(digitalRead(0));
 * }
 */
declare function loop(): void;
/**
 * If defined, this function is called once just before the program stops.
 * @example
 * function cleanUp() {
 *   Serial.println("program is stopping.");
 * }
 */
declare function cleanUp(): void;
/**
 * If defined, this function is called when the user clicks and/or moves the mouse on the workspace icon of this device.
 * User must interact (= mouse move or press) with ALT key to trigger this method.
 * 
 * In docs there is parameter `firstPress` but it not works with at all, so I excluded it from there
 * @param pressed a boolean indicating whether the left mouse button is pressed down
 * @param x the x coordinate (in pixels) of the mouse relative to the workspace icon's top left corner
 * @param y the y coordinate (in pixels) of the mouse relative to the workspace icon's top left corner
 * @example
 * function mouseEvent(pressed, x, y) {
 *   if (pressed) doSomething();
 * }
 */
declare function mouseEvent(pressed: boolean, x: number, y: number): void;
/**
 * If defined, this function is called when the user changes the measurement system between Metric and Imperial in Preferences. Use isUsingMetric() to get the current setting.
 * @example
 * function measurementSystemChangeEvent() {
 *   METRIC = isUsingMetric();
 *   unit = METRIC ? "C" : "F";
 *   refresh();
 * }
 */
declare function measurementSystemChangeEvent(): void;


// Digital I/O
/**
 * Set a digital slot to INPUT or OUTPUT.
 * @example
 * pinMode(1, OUTPUT);
 * pinMode(2, INPUT);
 */
declare function pinMode(slot: number, mode: 0 | 1): void;
/**
 * Reads from a digital slot, returns HIGH or LOW.
 * @example
 * var val = digitalRead(1);
 */
declare function digitalRead(slot: number): 0 | 1023;
/**
 * Writes to a digital slot with HIGH or LOW.
 * @example
 * digitalWrite(1, HIGH);
 */
declare function digitalWrite(slot: number, value: 0 | 1023): void;


// Analog I/O
/**
 * Reads from an analog slot, returns 0 to 1023.
 * @example
 * var val = analogRead(A1);
 * @returns 0-1023
 */
declare function analogRead(slot: number): number;
/**
 * Writes a PWM wave to a digital slot, from 0 to 255.
 * @param value 0-1023
 * @example
 * analogWrite(A1, 128);
 */
declare function analogWrite(slot: number, value: number): void;


// Custom I/O
/**
 * Reads from an custom slot, returns a string
 * @example
 * var val = customRead(1);
 */
declare function customRead(slot): string;
/**
 * Writes a string to a digital slot. You can use customRead directly from the other side
 * @example
 * customWrite(1, "hello");
 */
declare function customWrite(slot, value): void;


// Input Interrupts
/**
 * Registers a function to be called when the input of a slot changes.
 * 
 * This works for analog, digital and custom inputs. Whenever the input changes, the callback is called.
 * 
 * Only one function is registered per slot. Calling this a second time for the same slot will remove the first callback.
 * 
 * @param slot Must be in range 0-9 (inclusive) (= avalible ports/slots) and error is thrown if not
 * 
 * @example
 * function isr() {
 *   input = analogRead(0);
 * }
 * attachInterrupt(0, isr);
 */
declare function attachInterrupt(slot: number, callback: () => any): void;
/**
 * Unregisters the slot for input changes.
 * 
 * @param slot Must be in range 0-9 (inclusive) (= avalible ports/slots) and error is thrown if not
 * 
 * @example
 * detachInterrupt(0);
 */
declare function detachInterrupt(slot: number): void;


// Time
/**
 * Pauses the program for ms.
 * @example
 * delay(1000);
 */
declare function delay(ms: number): void;
/**
 * Returns the time since the device was started in seconds.
 * @example
 * Serial.println(uptime());
 */
declare function uptime(): Number;


// Debug Outputs
declare namespace Serial {
    /**
     * Prints message to debug outputs.
     * @example
     * Serial.print("hello");
     */
    function print(msg: string): void;
    /**
     * Prints message with a \n at the end to debug outputs.
     * @example
     * Serial.println("hello");
     */
    function println(msg: string): void;
}


// Basic Networking
declare namespace Network {
    /**
     * Returns the local IP.
     * @example
     * var ip = Network.localIP();
     */
    function localIP(): string;
    /**
     * Returns the subnet mask.
     * @example
     * var mask = Network.subnetMask();
     */
    function subnetMask(): string;
    /**
     * Returns the gateway IP.
     * @example
     * var gateway = Network.gatewayIP();
     */
    function gatewayIP(): string;
}


// HTTP Client
declare class HTTPClient {
    /**
     * Creates a HTTP Client.
     * @example
     * var http = new HTTPClient();
     */
    constructor();
    /**
     * Gets an URL.
     * @example
     * http.open("http://www.cisco.com");
     */
    open(url: string): void;
    /**
     * Stops the request.
     * @example
     * http.stop();
     */
    stop(): void;


    /**
     * Sets the callback for when the request is done.
     * @example
     * http.onDone = function(status, data) {
     * };
     */
    onDone: (status, data) => any;
}


// HTTP Server (SBC only)
declare namespace HTTPServer {
    /**
     * Sets up a route for path and calls callback when it is requested. Routes also support wildcards using *.
     * @example
     * HTTPServer.route("/hello", function(url, response) {
     *   response.send("world");
     * });
     * HTTPServer.route("/*", function(url, response) {
     *   response.send("hi");
     * });
     */
    function route(path: string, callback: (url: string, response: Response) => any): void;
    /**
     * Starts listening on port.
     * @example
     * HTTPServer.start(80);
     */
    function start(port: number): boolean;
    /**
     * Stops listening.
     * @example
     * HTTPServer.stop();
     */
    function stop(): void;

    /**
     * Passed into the HTTPServer route handler.
     */
    interface Response {
        /**
         * Sends content back as response.
         * @example
         * response.send("hello");
         */
        send(content: string): void;
        /**
         * Sets the content type in the response.
         * @example
         * response.setContentType("text/plain");
         */
        setContentType(type: string): void;
        /**
         * Sends a file back as response. The file path is in the device's file manager, not relative to the source code of the current project/script.
         * @example
         * response.sendFile("/test.txt")
         */
        sendFile(filePath: string): void;
        /**
         * Sends a file not found as response.
         * @example
         * response.sendNotFound()
         */
        sendNotFound(): void;
    }
}


// Email
declare namespace EmailClient {
    /**
     * Sets up the email client to be used.
     * @example
     * EmailClient.setup("user@cisco.com", "cisco.com", "username", "password");
     */
    function setup(email: string, server: string, username: string, password: string): void;
    /**
     * Sends an email.
     * @example
     * EmailClient.send("pt@cisco.com", "subject", "body);
     */
    function send(address: string, subject: string, body: string): void;
    /**
     * Receives emails.
     * @example
     * EmailClient.receive();
     */
    function receive(): void;


    /**
     * Sets the callback for when sending an email is done.
     * @example
     * EmailClient.onSend = function(success) {
     * };
     */
    var onSend: (success) => any;
    /**
     * Sets the callback for when emails are received.
     * @example
     * EmailClient.onReceive = function(sender, subject, body) {
     * };
     */
    var onReceive: (sender: string, subject: string, body: string) => any;
}


// TCP
declare class TCPClient {
    /**
     * Creates a TCP Client.
     * @example
     * var client = new TCPClient();
     */
    constructor();
    /**
     * Connects to ip and port.
     * @example
     * client.connect(IPAddress("1.1.1.1"), 2000);
     */
    connect(ip: string, port: number): boolean;
    /**
     * Disconnects.
     * @example
     * client.close();
     */
    close(): void;
    /**
     * Returns the state of the connection.
     * @example
     * client.state();
     */
    state(): number;
    /**
     * Returns the remote IP.
     * @example
     * client.remoteIP();
     */
    remoteIP(): string;
    /**
     * Returns the remote port.
     * @example
     * client.remotePort();
     */
    remotePort(): number;
    /**
     * Sends data to remote.
     * @example
     * client.send("hello");
     */
    send(data: string): void;
    /**
     * Sends data to remote connection with PDU info.
     * @example
     * var data = "hello";
     * var pduInfo = new PDUInfo(0xffff00);
     * pduInfo.setOutFormat("MyProtocol", "MyPDU", {
     *   "type": "REPLY",
     *   "data": data
     * });
     * pduInfo.addOutMessage("I am sending some data.");
     * client.sendWithPDUInfo(data, pduInfo);
     */
    sendWithPDUInfo(data: string, pduInfo: PDUInfo): boolean;


    /**
     * Sets the callback for when data is received.
     * @example
     * client.onReceive = function(data) {
     * };
     */
    onReceive: (data: string) => any;
    /**
     * Sets the callback for when data is received and includes the PDU info.
     * @example
     * client.onReceiveWithPDUInfo = function(data, pduInfo) {
     *   pduInfo.addInMessage("I got some data.");
     *   pduInfo.setAccepted();
     * };
     */
    onReceiveWithPDUInfo: (data: string, pduInfo: PDUInfo) => any;
    /**
     * Sets the callback for when the connection changes.
     * @example
     * client.onConnectionChange = function(type) {
     * };
     */
    onConnectionChange: (type) => any;
}
declare class TCPServer {
    /**
     * Creates a TCP Server.
     * @example
     * var server = TCPServer();
     */
    constructor();
    /**
     * Starts listening on port.
     * @example
     * server.listen(2000);
     */
    listen(port: number): void;
    /**
     * Stops listening.
     * @example
     * server.stop();
     */
    stop(): void;


    /**
     * Sets the callback for when a new client comes in.
     * @example
     * server.onNewClient = function(client) {
     * };
     */
    // Maybe (probrally )`client` is `TCPClient`
    onNewClient: (client) => any;
}


// UDP
declare class UDPSocket {
    /**
     * Creates an UDP Socket.
     * @example
     * var udp = new UDPSocket();
     */
    constructor();
    /**
     * Starts listening on port.
     * @example
     * udp.begin(2000);
     */
    begin(port: number): boolean;
    /**
     * Stops listening.
     * @example
     * udp.stop();
     */
    stop(): void;
    /**
     * Sends data.
     * @example
     * udp.send(IPAddress("1.1.1.1"), 2000, "hello");
     */
    send(ip: string, port: number, data: string): boolean;
    /**
     * Sends data with PDU info.
     * @example
     * var data = "hello";
     * var pduInfo = new PDUInfo(0xffff00);
     * pduInfo.setOutFormat("MyProtocol", "MyPDU", {
     *   "type": "REPLY",
     *   "data": data
     * });
     * pduInfo.addOutMessage("I am sending some data.");
     * udp.sendWithPDUInfo("1.1.1.1", 2000, data, pduInfo);
     */
    sendWithPDUInfo(ip: string, port: number, data: string, pduInfo: PDUInfo): boolean;


    /**
     * Sets the callback for when data is received.
     * @example
     * udp.onReceive = function(ip, port, data) {
     * };
     */
    onReceive: (ip: string, port: number, data: string) => any;
    /**
     * Sets the callback for when data is received and includes PDU info.
     * @example
     * udp.onReceiveWithPDUInfo = function(ip, port, data) {
     *   pduInfo.addInMessage("I got some data.");
     *   pduInfo.setAccepted();
     * };
     */
    onReceiveWithPDUInfo: (ip: string, port: number, data: string, pduInfo: PDUInfo) => any;
}


// File (SBC only)
declare namespace FileSystem {
    /**
     * Returns whether a file exists in the file system.
     * @example
     * FileSystem.exists("/file.txt")
     */
    function exists(path: string): boolean;
    /**
     * Opens a file for reading or writing.
     * @param mode Modes = File.READ | File.WRITE | File.APPEND
     * @example
     * var file = FileSystem.open("/file.txt", File.READ);  
     */
    function open(path: string, mode: 1 | 2 | 4): File;
    /**
     * Removes a file.
     * @example
     * FileSystem.remove("/file.txt");
     */
    function remove(path: string): boolean;
    /**
     * Creates a directory including all intermediate directories.
     * @example
     * FileSystem.mkdir("/dir1/dir2");
     */
    function mkdir(path: string): boolean;
    /**
     * Removes a directory.
     * @example
     * FileSystem.rmdir("/dir1/dir2");
     */
    function rmdir(path: string): boolean;
    /**
     * Lists all files in a directory.
     * @example
     * var files = FileSystem.dir("/dir1");
     */
    function dir(path: string): File[]; // Not sure about this
}
// As class because of ability to make static vars
declare class File {
    static READ: 1;
    static WRITE: 2;
    static APPEND: 4;

    /**
     * Returns name of file.
     * @example
     * file.name();
     */
    name(): string;
    /**
     * Returns directory path.
     * @example
     * file.dir();
     */
    dir(): string;
    /**
     * # of bytes available for reading in file.
     * @example
     * var bytes = file.available();
     */
    available(): number;
    /**
     * Closes the file.
     * @example
     * file.close();
     */
    close(): void;
    /**
     * Returns the current reading position of the file.
     * @example
     * var position = file.position();
     */
    position(): number;
    /**
     * Seeks to position in file.
     * @example
     * file.seek(0);
     */
    seek(position: number): boolean;
    /**
     * Prints to file, returns the number of bytes written.
     * @example
     * file.print("Hello");
     */
    print(val: string): number;
    /**
     * Prints to file with a \n at the end, returns the number of bytes written.
     * @example
     * file.println("Hello");
     */
    println(val: string): number;
    /**
     * Reads a line of string or to the end of file.
     * @example
     * var val = file.readln();
     */
    readln(): string;
    /**
     * Reads one character and removes it from buffer.
     * @example
     * var val = file.readch();
     */
    readch(): string;
    /**
     * Reads one character without removing from buffer.
     * @example
     * var val = file.peekch();
     */
    peekch(): string;
    /**
     * Reads the first byte and removes from buffer, or -1 if none.
     * @example
     * var val = file.read();
     */
    read(): number | -1;
    /**
     * Returns the next byte without removing it from buffer, or -1 if none.
     * @example
     * var val = file.peek();
     */
    peek(): number | -1;
    /**
     * Writes as binary.
     * @example
     * file.write(val);
     */
    write(val): number;
}


// USB
/**
 * The variable for USB0 port.
 * @example
 * USB0.begin(9600);
 */
declare var USB0: USB;
/**
 * The variable for USB1 port.
 * @example
 * USB1.begin(9600);
 */
declare var USB1: USB;
declare interface USB {
    /**
     * Begin communication.
     * @example
     * USB0.begin(9600);
     */
    begin(speed: number): void;
    /**
     * Ends communication.
     * @example
     * USB0.end();
     */
    end(): void;
    /**
     * Prints to USB, returns the number of bytes written.
     * @example
     * USB0.print("Hello");
     */
    print(val: string): number;
    /**
     * Prints to USB with a \n at the end, returns the number of bytes written.
     * @example
     * USB0.println("Hello");
     */
    println(val: string): number;
    /**
     * # of bytes available for reading in buffer.
     * @example
     * var bytes = USB0.available();
     */
    available(): number;
    /**
     * Reads a line of string or to the end of stream.
     * @example
     * var val = USB0.readln();
     */
    readln(): string;
    /**
     * Reads one character and removes it from buffer.
     * @example
     * var val = USB0.readch();
     */
    readch(): string;
    /**
     * Reads one character without removing from buffer.
     * @example
     * var val = USB0.peekch();
     */
    peekch(): string;
    /**
     * Reads the first byte and removes from buffer, or -1 if none.
     * @example
     * var val = USB0.read();
     */
    read(): number | -1;
    /**
     * Returns the next byte without removing it from buffer, or -1 if none.
     * @example
     * var val = USB0.peek();
     */
    peek(): number | -1;
    /**
     * Writes as binary.
     * @example
     * USB0.write(val);
     */
    write(val): number;
}
/**
 * The variable for PTmata communication over USB0 port.
 * @example
 * PTmata0.begin(9600);
 */
declare var PTmata0: PTmata;
/**
 * The variable for PTmata communication over USB1 port.
 * @example
 * PTmata1.begin(9600);
 */
declare var PTmata1: PTmata;
/**
 * Begin communication.
 * @example
 * PTmata0.begin(9600);
 */
declare interface PTmata {
    begin(speed: number): void;
    /**
     * Ends communication.
     * @example
     * PTmata0.end();
     */
    end(): void;
    /**
     * Set a digital slot on other side to INPUT or OUTPUT.
     * @example
     * PTmata0.pinMode(1, OUTPUT);
     * PTmata0.pinMode(2, INPUT);
     */
    pinMode(slot: number, mode: 0 | 1): void;
    /**
     * Reads from a digital slot on other side, returns HIGH or LOW.
     * @example
     * var val = PTmata0.digitalRead(1);
     */
    digitalRead(slot: number): number;
    /**
     * Writes to a digital slot on other side with HIGH or LOW.
     * @example
     * PTmata0.digitalWrite(1, HIGH);
     */
    digitalWrite(slot: number, value: 0 | 1023): void;
    /**
     * Reads from an analog slot on other side, returns 0 to 1023.
     * @example
     * var val = PTmata0.analogRead(A1);
     * @returns 0-1023
     */
    analogRead(slot: number): number;
    /**
     * Writes a PWM wave to a digital slot on other side, from 0 to 255.
     * @param value 0-255
     * @example
     * PTmata0.analogWrite(A1, 128);
     */
    analogWrite(slot: number, value: number): void;
    /**
     * Reads from an custom slot on other side, returns a string
     * @example
     * var val = PTmata0.customRead(1);
     */
    customRead(slot: number): string;
    /**
     * Writes a string to a digital slot on other side. You can use customRead directly from the other side
     * @example
     * PTmata0.customWrite(1, "hello");
     */
    customWrite(slot: number, value: string): void;
    /**
     * # of bytes available for reading in buffer.
     * @example
     * var bytes = PTmata0.available();
     */
    available(): number;
    /**
     * Reads from buffer and processes inputs for commands and reports of states.
     * @example
     * function loop() {
     *   while (PTmata0.available())
     *     PTmata0.processInput();
     *   PTmata0.readAndReportData();
     * }
     */
    processInput(): void;
    /**
     * Reads this side's slot values and report to other side if they are changed.
     * @example
     * PTmata0.readAndReportData();
     */
    readAndReportData(): void;
}


// IoE Client (SBC only)
declare namespace IoEClient {
    /**
     * Sets up the API for remote monitor and control from IoE server.
     * 
     * The api is an object with the following properties describing the device:
     * 
     * - type - a string for the type of this device
     * - states - an Array of objects with the following properties describing the state:
     *   - name - a string for this state
     *   - type - a string for the type of this state; can be `"bool"`, `"number"`, `"options"`, `"string"`
     *   - options (required if type is `"options"`) - an object that maps values to names
     *   - unit (optional if type is `"number"`) - the default or Metric unit label; the value of a number state sent to the IoE Server should be in this unit
     *   - imperialUnit (optional if type is `"number"`) - the Imperial System unit label
     *   - toImperialConversion (optional if type is `"number"`) - a string to be evaluated to convert the default value to Imperial unit where x is the default value
     *   - toMetricConversion (optional if type is `"number"`) - a string to be evaluated to convert the value in Imperial unit to the default or Metric unit, where x is the Imperial value
     *   - decimalDigits (optional if type is `"number"`) - the number of decimal digits to round to on IoE Server pages; default is to not round
     *   - controllable - a boolean indicating whether it is remotely controllable
     *   - minValue (required if type is `"number"` and controllable is `true`) - the minimum value to allow the IoE Server to set in default or Metric unit
     *   - maxValue (required if type is `"number"` and controllable is `true`) - the maximum value to allow the IoE Server to set in default or Metric unit
     *
     * For measurement systems other than Metric and Imperial, use only the `"unit"` property. That means if you want a device to show more than Metric and Imperial, you need to create another device for other measurement systems.
     * @example
     * IoEClient.setup({
     *   type: "Door",
     *   states: [{
     *     name: "Open",
     *     type: "bool"
     *   }, {
     *     name: "Lock",
     *     type: "options",
     *     options: {
     *       "0": "Unlock",
     *       "1": "Lock"
     *     },
     *     controllable: true
     *   }]
     * });
     * IoEClient.setup({
     *   type: "Thermostat",
     *   states: [{
     *     name: "Status",
     *     type: "options",
     *     options: {
     *       "0": "Off",
     *       "1": "Cooling",
     *       "2": "Heating",
     *       "3": "Auto"
     *     },
     *     controllable: true
     *   }, {
     *     name: "Temperature",
     *     type: "number",
     *     unit: "&deg;C",
     *     imperialUnit: "&deg;F",
     *     toImperialConversion: "x*1.8+32",
     *     toMetricConversion: "(x-32)/1.8",
     *     decimalDigits: 1
     *   }, {
     *     name: "Auto Cool Temperature",
     *     type: "number",
     *     unit: "&deg;C",
     *     imperialUnit: "&deg;F",
     *     toImperialConversion: "x*1.8+32",
     *     toMetricConversion: "(x-32)/1.8",
     *     decimalDigits: 1,
     *     controllable: true,
     *     minValue: 10,
     *     maxValue: 100
     *   }, {
     *     name: "Auto Heat Temperature",
     *     type: "number",
     *     unit: "&deg;C",
     *     imperialUnit: "&deg;F",
     *     toImperialConversion: "x*1.8+32",
     *     toMetricConversion: "(x-32)/1.8",
     *     decimalDigits: 1,
     *     controllable: true,
     *     minValue: -100,
     *     maxValue: 20
     *   }]
     * });
     */
     function setup(api: {
        type: string,
        states:
        ({
            name: string,
            type: "bool"
            controllable?: boolean
        } | {
            name: string,
            type: "options",
            options: {
                [key: string]: string
            },
            controllable?: boolean
        } | {
            name: string,
            type: "number",
            unit?: string,
            imperialUnit?: string,
            toImperialConversion?: string,
            toMetricConversion?: string,
            decimalDigits?: number,
            controllable?: false
        } | {
            name: string,
            type: "number",
            unit?: string,
            imperialUnit?: string,
            toImperialConversion?: string,
            toMetricConversion?: string,
            decimalDigits?: number,
            controllable: true,
            minValue: number,
            maxValue: number
        })[]
    }): void;
    /**
     * Reports the states of this device to the IoE server.
     * The argument is a string representing all states of this device. Each state is separated by a comma.
     * The argument can also be an array representing all states.
     * The number of states must match the length of the states property in setup().
     * @example
     * IoEClient.reportStates("0,1");
     * IoEClient.reportStates([0, 1, "str"]);
     */
    function reportStates(states: string | string[]): void;
    /**
     * Sets the callback for processing inputs received from IoE server.
     * The argument to the callback is a string containing all states of this device.
     * 
     * This is called with all states info.
     * `onStateSet` is called with only the state that was changed.
     * @example
     * IoEClient.onInputReceive = function(input) {
     * };
     */
    var onInputReceive: (input) => any;
    /**
     * Sets the callback for processing inputs received from IoE server.
     * The arguments to the callback are state name and state value.
     * 
     * This is called with only the state that was changed.
     * `onInputReceive` is called with all states info.
     * @example
     * IoEClient.onStateSet = function(stateName, value) {
     * };
     */
    var onStateSet: (stateName, value) => any;
}


// Physical
/**
 * Move thing to position x and y in screen coordinates.
 * @example
 * move(200,200);
 */
declare function move(x: number, y: number): void;
/**
 * Increment position of thing by x and y in screen coordinates.
 * @example
 * moveBy(1,0);
 */
declare function moveBy(x: number, y: number): void;
/**
 * Moves the item defined by name to x and y in screen coordinates in the active workspace.
 * The parameters expect x and y to be ints.
 * Casting may be required.
 * @example
 * moveItemInWorkspace("building", 300,300);
 */
declare function moveItemInWorkspace(name: string, x: number, y: number): boolean;
/**
 * Gets the x position of thing in screen coordinates.
 * @example
 * var x = getX();
 */
declare function getX(): number;
/**
 * Gets the y position of thing in screen coordinates.
 * @example
 * var y = getY();
 */
declare function getY(): number;
/**
 * Gets the x position of the center of the thing in screen coordinates
 * @example
 * var x = getCenterX();
 */
declare function getCenterX(): number;
/**
 * Gets the y position of the center of the thing in screen coordinates
 * @example
 * var y = getCenterY();
 */
declare function getCenterY(): number;
/**
 * Gets a list of devices at position x and y with a boundary of width and height.
 * The parameters expect x and y to be ints. Casting may be required.
 * @example
 * devicesAt(10,10,100,100);
 */
declare function devicesAt(x: number, y: number, width: number, height: number): string[];
/**
 * Gets a list of devices at position x and y with a boundary of width and height including clusters.
 * The parameters expect x and y to be ints.
 * Casting may be required.
 * @example
 * devicesIncludingClustersAt(10, 10, 100, 100);
 */
declare function devicesIncludingClustersAt(x: number, y: number, width: number, height: number): string[];
/**
 * Gets the name of the thing
 * @example
 * var devName = getName()
 */
declare function getName(): string;
/**
 * Gets the property of a device with the specified property
 * @example
 * getDeviceProperty("Car", "material")
 */
declare function getDeviceProperty(deviceName: string, property: string): string;
/**
 * Set property for device
 * @example
 * setDeviceProperty("Car", "material", "metal")
 */
declare function setDeviceProperty(deviceName: string, property: string, value: string): void;
/**
 * Set the opacity of a component in the thing.
 * The value is from 0 to 1, where 1 is opaque.
 * @example
 * setComponentOpacity("light", 0.5)
 */
declare function setComponentOpacity(componentName: string, value: number): void;
/**
 * Sets the component rotation in degrees
 * @example
 * setComponentRotation("hourHand", 90)
 */
declare function setComponentRotation(componentName: string, value: number): void;
/**
 * Sets the entire thing rotation in degrees
 * @example
 * setRotation(180)
 */
declare function setRotation(value: number): void;
/**
 * Gets the serial number of the thing
 * @example
 * var serialNo = getSerialNumber()
 */
declare function getSerialNumber(): string;
/**
 * Write some text on the Thing viewable on the workspace.
 * @example
 * setCustomText(0,0,100,100,"Device is On");
 */
declare function setCustomText(x: number, y: number, width: number, height: number, text: any): void;
/**
 * Sets the logical view background to an image at path.
 * 
 * You can use directory traversal to load any file (anywhere).
 * If file doesn't exist, nothing happens. If file exists but it isn't an image (that can PT parse), background resets to default.
 * @example
 * setLogicalBackgroundPath("path");
 */
declare function setLogicalBackgroundPath(path): void;
/**
 * Fill the component with the specified RGB values.
 * The component original image will have to be transparent for the color to show up.
 * @example
 * fillColor("led", 0,0,255)
 */
declare function fillColor(componentName: string, red: number, green: number, blue: number): void;
/**
 * Adds a sound to the device so it can be used.
 * Sound is referenced by the ID for later use.
 * 
 * PT sound folder is: "/../Sounds/"
 * 
 * You can use directory traversal to load any file (anywhere).
 * @example
 * addSound('sound1', '/../Sounds/buzzLow.wav');
 */
declare function addSound(soundID: string, soundPath: string): void;
/**
 * Plays a sound that has been added to the device.
 * @param soundID references the ID the sound was added with
 * @param playLength is how many times the sound should run. `-1` will make the sound loop forever.
 * @example
 * playSound('sound1', 2);
 */
declare function playSound(soundID: string, playLength: number | -1 = 1): void;
/**
 * Stops a sound.  soundID references the ID the sound played.
 * @example
 * stopSound('sound1');
 */
declare function stopSound(soundID: string): void;
/**
 * Stops any sounds playing in the devices and removes them.
 * They can't be played again unless re-added.
 * @example
 * destroySounds();
 */
declare function destroySounds(): void;
/**
 * Sets the parent container of both physical and logical view to a graphic from component.
 * @example
 * setParentGraphicFromComponent("name", 0);
 */
declare function setParentGraphicFromComponent(componentName: string, index: number): void;
/**
 * Sets the parent container of logical view to a graphic from component.
 * @example
 * setLogicalParentGraphicFromComponent("name", 0);
 */
declare function setLogicalParentGraphicFromComponent(componentName: string, index: number): void;
/**
 * Sets the parent container of physical view to a graphic from component.
 * @example
 * setPhysicalParentGraphicFromComponent("name", 0);
 */
declare function setPhysicalParentGraphicFromComponent(componentName: string, index: number): void;
/**
 * Returns the attribute value of the device connected at the specified slot.
 * @example
 * var value = getAttributeOfDeviceAtSlot("name", 0);
 */
declare function getAttributeOfDeviceAtSlot(attribute: string, slot: number): Number;
/**
 * Returns the attribute value of this device.
 * @example
 * var value = getAttributeOfDevice("name");
 */
declare function getAttributeOfDevice(attribute: string): Number;
/**
 * Returns the number of slots this device has.
 * @example
 * var slots = getSlotsCount();
 */
declare function getSlotsCount(): number;


// Environment
declare namespace Environment {
    /**
     * Gets the value of the environment by its ID.
     * You can get the ID by placing your mouse over the environment name in the Environment GUI.
     * 
     * If the environment does not exist, it will return -1.
     * @example
     * Environment.get("Ambient Temperature")
     */
    function get(environmentID: string): number;
    /**
     * Sets a global property with a value. Both are strings.
     * @example
     * Environment.setGlobalProperty("CLOCK", "12:00:00 pm")
     */
    function setGlobalProperty(propertyName: string, value: string): void;
    /**
     * Returns the global property value.
     * @example
     * Environment.getGlobalProperty("CLOCK")
     */
    function getGlobalProperty(propertyName: string): string;
    /**
     * Returns true if the property name exists, otherwise false.
     * @example
     * Environment.hasGlobalProperty("CLOCK")
     */
    function hasGlobalProperty(propertyName: string): boolean;
    /**
     * Set the things contribution to an environment based on it's environment ID.
     * You do not need to worry about how much time has passed and you only need to call this function when you need different parameters.
     * 
     * @param rate the rate to add or subtract from the total environment value in value/second. Value should be in metric.
     * 
     * @param limit the maximum or minimum this thing is allowed to contribute. The limit should be in metric.
     * 
     * bCumulative: add up contributed values over time. For environments like light sources that disappear when off, bCumulative should be set to false.
     * @example
     * // increase the Ambient Temperature at 0.05C/second until 100C.
     * Environment.setContribution("Ambient Temperature", 0.05, 100, true)
     */
    function setContribution(environmentID: string, rate: number, limit: number, bCumulative: boolean): void;
    /**
     * Remove the overall cumulative contribution from the Thing. In most cases, you do not need to do this. Rather, you should set up the container to use transference or other things to remove accumulated contributions.
     * @example
     * Environment.removeCumulativeContribution("Ambient Temperature")
     */
    function removeCumulativeContribution(environmentID: string): void;
    /**
     * Increase or decrease the current transference value by multiplier.
     * 
     * For example, if you open the door to the house, you may want to speed up the Ambient Temperature convergence with the outside by increasing the container's transference by the multiplier.
     * @example
     * Environment.setTransferenceMultiplier("Ambient Temperature", 2)
     */
    function setTransferenceMultiplier(environmentID: string, multiplier: number): void;
    /**
     * Returns the total value of contributions by all things
     * @example
     * Environment.getTotalContributions("Wind Speed")
     */
    function getTotalContributions(environmentID: string): number;
    /**
     * Returns the cumulativeContribution for just the thing that is calling the function
     * @example
     * Environment.getCumulativeContribution("Wind Speed")
     */
    function getCumulativeContribution(environmentID: string): void;
    /**
     * Returns the metric value of the environmentID regardless of user preference
     * @example
     * Environment.getMetricValue("Ambient Temperature")
     */
    function getMetricValue(environmentID: string): number;
    /**
     * Returns the value in metric or imperial based on the user preference and also append the unit
     * @example
     * Environment.getValueWithUnit("Ambient Temperature")
     */
    function getValueWithUnit(environmentID: string): string;
    /**
     * Returns the unit for the environmentID.
     * The unit can be metric or imperial based on the user preferences
     * @example
     * Environment.getUnit("Ambient Temperature")
     */
    function getUnit(environmentID: string): string;
    /**
     * Returns the volume size of the container in meters^3 that caller of the function is in
     * @example
     * Environment.getVolume()
     */
    function getVolume(): number;
    /**
     * Returns the current time
     * @example
     * Environment.getTimeInSeconds();
     */
    function getTimeInSeconds(): number;
    /**
     * Returns the time passed since the lastTime value
     * @example
     * var time = Environment.getTimeInSeconds();
     * delay(1000);
     * Environment.getElapsedTime(time);
     */
    function getElapsedTime(lastTime: number): number;
}


// Real HTTP Server (External Network Access)
declare class RealHTTPServer {
    /**
     * Creates a Real HTTP Server.
     * @example
     * var http = new RealHTTPServer();
     */
    constructor();
    /**
     * Start server listening on port.
     * @example
     * http.start( 8765 );
     */
    start(port: number): void;
    /**
     * Stop server listening.
     * @example
     * http.stop();
     */
    stop(): void;
    /**
     * Returns the listening status of the server.
     * @example
     * http.isListening( );
     */
    isListening(): boolean;
    /**
     * Adds callback to be run for all request-types matching url-pattern.
     * @example
     * function on_get_files( request, reply ){...}
     * function on_posts( request, reply ){...}
     * function on_everything( request, reply ){...}
     * http.route( "/files/*", ["GET"], on_get_files);
     * http.route( "*", ["POST"], on_posts);
     * http.route( "*", [], on_everything);
     */
    route(url_pattern: string, request_types: ("GET" | "POST" | "PUT" | "UPDATE" | "DELETE")[], callback: (request: RealHTTPServerRequest, response: RealHTTPServerResponse) => any): void;
    /**
     * Adds callback be run for incoming websocket connections matching url-pattern.
     * @example
     * function callback( client ) {...}
     * http.websocket( "/ws", callback);
     */
    websocket(url_pattern: string, callback: (client: RealWSClient)=>any): void;
}
/**
 * Request object passed to routing callbacks.
 */
declare interface RealHTTPServerRequest {
    /**
     * Returns object containing request headers.
     * @example
     * var headers = request.headers( );
     * ... headers["Content-Type"] ...
     */
    headers(): {[key: string]: string};
    /**
     * Returns request's method ("GET", etc.)
     * @example
     * if( request.method() == "POST" ) {
     * ...
     * }
     */
    method(): string;
    /**
     * Returns the body of the request.
     * @example
     * request.body();
     */
    body(): string;
    /**
     * Returns requested URL.
     * @example
     * request.url();
     */
    url(): string;
    /**
     * Returns IP address of the request origin.
     * @example
     * if( request.ip() == "1.1.1.1" ) ...
     */
    ip(): string;
}
/**
 * Response object passed to routing callbacks.
 */
declare interface RealHTTPServerResponse {
    /**
     * Sets response status to code.
     * @example
     * response.setCode( 200 ); // for OK response
     */
    setStatus(code: number): void;
    /**
     * Sets response headers in bulk. Object properties define header names and values.
     * @example
     * response.setHeaders({
     * "Authorization": "basic",
     * "Cookie": "Id=1234; Group=users"
     * });
     */
    setHeaders(headers: {[key: string]: string}): void;
    /**
     * Sets header name to value.
     * @example
     * response.addHeader( "Cookie", "Group=inner" );
     */
    addHeader(name: string, value: string): void;
    /**
     * Appends content to response body.
     * @example
     * response.appendContent( "more stuff" );
     */
    appendContent(content: string): void;
    /**
     * Resets the body of the response to empty.
     * @example
     * response.resetContent();
     */
    resetContent(): void;
    /**
     * Initiates network transfer for the response.
     * @example
     * response.setContent( "Hello, world!" );
     * response.end();
     * response.setToPath( "my-file.txt" );
     * response.end();
     */
    end(): void;
    /**
     * Sets the body of the response to content.
     * @example
     * response.setContent( "Hello, world!" );
     */
    setContent(content: string): void;
    /**
     * Sets content of the response to the contents of the file at path. The path must be local to the device running the server.
     * @example
     * response.setToFile( "intro.html" );
     */
    setToFile(path: string): void;
    /**
     * Canned response for when a requested resource can not be located.
     * @example
     * response.setToNoFound();
     */
    setToNotFound(): void;
    /**
     * Sends content as plain text.
     * @example
     * response.send( "Hello, world!" );
     */
    send(content: string): void;
    /**
     * Sets Content-Type header to type.
     * @example
     * response.setContentType( "text/html" );
     */
    setContentType(type: string): void;
    /**
     * Sends the contents of the file at path.
     * @example
     * response.send( "my-file.txt" );
     */
    sendFile(path: string): void;
    /**
     * Sends canned response for when a requested resource can not be located.
     * @example
     * response.sendNotFound();
     */
    sendNotFound(): void;
}

// Real HTTP Client (External Network Access)
declare class RealHTTPClient {
    /**
     * Creates a Real HTTP Client.
     * @example
     * var http = new RealHTTPClient();
     */
    constructor();
    /**
     * Gets an URL.
     * @example
     * http.get("http://www.cisco.com");
     */
    get(url: string): void;
    /**
     * Posts data to an URL.
     * 
     * data can be a string or a dictionary; if dictionary, it will be URL-encoded into the body.
     * @example
     * http.post(url, {"num":1, "str":"hello"});
     */
    post(url: string, data: string | {[key: string]: any}): void;
    /**
     * Puts data to an URL.
     * 
     * data can be a string or a dictionary; if dictionary, it will be URL-encoded into the body.
     * @example
     * http.put(url, {"num":1, "str":"hello"});
     */
    put(url: string, data: string | {[key: string]: any}): void;
    /**
     * Sends a delete to an URL.
     * @example
     * http.deleteResource(url);
     */
    deleteResource(url: string): void;
    /**
     * Gets an URL with custom header fields as a dictionary.
     * @example
     * http.getWithHeader("https://api.ciscospark.com/v1/people/me",{"Authorization": "Bearer xxyyzz"});
     */
    getWithHeader(url: string, header: {[key: string]: string}): void;
    /**
     * Posts data to an URL with custom header fields as a dictionary.
     * 
     * data can be a string or a dictionary; if dictionary and custom header field has "application/json" as the "content-type", it will be json-encoded, otherwise it will be URL-encoded into the body.
     * @example
     * http.postWithHeader("https://api.ciscospark.com/v1/messages", {
     *   "toPersonId": "722bb271-d7ca-4bce-a9e3-471e4412fa77",
     *   "text": "Hi Sparky"
     * }, {
     *   "Authorization": "Bearer xxyyzz",
     *   "Content-Type": "application/json"
     * });
     */
    postWithHeader(url: string, data: string | {[key: string]: any}, header: {[key: string]: string}): void;
    /**
     * Puts data to an URL with custom header fields as a dictionary.
     * 
     * data can be a string or a dictionary; if dictionary and custom header field has "application/json" as the "content-type", it will be json-encoded, otherwise it will be URL-encoded into the body.
     * @example
     * http.putWithHeader("https://api.ciscospark.com/v1/rooms/xxyyzz", {
     *   "title": "New room name"
     * }, {
     *   "Authorization": "Bearer xxyyzz"
     * });
     */
    putWithHeader(url: string, data: string | {[key: string]: any}, header: {[key: string]: string}): void;
    /**
     * Sends a delete to an URL with custom header fields as a dictionary.
     * @example
     * http.deleteResourceWithHeader("https://api.ciscospark.com/v1/messages/xxyyzz", {
     *   "Authorization": "Bearer xxyyzz"
     * });
     */
    deleteResourceWithHeader(url: string, header: {[key: string]: string}): void;


    /**
     * Sets the callback for when the request is done.
     * 
     * replyHeader is a dictionary of header fields in the reply. It is added to 7.1 and is optional.
     * @example
     * http.onDone = function(status, data, replyHeader) {
     * };
     */
    onDone: (status, data, replyHeader)=>any;
}
declare namespace RealHTTPClient {
    /**
     * Gets an URL.
     * @example
     * RealHTTPClient.get("http://www.cisco.com", function(status, data) {
     * Serial.println(status + ", " + data);
     * });
     */
    function get(url: string, callback: (status, data)=>any): void;
    /**
     * Posts data to an URL.
     * @example
     * RealHTTPClient.post(url, {"num":1, "str":"hello"}, function(status, data) {
     * });
     */
    function post(url: string, data: {[key: string]: any}, callback: (status, data)=>any): void;
    /**
     * Puts data to an URL.
     * @example
     * RealHTTPClient.put(url, {"num":1, "str":"hello"}, function(status, data) {
     * });
     */
    function put(url: string, data: {[key: string]: any}, callback: (status, data)=>any): void;
    /**
     * Sends a delete to an URL.
     * @example
     * RealHTTPClient.deleteResource(url, function(status, data) {
     * });
     */
    function deleteResource(url: string, callback: (status, data)=>any): void;
}


// Real WebSocket Client (External Network Access)
declare class RealWSClient {
    /**
     * Creates a Real WebSocket Client.
     * @example
     * var client = new RealWSClient();
     */
    constructor();
    /**
     * Connects to server URL.
     * @example
     * client.connect("ws://1.1.1.1:2000");
     */
    connect(url: string): boolean;
    /**
     * Disconnects.
     * @example
     * client.close();
     */
    close(): void;
    /**
     * Returns whether it is in connected state.
     * @example
     * client.connected();
     */
    connected(): boolean;
    /**
     * Returns the state of the connection.
     * @example
     * client.state();
     */
    state(): number;
    /**
     * Returns the remote IP.
     * @example
     * client.remoteIP();
     */
    remoteIP(): string;
    /**
     * Returns the name of the server.
     * @example
     * client.remoteHost();
     */
    remoteHost(): string;
    /**
     * Returns the remote port.
     * @example
     * client.remotePort();
     */
    remotePort(): number;
    /**
     * Returns the local IP.
     * @example
     * client.localIP();
     */
    localIP(): string;
    /**
     * Returns the local port.
     * @example
     * client.localPort();
     */
    localPort(): number;
    /**
     * Sends data to remote.
     * @example
     * client.send("hello");
     */
    send(data: string): void;
    /**
     * Returns the last error code.
     * @example
     * client.error();
     */
    error(): number;
    /**
     * Returns the last error in string.
     * @example
     * client.errorString();
     */
    errorString(): string;


    /**
     * Sets the callback for when data is received.
     * @example
     * client.onReceive = function(data) {
     * };
     */
    onReceive(): (data) => any;
    /**
     * Sets the callback for when the connection changes.
     * @example
     * client.onConnectionChange = function(type) {
     * };
     */
    onConnectionChange: (type) => any;
}


// Real TCP (External Network Access)
declare class RealTCPClient {
    /**
     * Creates a Real TCP Client.
     * @example
     * var client = new RealTCPClient();
     */
    constructor();
    /**
     * Connects to ip and port.
     * @example
     * client.connect(IPAddress("1.1.1.1"), 2000);
     */
    connect(ip: string, port: number): boolean;
    /**
     * Disconnects.
     * @example
     * client.close();
     */
    close(): void;
    /**
     * Returns whether it is in connected state.
     * @example
     * client.connected();
     */
    connected(): boolean;
    /**
     * Returns the state of the connection.
     * @example
     * client.state();
     */
    state(): number;
    /**
     * Returns the remote IP.
     * @example
     * client.remoteIP();
     */
    remoteIP(): string;
    /**
     * Returns the name of the server.
     * @example
     * client.remoteHost();
     */
    remoteHost(): string;
    /**
     * Returns the remote port.
     * @example
     * client.remotePort();
     */
    remotePort(): number;
    /**
     * Returns the local IP.
     * @example
     * client.localIP();
     */
    localIP(): string;
    /**
     * Returns the local port.
     * @example
     * client.localPort();
     */
    localPort(): number;
    /**
     * Sends data to remote.
     * @example
     * client.send("hello");
     */
    send(data: string): void;
    /**
     * Returns the last error code.
     * @example
     * client.error();
     */
    error(): number;
    /**
     * Returns the last error in string.
     * @example
     * client.errorString();
     */
    errorString(): string;


    /**
     * Sets the callback for when data is received.
     * @example
     * client.onReceive = function(data) {
     * };
     */
    onReceive: (data) => any;
    /**
     * Sets the callback for when the connection changes.
     * @example
     * client.onConnectionChange = function(type) {
     * };
     */
    onConnectionChange: (type) => any;
}
declare class RealTCPServer {
    /**
     * Creates a Real TCP Server.
     * @example
     * var server = new RealTCPServer();
     */
    constructor();
    /**
     * Listens on port on host device and returns whether it was successful.
     * @example
     * server.listen(1234);
     */
    listen(port: number): boolean;
    /**
     * Returns true if listening.
     * @example
     * server.isListening();
     */
    isListening(): boolean;
    /**
     * Stops listening. All connections remain open.
     * @example
     * server.stop();
     */
    stop(): void;
    /**
     * Returns the listening IP.
     * @example
     * server.listeningIP();
     */
    listeningIP(): string;
    /**
     * Returns the listening port.
     * @example
     * server.listeningPort();
     */
    listeningPort(): number;
    /**
     * Returns the last error code.
     * @example
     * server.error();
     */
    error(): number;
    /**
     * Returns the last error in string.
     * @example
     * server.errorString();
     */
    errorString(): string;


    /**
     * Sets the callback for when a new client is connected.
     * @example
     * server.onNewClient(function(client) {
     * });
     */
    // Maybe (probrally) `client` is `RealTCPClient`
    onNewClient(): (client) => any;
}


// Real UDP (External Network Access)
declare class RealUDPSocket {
    /**
     * Creates an Real UDP Socket.
     * @example
     * var udp = new RealUDPSocket();
     */
    constructor();
    /**
     * Starts listening on port.
     * @example
     * udp.begin(2000);
     */
    begin(port: number): boolean;
    /**
     * Stops listening.
     * @example
     * udp.stop();
     */
    stop(): void;
    /**
     * Joins a multicast group. Must call begin() first.
     * @example
     * udp.joinMulticastGroup("224.0.0.1");
     */
    joinMulticastGroup(ip: string): boolean;
    /**
     * Leaves a multicast group.
     * @example
     * udp.leaveMulticastGroup("224.0.0.1");
     */
    leaveMulticastGroup(ip: string): boolean;
    /**
     * Returns the local IP.
     * @example
     * udp.localIP();
     */
    localIP(): string;
    /**
     * Returns the local port.
     * @example
     * udp.localPort();
     */
    localPort(): number;
    /**
     * Sends data.
     * @example
     * udp.send(IPAddress("1.1.1.1"), 2000, "hello");
     */
    send(ip: string, port: number, data: string): void;
    /**
     * Returns the last error code.
     * @example
     * udp.error();
     */
    error(): number;
    /**
     * Returns the last error in string.
     * @example
     * udp.errorString();
     */
    errorString(): string;


    /**
     * Sets the callback for when data is received.
     * @example
     * udp.onReceive = function(ip, port, data) {
     * };
     */
    onReceive: (ip: string, port: number, data: string) => any;
}


// It is in docs, so I will keep it there...
// JSON
declare namespace JSON {
    /**
     * Serialize an object into JSON string.
     * @example
     * var str = JSON.stringify({"num":1, "s":"str"});
     */
    function stringify(obj: object): string;
    /**
     * Converts a JSON string to an object.
     * @example
     * var obj = JSON.parse(str);
     */
    function parse(str: string): object;
}


// GUI (SBC, Thing, some End Devices)
declare namespace GUI {
    /**
     * Initializes the GUI and tells the GUI to display the html file configured in the manifest file. If the app is not installed, it throws an error.
     * @example
     * function setup() { GUI.setup();}
     */
    function setup(): void;
    /**
     * Asynchronously calls the html file's update() function passing in type and args. Type is a string and args can be any JSON valid object.
     * @example
     * GUI.update("status", "playing");
     */
    function update(type: string, args: object): void;
}
/**
 * If defined, this function is called asynchronously when the html file calls guiEvent(type, args). Type is a string and args can be any JSON valid object.
 * @example
 * function guiEvent(type, args) {
 *   Serial.println('guiEvent: ' + type + ',' + JSON.stringify(args));
 * }
 */
declare function guiEvent(type: string, args: object): void;


// CLI (SBC, Thing, some End Devices)
declare namespace CLI {
    /**
     * Initializes the CLI and will call the cliEvent() function if the app was started from a command in the Command Prompt.
     * @example
     * function setup() { CLI.setup();}
     */
    function setup(): void;
    /**
     * Exits the CLI mode and returns back to the Command Prompt.
     * @example
     * CLI.exit();
     */
    function exit(): void;
}
/**
 * If defined, this function is called synchronously when different CLI events happen. Type is a string and args can be any JSON valid object.
 * 
 * Type can be:
 * - `"invoked"` - this is called when the command is invoked from the Command Prompt; args is a list of command arguments where the first element is the command name.
 * - `"interrupted"` - this is called when the user uses break shortcut (Ctrl+C) while this app is running in CLI mode.
 * @example
 * function cliEvent(type, args) {  Serial.println('cliEvent: ' + type + ',' + JSON.stringify(args));}
 */
declare function cliEvent(type: "invoked" | "interrupted", args: object): void;


// Simulation
declare namespace Simulation {
    /**
     * Returns whether PT is currently in Simulation Mode.
     * @example
     * if (Simulation.isInSimulationMode()) Serial.println("In sim mode");
     */
    function isInSimulationMode(): boolean;
    /**
     * Adds a new protocol type to the current file/network.
     * The protocol will show up in the Event List Filters.
     * Returns true if successful, false otherwise.
     * @example
     * Simulation.addCustomProtocolType("MyProtocol");
     */
    function addCustomProtocolType(protocol: string): boolean;
    /**
     * Returns whether the protocol type is already added to the current file/network.
     * @example
     * if (!Simulation.hasCustomProtocolType("MyProtocol")) Simulation.addCustomProtocolType("MyProtocol");
     */
    function hasCustomProtocolType(protocol: string): boolean;
    /**
     * Adds a new protocol type and PDU type to the current file/network.
     * The protocol will show up in the Event List Filters, and the PDU with its definition will show up in PDU details.
     * Returns true if successful, false if the definition is invalid.
     * 
     * It will replace existing definitions if using the same protocol and PDU type names.
     * 
     * The definition argument is an object with the following properties describing the layout and fields of the PDU:
     * - title - a string that shows up as the title in PDU Details
     * - units - a string
     * - unit_marks - an array of numbers indicating where the marks are to show up
     * - width - an integer indicating the width of PDU
     * - fields - an array of objects representing each field in the PDU; each object must contain the following properties:
     *   - value - a label that can contain a variable inside curly braces; the variable will be replaced with a value in the PDUInfo fields object
     *   - size - an integer indicating the size of the field
     * @example
     * Simulation.addCustomPDU("MyProtocol", "MyPDU", {
     *   "title": "My PDU",
     *   "units": "Bits",
     *   "unit_marks": [16],
     *   "width": 32,
     *   "fields": [
     *     {
     *       "value": "TYPE: {type}",
     *       "size": 32
     *     },
     *     {
     *       "value": "DATA: {data}",
     *       "size": 32
     *     }
     *   ]
     * });
     */
    function addCustomPDU(protocol: string, pduType: string, definition: {
        "title": string,
        "units": string,
        "unit_marks": number[],
        "width": number,
        "fields": {
            "value": string,
            "size": number
        }[]
    }): boolean;
    /**
     * Returns whether the protocol and PDU type is already added to the current file/network.
     * @example
     * if (!Simulation.hasCustomPDU("MyProtocol", "MyPDU")) // add it
     */
    function hasCustomPDU(protocol: string, pduType: string): boolean;
}
declare class PDUInfo {
    /**
     * Creates a PDU Info object with the pdu color.
     * A PDUInfo is required to show PDU with more details in Simulation Mode.
     * @example
     * var pduInfo = new PDUInfo(0xffff00);
     */
    constructor(color: number);
    /**
     * Sets the outgoing PDU to be displayed in a custom PDU definition.
     * The fields argument is an object with the variables defined in the PDU definition fields property.
     * @example
     * pduInfo.setOutFormat("MyProtocol", "MyPDU", {"type": "REPLY", "data": data})
     */
    setOutFormat(protocol: string, pduType: string, fields: object): void;
    /**
     * Adds a message to the outgoing OSI layer 7.
     * @example
     * pduInfo.addOutMessage("I am sending some data.")
     */
    addOutMessage(message: string): void;
    /**
     * Adds a message to the incoming OSI layer 7.
     * @example
     * pduInfo.addInMessage("I received some data.")
     */
    addInMessage(message: string): void;
    /**
     * Sets the PDU as accepted.
     * @example
     * pduInfo.setAccepted()
     */
    setAccepted(): void;
    /**
     * Sets the PDU as dropped.
     * @example
     * pduInfo.setDropped()
     */
    setDropped(): void;
}


// Workspace
/**
 * Returns the current device's physical object.
 * @example
 * po = getPhysicalObject();
 */
declare function getPhysicalObject(): PhysicalObject;
declare enum PhysicalObjectTypes {
    INTER_CITY = 0,
    CITY = 1,
    BUILDING = 2,
    WIRING_CLOSET = 3,
    RACK = 4,
    TABLE = 5,
    DEVICE = 6,
    MULTIUSER = 7,
    GENERIC_CONTAINER = 8,
}
declare interface PhysicalObject {
    /**
     * Returns the name of this physical object.
     * @example
     * Serial.println(po.getName());
     */
    getName(): string;
    
    /**
     * Returns the type of this physical object. Valid values are:
     * @example
     * Serial.println(po.getType());
     */
    getType(): PhysicalObjectTypes;
    /**
     * Returns the x coordinate relative to its parent in meters.
     * @example
     * Serial.println(po.getX());
     */
    getX(): number;
    /**
     * Returns the y coordinate relative to its parent in meters.
     * @example
     * Serial.println(po.getY());
     */
    getY(): number;
    /**
     * Returns the center x coordinate relative to its parent in meters.
     * @example
     * Serial.println(po.getCenterX());
     */
    getCenterX(): number;
    /**
     * Returns the center y coordinate relative to its parent in meters.
     * @example
     * Serial.println(po.getCenterY());
     */
    getCenterY(): number;
    /**
     * Returns the global x coordinate of this physical object in meters.
     * @example
     * Serial.println(po.getGlobalX());
     */
    getGlobalX(): number;
    /**
     * Returns the global y coordinate of this physical object in meters.
     * @example
     * Serial.println(po.getGlobalX());
     */
    getGlobalY(): number;
    /**
     * Returns the width of this physical object in meters.
     * @example
     * Serial.println(po.getWidth());
     */
    getWidth(): number;
    /**
     * Returns the height of this physical object in meters.
     * @example
     * Serial.println(po.getHeight());
     */
    getHeight(): number;
    /**
     * Moves this physical object's top left corner to the specified coordinates in meters relative to its parent.
     * @example
     * po.moveTo(10, 20);
     */
    moveTo(x: number, y: number): void;
    /**
     * Moves this physical object's center to the specified coordinates in meters relative to its parent.
     * @example
     * po.moveCenterTo(10, 20);
     */
    moveCenterTo(x: number, y: number): void;
    /**
     * Moves this physical object by the specified coordinates in meters.
     * @example
     * po.moveBy(10, 20);
     */
    moveBy(x: number, y: number): void;
    /**
     * Sets this physical object's velocity in meters. This physical object then moves automatically.
     * @example
     * po.setVelocity(1, 2);
     */
    setVelocity(x: number, y: number): void;
    /**
     * Returns the x velocity of this physical object in meters.
     * @example
     * Serial.println(po.getXVelocity());
     */
    getXVelocity(): number;
    /**
     * Returns the y velocity of this physical object in meters.
     * @example
     * Serial.println(po.getYVelocity());
     */
    getYVelocity(): number;
    /**
     * Returns this physical object's parent.
     * @example
     * parentPO = po.getParent();
     */
    getParent(): PhysicalObject;
    /**
     * Moves this physical object out of its parent to the same level as the parent, and returns whether it was successful.
     * @example
     * po.moveOutOfParent();
     */
    moveOutOfParent(): boolean;
    /**
     * Moves this physical object into a container with the specified name that is in the same level as this physical object, and returns whether it was successful.
     * @example
     * po.moveInto("Corporate Office");
     */
    moveInto(name: string): boolean;
    /**
     * Returns the number of children this physical object has.
     * @example
     * Serial.println(po.getChildCount());
     */
    getChildCount(): number;
    /**
     * Returns the child physical object at the specified index.
     * @example
     * childPO = po.getChildAt(0);
     */
    getChildAt(index: number): PhysicalObject;
    /**
     * Returns the child physical object with the specified name.
     * @example
     * childPO = po.getChild("Wiring Closet");
     */
    getChild(name: string): PhysicalObject;
}
/**
 * Returns the current device's logical object.
 * @example
 * lo = getLogicalObject();
 */
declare function getLogicalObject(): LogicalObject;
declare enum LogicalObjectTypes {
    ROOT = 1099,
    DEVICE = 1100,
    CLUSTER = 1104,
    MULTIUSERITEM = 1108,
}
declare interface LogicalObject {
    /**
     * Returns the name of this logical object.
     * @example
     * Serial.println(lo.getName());
     */
    getName(): string;
    /**
     * Returns the type of this logical object. For valid values see enum LogicalObjectTypes.
     * @example
     * Serial.println(lo.getType());
     */
    getType(): number;
    /**
     * Returns the x coordinate relative to its parent in pixels.
     * @example
     * Serial.println(lo.getX());
     */
    getX(): number;
    /**
     * Returns the y coordinate relative to its parent in pixels.
     * @example
     * Serial.println(lo.getY());
     */
    getY(): number;
    /**
     * Returns the center x coordinate relative to its parent in pixels.
     * @example
     * Serial.println(lo.getCenterX());
     */
    getCenterX(): number;
    /**
     * Returns the center y coordinate relative to its parent in pixels.
     * @example
     * Serial.println(lo.getCenterY());
     */
    getCenterY(): number;
    /**
     * Returns the width of this logical object in pixels.
     * @example
     * Serial.println(lo.getWidth());
     */
    getWidth(): number;
    /**
     * Returns the height of this logical object in pixels.
     * @example
     * Serial.println(lo.getHeight());
     */
    getHeight(): number;
    /**
     * Moves this logical object's top left corner to the specified coordinates in pixels relative to its parent.
     * @example
     * lo.moveTo(10, 20);
     */
    moveTo(x: number, y: number): void;
    /**
     * Moves this logical object's center to the specified coordinates in pixels relative to its parent.
     * @example
     * lo.moveCenterTo(10, 20);
     */
    moveCenterTo(x: number, y: number): void;
    /**
     * Moves this logical object by the specified coordinates in pixels.
     * @example
     * lo.moveBy(10, 20);
     */
    moveBy(x: number, y: number): void;
    /**
     * Sets this logical object's velocity in pixels. This logical object then moves automatically.
     * @example
     * lo.setVelocity(1, 2);
     */
    setVelocity(x: number, y: number): void;
    /**
     * Returns the x velocity of this logical object in pixels.
     * @example
     * Serial.println(lo.getXVelocity());
     */
    getXVelocity(): number;
    /**
     * Returns the y velocity of this logical object in pixels.
     * @example
     * Serial.println(lo.getYVelocity());
     */
    getYVelocity(): number;
    /**
     * Returns this logical object's parent.
     * @example
     * parentLO = lo.getParent();
     */
    getParent(): LogicalObject;
    /**
     * Moves this logical object out of its parent to the same level as the parent, and returns whether it was successful.
     * @example
     * lo.moveOutOfParent();
     */
    moveOutOfParent(): boolean;
    /**
     * Moves this logical object into a container with the specified name that is in the same level as this logical object, and returns whether it was successful.
     * @example
     * lo.moveInto("Cluster0");
     */
    moveInto(name: string): boolean;
    /**
     * Returns the number of children this logical object has.
     * @example
     * Serial.println(lo.getChildCount());
     */
    getChildCount(): number;
    /**
     * Returns the child logical object at the specified index.
     * @example
     * childlo = lo.getChildAt(0);
     */
    getChildAt(index: number): LogicalObject;
    /**
     * Returns the child logical object with the specified name.
     * @example
     * childlo = lo.getChild("Cluster0");
     */
    getChild(name: string): LogicalObject;
}


// Bluetooth Manager
declare namespace Bluetooth {
    /**
     * Initialize Bluetooth functionality for the device.
     * @example
     * function setup(){
     *      Bluetooth.init();
     * }
     */
    function init(): void;


    /**
     * This event handler is called when a device is discovered.
     * @example
     * Bluetooth.onDeviceDiscovered = function()(macAddress, deviceName) {
     * ...
     * }
     * Bluetooth.discover()
     */
    var onDeviceDiscovered: (macAddress, deviceName) => any;
    /**
     * This event handler is called when a device is paired.
     * @example
     * Bluetooth.onDevicePaired = function(macAddress){...}
     */
    var onDevicePaired: (macAddress) => any;
    /**
     * This event handler is called when a device is unpaired.
     * @example
     * Bluetooth.onDeviceUnpaired = function(macAddress){...}
     */
    var onDeviceUnPaired: (macAddress) => any;
    /**
     * This event handler is called when a device is connected.
     * @example
     * Bluetooth.onDeviceConnected = function(macAddress){...}
     */
    var onDeviceConnected: (macAddress) => any;
    /**
     * This event handler is called when a device is disconnected.
     * @example
     * Bluetooth.onDeviceDisconnected = function(macAddress){...}
     */
    var onDeviceDisconnected: (macAddress) => any;


    /**
     * Sets the bluetooth device to discoverable or not.
     * @example
     * Bluetooth.setDiscoverable(true)
     */
    function setDiscoverable(discoverable: boolean): void;
    /**
     * Returns true if discoverable otherwise false.
     * @example
     * Bluetooth.isDiscoverable()
     */
    function isDiscoverable(): boolean;
    /**
     * Starts the discovering process.
     * If devices are discovered, the `onDeviceDiscovered()` event will trigger.
     * @example
     * Bluetooth.discover()
     */
    function discover(): void;
    /**
     * Starts pairing with mac address.
     * @example
     * Bluetooth.pair(macAddress)
     */
    function pair(mac): void;
    /**
     * Starts unpairing with mac address.
     * @example
     * Bluetooth.unpair(macAddress)
     */
    function unpair(mac): void;


    /**
     * This event handler is called if there's a pair request and the bluetooth manager is set to accept pair requests.
     * @example
     * Bluetooth.setAcceptingPairRequest(true)
     * Bluetooth.onPairRequest = function(macAddress, deviceName){...}
     */
    var onPairRequest: (macAddress, deviceName) => any;


    /**
     * Sets the bluetooth manager to accept pair requests
     * @example
     * Bluetooth.setAcceptingPairRequest(true)
     */
    function setAcceptingPairRequest(accepting: boolean): void;
    /**
     * Accepts the pair request with macAddress and deviceName
     * @example
     * Bluetooth.acceptPairRequest(macAddress, deviceName)
     */
    function acceptPairRequest(macAddress, deviceName): void;
    /**
     * Returns an array of paired bluetooth devices.
     * @example
     * var devices = Bluetooth.getPairedDevices()
     */
    function getPairedDevices(): Array; // Not sure what it returs and too lazy to try it...
    /**
     * Returns an array of connected devices.
     * @example
     * var devices = Bluetooth.getConnectedDevices()
     */
    function getConnectedDevices(): Array; // Not sure what it returs and too lazy to try it...
    /**
     * Enables bluetooth broadcast.
     * @example
     * Bluetooth.enableBroadcast()
     */
    function enableBroadcast(): void;
    /**
     * Returns true if broadcast is enabled.
     * @example
     * Bluetooth.isBroadcastEnabled()
     */
    function isBroadcastEnabled(): boolean;
    /**
     * Broadcast beacon with beaconUuid and data.
     * @example
     * Bluetooth.broadcastBeacon(uuid, data)
     */
    function broadcastBeacon(beaconUuid, data): boolean;
}


// Bluetooth Service
declare class BluetoothService {
    /**
     * Starts the bluetooth service.
     * @example
     * var bts = new BluetoothService();
     * var dstService = "{00000000-0000-0000-0000-000000000001}"
     * bts.start(dstService)
     */
    start(uuid: string): void;
    /**
     * Returns true if connected to dstMac and dstServiceUuid; false otherwise.
     * @example
     * bts.connect(dstMac, dstServiceUuid)
     */
    connect(dstMac, dstServiceUuid): boolean;
    /**
     * Stops the bluetooth service.
     * @example
     * bts.stop()
     */
    stop(): void;
    /**
     * Sends data to dstMac and dstServiceUuid with data.
     * @example
     * bts.send(dstMac, dstServiceUuid, "hello")
     */
    send(dstMac, dstServiceUuid: string, data: string): void;
    /**
     * Sends data to connected device.
     * @example
     * bts.sendToConnected("hello")
     */
    sendToConnected(data: string): void;


    /**
     * This event handler receives data from srcMac, srcService, dstMac and dstService with data.
     * @example
     * bts.onReceive = function(srcmac, srcData, dstMac, dstService, data){...}
     */
    onReceive: (srcMac, srcService, dstMac, dstService, data: string) => any;
}
