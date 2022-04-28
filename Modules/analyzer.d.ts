
type UUID = string;
type NULL_UUID = "{00000000-0000-0000-0000-000000000000}";
type byte = number;
type IP = string;
type IPv6 = string;
type MAC = string;

type eventCallback<T extends object> = (src: {
    className: string,
    objectUuid: UUID,
    eventName: string
}, args: T) => void;


declare interface _Parser {
    className: string;
    uuid: UUID;
    ipcCall(event: string, ...args: any): any;
}
declare interface _IpcBase {
    getClassName(): string;
    getObjectUuid(): string;
}
declare interface _IPCData {
    read(encodedBuffer: unknown /* EncodedBuffer */): void;
}
declare interface BaseClass extends _IpcBase {
    _parser: _Parser;
    registerEvent(eventName: string, obj: object | null, callback: eventCallback<{}>): void;
    registerObjectEvent(..._: unknown[]): unknown;
    registerDelegate(..._: unknown[]): unknown;
    unregisterEvent(..._: unknown[]): unknown;
    unregisterObjectEvent(..._: unknown[]): unknown;
    unregisterDelegate(..._: unknown[]): unknown;
}

declare interface _IPC extends BaseClass {
    appWindow(): _AppWindow;
    commandLog(): _CommandLog;
    getObjectByUuid(uuid: UUID): BaseClass;
    hardwareFactory(): _HardwareFactory;
    ipcManager(): _IpcManager;
    multiUserManager(): _MultiUserManager;
    network(): _Network;
    options(): _Options;
    simulation(): _Simulation;
    systemFileManager(): _SystemFileManager;
    userAppManager(): _UserAppManager;
}

// HEAD END

type pduType = "TextFileContent" | "HttpPage";

declare enum _AcceptMode {
    ALWAYS_ACCEPT = 0,
    ALWAYS_DENY = 1,
    PROMPT = 2,
}
declare enum _Access {
    UNKNOWN = 0,
}
declare enum _ACLPortOperator {
    ACL_PORT_OPERATOR_NULL = 0,
    ACL_PORT_OPERATOR_EQ = 1,
    ACL_PORT_OPERATOR_LT = 2,
    ACL_PORT_OPERATOR_GT = 3,
    ACL_PORT_OPERATOR_NEQ = 4,
    ACL_PORT_OPERATOR_RANGE = 5,
}
declare enum _AcsServerType {
    UNKNOWN = 0,
}
declare enum _AhAuth {
    NONE = 0,
    AH_MD5 = 1,
    AH_SHA = 2,
}
declare enum _AreaStubType {
    AREA_NO_STUB = 0,
    AREA_STUB = 1,
    AREA_TOTALLY_STUB = 2,
    AREA_NOT_SO_STUBBY = 3,
    AREA_NOT_SO_STUBBY_TOTALLY_STUB = 4,
}
declare enum _AttribType {
    TACACS_ASK_USER_NAME_PROMPT = 0,
    TACACS_USER_NAME_PROMPT = 1,
    TACACS_USER_NAME = 2,
    TACACS_ASK_PASSWORD_PROMPT = 3,
    TACACS_PASSWORD_PROMPT = 4,
    TACACS_PASSWORD = 5,
    TACACS_ACCEPT = 6,
    TACACS_REJECT = 7,
}
declare enum _Auth {
    CHAP = 0,
    PAP = 1,
    NONE = 2,
}
declare enum _AuthenticationMode {
    AUTH_KEY_EXCHANGE = 0,
    AUTH_USER_NAME = 1,
    AUTH_PASSWORD = 2,
    AUTH_VERIFY = 3,
    AUTH_DONE = 4,
}
declare enum _AuthMethod {
    UNKNOWN = 0,
}
declare enum _BufferFullAction {
    PROMPT = 0,
    AUTO_CLEAR_EVENT_LIST = 1,
    AUTO_VIEW_PREVIOUS_EVENTS = 2,
}
declare enum _CableType {
    CABLE_TYPE_INVALID = 0,
    CABLE_TYPE_COPPER_STRAIGHT_THROUGH = 1,
    CABLE_TYPE_COPPER_CROSS_OVER = 2,
    CABLE_TYPE_COPPER_ROLL_OVER = 3,
    CABLE_TYPE_FIBER = 4,
    CABLE_TYPE_SERIAL = 5,
    CABLE_TYPE_PHONE_LINE = 6,
    CABLE_TYPE_COAXIAL = 7,
}
declare enum _CallState {
    NONE = 0,
    OFF_HOOK = 1,
    ON_HOOK = 2,
    RING_OUT = 3,
    RING_IN = 4,
    CONNECTED = 5,
    BUSY = 6,
}
declare enum _CheckType {
    CHECK_TYPE_BLANK = 0,
    CHECK_TYPE_HALF = 1,
    CHECK_TYPE_FULL = 2,
}
declare enum _ClassMapMatchType {
    UNKNOWN = 0,
}
declare enum _CommandAction {
    COMMAND_EXECUTE = 0,
    COMMAND_LIST_HELP = 1,
    COMMAND_FULL_HELP = 2,
    COMMAND_COMPLETE = 3,
}
declare enum _CommandStatus {
    STATUS_OK = 0,
    ERROR_AMBIGUOUS = 1,
    ERROR_INVALID = 2,
    ERROR_INCOMPLETE = 3,
    ERROR_NOT_IMPLEMENTED = 4,
}
declare enum _ComparatorClass {
    COMP_CLASS_IP = 0,
    COMP_CLASS_ROUTING = 1,
    COMP_CLASS_ACL = 2,
    COMP_CLASS_NAT = 3,
    COMP_CLASS_PHYSICAL = 4,
    COMP_CLASS_SWITCHING = 5,
    COMP_CLASS_CONNECTIVITY = 6,
    COMP_CLASS_ALL = 7,
}
declare enum _ConnectType {
    ETHERNET_STRAIGHT = 8100,
    ETHERNET_CROSS = 8101,
    ETHERNET_ROLL = 8102,
    FIBER = 8103,
    PHONE = 8104,
    CABLE = 8105,
    SERIAL = 8106,
    AUTO = 8107,
    CONSOLE = 8108,
    WIRELESS = 8109,
    COAXIAL = 8110,
}
declare enum _CopperType {
    STRAIGHT_THROUGH = 0,
    CROSS_OVER = 1,
    ROLL_OVER = 2,
    CUSTOM_COPPER = 3,
}
declare enum _Counters {
    VTP_SUMMARY_RECEIVED = 0,
    VTP_SUMMARY_TRANSMITTED = 1,
    VTP_SUBSET_RECEIVED = 2,
    VTP_SUBSET_TRANSMITTED = 3,
    VTP_REQUEST_RECEIVED = 4,
    VTP_REQUEST_TRANSMITTED = 5,
    VTP_CONFIG_REVISION_ERROR = 6,
    VTP_DIGEST_ERROR = 7,
    COUNTER_COUNT = 8,
}
declare enum _CSMACASTATE {
    CONTENTION_WINDOW = 0,
    NAV_WAIT = 1,
    NAV_EXEC = 2,
    DATA_WAIT = 3,
    BACKOFF_MODE = 4,
    DIFS_WINDOW = 5,
}
declare enum _DeviceType {
    ROUTER = 0,
    SWITCH = 1,
    CLOUD = 2,
    BRIDGE = 3,
    HUB = 4,
    REPEATER = 5,
    ACCESS_POINT = 6,
    PC = 7,
    SERVER = 8,
    PRINTER = 9,
    WIRELESS_ROUTER = 10,
    IP_PHONE = 11,
    DSL_MODEM = 12,
    CABLE_MODEM = 13,
    REMOTE_NETWORK = 14,
    MULTI_LAYER_SWITCH = 15,
}
declare enum _DHCPv6ClientState {
    CLIENT_STATE_SEND_SOLICIT = 1,
    CLIENT_STATE_RECEIVE_ADVERTISE = 2,
    CLIENT_STATE_SEND_REQUEST = 3,
    CLIENT_STATE_RECEIVE_REPLY = 4,
}
declare enum _DHCPv6MessageType {
    MESSAGE_TYPE_SOLICIT = 1,
    MESSAGE_TYPE_ADVERTISE = 2,
    MESSAGE_TYPE_REQUEST = 3,
    MESSAGE_TYPE_CONFIRM = 4,
    MESSAGE_TYPE_RENEW = 5,
    MESSAGE_TYPE_REBIND = 6,
    MESSAGE_TYPE_REPLY = 7,
    MESSAGE_TYPE_RELEASE = 8,
    MESSAGE_TYPE_DECLINE = 9,
    MESSAGE_TYPE_RECONFIGURE = 10,
    MESSAGE_TYPE_INVALID = 11,
}
declare enum _DHCPv6OptionCode {
    OPTION_CLIENT_ID = 1,
    OPTION_SERVER_ID = 2,
    OPTION_IANA = 3,
    OPTION_IATA = 4,
    OPTION_IAADDRESS = 5,
    OPTION_ORO = 6,
    OPTION_PREFERENCE = 7,
    OPTION_ELAPSED_TIME = 8,
    OPTION_RELAY_MESSAGE = 9,
    OPTION_AUTHENTICATION = 11,
    OPTION_UNICAST = 12,
    OPTION_STATUS_CODE = 13,
    OPTION_RAPID_COMMIT = 14,
    OPTION_USER_CLASS = 15,
    OPTION_VENDOR_CLASS = 16,
    OPTION_VENDOR_OPT = 17,
    OPTION_INTERFACE_ID = 18,
    OPTION_RECONFIG_MSG = 19,
    OPTION_RECONFIG_ACCEPT = 20,
    OPTION_DNSSERVERS = 23,
    OPTION_IAPREFIX_DELEGATION = 25,
    OPTION_IAPREFIX = 26,
    OPTION_DOMAIN_SEARCH = 119,
}
declare enum _DHCPv6ServerState {
    SERVER_STATE_RECEIVE_SOLICIT = 1,
    SERVER_STATE_SEND_ADVERTISE = 2,
    SERVER_STATE_RECEIVE_REQUEST = 3,
    SERVER_STATE_SEND_REPLY = 4,
}
declare enum _DirectiveCommand {
    BACKSPACE = 0,
    DELETE_LINE = 1,
}
declare enum _DLCIUsage {
    DLCI_LOCAL = 0,
    DLCI_SWITCHED = 1,
    DLCI_UNUSED = 2,
}
declare enum _DUIDHardwareType {
    DUIDHARDWARE_ETHERNET = 3,
}
declare enum _DUIDType {
    DUIDTYPE_LLAPLUS_TIME = 1,
    DUIDTYPE_VENDOR_ASSIGNED = 2,
    DUIDTYPE_LLA = 3,
}
declare enum _EIGRPTopologyEntryState {
    TOPOLOGY_ENTRY_PASSIVE = 0,
    TOPOLOGY_ENTRY_ACTIVE = 1,
    TOPOLOGY_ENTRY_UPDATE = 2,
    TOPOLOGY_ENTRY_QUERY = 3,
    TOPOLOGY_ENTRY_REPLY = 4,
}
declare enum _Encryption {
    E64BIT = 0,
    E128BIT = 1,
}
declare enum _EncryptType {
    ENCRYPT_NULL = 0,
    ENCRYPT_WEP_64BIT = 1,
    ENCRYPT_WEP_128BIT = 2,
    ENCRYPT_TKIP = 3,
    ENCRYPT_AES = 4,
}
declare enum _EspAuth {
    ESP_NONE = 0,
    ESP_MD5 = 1,
    ESP_SHA = 2,
}
declare enum _EspEncryption {
    ESP_ENCRY_NONE = 0,
    ESP_AES128 = 1,
    ESP_AES192 = 2,
    ESP_AES256 = 3,
    ESP_AES = 4,
    ESP_DES = 5,
    ESP3DES = 6,
}
declare enum _EthChannelMode {
    MODE_NOT_SET = 0,
    ACTIVE = 1,
    AUTO = 2,
    DESIRABLE = 3,
    ON = 4,
    PASSIVE = 5,
}
declare enum _EthernetType {
    NONE = 0,
    ETHERNET_II = 1,
    IEEE802DOT3 = 2,
    IEEE802DOT3Z = 3,
}
declare enum _EventType {
    INVALID_EVENT = 0,
    MENU_ITEM_PRESSED_EVENT = 1,
}
declare enum _FlowControl {
    FLOW_CONTROL_NONE = 0,
    FLOW_CONTROL_HARDWARE = 1,
    FLOW_CONTROL_SOFTWARE = 2,
}
declare enum _FrameRelayEncapsulationType {
    FRAME_RELAY_ENCAP_CISCO = 0,
    FRAME_RELAY_ENCAP_IETF = 1,
    FRAME_RELAY_ENCAP_DEFAULT = 2,
}
declare enum _FTPType {
    FTP_COMMAND_PACKET = 1,
    FTP_RESPONSE_PACKET = 2,
    FTP_DATA_PACKET = 3,
}
declare enum _H323MessageType {
    SETUP = 5,
    CALL_PROCEEDING = 2,
    ALERTING = 1,
    CONNECT = 7,
    NOTIFY = 110,
    RELEASE_COMPLETE = 90,
}
declare enum _HTTPResponseStatusType {
    HTTP_RESPONSE_STATUS_CONTINUE = 100,
    HTTP_RESPONSE_STATUS_SWITCHING_PROTOCOLS = 101,
    HTTP_RESPONSE_STATUS_OK = 200,
    HTTP_RESPONSE_STATUS_CREATED = 201,
    HTTP_RESPONSE_STATUS_ACCEPTED = 202,
    HTTP_RESPONSE_STATUS_NON_AUTHORITATIVE_INFORMATION = 203,
    HTTP_RESPONSE_STATUS_NO_CONTENT = 204,
    HTTP_RESPONSE_STATUS_RESET_CONTENT = 205,
    HTTP_RESPONSE_STATUS_PARTIAL_CONTENT = 206,
    HTTP_RESPONSE_STATUS_MULTIPLE_CHOICES = 300,
    HTTP_RESPONSE_STATUS_MOVED_PERMANENTLY = 301,
    HTTP_RESPONSE_STATUS_FOUND = 302,
    HTTP_RESPONSE_STATUS_SEE_OTHER = 303,
    HTTP_RESPONSE_STATUS_NOT_MODIFIED = 304,
    HTTP_RESPONSE_STATUS_USE_PROXY = 305,
    HTTP_RESPONSE_STATUS_TEMPORARY_REDIRECT = 307,
    HTTP_RESPONSE_STATUS_BAD_REQUEST = 400,
    HTTP_RESPONSE_STATUS_UNAUTHORIZED = 401,
    HTTP_RESPONSE_STATUS_PAYMENT_REQUIRED = 402,
    HTTP_RESPONSE_STATUS_FORBIDDEN = 403,
    HTTP_RESPONSE_STATUS_NOT_FOUND = 404,
    HTTP_RESPONSE_STATUS_METHOD_NOT_ALLOWED = 405,
    HTTP_RESPONSE_STATUS_NOT_ACCEPTABLE = 406,
    HTTP_RESPONSE_STATUS_PROXY_AUTHENTICATION_REQUIRED = 407,
    HTTP_RESPONSE_STATUS_REQUEST_TIME_OUT = 408,
    HTTP_RESPONSE_STATUS_CONFLICT = 409,
    HTTP_RESPONSE_STATUS_GONE = 410,
    HTTP_RESPONSE_STATUS_LENGTH_REQUIRED = 411,
    HTTP_RESPONSE_STATUS_PRECONDITION_FAILED = 412,
    HTTP_RESPONSE_STATUS_REQUEST_ENTITY_TOO_LARGE = 413,
    HTTP_RESPONSE_STATUS_REQUEST_URITOO_LARGE = 414,
    HTTP_RESPONSE_STATUS_UNSUPPORTED_MEDIA_TYPE = 415,
    HTTP_RESPONSE_STATUS_REQUESTEDRANGENOTSATISFIABLE = 416,
    HTTP_RESPONSE_STATUS_EXPECTATION_FAILED = 417,
    HTTP_RESPONSE_STATUS_INTERNAL_SERVER_ERROR = 500,
    HTTP_RESPONSE_STATUS_NOT_IMPLEMENTED = 501,
    HTTP_RESPONSE_STATUS_BAD_GATEWAY = 502,
    HTTP_RESPONSE_STATUS_SERVICE_UNAVAILABLE = 503,
    HTTP_RESPONSE_STATUS_GATEWAY_TIME_OUT = 504,
    HTTP_RESPONSE_STATUS_HTTPVERSIONNOTSUPPORTED = 505,
}
declare enum _HTTPResponseType {
    HTTP_GET = 1,
    HTTP_POST = 2,
    HTTP_OK = 3,
    HTTP_UN_AUTHORIZED = 4,
    HTTP_NOT_FOUND = 5,
    HTTP_INVALID = 6,
    HTTP_TIMEOUT = 7,
    HTTP_PEER_RESET = 8,
    HTTP_DNS_SERVER_NOT_FOUND = 9,
    HTTP_DNS_UN_RESOLVED_HOST_NAME = 10,
    HTTP_PROTOCOL_ERROR = 11,
}
declare enum _HTTPType {
    HTTP_GET = 1,
    HTTP_POST = 2,
    HTTP_OK = 3,
    HTTP_UN_AUTHORIZED = 4,
    HTTP_NOT_FOUND = 5,
    HTTP_INVALID = 6,
    HTTP_TIMEOUT = 7,
    HTTP_PEER_RESET = 8,
    HTTP_DNS_SERVER_NOT_FOUND = 9,
    HTTP_DNS_UN_RESOLVED_HOST_NAME = 10,
    HTTP_PROTOCOL_ERROR = 11,
}
declare enum _IAType {
    IATYPE_NON_TEMPORATORY = 1,
    IATYPE_TEMPORATORY = 2,
}
declare enum _ICMPv6MessageType {
    UNREACHABLE = 1,
    TIME_EXCEEDED = 3,
    PARAMETER_PROBLEM = 4,
    ECHO_REQUEST = 128,
    ECHO_REPLY = 129,
    ROUTER_SOLICITATION = 133,
    ROUTER_ADVERTISEMENT = 134,
    NEIGHBOR_SOLICITATION = 135,
    NEIGHBOR_ADVERTISEMENT = 136,
}
declare enum _IgnoreDebugError {
    IGNORE_ILLEGAL_VERSION = 0,
    IGNORE_BAD_SOURCE = 1,
}
declare enum _InternetConnectionType {
    DHCP = 0,
    PPPOE = 1,
    STATIC = 2,
}
declare enum _IPV6AddressType {
    UNICAST = 0,
    ANYCAST = 1,
    EUI64 = 2,
    ND_ASSIGNED = 3,
    DHCP_ASSIGNED = 4,
}
declare enum _LacpState {
    ACTIVITY = 1,
    TIMEOUT = 2,
    AGGREGATION = 4,
    SYNCHRONISATION = 8,
    COLLECTING = 16,
    DISTRIBUTING = 32,
    DEFAULTED = 64,
    EXPIRED = 128,
}
declare enum _Layer2EncapsulationType {
    HDLC = 0,
    PPP = 1,
    FRAME_RELAY = 2,
    ARPA = 3,
    DOT1Q = 4,
}
declare enum _LightStatus {
    OFF_LIGHT = 0,
    AMBER_LIGHT = 1,
    GREEN_LIGHT = 2,
    BLINK = 3,
}
declare enum _LinksysProtocol {
    TCP = 0,
    UDP = 1,
    BOTH = 2,
}
declare enum _LinkType {
    COPPER = 0,
    FIBER = 1,
    SERIAL = 2,
    SMART_SERIAL = 3,
    PHONE_LINE = 4,
    OMNIDIRECTIONAL = 5,
    COAXIAL = 6,
}
declare enum _LMIType {
    LMI_ANSI = 0,
    LMI_CISCO = 1,
    LMI_Q933A = 2,
}
declare enum _LoadingOptions {
    ON_STARTUP = 0,
    ON_DEMAND = 1,
    DISABLED = 2,
}
declare enum _Login {
    LOGIN_NO = 0,
    LOGIN = 1,
    LOGIN_LOCAL = 2,
}
declare enum _LoginMethod {
    LOGIN_CONSOLE = 0,
    LOGIN_TELNET = 1,
    LOGIN_SSH = 2,
}
declare enum _MapType {
    UNKNOWN = 0,
}
declare enum _ModuleType {
    LINE_CARD = 0,
    NETWORK_MODULE = 1,
    INTERFACE_CARD = 2,
    PT_ROUTER_MODULE = 3,
    PT_SWITCH_MODULE = 4,
    PT_CLOUD_MODULE = 5,
    PT_REPEATER_MODULE = 6,
    PT_HOST_MODULE = 7,
    PT_MODEM_MODULE = 8,
    NON_REMOVABLE_MODULE = 9,
}
declare enum _MountType {
    RACK_MOUNT = 0,
    SHELF_MOUNT = 1,
    TABLE_MOUNT = 2,
}
declare enum _MUMsgType {
    MUPORT_ADVT = 0,
    MULINK_UPDATE = 1,
    MULINK_UPDATE_STATUS = 2,
    MUSEND_PDU = 3,
    MUSAVE_NET_REQ = 4,
    MUSAVE_NET_RESP = 5,
}
declare enum _NATMode {
    NAT_NULL = 0,
    NAT_INSIDE = 1,
    NAT_OUTSIDE = 2,
}
declare enum _NAVSTATE {
    RTS_SENT = 5,
    RTS_RECEIVED = 6,
    CTS_SENT = 7,
    CTS_RECEIVED = 8,
    ACK_SENT = 9,
    ACK_RECEIVED = 10,
    DATA_SENT = 11,
    DATA_RECEIVED = 12,
    RTS_RESENT = 13,
}
declare enum _NdOptionType {
    SOURCE_LINK_ADDRESS = 1,
    TARGET_LINK_ADDRESS = 2,
    PREFIX_INFO = 3,
    REDIRECTED_HEADER = 4,
    MTU = 5,
}
declare enum _NeighborState {
    INCOMPLETE = 0,
    REACH = 1,
    STALE = 2,
    DELAY = 3,
    PROBE = 4,
}
declare enum _NetworkType {
    WIRELESS_DISABLED = 0,
    WIRELESS_B = 1,
    WIRELESS_G = 2,
    WIRELESS_BGMIXED = 3,
    WIRELESS_N = 4,
    WIRELESS_A = 5,
    WIRELESS_MIXED = 7,
}
declare enum _OperationType {
    MAKE_LINK = 0,
    UPDATE_LINK = 1,
    DELETE_LINK = 2,
}
declare enum _OSPFAuthType {
    AUTH_NULL = 0,
    AUTH_SIMPLE = 1,
    AUTH_MD5 = 2,
    AUTH_DEFAULT = 3,
}
declare enum _OSPFDefaultInfoOrig {
    NO_DEFAULT_INFO_ORIG = 0,
    DEFAULT_INFO_ORIG = 1,
    DEFAULT_INFO_ORIG_ALWAYS = 2,
}
declare enum _OSPFInterfaceEvent {
    OSPF_INTERFACE_UP = 0,
    OSPF_WAIT_TIMER = 1,
    OSPF_BACKUP_SEEN = 2,
    OSPF_NEIGHBOR_CHANGE = 3,
    OSPF_LOOP_IND = 4,
    OSPF_UNLOOP_IND = 5,
    OSPF_INTERFACE_DOWN = 6,
}
declare enum _OSPFLogChanges {
    NO_LOG_CHANGE = 0,
    LOG_CHANGE = 1,
    LOG_CHANGE_DETAIL = 2,
}
declare enum _OSPFNeighborEvent {
    OSPF_EVENT_HELLO_RECEIVED = 0,
    OSPF_EVENT_START = 1,
    OSPF_EVENT2WAY_RECEIVED = 2,
    OSPF_EVENT_ADJ_OK = 3,
    OSPF_EVENT_NEGOTIATION_DONE = 4,
    OSPF_EVENT_EXCHANGE_DONE = 5,
    OSPF_EVENT_BAD_LSREQ = 6,
    OSPF_EVENT_LOADING_DONE = 7,
    OSPF_EVENT_SEQ_NUM_MISMATCH = 8,
    OSPF_EVENT1WAY = 9,
    OSPF_EVENT_KILL_NBR = 10,
    OSPF_EVENT_INACTIVITY_TIMER = 11,
}
declare enum _OSPFNeighborState {
    OSPF_NEIGHBOR_DUMMY = 0,
    OSPF_NEIGHBOR_DOWN = 1,
    OSPF_NEIGHBOR_ATTEMPT = 2,
    OSPF_NEIGHBOR_INIT = 3,
    OSPF_NEIGHBOR_TWO_WAY = 4,
    OSPF_NEIGHBOR_EX_START = 5,
    OSPF_NEIGHBOR_EXCHANGE = 6,
    OSPF_NEIGHBOR_LOADING = 7,
    OSPF_NEIGHBOR_FULL = 8,
}
declare enum _OSPFNetworkType {
    OSPF_NETWORK_POINT_TO_POINT = 0,
    OSPF_NETWORK_BROADCAST = 1,
    OSPF_NETWORK_NON_BROADCAST = 2,
    OSPF_NETWORK_POINT_TO_MULTIPOINT = 3,
    OSPF_NETWORK_LOOPBACK = 4,
    OSPF_NETWORK_NOT_SET = 5,
}
declare enum _OSPFPathType {
    OSPF_PATH_INTRA_AREA = 0,
    OSPF_PATH_INTER_AREA = 1,
    OSPF_PATH_TYPE1_EXTERNAL = 2,
    OSPF_PATH_TYPE2_EXTERNAL = 3,
    OSPF_PATH_TYPE1_NSSA_EXTERNAL = 4,
    OSPF_PATH_TYPE2_NSSA_EXTERNAL = 5,
}
declare enum _OSPFState {
    OSPF_STATE_DOWN = 0,
    OSPF_STATE_LOOPBACK = 1,
    OSPF_STATE_WAITING = 2,
    OSPF_STATE_POINT_TO_POINT = 3,
    OSPF_STATE_DR_OTHER = 4,
    OSPF_STATE_BACKUP = 5,
    OSPF_STATE_DR = 6,
}
declare enum _Parity {
    PARITY_EVEN = 0,
    PARITY_MARK = 1,
    PARITY_NONE = 2,
    PARITY_ODD = 3,
    PARITY_SPACE = 4,
}
declare enum _Pop3HeaderType {
    POP3REQUEST = 1,
    POP3RESPONSE_SUCCESS = 2,
    POP3RESPONSE_ERROR = 3,
    POP3TIMEOUT = 4,
    POP3PEER_RESET = 5,
    POP3DNS_SERVER_NOT_FOUND = 6,
    POP3DNS_UN_RESOLVED_HOST_NAME = 7,
    POP3PROTOCOL_ERROR = 8,
    POP3USER_NOT_FOUND = 9,
}
declare enum _Pop3ResponseType {
    POP3REQUEST = 1,
    POP3RESPONSE_SUCCESS = 2,
    POP3RESPONSE_ERROR = 3,
    POP3TIMEOUT = 4,
    POP3PEER_RESET = 5,
    POP3DNS_SERVER_NOT_FOUND = 6,
    POP3DNS_UN_RESOLVED_HOST_NAME = 7,
    POP3PROTOCOL_ERROR = 8,
    POP3USER_NOT_FOUND = 9,
}
declare enum _PortEvent {
    PORT_UP = 0,
    PORT_DOWN = 1,
    LINE_PROTOCOL_UP = 2,
    LINE_PROTOCOL_DOWN = 3,
    LINK_REMOVED = 4,
    LINK_CONNECTED = 5,
    PORT_SEND_OK = 6,
    PORT_RECEIVE_OK = 7,
    IP_CHANGED = 8,
    MAC_CHANGED = 9,
    PORT_CLEAR_BUFFER = 10,
    PORT_START = 11,
    BANDWIDTH_INFO_CHANGED = 12,
    DELAY_CHANGED = 13,
    OSPF_COST_CHANGED = 14,
    SWITCH_PORT_MODE_CHANGED = 15,
    ACCESS_VLAN_CHANGED = 16,
    TRUNK_VLANS_CHANGED = 17,
    PORT_REMOVED = 18,
    IPV6CHANGED = 19,
    IPV6LINK_LOCAL_CHANGED = 20,
}
declare enum _PortFastMode {
    PORT_FAST_DEFAULT = 0,
    PORT_FAST_EDGE_PORT = 1,
    PORT_FAST_TRUNK_PORT = 2,
    PORT_FAST_DISABLED = 3,
}
declare enum _PortMode {
    ADMIN_DYNAMIC_DESIRABLE = 0,
    ADMIN_DYNAMIC_AUTO = 1,
    ADMIN_OPERATION_TRUNK = 2,
    ADMIN_OPERATION_ACCESS = 3,
}
declare enum _PortType {
    CONSOLE = 0,
    AUX = 1,
    COPPER_ETHERNET = 2,
    COPPER_FAST_ETHERNET = 3,
    COPPER_GIGABIT_ETHERNET = 4,
    FIBER_FAST_ETHERNET = 5,
    FIBER_GIGABIT_ETHERNET = 6,
    SERIAL = 7,
    SMART_SERIAL = 8,
    ACCESS_POINT_WIRELESS_G = 9,
    ACCESS_POINT_WIRELESS_N = 10,
    HOST_WIRELESS_G = 11,
    HOST_WIRELESS_N = 12,
    SUB_INTERFACE = 13,
    LOOPBACK = 14,
    VLAN = 15,
    MODEM = 16,
    RS232 = 17,
    FRSUB_INTERFACE = 18,
    COPPER_COAXIAL = 19,
    NULL = 20,
}
declare enum _PortViolation {
    SHUTDOWN = 0,
    PROTECT = 1,
    RESTRICT = 2,
}
declare enum _PPPAuthenType {
    NO_AUTHENTICATION = 0,
    CHAP = 1,
    PAP = 2,
    PAP_CHAP = 3,
    CHAP_PAP = 4,
}
declare enum _PtmpAuthentication {
    CLEAR_TEXT = 1,
    SIMPLE_AUTHENTICATION = 2,
    MD5AUTHENTICATION = 4,
}
declare enum _PtmpBufferEncoding {
    PTMP_BUFFER_TEXT = 1,
    PTMP_BUFFER_BINARY = 2,
}
declare enum _PtmpBufferMode {
    PTMP_BUFFER_READ = 1,
    PTMP_BUFFER_WRITE = 2,
    PTMP_BUFFER_READ_WRITE = 4,
}
declare enum _PtmpCompression {
    NO_COMPRESSION = 1,
    ZLIB_DEFAULT = 2,
}
declare enum _PtmpConnectionErrorType {
    NO_ERROR = 0,
    CONNECTION_ERROR = 1,
    NEGOTIATION_ERROR = 2,
    AUTHENTICATION_ERROR = 3,
}
declare enum _PtmpConnectionState {
    NOT_CONNECTED = 0,
    CONNECTING = 1,
    NEGOTIATING = 2,
    AUTHENTICATING = 3,
    ESTABLISHED = 4,
}
declare enum _PtmpEncryption {
    NO_ENCRYPTION = 1,
    XOR_ENCRYPTION = 2,
}
declare enum _PtmpMsgType {
    PTMP_NEGO_REQUEST = 0,
    PTMP_NEGO_RESPONSE = 1,
    PTMP_AUTH_REQUEST = 2,
    PTMP_AUTH_CHALLENGE = 3,
    PTMP_AUTH_RESPONSE = 4,
    PTMP_AUTH_STATUS = 5,
    PTMP_KEEP_ALIVE = 6,
    PTMP_DISCONNECT = 7,
    PTMP_IPCMSG = 100,
    PTMP_MUMSG = 200,
}
declare enum _PtmpTypeValue {
    VOID = 0,
    BYTE = 1,
    BOOL = 2,
    SHORT = 3,
    INT = 4,
    LONG = 5,
    FLOAT = 6,
    DOUBLE = 7,
    STRING = 8,
    QSTRING = 9,
    IP_ADDRESS = 10,
    IPV6ADDRESS = 11,
    MAC_ADDRESS = 12,
    UUID = 13,
    PAIR = 14,
    VECTOR = 15,
    DATA = 16,
}
declare enum _PvcStatus {
    PVC_ACTIVE = 0,
    PVC_INACTIVE = 1,
    PVC_STATIC = 2,
    PVC_DELETED = 3,
}
declare enum _RadioBand {
    RADIO_AUTO = 0,
    RADIO_STANDARD = 1,
    RADIO_WIDE = 2,
}
declare enum _RedistributedRoutingType {
    RIP_PROTOCOL_REDIS = 0,
    EIGRP_PROTOCOL_REDIS = 1,
    OSPF_PROTOCOL_REDIS = 2,
    STATIC_REDIS = 3,
    CONNECTED_REDIS = 4,
}
declare enum _RequestedOptionCode {
    REQUESTED_OPTION_DNS = 23,
    REQUESTED_OPTION_DOMAIN_SEARCH_LIST = 24,
    REQUESTED_OPTION_IAFOR_PD = 25,
}
declare enum _ResourceRecordType {
    UNKNOWN = 0,
}
declare enum _ResponseCode {
    SUCCESS = 0,
    NOT_TRIED = 2,
    NOT_RESOLVED = 3,
}
declare enum _RoutingType {
    RIP_PROTOCOL = 0,
    EIGRP_PROTOCOL = 1,
    OSPF_PROTOCOL = 2,
}
declare enum _RstpInfoIsState {
    RSTP_INFO_IS_DISABLED = 0,
    RSTP_INFO_IS_MINE = 1,
    RSTP_INFO_IS_AGED = 2,
    RSTP_INFO_IS_RECEIVED = 3,
}
declare enum _RstpLinkType {
    LINK_TYPE_DEFAULT = 0,
    LINK_TYPE_PT_P = 1,
    LINK_TYPE_SHARED = 2,
}
declare enum _RstpPortState {
    RSTP_DISCARDING = 0,
    RSTP_LEARNING = 1,
    RSTP_FORWARDING = 2,
    RSTP_INCONSISTENT = 3,
}
declare enum _RstpSwitchPortState {
    RSTP_SWITCH_PORT_DISCARDING = 0,
    RSTP_SWITCH_PORT_LEARNING = 1,
    RSTP_SWITCH_PORT_FORWARDING = 2,
    RSTP_SWITCH_PORT_INCONSISTENT = 3,
}
declare enum _RtpType {
    AUDIO = 0,
    VIDEO = 1,
}
declare enum _SavingOptions {
    ALWAYS = 0,
    PROMPT = 1,
    NEVER = 2,
}
declare enum _SecurityPrivilege {
    PRIV_NULL = 0,
    PRIV_GET_NETWORK = 1,
    PRIV_CHANGE_NETWORK = 2,
    PRIV_SIMULATION_MODE = 3,
    PRIV_MISC_GUI = 4,
    PRIV_FILE = 5,
    PRIV_CHANGE_PREF = 6,
    PRIV_CHANGE_GUI = 7,
    PRIV_ACTIVITY_WIZARD = 8,
    PRIV_MULTI_USER = 9,
    PRIV_IPC = 10,
    PRIV_APPLICATION = 11,
}
declare enum _SigEventAction {
    UNKNOWN = 0,
}
declare enum _SimFilePermission {
    EXECUTE = 1,
    WRITE = 2,
    READ = 4,
}
declare enum _SkinnyMessageType {
    KEEP_ALIVE_MESSAGE = 0,
    KEEP_ALIVE_ACK_MESSAGE = 256,
    REGISTER_MESSAGE = 1,
    KEY_PAD_BUTTON_MESSAGE = 3,
    OFF_HOOK_MESSAGE = 6,
    ON_HOOK_MESSAGE = 7,
    REGISTER_ACK_MESSAGE = 129,
    TIME_DATE_REQ_MESSAGE = 13,
    DEFINE_TIME_DATE = 148,
    START_TONE_MESSAGE = 130,
    STOP_TONE_MESSAGE = 131,
    SET_RINGER_MESSAGE = 133,
    START_MEDIA_TRANSMISSION = 138,
    STOP_MEDIA_TRANSMISSION = 139,
    CALL_INFO_MESSAGE = 143,
    OPEN_RECEIVE_CHANNEL = 261,
    CLOSE_RECEIVE_CHANNEL = 262,
    OPEN_RECEIVE_CHANNEL_ACK = 34,
    CALL_STATE_MESSAGE = 273,
    DISPLAY_PROMPT_STATUS_MESSAGE = 274,
    CLEAR_PROMPT_STATUS_MESSAGE = 275,
    DIALED_NUMBER_MESSAGE = 285,
    RESET = 159,
    UN_REGISTER_MESSAGE = 39,
    UN_REGISTER_ACK_MESSAGE = 280,
    NOT_PERMITTED = 255,
    DISCONNECT_MESSAGE = 254,
    RESET_MESSAGE = 250,
}
declare enum _SmiType {
    SMI_TYPE_NULL = 0,
    SMI_TYPE_AREA_ID = 1,
    SMI_TYPE_BITS = 2,
    SMI_TYPE_COUNTER = 3,
    SMI_TYPE_COUNTER32 = 4,
    SMI_TYPE_DESIGNATED_ROUTER_PRIORITY = 5,
    SMI_TYPE_DISPLAY_STRING = 6,
    SMI_TYPE_ENTRY = 7,
    SMI_TYPE_GAUGE = 8,
    SMI_TYPE_GAUGE32 = 9,
    SMI_TYPE_INET_ADDRESS = 10,
    SMI_TYPE_INET_ADDRESS_TYPE = 11,
    SMI_TYPE_INTEGER = 12,
    SMI_TYPE_INTEGER32 = 13,
    SMI_TYPE_IP_ADDRESS = 14,
    SMI_TYPE_OBJECT = 15,
    SMI_TYPE_OBJECT_IDENTIFIER = 16,
    SMI_TYPE_OCTET_STRING = 17,
    SMI_TYPE_OID = 18,
    SMI_TYPE_OPAQUE = 19,
    SMI_TYPE_PHYS_ADDRESS = 20,
    SMI_TYPE_ROUTER_ID = 21,
    SMI_TYPE_ROUTE_TAG = 22,
    SMI_TYPE_SEQUENCE = 23,
    SMI_TYPE_SNMP_ADMIN_STRING = 24,
    SMI_TYPE_TIME_STAMP = 25,
    SMI_TYPE_TIME_TICKS = 26,
    SMI_TYPE_TRUTH_VALUE = 27,
    SMI_TYPE_UNSIGNED32 = 28,
    SMI_TYPE_UNSIGNED_INTEGER = 29,
}
declare enum _SmtpHeaderType {
    SMTP_REQUEST = 1,
    SMTP_RESPONSE_SUCCESS = 2,
    SMTP_REQUEST_FORWARD = 3,
    SMTP_REMOTE_RECEIEVER_DOES_NOT_EXIST = 4,
    SMTP_RESPONSE_ERROR = 5,
    SMTP_TIMEOUT = 6,
    SMTP_PEER_RESET = 7,
    SMTP_DNS_SERVER_NOT_FOUND = 8,
    SMTP_DNS_UN_RESOLVED_HOST_NAME = 9,
    SMTP_PROTOCOL_ERROR = 10,
    SMTP_USER_NOT_FOUND = 11,
    SMTP_SERVER_DOMAIN_ERROR = 12,
    SMTP_SERVER_NOT_FOUND = 13,
}
declare enum _SmtpResponseType {
    SMTP_REQUEST = 1,
    SMTP_RESPONSE_SUCCESS = 2,
    SMTP_REQUEST_FORWARD = 3,
    SMTP_REMOTE_RECEIEVER_DOES_NOT_EXIST = 4,
    SMTP_RESPONSE_ERROR = 5,
    SMTP_TIMEOUT = 6,
    SMTP_PEER_RESET = 7,
    SMTP_DNS_SERVER_NOT_FOUND = 8,
    SMTP_DNS_UN_RESOLVED_HOST_NAME = 9,
    SMTP_PROTOCOL_ERROR = 10,
    SMTP_USER_NOT_FOUND = 11,
    SMTP_SERVER_DOMAIN_ERROR = 12,
    SMTP_SERVER_NOT_FOUND = 13,
}
declare enum _SnmpError {
    SNMP_ERROR_NO_ERROR = 0,
    SNMP_ERROR_TOO_BIG = 1,
    SNMP_ERROR_NO_SUCH_NAME = 2,
    SNMP_ERROR_BAD_VALUE = 3,
    SNMP_ERROR_READ_ONLY = 4,
    SNMP_ERROR_GEN_ERROR = 5,
    SNMP_ERROR_TIMEOUT = 6,
    SNMP_ERROR_WRONG_VERSION = 7,
}
declare enum _SnmpPduType {
    SNMP_PDU_TYPE_GET_REQUEST = 0,
    SNMP_PDU_TYPE_GET_BULK_REQUEST = 1,
    SNMP_PDU_TYPE_GET_RESPONSE = 2,
    SNMP_PDU_TYPE_SET_REQUEST = 3,
}
declare enum _SpecialChar {
    NO_CHAR = 0,
    ARROW_RIGHT = 1,
    ARROW_LEFT = 2,
    ARROW_UP = 3,
    ARROW_DOWN = 4,
}
declare enum _SshVersion {
    SSH_VER_DEFAULT = 0,
    SSH_VER_ONE = 1,
    SSH_VER_TWO = 2,
}
declare enum _StandardChannel {
    STANDARD_CHANNEL_AUTO = 0,
}
declare enum _Status {
    INRANGE = 0,
    ASSOCIATED = 1,
    AUTHENTICATED = 2,
    NOTAUTHENTICATED = 3,
    DISASSOCIATED = 4,
    INPROGRESS = 5,
}
declare enum _STPBpduType {
    STP_CONFIG_BPDU = 0,
    STP_TCN_BPDU = 128,
    RSTP_BPDU = 2,
}
declare enum _STPPortRole {
    RSTP_DISABLED_PORT = 0,
    RSTP_UNKNOWN_PORT = 1,
    RSTP_ALTERNATE_PORT = 2,
    RSTP_BACKUP_PORT = 3,
    RSTP_ROOT_PORT = 4,
    RSTP_DESIGNATED_PORT = 5,
    RSTP_EDGE_PORT = 6,
}
declare enum _STPPortState {
    STP_DISABLED = 0,
    STP_BLOCKING = 1,
    STP_LISTENING = 2,
    STP_LEARNING = 3,
    STP_FORWARDING = 4,
}
declare enum _SwitchPortMode {
    ADMIN_DYNAMIC_DESIRABLE = 0,
    ADMIN_DYNAMIC_AUTO = 1,
    ADMIN_OPERATION_TRUNK = 2,
    ADMIN_OPERATION_ACCESS = 3,
}
declare enum _SwitchPortState {
    FORWARDING_STATE = 0,
    BLOCKING_STATE = 1,
    LISTENING_STATE = 2,
    LEARNING_STATE = 3,
    DISABLED_STATE = 4,
}
declare enum _TcpConnState {
    CLOSED = 0,
    SYN_SENT = 1,
    SYN_RECEIVED = 2,
    STABLISHED = 3,
    LISTEN = 4,
    FIN_WAIT_1 = 5,
    TIMED_WAIT = 6,
    CLOSE_WAIT = 7,
    FIN_WAIT_2 = 8,
    LAST_ACK = 9,
    CLOSING = 10,
}
declare enum _TcpEvent {
    CONNECTION_ACTIVE = 0,
    CONNECTION_TIMEOUT = 1,
    CONNECTION_REQUEST = 2,
    PEER_CLOSE = 3,
    PEER_RESET = 4,
}
declare enum _TcpOptionKind {
    END_OF_OPTION_LIST_OPTION = 0,
    NO_OPERATION_OPTION = 1,
    MSSOPTION = 2,
}
declare enum _TFTPErrorCode {
    TFTP_ERROR_TIMEOUT = 0,
    TFTP_ERROR_NO_FILE = 1,
    TFTP_ERROR_NO_PERMISSION = 2,
    TFTP_ERROR_DNS = 3,
}
declare enum _TFTPType {
    TFTP_READ = 1,
    TFTP_WRITE = 2,
    TFTP_DATA = 3,
    TFTP_ACK = 4,
    TFTP_ERROR = 5,
}
declare enum _TimerType {
    LAPSED = 0,
    COUNTDOWN = 1,
    NONE = 2,
}
declare enum _TrafficStatus {
    TRAFFIC_NOT_SEND = 0,
    TRAFFIC_IN_PROGRESS = 1,
    TRAFFIC_FAILED = 2,
    TRAFFIC_SUCCESSFUL = 3,
}
declare enum _TrafficType {
    TRAFFIC_TYPE_ICMP = 0,
    TRAFFIC_TYPE_TCP = 1,
    TRAFFIC_TYPE_UDP = 2,
    TRAFFIC_TYPE_RIP_V1 = 3,
    TRAFFIC_TYPE_RIP_V2 = 4,
    TRAFFIC_TYPE_ARP = 5,
    TRAFFIC_TYPE_CDP = 6,
    TRAFFIC_TYPE_DHCP = 7,
    TRAFFIC_TYPE_NAT = 8,
    TRAFFIC_TYPE_EIGRP = 9,
    TRAFFIC_TYPE_VTP = 10,
    TRAFFIC_TYPE_STP = 11,
    TRAFFIC_TYPE_OSPF = 12,
    TRAFFIC_TYPE_DTP = 13,
    TRAFFIC_TYPE_TELNET = 14,
    TRAFFIC_TYPE_SSH = 15,
    TRAFFIC_TYPE_TFTP = 16,
    TRAFFIC_TYPE_HTTP = 17,
    TRAFFIC_TYPE_DNS = 18,
    TRAFFIC_TYPE_ICMPV6 = 19,
}
declare enum _TransportInput {
    NONE = 0,
    TELNET = 1,
    SSH = 2,
    ALL = -1,
}
declare enum _TriState {
    DEFAULT = 0,
    FALSE = 1,
    TRUE = 2,
}
declare enum _VariableType {
    NTIRE_RANGE = 0,
    RANDOM = 1,
    STATIC = 2,
}
declare enum _ViewCommandAction {
    UNKNOWN = 0,
}
declare enum _VLANEvent {
    VLAN_CREATED = 0,
    VLAN_DELETED = 1,
    VLAN_NAME_CHANGED = 2,
}
declare enum _VTPMode {
    VTP_SERVER = 0,
    VTP_CLIENT = 1,
    VTP_TRANSPARENT = 2,
}
declare enum _WideChannel {
    WIDE_CHANNEL_AUTO = 0,
}
declare enum _WindowFlags {
    UNKNOWN = 0,
}
declare enum _WindowModality {
    UNKNOWN = 0,
}
declare enum _WirelessAuthenType {
    AUTHEN_NULL = 0,
    AUTHEN_WEP = 1,
    AUTHEN_WPA1_PSK = 2,
    AUTHEN_WPA1_EAP = 3,
    AUTHEN_WPA2_PSK = 4,
    AUTHEN_WPA2_EAP = 5,
}
declare enum _WirelessEncryptType {
    UNKNOWN = 0,
}
declare enum _WirelessNetworkType {
    WIRELESS_B = 1,
    WIRELESS_G = 2,
    WIRELESS_N = 4,
    WIRELESS_MIXED = 7,
}
declare enum _WirelessRadioBand {
    RADIO_AUTO = 0,
}
declare enum _WredType {
    WRED_DSCP = 0,
    WRED_PREC = 1,
}


declare interface _ACLBase extends BaseClass {
    addStatement(s: string): boolean; 
    removeStatement(s: string): boolean; 
    getStatementAt(n: number): _ACLStatement; 
    getStatementCount(): number; 
    addRemark(s: string): void; 
    getRemark(n: number): string; 
    getRemarkCount(): number; 
    getCommandCount(): number; 
    getCommandAt(n: number): string; 
    isExtended(): boolean; 
    getAclId(): string; 
}
declare type _ACL = _ACLBase;

declare interface _ACLProcessBase extends _Process {
    addAcl(s: string): void; 
    removeAcl(s: string): void; 
    getAcl(s: string): _ACL; 
    getAclAt(n: number): _ACL; 
    getAclCount(): number; 
}
declare type _ACLProcess = _ACLProcessBase;

declare interface _ACLStatementBase extends _IPCData {
    getStatement(): string; 
    setStatement(statement: string): void; 
}
declare type _ACLStatement = _ACLStatementBase;

declare interface _ARPEntryBase extends _IPCData {
    getIpAddress(): IP; 
    setIpAddress(ipAddress: IP): void; 
    getMacAddress(): MAC; 
    setMacAddress(macAddress: MAC): void; 
    getPortName(): string; 
    setPortName(portName: string): void; 
}
declare type _ARPEntry = _ARPEntryBase;

declare interface _ARPPacketBase extends _Pdu {
    getHardwareType(): number; 
    setHardwareType(hardwareType: number): void; 
    getProtocolType(): number; 
    setProtocolType(protocolType: number): void; 
    getHardWareLength(): byte; 
    setHardWareLength(hardWareLength: byte): void; 
    getProtocolLength(): byte; 
    setProtocolLength(protocolLength: byte): void; 
    getUsOperation(): number; 
    setUsOperation(usOperation: number): void; 
    getSrcMacAddress(): MAC; 
    setSrcMacAddress(srcMacAddress: MAC): void; 
    getDstMacAddress(): MAC; 
    setDstMacAddress(dstMacAddress: MAC): void; 
    getSrcIpAddress(): IP; 
    setSrcIpAddress(srcIpAddress: IP): void; 
    getDstIpAddress(): IP; 
    setDstIpAddress(dstIpAddress: IP): void; 
}
declare type _ARPPacket = _ARPPacketBase;

declare interface _ARPProcessBase extends _Process {
    getArpTable(): _ARPTable; 
}
declare type _ARPProcess = _ARPProcessBase;

declare interface _ARPTableBase extends _IPCData {
    setEntries(): void; 
}
declare type _ARPTable = _ARPTableBase;

declare interface _AaaProcessBase extends _Process {
    getAuthMethodAt(s: string, n: number): _AuthMethod; 
    remAuthListByName(s: string): void; 
}
declare type _AaaProcess = _AaaProcessBase;

declare interface _AcsServerProcessBase extends _Process {
    addToUserMap(s: string, s2: string, s3: string): boolean; 
    deleteFromUserMap(s: string): void; 
    addToClientMap(ipAddress: IP, acsServerType: _AcsServerType, s: string, s2: string): boolean; 
    deleteFromClientMap(ipAddress: IP, acsServerType: _AcsServerType): void; 
    enableACSServerService(b: boolean): void; 
    isEnabled(): boolean; 
}
declare type _AcsServerProcess = _AcsServerProcessBase;

declare interface _ActiveDialogBase extends BaseClass {
    setVisible(b: boolean): void; 
    setDisable(b: boolean): void; 
}
declare type _ActiveDialog = _ActiveDialogBase;

declare interface _ActivityFileBase extends _NetworkFile {
    getInstruction(n: number): string; 
    getInstructionSource(n: number): string; 
    getCurrentInstructionSource(): string; 
    getCurrentInstruction(): string; 
    getInstructionCount(): number; 
    resetActivity(): void; 
    getPercentageComplete(): number; 
    getAssessmentItemsCount(): number; 
    getCorrectAssessmentItemsCount(): number; 
    getConnectivityCount(): number; 
    getComparatorTree(): _TreeNode; 
    getAssessedComparatorTree(): _TreeNode; 
    getLastAssessedComparatorTree(): _TreeNode; 
    nextInstructionPage(): void; 
    prevInstructionPage(): void; 
    removeInstructionPage(): void; 
    insertInstructionPage(): void; 
    getLockingTree(): _LockingTree; 
    getInitNetworkFile(): _NetworkFile; 
    getAnsNetworkFile(): _NetworkFile; 
    getUserNetworkFile(): _NetworkFile; 
    getHashedPassword(): string; 
    setCountDownTime(n: number): void; 
    getCountDownTime(): number; 
    getCountDownTimeLeft(): number; 
    setTimerType(timerType: _TimerType): void; 
    getTimerType(): _TimerType; 
    setDynamicPF(b: boolean): void; 
    isDynamicPercentageFeedback(): boolean; 
    getVariableManager(): _VariableManager; 
}
declare type _ActivityFile = _ActivityFileBase;

declare interface _ActivityScriptEngineBase extends _EMEAScriptEngine {
    getAssessmentModelScriptInterface(): _AssessmentModelScriptInterface; 
}
declare type _ActivityScriptEngine = _ActivityScriptEngineBase;

declare interface _ActivityWizardBase extends BaseClass {
    setVisible(b: boolean): void; 
    setWidgetVisible(s: string, b: boolean): void; 
    setDisabled(b: boolean): void; 
    setWidgetDisable(s: string, b: boolean): void; 
}
declare type _ActivityWizard = _ActivityWizardBase;

declare interface _AdministrativeDialogBase extends BaseClass {
    setVisible(b: boolean): void; 
    setWidgetVisible(s: string, b: boolean): void; 
    setDisabled(b: boolean): void; 
    setWidgetDisable(s: string, b: boolean): void; 
}
declare type _AdministrativeDialog = _AdministrativeDialogBase;

declare interface _AhHeaderBase extends _Header {
    getNextHeader(): number; 
    setNextHeader(n: number): void; 
    getPayloadLength(): number; 
    setPayloadLength(n: number): void; 
    getReserved(): byte; 
    setReserved(reserved: byte): void; 
    getSpi(): number; 
    setSpi(n: number): void; 
    getSequenceNumber(): number; 
    setSequenceNumber(n: number): void; 
    getAuthenticationData(): string; 
    setAuthenticationData(authenticationData: string): void; 
    getM_eAhAuth(): _AhAuth; 
    setM_eAhAuth(eAhAuth: _AhAuth): void; 
    getIcv0(): number; 
    setIcv0(n: number): void; 
    getIcv1(): number; 
    setIcv1(n: number): void; 
    getIcv2(): number; 
    setIcv2(n: number): void; 
}
declare type _AhHeader = _AhHeaderBase;

declare interface _AntennaBase extends _Link {
    getPort(): _Port; 
    getReceiverCount(): number; 
    getReceiverAt(n: number): _Antenna; 
}
declare type _Antenna = _AntennaBase;

declare interface _AssessmentModelScriptInterfaceBase extends BaseClass {
    getAssessmentItemValue(s: string, s2: string): string; 
    setAssessmentItemFeedback(s: string, s2: string): boolean; 
}
declare type _AssessmentModelScriptInterface = _AssessmentModelScriptInterfaceBase;

declare interface _AuthPayloadBase extends _IkePayload {
    getCode(): byte; 
    setCode(code: byte): void; 
    getInfo(): string; 
    setInfo(info: string): void; 
}
declare type _AuthPayload = _AuthPayloadBase;

declare interface _BgpAttribASPathBase extends _BgpAttribute {
    getPathSize(): number; 
    setPathSize(n: number): void; 
    setPaths(): void; 
}
declare type _BgpAttribASPath = _BgpAttribASPathBase;

declare interface _BgpAttribAtomicAggBase extends _BgpAttribute {}
declare type _BgpAttribAtomicAgg = _BgpAttribAtomicAggBase;

declare interface _BgpAttribLocalPrefBase extends _BgpAttribute {
    getPreferences(): number; 
    setPreferences(n: number): void; 
}
declare type _BgpAttribLocalPref = _BgpAttribLocalPrefBase;

declare interface _BgpAttribMedBase extends _BgpAttribute {
    getMetric(): number; 
    setMetric(n: number): void; 
}
declare type _BgpAttribMed = _BgpAttribMedBase;

declare interface _BgpAttribNextHopBase extends _BgpAttribute {
    getNextHop(): IP; 
    setNextHop(nextHop: IP): void; 
}
declare type _BgpAttribNextHop = _BgpAttribNextHopBase;

declare interface _BgpAttribOriginBase extends _BgpAttribute {
    getOrigin(): byte; 
    setOrigin(origin: byte): void; 
}
declare type _BgpAttribOrigin = _BgpAttribOriginBase;

declare interface _BgpAttributeBase extends _Pdu {
    getFlags(): byte; 
    setFlags(flags: byte): void; 
    getType(): byte; 
    setType(type: byte): void; 
    getLength(): byte; 
    setLength(length: byte): void; 
}
declare type _BgpAttribute = _BgpAttributeBase;

declare interface _BgpKeepAliveBase extends _BgpPacket {}
declare type _BgpKeepAlive = _BgpKeepAliveBase;

declare interface _BgpNotificationBase extends _BgpPacket {
    getErrorCode(): byte; 
    setErrorCode(errorCode: byte): void; 
    getErrorSubCode(): byte; 
    setErrorSubCode(errorSubCode: byte): void; 
    getDataSize(): number; 
    setDataSize(n: number): void; 
    setData(): void; 
}
declare type _BgpNotification = _BgpNotificationBase;

declare interface _BgpOpenBase extends _BgpPacket {
    getVersion(): byte; 
    setVersion(version: byte): void; 
    getAS(): number; 
    setAS(as: number): void; 
    getHoldTime(): number; 
    setHoldTime(holdTime: number): void; 
    getSpeakerID(): number; 
    setSpeakerID(n: number): void; 
    getOptionalParamLength(): byte; 
    setOptionalParamLength(optionalParamLength: byte): void; 
}
declare type _BgpOpen = _BgpOpenBase;

declare interface _BgpPacketBase extends _Pdu {
    getLength(): number; 
    setLength(length: number): void; 
    getType(): byte; 
    setType(type: byte): void; 
}
declare type _BgpPacket = _BgpPacketBase;

declare interface _BgpPathSegmentBase extends _Pdu {
    getPathLength(): number; 
    setPathLength(n: number): void; 
    setPaths(): void; 
}
declare type _BgpPathSegment = _BgpPathSegmentBase;

declare interface _BgpPrefixBase extends _Pdu {
    getLength(): byte; 
    setLength(length: byte): void; 
    getPrefix(): IP; 
    setPrefix(prefix: IP): void; 
}
declare type _BgpPrefix = _BgpPrefixBase;

declare interface _BgpUpdateBase extends _BgpPacket {
    getUnfeasibleLength(): number; 
    setUnfeasibleLength(unfeasibleLength: number): void; 
    getPathAttributeLength(): number; 
    setPathAttributeLength(pathAttributeLength: number): void; 
    getWithdrawnRouteSize(): number; 
    setWithdrawnRouteSize(n: number): void; 
    setWithdrawnRoutes(): void; 
    getPathAttributeSize(): number; 
    setPathAttributeSize(n: number): void; 
    setPathAttributes(): void; 
    getNlriSize(): number; 
    setNlriSize(n: number): void; 
    setNLRI(): void; 
}
declare type _BgpUpdate = _BgpUpdateBase;

declare interface _CDPAddressBase extends _CDPTypeLengthValue {
    getCdpNumberOfIpAddresses(): number; 
    setCdpNumberOfIpAddresses(n: number): void; 
    setAddressPacket(): void; 
}
declare type _CDPAddress = _CDPAddressBase;

declare interface _CDPAddressPacketBase extends _Pdu {
    getCdpProtocolType(): byte; 
    setCdpProtocolType(cdpProtocolType: byte): void; 
    getCdpProtocolLength(): byte; 
    setCdpProtocolLength(cdpProtocolLength: byte): void; 
    getCdpProtocol(): byte; 
    setCdpProtocol(cdpProtocol: byte): void; 
    getCdpAddressLength(): number; 
    setCdpAddressLength(cdpAddressLength: number): void; 
    getCdpAddress(): string; 
    setCdpAddress(cdpAddress: string): void; 
}
declare type _CDPAddressPacket = _CDPAddressPacketBase;

declare interface _CDPCapabilityBase extends _CDPTypeLengthValue {
    getCdpCapability(): byte; 
    setCdpCapability(cdpCapability: byte): void; 
}
declare type _CDPCapability = _CDPCapabilityBase;

declare interface _CDPCoSBase extends _CDPTypeLengthValue {
    getCos(): number; 
    setCos(cos: number): void; 
}
declare type _CDPCoS = _CDPCoSBase;

declare interface _CDPDeviceIdBase extends _CDPTypeLengthValue {
    getCdpDeviceId(): string; 
    setCdpDeviceId(cdpDeviceId: string): void; 
}
declare type _CDPDeviceId = _CDPDeviceIdBase;

declare interface _CDPFrameBase extends _Pdu {
    getCdpVersion(): byte; 
    setCdpVersion(cdpVersion: byte): void; 
    getCdpHoldTime(): byte; 
    setCdpHoldTime(cdpHoldTime: byte): void; 
    getCdpChecksum(): number; 
    setCdpChecksum(cdpChecksum: number): void; 
    setCdpTypeLengthValue(): void; 
}
declare type _CDPFrame = _CDPFrameBase;

declare interface _CDPNativeVlanBase extends _CDPTypeLengthValue {
    getNativeVlan(): number; 
    setNativeVlan(nativeVlan: number): void; 
}
declare type _CDPNativeVlan = _CDPNativeVlanBase;

declare interface _CDPNeighborBase extends _IPCData {
    getDeviceId(): string; 
    setDeviceId(deviceId: string): void; 
    getLocalPort(): string; 
    setLocalPort(localPort: string): void; 
    getRemotePort(): string; 
    setRemotePort(remotePort: string): void; 
    getPlatform(): string; 
    setPlatform(platform: string): void; 
    getCapability(): byte; 
    setCapability(capability: byte): void; 
    getCdpVersion(): byte; 
    setCdpVersion(cdpVersion: byte): void; 
    getHoldTime(): byte; 
    setHoldTime(holdTime: byte): void; 
    getSoftwareVersion(): string; 
    setSoftwareVersion(softwareVersion: string): void; 
    getNativeVlan(): number; 
    setNativeVlan(nativeVlan: number): void; 
}
declare type _CDPNeighbor = _CDPNeighborBase;

declare interface _CDPNeighborTableBase extends BaseClass {
    getNeighborTableCount(): number; 
    getCdpNeighborAt(n: number): _CDPNeighbor; 
}
declare type _CDPNeighborTable = _CDPNeighborTableBase;

declare interface _CDPPlatformBase extends _CDPTypeLengthValue {
    getCdpPlatfrom(): string; 
    setCdpPlatfrom(cdpPlatfrom: string): void; 
}
declare type _CDPPlatform = _CDPPlatformBase;

declare interface _CDPPortIdBase extends _CDPTypeLengthValue {
    getCdpPortId(): string; 
    setCdpPortId(cdpPortId: string): void; 
}
declare type _CDPPortId = _CDPPortIdBase;

declare interface _CDPProcessBase extends _Process {
    getNeighborTable(): _CDPNeighborTable; 
}
declare type _CDPProcess = _CDPProcessBase;

declare interface _CDPSoftwareVersionBase extends _CDPTypeLengthValue {
    getCdpSoftwareVersion(): string; 
    setCdpSoftwareVersion(cdpSoftwareVersion: string): void; 
}
declare type _CDPSoftwareVersion = _CDPSoftwareVersionBase;

declare interface _CDPTypeLengthValueBase extends _Pdu {
    getCdpType(): number; 
    setCdpType(cdpType: number): void; 
    getCdpLength(): number; 
    setCdpLength(cdpLength: number): void; 
}
declare type _CDPTypeLengthValue = _CDPTypeLengthValueBase;

declare interface _CDPVoipVlanBase extends _CDPTypeLengthValue {
    getVlan(): number; 
    setVlan(n: number): void; 
}
declare type _CDPVoipVlan = _CDPVoipVlanBase;

declare interface _CHAPPacketBase extends _Pdu {
    getCode(): byte; 
    setCode(code: byte): void; 
    getId(): byte; 
    setId(id: byte): void; 
    getPassword(): string; 
    setPassword(password: string): void; 
    getUsername(): string; 
    setUsername(username: string): void; 
    getRouteIp(): IP; 
    setRouteIp(routeIp: IP): void; 
}
declare type _CHAPPacket = _CHAPPacketBase;

declare interface _CHAPProcessBase extends _Process {
    setPassword(s: string): void; 
    setUserName(s: string): void; 
    getUserName(): string; 
    getPassword(): string; 
}
declare type _CHAPProcess = _CHAPProcessBase;

declare interface _CMEProcessBase extends _Process {
    getEphoneDirectory(n: number): _EphoneDirectory; 
    getEphone(n: number): _Ephone; 
    getTelephonyService(): _TelephonyService; 
    getDialPeer(n: number): _DialPeer; 
}
declare type _CMEProcess = _CMEProcessBase;

declare interface _CategoryBase extends BaseClass {
    getRetired(): _TriState; 
    setRetired(triState: _TriState): void; 
    getCategoryName(): string; 
}
declare type _Category = _CategoryBase;

declare interface _CbacBase extends BaseClass {
    setInspectName(s: string): void; 
    getInspectName(): string; 
}
declare type _Cbac = _CbacBase;

declare interface _CbacProcessBase extends _Process {
    getCbacCount(): number; 
    getCbacAt(n: number): _Cbac; 
    setGlobalAuditTrail(triState: _TriState): void; 
    setGlobalAlert(triState: _TriState): void; 
    setTcpSynWaitTime(n: number): void; 
    setTcpFinWaitTime(n: number): void; 
    setTcpIdleTime(n: number): void; 
    setUdpIdleTime(n: number): void; 
    setDnsTimeout(n: number): void; 
    getGlobalAuditTrail(): _TriState; 
    getGlobalAlert(): _TriState; 
    setMaxIncompleteHigh(n: number): void; 
    setMaxIncompleteLow(n: number): void; 
    setOneMinuteHigh(n: number): void; 
    setOneMinuteLow(n: number): void; 
}
declare type _CbacProcess = _CbacProcessBase;

declare interface _CepInstanceBase extends BaseClass {
    getInstanceId(): UUID; 
}
declare type _CepInstance = _CepInstanceBase;

declare interface _CloudBase extends _Device {
    addPhoneConnection(s: string, s2: string): boolean; 
    removePhoneConnection(s: string): void; 
    addSubLinkConnection(s: string, s2: string, s3: string, s4: string): boolean; 
    removeSubLinkConnection(s: string, s2: string): boolean; 
    addPortConnection(s: string, s2: string): boolean; 
    removePortConnection(s: string): boolean; 
    removeAllPortConnection(s: string): boolean; 
    setDslConnection(s: string, b: boolean): boolean; 
}
declare type _Cloud = _CloudBase;

declare interface _CloudPotsPortBase extends _Port {
    setPhoneNumber(s: string): void; 
    getPhoneNumber(): string; 
}
declare type _CloudPotsPort = _CloudPotsPortBase;

declare interface _CloudSerialPortBase extends _Port {
    setLmiType(lmiType: _LMIType): void; 
    getLmiType(): _LMIType; 
    addSubLink(s: string, n: number): boolean; 
    removeSubLink(s: string): boolean; 
    getSubLinkCount(): number; 
    getSubLinkAt(n: number): _CloudSubLink; 
}
declare type _CloudSerialPort = _CloudSerialPortBase;

declare interface _CloudSubLinkBase extends _IPCData {
    getName(): string; 
    setName(name: string): void; 
    getDlci(): number; 
    setDlci(dlci: number): void; 
}
declare type _CloudSubLink = _CloudSubLinkBase;

declare interface _CommandHistoryBase extends _IPCData {
    setHistory(): void; 
    getMaxCount(): number; 
    setMaxCount(maxCount: number): void; 
}
declare type _CommandHistory = _CommandHistoryBase;

declare interface _CommandLogEntryBase extends BaseClass {
    getTimeToString(): string; 
    getDeviceName(): string; 
    getPrompt(): string; 
    getCommand(): string; 
}
declare type _CommandLogEntry = _CommandLogEntryBase;

declare interface _CommandPrivilegeBase extends _IPCData {
    getCommand(): string; 
    setCommand(command: string): void; 
    getBAll(): boolean; 
    setBAll(bAll: boolean): void; 
    getLevel(): number; 
    setLevel(level: number): void; 
}
declare type _CommandPrivilege = _CommandPrivilegeBase;

declare interface _CryptoMapSeqBase extends BaseClass {
    getSeqNum(): number; 
    isIncomplete(): boolean; 
    setMatchAdd(s: string): void; 
    getMatchAdd(): string; 
    setSaLifeTime(n: number): void; 
    getSaLifeTime(): number; 
}
declare type _CryptoMapSeq = _CryptoMapSeqBase;

declare interface _CryptoMapSetBase extends BaseClass {
    setCryptoSetName(s: string): void; 
    getCryptoSetName(): string; 
    addCryptoMapSeqByNum(n: number): void; 
    removeCryptoMapSeqByNum(n: number): void; 
    getCryptoMapSeqAt(n: number): _CryptoMapSeq; 
    getCryptoSeqByNum(n: number): _CryptoMapSeq; 
    getCryptoSeqCount(): number; 
    isSeqExisted(n: number): boolean; 
    getFlowTableCount(): number; 
    getTableAtIndex(n: number): _FlowTable; 
}
declare type _CryptoMapSet = _CryptoMapSetBase;

declare interface _CustomPduBase extends _Pdu {
    setRawBuffer(): void; 
}
declare type _CustomPdu = _CustomPduBase;

declare interface _CustomUdpProcessBase extends _Process {
    start(n: number): boolean; 
    stop(): boolean; 
    isStarted(): boolean; 
    getPortNumber(): number; 
    createFrameInstance(n: number, s: string): _FrameInstance; 
}
declare type _CustomUdpProcess = _CustomUdpProcessBase;

declare interface _DHCPClientProcessBase extends _Process {
    dhcpRelease(s: string): boolean; 
    resetDhcpConfOn(s: string): boolean; 
}
declare type _DHCPClientProcess = _DHCPClientProcessBase;

declare interface _DHCPOptionsBase extends _Pdu {
    getIsSubOption(): boolean; 
    setIsSubOption(b: boolean): void; 
    getOptionCode(): number; 
    setOptionCode(n: number): void; 
    getLength(): number; 
    setLength(n: number): void; 
    setListOptions(): void; 
    setListSubOptoins(): void; 
    getParentOption(): _DHCPOptions; 
    setParentOption(parentOption: _DHCPOptions): void; 
}
declare type _DHCPOptions = _DHCPOptionsBase;

declare interface _DHCPPacketBase extends _Pdu {
    getMessageOpCode(): byte; 
    setMessageOpCode(messageOpCode: byte): void; 
    getHardwareAddressType(): byte; 
    setHardwareAddressType(hardwareAddressType: byte): void; 
    getHardwareAddressLength(): byte; 
    setHardwareAddressLength(hardwareAddressLength: byte): void; 
    getHops(): byte; 
    setHops(hops: byte): void; 
    getTransactionID(): string; 
    setTransactionID(transactionID: string): void; 
    getTimeInSeconds(): number; 
    setTimeInSeconds(timeInSeconds: number): void; 
    getFlags(): number; 
    setFlags(flags: number): void; 
    getLeaseTime(): number; 
    setLeaseTime(n: number): void; 
    getRebindTime(): number; 
    setRebindTime(n: number): void; 
    getRenewTime(): number; 
    setRenewTime(n: number): void; 
    getClientIpAddress(): IP; 
    setClientIpAddress(clientIpAddress: IP): void; 
    getYourIpAddress(): IP; 
    setYourIpAddress(yourIpAddress: IP): void; 
    getServerIpAddress(): IP; 
    setServerIpAddress(serverIpAddress: IP): void; 
    getGatewayIpAddress(): IP; 
    setGatewayIpAddress(gatewayIpAddress: IP): void; 
    getGatewaySubnetAddress(): IP; 
    setGatewaySubnetAddress(gatewaySubnetAddress: IP): void; 
    getClientMacAddress(): MAC; 
    setClientMacAddress(clientMacAddress: MAC): void; 
    getServerName(): string; 
    setServerName(serverName: string): void; 
    getBootFileName(): string; 
    setBootFileName(bootFileName: string): void; 
    setListOptions(): void; 
    getStringOptions(): string; 
    setStringOptions(stringOptions: string): void; 
    getDnsServerIpAddress(): IP; 
    setDnsServerIpAddress(dnsServerIpAddress: IP): void; 
    getTftpAddress(): IP; 
    setTftpAddress(tftpAddress: IP): void; 
}
declare type _DHCPPacket = _DHCPPacketBase;

declare interface _DHCPPoolBase extends BaseClass {
    getDhcpPoolName(): string; 
    getNetworkAddress(): IP; 
    setNetworkMask(ipAddress: IP, ipAddress2: IP): void; 
    getSubnetMask(): IP; 
    setDefaultRouter(ipAddress: IP): void; 
    getDefaultRouter(): IP; 
    getLeaseAt(n: number): _DHCPPoolLease; 
    setStartIp(ipAddress: IP): void; 
    setEndIp(ipAddress: IP): void; 
    getStartIp(): IP; 
    getEndIp(): IP; 
    setDnsServerIp(ipAddress: IP): void; 
    getDnsServerIp(): IP; 
}
declare type _DHCPPool = _DHCPPoolBase;

declare interface _DHCPPoolLeaseBase extends _IPCData {
    getIpAddress(): IP; 
    setIpAddress(ipAddress: IP): void; 
    getMacAddress(): MAC; 
    setMacAddress(macAddress: MAC): void; 
    getLeaseTime(): number; 
    setLeaseTime(leaseTime: number): void; 
    getPort(): string; 
    setPort(port: string): void; 
}
declare type _DHCPPoolLease = _DHCPPoolLeaseBase;

declare interface _DHCPServerProcessBase extends _Process {
    addExcludedAddress(ipAddress: IP, ipAddress2: IP): void; 
    removeExcludedAddress(ipAddress: IP, ipAddress2: IP): void; 
    getExcludedAddressCount(): number; 
    addPool(s: string): void; 
    getPool(s: string): _DHCPPool; 
    removePool(s: string): void; 
    getPoolCount(): number; 
    getPoolAt(n: number): _DHCPPool; 
    isEnable(): boolean; 
    setEnable(b: boolean): void; 
}
declare type _DHCPServerProcess = _DHCPServerProcessBase;

declare interface _DHCPv6DUIDLLBase extends _Pdu {
    getEDUIDType(): _DUIDType; 
    setEDUIDType(eduidType: _DUIDType): void; 
    getEDUIDHardwareType(): _DUIDHardwareType; 
    setEDUIDHardwareType(eduidHardwareType: _DUIDHardwareType): void; 
    getLinkLayerAddress(): MAC; 
    setLinkLayerAddress(linkLayerAddress: MAC): void; 
}
declare type _DHCPv6DUIDLL = _DHCPv6DUIDLLBase;

declare interface _DHCPv6HeaderBase extends _Pdu {
    getMsgType(): _DHCPv6MessageType; 
    setMsgType(msgType: _DHCPv6MessageType): void; 
    getTrasactionId(): number; 
    setTrasactionId(n: number): void; 
    setOptions(): void; 
}
declare type _DHCPv6Header = _DHCPv6HeaderBase;

declare interface _DHCPv6OptionBase extends _Pdu {
    getOptionCode(): _DHCPv6OptionCode; 
    setOptionCode(optionCode: _DHCPv6OptionCode): void; 
    getLength(): number; 
    setLength(n: number): void; 
}
declare type _DHCPv6Option = _DHCPv6OptionBase;

declare interface _DHCPv6OptionClientServerIdBase extends _DHCPv6Option {
    getDUID(): _DHCPv6DUIDLL; 
    setDUID(duid: _DHCPv6DUIDLL): void; 
}
declare type _DHCPv6OptionClientServerId = _DHCPv6OptionClientServerIdBase;

declare interface _DHCPv6OptionDNSBase extends _DHCPv6Option {
    setNdsRecursiveNameServers(): void; 
}
declare type _DHCPv6OptionDNS = _DHCPv6OptionDNSBase;

declare interface _DHCPv6OptionDomainSearchBase extends _DHCPv6Option {
    setDomainSearchList(): void; 
}
declare type _DHCPv6OptionDomainSearch = _DHCPv6OptionDomainSearchBase;

declare interface _DHCPv6OptionElapsedTimeBase extends _DHCPv6Option {
    getElapsedTime(): number; 
    setElapsedTime(elapsedTime: number): void; 
}
declare type _DHCPv6OptionElapsedTime = _DHCPv6OptionElapsedTimeBase;

declare interface _DHCPv6OptionIAAddressBase extends _DHCPv6Option {
    getAddress(): IPv6; 
    setAddress(address: IPv6): void; 
    getPreferredLifeTime(): number; 
    setPreferredLifeTime(n: number): void; 
    getValidLifeTime(): number; 
    setValidLifeTime(n: number): void; 
    setIAAddrOptions(): void; 
}
declare type _DHCPv6OptionIAAddress = _DHCPv6OptionIAAddressBase;

declare interface _DHCPv6OptionIANABase extends _DHCPv6Option {
    getIAID(): number; 
    setIAID(n: number): void; 
    getT1(): number; 
    setT1(n: number): void; 
    getT2(): number; 
    setT2(n: number): void; 
    setIANAOptions(): void; 
}
declare type _DHCPv6OptionIANA = _DHCPv6OptionIANABase;

declare interface _DHCPv6OptionIAPrefixBase extends _DHCPv6Option {
    getPrefix(): IPv6; 
    setPrefix(prefix: IPv6): void; 
    getPrefixLength(): number; 
    setPrefixLength(n: number): void; 
    getPreferredLifeTime(): number; 
    setPreferredLifeTime(n: number): void; 
    getValidLifeTime(): number; 
    setValidLifeTime(n: number): void; 
    setIAPrefixOptions(): void; 
}
declare type _DHCPv6OptionIAPrefix = _DHCPv6OptionIAPrefixBase;

declare interface _DHCPv6OptionIAPrefixDelegationBase extends _DHCPv6Option {
    getIAID(): number; 
    setIAID(n: number): void; 
    getT1(): number; 
    setT1(n: number): void; 
    getT2(): number; 
    setT2(n: number): void; 
    setIANAOptions(): void; 
}
declare type _DHCPv6OptionIAPrefixDelegation = _DHCPv6OptionIAPrefixDelegationBase;

declare interface _DHCPv6OptionRequestBase extends _DHCPv6Option {
    setRequestedOptionCodes(): void; 
}
declare type _DHCPv6OptionRequest = _DHCPv6OptionRequestBase;

declare interface _DHCPv6PacketBase extends _Pdu {
    getHeader(): _DHCPv6Header; 
    setHeader(header: _DHCPv6Header): void; 
}
declare type _DHCPv6Packet = _DHCPv6PacketBase;

declare interface _DLCIInfoBase extends _Pdu {
    getDlci(): number; 
    setDlci(dlci: number): void; 
    getIsActive(): boolean; 
    setIsActive(b: boolean): void; 
}
declare type _DLCIInfo = _DLCIInfoBase;

declare interface _DLCITableBase extends _IPCData {
    setDlciEntries(): void; 
}
declare type _DLCITable = _DLCITableBase;

declare interface _DNSClientBase extends _Process {
    addIpAddress(s: string, ipAddress: IP): boolean; 
    removeIpAddress(s: string): void; 
    removeIp(s: string, ipAddress: IP): void; 
    isValidName(s: string): boolean; 
    setServerIp(ipAddress: IP): void; 
    getServerIp(): IP; 
    setEnabled(b: boolean): void; 
    isEnabled(): boolean; 
    getStrToIpCount(): number; 
    getHostAt(n: number): string; 
    isHostNameExisted(s: string): boolean; 
    isIpExisted(s: string, ipAddress: IP): boolean; 
}
declare type _DNSClient = _DNSClientBase;

declare interface _DNSHeaderBase extends _Pdu {
    getQueryId(): number; 
    setQueryId(n: number): void; 
    getResponse(): boolean; 
    setResponse(b: boolean): void; 
    getOpCode(): number; 
    setOpCode(n: number): void; 
    getIsAuthoritative(): boolean; 
    setIsAuthoritative(b: boolean): void; 
    getIsTruncated(): boolean; 
    setIsTruncated(b: boolean): void; 
    getIsRecursionDesired(): boolean; 
    setIsRecursionDesired(b: boolean): void; 
    getIsRecurionAvailable(): boolean; 
    setIsRecurionAvailable(b: boolean): void; 
    getResponseCode(): number; 
    setResponseCode(n: number): void; 
    getNumQuestions(): number; 
    setNumQuestions(n: number): void; 
    getNumAnswerRecords(): number; 
    setNumAnswerRecords(n: number): void; 
    getNumAdditionalRecords(): number; 
    setNumAdditionalRecords(n: number): void; 
}
declare type _DNSHeader = _DNSHeaderBase;

declare interface _DNSResourceRecordBase extends _IPCData {
    getName(): string; 
    setName(name: string): void; 
    getType(): _ResourceRecordType; 
    setType(type: _ResourceRecordType): void; 
    getRecordClass(): number; 
    setRecordClass(recordClass: number): void; 
    getTtl(): number; 
    setTtl(ttl: number): void; 
    getLength(): number; 
    setLength(length: number): void; 
    getIsAnsRecord(): boolean; 
    setIsAnsRecord(isAnsRecord: boolean): void; 
}
declare type _DNSResourceRecord = _DNSResourceRecordBase;

declare interface _DNSRrABase extends _DNSResourceRecord {
    getIpAddress(): IP; 
    setIpAddress(ipAddress: IP): void; 
}
declare type _DNSRrA = _DNSRrABase;

declare interface _DNSRrCnameBase extends _DNSResourceRecord {
    getHostName(): string; 
    setHostName(hostName: string): void; 
}
declare type _DNSRrCname = _DNSRrCnameBase;

declare interface _DNSRrNsBase extends _DNSResourceRecord {
    getServerName(): string; 
    setServerName(serverName: string): void; 
}
declare type _DNSRrNs = _DNSRrNsBase;

declare interface _DNSRrSoaBase extends _DNSResourceRecord {
    getPrimaryServerName(): string; 
    setPrimaryServerName(primaryServerName: string): void; 
    getResponsiblePersonalMailBox(): string; 
    setResponsiblePersonalMailBox(responsiblePersonalMailBox: string): void; 
    getSerialNo(): number; 
    setSerialNo(serialNo: number): void; 
    getRefreshTime(): number; 
    setRefreshTime(refreshTime: number): void; 
    getRetryTime(): number; 
    setRetryTime(retryTime: number): void; 
    getExpiryTime(): number; 
    setExpiryTime(expiryTime: number): void; 
    getMinimumTtl(): number; 
    setMinimumTtl(minimumTtl: number): void; 
}
declare type _DNSRrSoa = _DNSRrSoaBase;

declare interface _DNSServerProcessBase extends _Process {
    addIpAddress(s: string, ipAddress: IP): boolean; 
    removeIpAddress(s: string): void; 
    getEntryCount(): number; 
    isValidName(s: string): boolean; 
    setEnable(b: boolean): void; 
    isEnabled(): boolean; 
    setPortNumber(n: number): void; 
    getPortNumber(): number; 
    isDomainNameExisted(s: string): boolean; 
    getIpAddOfDomain(s: string): IP; 
}
declare type _DNSServerProcess = _DNSServerProcessBase;

declare interface _DTPFrameBase extends _Pdu {
    getVersion(): byte; 
    setVersion(version: byte): void; 
    getDomainName(): string; 
    setDomainName(domainName: string): void; 
    getType(): boolean; 
    setType(b: boolean): void; 
    getStatus(): _PortMode; 
    setStatus(status: _PortMode): void; 
    getNeighborMac(): MAC; 
    setNeighborMac(neighborMac: MAC): void; 
}
declare type _DTPFrame = _DTPFrameBase;

declare interface _DeviceDialogBase extends BaseClass {
    setVisible(b: boolean): void; 
    setWidgetVisible(s: string, b: boolean): void; 
    setDisabled(b: boolean): void; 
    setWidgetDisable(s: string, b: boolean): void; 
    disableCLIImportExport(b: boolean): void; 
}
declare type _DeviceDialog = _DeviceDialogBase;

declare interface _DialFrameBase extends _Pdu {
    getIsRouterOrPc(): boolean; 
    setIsRouterOrPc(b: boolean): void; 
    getPhoneNumber(): string; 
    setPhoneNumber(phoneNumber: string): void; 
    getMessage(): string; 
    setMessage(message: string): void; 
    getMsgType(): number; 
    setMsgType(n: number): void; 
}
declare type _DialFrame = _DialFrameBase;

declare interface _DialPeerBase extends BaseClass {
    getDialPeerTag(): number; 
    getDestLineNumber(): string; 
    setDestLineNumber(s: string): void; 
}
declare type _DialPeer = _DialPeerBase;

declare interface _Dot1qHeaderBase extends _EthernetHeader {
    getTpid(): number; 
    setTpid(tpid: number): void; 
    getUserPriority(): byte; 
    setUserPriority(userPriority: byte): void; 
    getCfi(): byte; 
    setCfi(cfi: byte): void; 
    getVlanId(): number; 
    setVlanId(vlanId: number): void; 
    getTypeLength(): number; 
    setTypeLength(typeLength: number): void; 
}
declare type _Dot1qHeader = _Dot1qHeaderBase;

declare interface _EIGRPExternalBase extends _EIGRPInternal {
    getOriginalRouter(): IP; 
    setOriginalRouter(originalRouter: IP): void; 
    getRouteAS(): number; 
    setRouteAS(routeAS: number): void; 
    getExternalMetric(): number; 
    setExternalMetric(externalMetric: number): void; 
    getExternalProtocolType(): byte; 
    setExternalProtocolType(externalProtocolType: byte): void; 
    getAdminTag(): number; 
    setAdminTag(adminTag: number): void; 
}
declare type _EIGRPExternal = _EIGRPExternalBase;

declare interface _EIGRPInternalBase extends _IPCData {
    getNetwork(): IP; 
    setNetwork(network: IP): void; 
    getPrefixLength(): byte; 
    setPrefixLength(prefixLength: byte): void; 
    getNextHop(): IP; 
    setNextHop(nextHop: IP): void; 
    getDelay(): number; 
    setDelay(delay: number): void; 
    getBandwidth(): number; 
    setBandwidth(bandwidth: number): void; 
    getMtu(): number; 
    setMtu(mtu: number): void; 
    getHopCount(): byte; 
    setHopCount(hopCount: byte): void; 
    getReliability(): byte; 
    setReliability(reliability: byte): void; 
    getLoad(): byte; 
    setLoad(load: byte): void; 
}
declare type _EIGRPInternal = _EIGRPInternalBase;

declare interface _EIGRPMainProcessBase extends _Process {
    addEigrpProcess(n: number): void; 
    removeEigrpProcess(n: number): void; 
    getEigrpProcessAt(n: number): _EIGRPProcess; 
    getEigrpProcess(n: number): _EIGRPProcess; 
    getEigrpProcessCount(): number; 
}
declare type _EIGRPMainProcess = _EIGRPMainProcessBase;

declare interface _EIGRPNeighborBase extends _IPCData {
    getNeighborAddress(): IP; 
    setNeighborAddress(neighborAddress: IP): void; 
    getPortName(): string; 
    setPortName(portName: string): void; 
    getHoldTime(): number; 
    setHoldTime(holdTime: number): void; 
    getUpTime(): number; 
    setUpTime(upTime: number): void; 
    getSeqNumber(): number; 
    setSeqNumber(seqNumber: number): void; 
    getSrtt(): number; 
    setSrtt(srtt: number): void; 
    getRto(): number; 
    setRto(rto: number): void; 
    getLastHeardTime(): number; 
    setLastHeardTime(lastHeardTime: number): void; 
    getLastUpdateTime(): number; 
    setLastUpdateTime(lastUpdateTime: number): void; 
}
declare type _EIGRPNeighbor = _EIGRPNeighborBase;

declare interface _EIGRPNeighborTableBase extends BaseClass {
    getNeighborCount(): number; 
    getNeighborAt(n: number): _EIGRPNeighbor; 
    getNeighborByIp(ipAddress: IP): _EIGRPNeighbor; 
}
declare type _EIGRPNeighborTable = _EIGRPNeighborTableBase;

declare interface _EIGRPPacketBase extends _Pdu {
    getVersion(): byte; 
    setVersion(version: byte): void; 
    getOperationCode(): byte; 
    setOperationCode(operationCode: byte): void; 
    getCheckSum(): number; 
    setCheckSum(checkSum: number): void; 
    getFlag(): number; 
    setFlag(n: number): void; 
    getSequenceNumber(): number; 
    setSequenceNumber(n: number): void; 
    getAckNumber(): number; 
    setAckNumber(n: number): void; 
    getAsNumber(): number; 
    setAsNumber(n: number): void; 
    setListTlv(): void; 
}
declare type _EIGRPPacket = _EIGRPPacketBase;

declare interface _EIGRPParametersBase extends _EIGRPTlv {
    getK1(): byte; 
    setK1(k1: byte): void; 
    getK2(): byte; 
    setK2(k2: byte): void; 
    getK3(): byte; 
    setK3(k3: byte): void; 
    getK4(): byte; 
    setK4(k4: byte): void; 
    getK5(): byte; 
    setK5(k5: byte): void; 
    getReserved(): byte; 
    setReserved(reserved: byte): void; 
    getHoldTime(): number; 
    setHoldTime(holdTime: number): void; 
}
declare type _EIGRPParameters = _EIGRPParametersBase;

declare interface _EIGRPProcessBase extends _RoutingProtocol {
    getASNumber(): number; 
    setKs(n: number, n2: number, n3: number, n4: number, n5: number): void; 
    setVariance(n: number): void; 
    getVariance(): number; 
    setAutoSummary(b: boolean): void; 
    getAutoSummary(): boolean; 
    setDefaultPassiveInt(b: boolean): void; 
    getDefaultPassiveInt(): boolean; 
    setPassiveInt(s: string, b: boolean): void; 
    isPassiveInt(s: string): boolean; 
    setIntAdminDistance(n: number): void; 
    setExtAdminDistance(n: number): void; 
    addConfiguredNetwork(ipAddress: IP, ipAddress2: IP): void; 
    removeConfiguredNetwork(ipAddress: IP, ipAddress2: IP): void; 
    getConfiguredNetworkCount(): number; 
    addSummaryAddress(s: string, ipAddress: IP, ipAddress2: IP, n: number): boolean; 
    removeSummaryAddress(s: string, ipAddress: IP, ipAddress2: IP, n: number): boolean; 
    getSummaryAddressCount(s: string): number; 
    getSummaryAddressAt(s: string, n: number, n2: number): _EIGRPSummaryAddress; 
    getTopologyTable(): _EIGRPTopologyTable; 
    getNeighborTable(): _EIGRPNeighborTable; 
}
declare type _EIGRPProcess = _EIGRPProcessBase;

declare interface _EIGRPRoutingEntryBase extends _RoutingEntry {
    getReportedDistance(): number; 
    setReportedDistance(reportedDistance: number): void; 
    getInternal(): _EIGRPInternal; 
    setInternal(internal: _EIGRPInternal): void; 
}
declare type _EIGRPRoutingEntry = _EIGRPRoutingEntryBase;

declare interface _EIGRPSoftwareVersionBase extends _EIGRPTlv {
    getIosVersion(): number; 
    setIosVersion(iosVersion: number): void; 
    getEigrpVersion(): number; 
    setEigrpVersion(eigrpVersion: number): void; 
}
declare type _EIGRPSoftwareVersion = _EIGRPSoftwareVersionBase;

declare interface _EIGRPSummaryAddressBase extends _IPCData {
    getNetwork(): IP; 
    setNetwork(network: IP): void; 
    getSubnetMask(): IP; 
    setSubnetMask(subnetMask: IP): void; 
    getAdminDistance(): number; 
    setAdminDistance(adminDistance: number): void; 
}
declare type _EIGRPSummaryAddress = _EIGRPSummaryAddressBase;

declare interface _EIGRPTlvBase extends _Pdu {
    getLength(): number; 
    setLength(length: number): void; 
    getType(): number; 
    setType(type: number): void; 
}
declare type _EIGRPTlv = _EIGRPTlvBase;

declare interface _EIGRPTopologyEntryBase extends _IPCData {
    getNetwork(): IP; 
    setNetwork(network: IP): void; 
    getSubnetMask(): IP; 
    setSubnetMask(subnetMask: IP): void; 
    getState(): _EIGRPTopologyEntryState; 
    setState(state: _EIGRPTopologyEntryState): void; 
    getFeasibleDistance(): number; 
    setFeasibleDistance(feasibleDistance: number): void; 
    getReportedDistance(): number; 
    setReportedDistance(reportedDistance: number): void; 
    getSuccessorCount(): number; 
    setSuccessorCount(successorCount: number): void; 
    setRoutingEntries(): void; 
}
declare type _EIGRPTopologyEntry = _EIGRPTopologyEntryBase;

declare interface _EIGRPTopologyTableBase extends _IPCData {
    setTopologyEntries(): void; 
}
declare type _EIGRPTopologyTable = _EIGRPTopologyTableBase;

declare interface _EIGRPv6ExternalBase extends _EIGRPExternal {
    getHopcount(): byte; 
    setHopcount(hopcount: byte): void; 
    getReserved(): number; 
    setReserved(reserved: number): void; 
    getDestination(): IP; 
    setDestination(destination: IP): void; 
    getExMetric(): number; 
    setExMetric(n: number): void; 
    getExProtocolType(): byte; 
    setExProtocolType(exProtocolType: byte): void; 
    populateFieldTable(): void; 
}
declare type _EIGRPv6External = _EIGRPv6ExternalBase;

declare interface _EIGRPv6InternalBase extends _EIGRPInternal {
    getHopcount(): byte; 
    setHopcount(hopcount: byte): void; 
    getReserved(): number; 
    setReserved(reserved: number): void; 
    getDestination(): IP; 
    setDestination(destination: IP): void; 
    populateFieldTable(): void; 
}
declare type _EIGRPv6Internal = _EIGRPv6InternalBase;

declare interface _EIGRPv6PacketBase extends _EIGRPPacket {
    getOpCode(): byte; 
    setOpCode(opCode: byte): void; 
    getChecksum(): number; 
    setChecksum(checksum: number): void; 
    getASNumber(): number; 
    setASNumber(n: number): void; 
    getTlvSize(): number; 
    setTlvSize(n: number): void; 
    setTlvs(): void; 
}
declare type _EIGRPv6Packet = _EIGRPv6PacketBase;

declare interface _EMEAScriptEngineBase extends BaseClass {
    evaluateFile(s: string): _ScriptValue; 
    canEvaluate(s: string): boolean; 
    globalObject(): _ScriptValue; 
    evaluate(s: string, s2: string): _ScriptValue; 
}
declare type _EMEAScriptEngine = _EMEAScriptEngineBase;

declare interface _EchoMessageBase extends _ICMPv6Message {
    getId(): number; 
    setId(id: number): void; 
    getSequence(): number; 
    setSequence(sequence: number): void; 
}
declare type _EchoMessage = _EchoMessageBase;

declare interface _EmailClientBase extends BaseClass {
    getEmailUser(): _EmailUser; 
    getSmtpClient(): _SmtpClient; 
    getPop3Client(): _Pop3Client; 
}
declare type _EmailClient = _EmailClientBase;

declare interface _EmailServerBase extends _Process {
    addUser(s: string, s2: string): boolean; 
    deleteUser(s: string): boolean; 
    changePassword(s: string, s2: string): void; 
    getEmailUser(s: string): _EmailUser; 
}
declare type _EmailServer = _EmailServerBase;

declare interface _EmailUserBase extends BaseClass {
    getUser(): string; 
    getName(): string; 
    setUser(s: string): void; 
    setName(s: string): void; 
    getMailId(): string; 
    getPassword(): string; 
    setMailId(s: string): void; 
    setPassword(s: string): void; 
    getSmtpServer(): string; 
    getPop3Server(): string; 
    setSmtpServer(s: string): void; 
    setPop3Server(s: string): void; 
}
declare type _EmailUser = _EmailUserBase;

declare interface _EphoneBase extends BaseClass {
    setType(s: string): boolean; 
    getType(): string; 
    getTag(): number; 
}
declare type _Ephone = _EphoneBase;

declare interface _EphoneDirectoryBase extends BaseClass {
    setLineNumber(s: string): void; 
    getLineNumber(): string; 
    getDnTag(): number; 
}
declare type _EphoneDirectory = _EphoneDirectoryBase;

declare interface _EspHeaderBase extends _Header {
    getNextHeader(): number; 
    setNextHeader(n: number): void; 
    getPaddingLength(): number; 
    setPaddingLength(n: number): void; 
    getSpi(): number; 
    setSpi(n: number): void; 
    getSequenceNumber(): number; 
    setSequenceNumber(n: number): void; 
    getPadding(): number; 
    setPadding(n: number): void; 
    getAuthenticationData(): string; 
    setAuthenticationData(authenticationData: string): void; 
    getEncryptionData(): string; 
    setEncryptionData(encryptionData: string): void; 
    getEspEncryption(): _EspEncryption; 
    setEspEncryption(espEncryption: _EspEncryption): void; 
    getEspAuthentication(): _EspAuth; 
    setEspAuthentication(espAuthentication: _EspAuth): void; 
}
declare type _EspHeader = _EspHeaderBase;

declare interface _EthernetHeaderBase extends _Header {
    getSrcMacAddress(): MAC; 
    setSrcMacAddress(srcMacAddress: MAC): void; 
    getDstMacAddress(): MAC; 
    setDstMacAddress(dstMacAddress: MAC): void; 
    getFrameCheckSequence(): number; 
    setFrameCheckSequence(n: number): void; 
}
declare type _EthernetHeader = _EthernetHeaderBase;

declare interface _EthernetIIHeaderBase extends _EthernetHeader {
    getFrameType(): number; 
    setFrameType(frameType: number): void; 
}
declare type _EthernetIIHeader = _EthernetIIHeaderBase;

declare interface _ExtNatEntryBase extends _NATEntry {
    getProtocol(): number; 
    setProtocol(protocol: number): void; 
    getInsideLocalPort(): number; 
    setInsideLocalPort(insideLocalPort: number): void; 
    getInsideGlobalPort(): number; 
    setInsideGlobalPort(insideGlobalPort: number): void; 
    getOutsideLocalPort(): number; 
    setOutsideLocalPort(outsideLocalPort: number): void; 
    getOutsideGlobalPort(): number; 
    setOutsideGlobalPort(outsideGlobalPort: number): void; 
}
declare type _ExtNatEntry = _ExtNatEntryBase;

declare interface _ExtNatv6EntryBase extends _NATv6Entry {
    getProtocol(): number; 
    setProtocol(protocol: number): void; 
    getV6SrcPort(): number; 
    setV6SrcPort(v6SrcPort: number): void; 
    getV6DstPort(): number; 
    setV6DstPort(v6DstPort: number): void; 
    getV4SrcPort(): number; 
    setV4SrcPort(v4SrcPort: number): void; 
    getV4DstPort(): number; 
    setV4DstPort(v4DstPort: number): void; 
}
declare type _ExtNatv6Entry = _ExtNatv6EntryBase;

declare interface _FRSubInterfaceBase extends _RouterPort {
    setLinkType(linkType: _LinkType): void; 
    getLinkType(): number; 
}
declare type _FRSubInterface = _FRSubInterfaceBase;

declare interface _FTPCommandPacketBase extends _FTPPacket {
    getCommand(): string; 
    setCommand(command: string): void; 
    getArgument(): string; 
    setArgument(argument: string): void; 
}
declare type _FTPCommandPacket = _FTPCommandPacketBase;

declare interface _FTPDataPacketBase extends _FTPPacket {
    getFileName(): string; 
    setFileName(fileName: string): void; 
    getDirectoryName(): string; 
    setDirectoryName(directoryName: string): void; 
    getFtpData(): _FileContent; 
    setFtpData(ftpData: _FileContent): void; 
}
declare type _FTPDataPacket = _FTPDataPacketBase;

declare interface _FTPPacketBase extends _Pdu {
    getType(): _FTPType; 
    setType(type: _FTPType): void; 
}
declare type _FTPPacket = _FTPPacketBase;

declare interface _FTPResponsePacketBase extends _FTPPacket {
    getCode(): string; 
    setCode(code: string): void; 
    getMessage(): string; 
    setMessage(message: string): void; 
}
declare type _FTPResponsePacket = _FTPResponsePacketBase;

declare interface _FTPServerBase extends _Process {
    setEnabled(b: boolean): void; 
    isEnabled(): boolean; 
    getFtpUserAccountManager(): _FTPUserAccountManager; 
}
declare type _FTPServer = _FTPServerBase;

declare interface _FTPUserAccountManagerBase extends BaseClass {
    addFtpUser(s: string, s2: string, s3: string): void; 
    removeFtpUser(s: string): void; 
    isExistingUser(s: string): boolean; 
}
declare type _FTPUserAccountManager = _FTPUserAccountManagerBase;

declare interface _FileContentBase extends _Pdu {}
declare type _FileContent = _FileContentBase;

declare interface _FileManagerBase extends _Process {
    getFileSystem(s: string): _FileSystem; 
}
declare type _FileManager = _FileManagerBase;

declare interface _FileSystemBase extends _Directory {
    getSize(): number; 
    getCapacity(): number; 
    getSpaceFree(): number; 
}
declare type _FileSystem = _FileSystemBase;

declare interface _FlowBase extends BaseClass {
    getPeerCount(): number; 
    getPeerAt(n: number): _IPsecPeer; 
    getPeerByIp(ipAddress: IP): _IPsecPeer; 
}
declare type _Flow = _FlowBase;

declare interface _FlowChartNodeBase extends _IPCData {
    getStrID(): string; 
    setStrID(strID: string): void; 
    getDescription(): string; 
    setDescription(description: string): void; 
    getIsOSIIn(): boolean; 
    setIsOSIIn(isOSIIn: boolean): void; 
    getOSILayerNumber(): number; 
    setOSILayerNumber(osiLayerNumber: number): void; 
}
declare type _FlowChartNode = _FlowChartNodeBase;

declare interface _FlowTableBase extends BaseClass {
    getFlowCount(): number; 
    getFlowAt(n: number): _Flow; 
}
declare type _FlowTable = _FlowTableBase;

declare interface _FrameDecisionBase extends _IPCData {
    getOsiIn(): boolean; 
    setOsiIn(osiIn: boolean): void; 
    getOsiLayer(): number; 
    setOsiLayer(osiLayer: number): void; 
    getDescription(): string; 
    setDescription(description: string): void; 
}
declare type _FrameDecision = _FrameDecisionBase;

declare interface _FrameInstanceBase extends BaseClass {
    getUserTrafficType(): _TrafficType; 
    getDestinationString(): string; 
    getSourceString(): string; 
    getDevice(): _Device; 
    getPreviousDevice(): _Device; 
    getInFrame(): _Pdu; 
    getOutFrame(): _Pdu; 
    getInPort(): _Port; 
    getOutPort(n: number): _Port; 
    getOutPortCount(): number; 
    addDecision(s: string, s2: string, b: boolean, n: number): void; 
    getFlowChartNodeAt(n: number): _FlowChartNode; 
    getFrameDecsionAt(n: number): _FrameDecision; 
    getFlowChartNodeCount(): number; 
    getDecisionAt(n: number): string; 
    setFrameSent(b: boolean): void; 
    isFrameSent(): boolean; 
    setFrameBuffered(b: boolean): void; 
    isFrameBuffered(): boolean; 
    setFrameDropped(b: boolean): void; 
    isFrameDropped(): boolean; 
    setFrameNotForwarded(b: boolean): void; 
    isFrameNotForwarded(): boolean; 
    setFrameAccepted(b: boolean): void; 
    isFrameAccepted(): boolean; 
    setFrameUnexpected(b: boolean): void; 
    isFrameUnexpected(): boolean; 
    isFrameCollidedOnLink(): boolean; 
    isFrameCollidedAtDevice(): boolean; 
    isFrameOnTransit(): boolean; 
    getQosStampColorCode(): number; 
    getInQosStampColorCode(): number; 
    getOutQosStampColorCode(): number; 
    getTransitTime(): number; 
    getPercentageSent(): number; 
    getStartSimTime(): number; 
    getTrafficSource(): _UserTraffic; 
}
declare type _FrameInstance = _FrameInstanceBase;

declare interface _FrameRelayHeaderBase extends _Header {
    getDlciNumber(): number; 
    setDlciNumber(dlciNumber: number): void; 
    getControlCode(): number; 
    setControlCode(controlCode: number): void; 
    getProtocolId(): number; 
    setProtocolId(n: number): void; 
    getFrameCheckSequence(): number; 
    setFrameCheckSequence(n: number): void; 
    getCiscoEncap(): boolean; 
    setCiscoEncap(b: boolean): void; 
}
declare type _FrameRelayHeader = _FrameRelayHeaderBase;

declare interface _FrameRelayMapEntryBase extends _IPCData {
    getPort(): string; 
    setPort(port: string): void; 
    getIpAddress(): IP; 
    setIpAddress(ipAddress: IP): void; 
    getDlci(): number; 
    setDlci(dlci: number): void; 
    getIsBroadcast(): boolean; 
    setIsBroadcast(isBroadcast: boolean): void; 
    getEncapType(): _FrameRelayEncapsulationType; 
    setEncapType(encapType: _FrameRelayEncapsulationType): void; 
}
declare type _FrameRelayMapEntry = _FrameRelayMapEntryBase;

declare interface _FrameRelayProcessBase extends _PortKeepAliveProcess {
    setLmiType(lmiType: _LMIType): void; 
    setEncapType(frameRelayEncapsulationType: _FrameRelayEncapsulationType): void; 
    getEncapType(): _FrameRelayEncapsulationType; 
    getLmiType(): _LMIType; 
    addMapEntry(ipAddress: IP, n: number, b: boolean, frameRelayEncapsulationType: _FrameRelayEncapsulationType, s: string): boolean; 
    addIntDlciEntry(s: string, n: number): boolean; 
    deleteMapEntry(s: string, ipAddress: IP): boolean; 
    deleteIntDlciEntry(s: string, n: number): boolean; 
    getMapEntryAt(n: number, s: string): _FrameRelayMapEntry; 
    getIntDlciEntryAt(n: number, s: string): number; 
    getLmiDlciEntryAt(n: number): number; 
    getLmiDlciStatusEntryAt(n: number): boolean; 
    getMapEntryCount(s: string): number; 
    getIntDlciEntryCount(s: string): number; 
    getLmiDlciEntryCount(): number; 
    getIntDlciToPort(n: number): _Port; 
    clearInvArpEntries(): void; 
    getDlciTable(): _DLCITable; 
}
declare type _FrameRelayProcess = _FrameRelayProcessBase;

declare interface _GeoViewBase extends BaseClass {
    setVisible(b: boolean): void; 
}
declare type _GeoView = _GeoViewBase;

declare interface _GreHeaderBase extends _Header {
    getFlag(): byte; 
    setFlag(flag: byte): void; 
    getProposalType(): number; 
    setProposalType(n: number): void; 
}
declare type _GreHeader = _GreHeaderBase;

declare interface _H323MessageBase extends _Header {
    getMsgType(): _H323MessageType; 
    setMsgType(msgType: _H323MessageType): void; 
    getRtpPort(): number; 
    setRtpPort(n: number): void; 
    getMacAddress(): MAC; 
    setMacAddress(macAddress: MAC): void; 
    getStrIpAddress(): string; 
    setStrIpAddress(strIpAddress: string): void; 
    getCallerNumber(): string; 
    setCallerNumber(callerNumber: string): void; 
    getCalledNumber(): string; 
    setCalledNumber(calledNumber: string): void; 
    getDisplayCallerFlag(): boolean; 
    setDisplayCallerFlag(b: boolean): void; 
    getCalledPhoneState(): string; 
    setCalledPhoneState(calledPhoneState: string): void; 
}
declare type _H323Message = _H323MessageBase;

declare interface _HTTPClientBase extends _Process {}
declare type _HTTPClient = _HTTPClientBase;

declare interface _HTTPHeaderBase extends _Header {
    getType(): _HTTPType; 
    setType(type: _HTTPType): void; 
    getIsHttps(): boolean; 
    setIsHttps(b: boolean): void; 
}
declare type _HTTPHeader = _HTTPHeaderBase;

declare interface _HTTPPageBase extends _TextFileContent {}
declare type _HTTPPage = _HTTPPageBase;

declare interface _HTTPRequestBase extends _HTTPRequestHeader {
    getVersion(): string; 
    setVersion(version: string): void; 
    getFileName(): string; 
    setFileName(fileName: string): void; 
    getUserName(): string; 
    setUserName(userName: string): void; 
    getPassword(): string; 
    setPassword(password: string): void; 
}
declare type _HTTPRequest = _HTTPRequestBase;

declare interface _HTTPRequestHeaderBase extends _HTTPHeader {
    setListRequestHeaders(): void; 
}
declare type _HTTPRequestHeader = _HTTPRequestHeaderBase;

declare interface _HTTPResponseBase extends _HTTPResponseHeader {
    getVersion(): string; 
    setVersion(version: string): void; 
    getResponse(): _HTTPType; 
    setResponse(response: _HTTPType): void; 
    getHttpResponseStatus(): _HTTPResponseStatusType; 
    setHttpResponseStatus(httpResponseStatus: _HTTPResponseStatusType): void; 
}
declare type _HTTPResponse = _HTTPResponseBase;

declare interface _HTTPResponseHeaderBase extends _HTTPHeader {
    setListResponseHeaders(): void; 
}
declare type _HTTPResponseHeader = _HTTPResponseHeaderBase;

declare interface _HTTPServerBase extends _Process {
    setEnable(b: boolean): void; 
    isEnabled(): boolean; 
    getPage(s: string): string; 
    getUsername(): string; 
    getPassword(): string; 
    setUsername(s: string): void; 
    setPassword(s: string): void; 
}
declare type _HTTPServer = _HTTPServerBase;

declare interface _HTTPsResponseBase extends _HTTPResponse {}
declare type _HTTPsResponse = _HTTPsResponseBase;

declare interface _HTTPsServerBase extends _HTTPServer {
    setHttpsEnable(b: boolean): void; 
    isHttpsEnabled(): boolean; 
}
declare type _HTTPsServer = _HTTPsServerBase;

declare interface _HdlcFrameBase extends _Header {
    getAddressField(): byte; 
    setAddressField(addressField: byte): void; 
    getControlCode(): number; 
    setControlCode(controlCode: number): void; 
    getTypeCode(): number; 
    setTypeCode(typeCode: number): void; 
    getFrameCheckSequence(): number; 
    setFrameCheckSequence(n: number): void; 
}
declare type _HdlcFrame = _HdlcFrameBase;

declare interface _HeaderBase extends _Pdu {
    getPayload(): _Pdu; 
    setPayload(payload: _Pdu): void; 
}
declare type _Header = _HeaderBase;

declare interface _HostIpBase extends _Process {
    setDefaultGateway(ipAddress: IP): void; 
    getDefaultGateway(): IP; 
}
declare type _HostIp = _HostIpBase;

declare interface _ICMPMessageBase extends _Header {
    getIcmpType(): byte; 
    setIcmpType(icmpType: byte): void; 
    getIcmpCode(): byte; 
    setIcmpCode(icmpCode: byte): void; 
    getIcmpChkSum(): number; 
    setIcmpChkSum(icmpChkSum: number): void; 
    getIdectification(): number; 
    setIdectification(idectification: number): void; 
    getSequenceNumber(): number; 
    setSequenceNumber(sequenceNumber: number): void; 
}
declare type _ICMPMessage = _ICMPMessageBase;

declare interface _ICMPProcessBase extends _Process {
    startPing(ipAddress: IP, n: number, n2: number, n3: number, s: string): number; 
    getPingProcess(n: number): _PingProcess; 
    startTraceRoute(ipAddress: IP, n: number, n2: number, n3: number, n4: number, n5: number, s: string): number; 
    getTraceRouteProcess(n: number): _TraceRouteProcess; 
}
declare type _ICMPProcess = _ICMPProcessBase;

declare interface _ICMPSignatureBase extends BaseClass {
    getSigId(): number; 
    getSubId(): number; 
    getRetired(): _TriState; 
    getEnabled(): _TriState; 
    getEventActionCount(): number; 
    getEventActionAt(n: number): _SigEventAction; 
    setRetired(triState: _TriState): void; 
    setEnabled(triState: _TriState): void; 
    setEventAction(sigEventAction: _SigEventAction): void; 
}
declare type _ICMPSignature = _ICMPSignatureBase;

declare interface _ICMPv6MessageBase extends _Header {
    getType(): number; 
    setType(n: number): void; 
    getCode(): byte; 
    setCode(code: byte): void; 
    getChecksum(): number; 
    setChecksum(checksum: number): void; 
}
declare type _ICMPv6Message = _ICMPv6MessageBase;

declare interface _IEEE802Dot3HeaderBase extends _EthernetHeader {
    getLengthType(): number; 
    setLengthType(lengthType: number): void; 
}
declare type _IEEE802Dot3Header = _IEEE802Dot3HeaderBase;

declare interface _IPCManagerBase extends BaseClass {
    getListeningPort(): number; 
    launchCep(s: string): boolean; 
    setExclusive(b: boolean): void; 
    putSaveData(uuid: UUID, s: string): boolean; 
    getOpenData(uuid: UUID): string; 
    thisInstance(): _CepInstance; 
    sendMessageTo(s: string, s2: string): boolean; 
    sendMessageToInstance(uuid: UUID, s: string): boolean; 
    sendMessageToAll(s: string): boolean; 
    sendMessageToRemote(s: string, s2: string): boolean; 
    sendMessageToRemoteInstance(uuid: UUID, s: string): boolean; 
}
declare type _IPCManager = _IPCManagerBase;

declare interface _IPHeaderBase extends _Header {
    getVersion(): byte; 
    setVersion(version: byte): void; 
    getHeaderLength(): byte; 
    setHeaderLength(headerLength: byte): void; 
    getTypeOfService(): byte; 
    setTypeOfService(typeOfService: byte): void; 
    getTotalLength(): number; 
    setTotalLength(totalLength: number): void; 
    getIdentification(): number; 
    setIdentification(identification: number): void; 
    getFlags(): byte; 
    setFlags(flags: byte): void; 
    getFragmentOffset(): number; 
    setFragmentOffset(fragmentOffset: number): void; 
    getTtl(): number; 
    setTtl(ttl: number): void; 
    getProtocol(): number; 
    setProtocol(protocol: number): void; 
    getChecksum(): number; 
    setChecksum(checksum: number): void; 
    getOptions(): number; 
    setOptions(n: number): void; 
    getPadding(): number; 
    setPadding(n: number): void; 
    getSrcAddress(): IP; 
    setSrcAddress(srcAddress: IP): void; 
    getDstAddress(): IP; 
    setDstAddress(dstAddress: IP): void; 
}
declare type _IPHeader = _IPHeaderBase;

declare interface _IPPoolBase extends _Pool {
    getNetworkIp(): IP; 
    getMaskIp(): IP; 
    getFirstIp(): IP; 
    getLastIp(): IP; 
}
declare type _IPPool = _IPPoolBase;

declare interface _IPV6AddressConfigBase extends _IPCData {
    getAddress(): IPv6; 
    setAddress(address: IPv6): void; 
    getPrefix(): number; 
    setPrefix(prefix: number): void; 
    getType(): _IPV6AddressType; 
    setType(type: _IPV6AddressType): void; 
}
declare type _IPV6AddressConfig = _IPV6AddressConfigBase;

declare interface _IPV6FragmentExtensionHeaderBase extends _IPV6Header {
    getExFragmentNextHeader(): _IPV6NextHeader; 
    setExFragmentNextHeader(exFragmentNextHeader: _IPV6NextHeader): void; 
    getExtReserved(): byte; 
    setExtReserved(extReserved: byte): void; 
    getExtFragmentOffset(): number; 
    setExtFragmentOffset(extFragmentOffset: number): void; 
    getExtMfFlag(): byte; 
    setExtMfFlag(extMfFlag: byte): void; 
    getExIdentification(): number; 
    setExIdentification(n: number): void; 
}
declare type _IPV6FragmentExtensionHeader = _IPV6FragmentExtensionHeaderBase;

declare interface _IPV6HeaderBase extends _Header {
    getNextHeader(): _IPV6NextHeader; 
    setNextHeader(nextHeader: _IPV6NextHeader): void; 
    getVersion(): byte; 
    setVersion(version: byte): void; 
    getHeaderLength(): byte; 
    setHeaderLength(headerLength: byte): void; 
    getTypeOfService(): byte; 
    setTypeOfService(typeOfService: byte): void; 
    getTotalLength(): number; 
    setTotalLength(totalLength: number): void; 
    getIdentification(): number; 
    setIdentification(identification: number): void; 
    getFlags(): byte; 
    setFlags(flags: byte): void; 
    getFragmentOffset(): number; 
    setFragmentOffset(fragmentOffset: number): void; 
    getProtocol(): number; 
    setProtocol(protocol: number): void; 
    getHeaderChecksum(): number; 
    setHeaderChecksum(headerChecksum: number): void; 
    getOptions(): number; 
    setOptions(n: number): void; 
    getPadding(): number; 
    setPadding(n: number): void; 
    getSourceAddress(): IPv6; 
    setSourceAddress(sourceAddress: IPv6): void; 
    getDestinationAddress(): IPv6; 
    setDestinationAddress(destinationAddress: IPv6): void; 
}
declare type _IPV6Header = _IPV6HeaderBase;

declare interface _IPV6NextHeaderBase extends _Pdu {
    getExNextHeader(): byte; 
    setExNextHeader(exNextHeader: byte): void; 
}
declare type _IPV6NextHeader = _IPV6NextHeaderBase;

declare interface _IPsProcessBase extends _Process {
    setConfigLocation(s: string): void; 
    getConfigLocation(): string; 
    getIpsAt(n: number): string; 
    getAclForIps(s: string): string; 
    addIps(s: string, s2: string): void; 
    deleteIps(s: string): boolean; 
    getIpsListSize(): number; 
    getRootSigCategory(): _SignatureCategory; 
    getSubCategoryAt(n: number): _Category; 
    getSubCategorySize(): number; 
    getIcmpSignature(): _ICMPSignature; 
    setRetryCount(n: number): void; 
    getRetryCount(): number; 
    setNotifyLog(b: boolean): void; 
    isSysLogEnabled(): boolean; 
}
declare type _IPsProcess = _IPsProcessBase;

declare interface _IPsecPeerBase extends BaseClass {
    getCurrentSaGroup(): _IPsecSaGroup; 
    getPeerIp(): IP; 
}
declare type _IPsecPeer = _IPsecPeerBase;

declare interface _IPsecProcessBase extends _Process {
    getGlobalLifeTime(): number; 
    setGlobalLifeTime(n: number): void; 
    getCryptoMapSetCount(): number; 
    getCryptoMapSetAt(n: number): _CryptoMapSet; 
    addCryptoMapSetByNameSeq(s: string, n: number): void; 
    getTransformSetCount(): number; 
    getTransformSetAt(n: number): _TransformSet; 
    getTransformSetbyName(s: string): _TransformSet; 
    addTransformSetByName(s: string): void; 
    removeTransformSetByName(s: string): void; 
    isTransformSetUsedByMap(s: string): boolean; 
    getIkePolicyCount(): number; 
    getIkePolicyAt(n: number): _IkePolicy; 
}
declare type _IPsecProcess = _IPsecProcessBase;

declare interface _IPsecSaBase extends BaseClass {}
declare type _IPsecSa = _IPsecSaBase;

declare interface _IPsecSaGroupBase extends BaseClass {
    getEspOutbound(): _IPsecSa; 
    getEspInbound(): _IPsecSa; 
    getAhOutbound(): _IPsecSa; 
    getAhInbound(): _IPsecSa; 
    getLifeTime(): number; 
}
declare type _IPsecSaGroup = _IPsecSaGroupBase;

declare interface _IdPayloadBase extends _IkePayload {
    getIpAddress(): IP; 
    setIpAddress(ipAddress: IP): void; 
    getDstIpAddress(): IP; 
    setDstIpAddress(dstIpAddress: IP): void; 
    getSrcSubnetMask(): IP; 
    setSrcSubnetMask(srcSubnetMask: IP): void; 
    getDstSubnetMask(): IP; 
    setDstSubnetMask(dstSubnetMask: IP): void; 
    getSrcPortNumber(): number; 
    setSrcPortNumber(n: number): void; 
    getDstPortNumber(): number; 
    setDstPortNumber(n: number): void; 
    getProtocol(): number; 
    setProtocol(n: number): void; 
    getIdData(): string; 
    setIdData(idData: string): void; 
}
declare type _IdPayload = _IdPayloadBase;

declare interface _IkePayloadBase extends _Pdu {
    getLength(): number; 
    setLength(length: number): void; 
    getReserved(): byte; 
    setReserved(reserved: byte): void; 
    getNextPayloadType(): byte; 
    setNextPayloadType(nextPayloadType: byte): void; 
}
declare type _IkePayload = _IkePayloadBase;

declare interface _IkePduBase extends _Pdu {
    getInitCookie(): number; 
    setInitCookie(n: number): void; 
    getResponseCookie(): number; 
    setResponseCookie(n: number): void; 
    getNextPayload(): byte; 
    setNextPayload(nextPayload: byte): void; 
    getVersionNumber(): byte; 
    setVersionNumber(versionNumber: byte): void; 
    getExchangeType(): byte; 
    setExchangeType(exchangeType: byte): void; 
    getFlag(): byte; 
    setFlag(flag: byte): void; 
    getMsgId(): number; 
    setMsgId(n: number): void; 
    getMsgLength(): number; 
    setMsgLength(n: number): void; 
    setPayloadList(): void; 
    getData(): string; 
    setData(data: string): void; 
}
declare type _IkePdu = _IkePduBase;

declare interface _IkePolicyBase extends BaseClass {
    setPriorityNum(n: number): void; 
    getPriorityNum(): number; 
    getEncryKeyBits(): number; 
    setLifetime(n: number): void; 
    getLifetime(): number; 
}
declare type _IkePolicy = _IkePolicyBase;

declare interface _InstructionDlgBase extends BaseClass {
    resetActivity(): void; 
    showAnswerPage(b: boolean): void; 
    prev(): void; 
    next(): void; 
    alwaysOnTop(b: boolean): void; 
    setVisible(b: boolean): void; 
    setWidgetVisible(s: string, b: boolean): void; 
    setDisabled(b: boolean): void; 
    setWidgetDisable(s: string, b: boolean): void; 
    isEditInstructionsLocked(): boolean; 
    setEditInstructionsLocked(b: boolean): void; 
}
declare type _InstructionDlg = _InstructionDlgBase;

declare interface _InvArpFrameBase extends _Header {
    getIsRequest(): boolean; 
    setIsRequest(b: boolean): void; 
    getSrcIp(): IP; 
    setSrcIp(srcIp: IP): void; 
    getDstIp(): IP; 
    setDstIp(dstIp: IP): void; 
    getDlci(): number; 
    setDlci(dlci: number): void; 
}
declare type _InvArpFrame = _InvArpFrameBase;

declare interface _IosFileContentBase extends _FileContent {
    getDeviceType(): _DeviceType; 
    setDeviceType(deviceType: _DeviceType): void; 
    getSetName(): string; 
    setSetName(setName: string): void; 
}
declare type _IosFileContent = _IosFileContentBase;

declare interface _JamSignalBase extends _Pdu {}
declare type _JamSignal = _JamSignalBase;

declare interface _LLCHeaderBase extends _Header {
    getDsap(): byte; 
    setDsap(dsap: byte): void; 
    getSsap(): byte; 
    setSsap(ssap: byte): void; 
    getControlField(): string; 
    setControlField(controlField: string): void; 
    getInfoField(): string; 
    setInfoField(infoField: string): void; 
    getLength(): number; 
    setLength(n: number): void; 
}
declare type _LLCHeader = _LLCHeaderBase;

declare interface _LMIFrameBase extends _Header {
    getIsRouter(): boolean; 
    setIsRouter(b: boolean): void; 
    getType(): _LMIType; 
    setType(type: _LMIType): void; 
    setDlcis(): void; 
}
declare type _LMIFrame = _LMIFrameBase;

declare interface _LacpFrameBase extends _Pdu {
    getLacpVersion(): byte; 
    setLacpVersion(lacpVersion: byte): void; 
    getActorInfo(): byte; 
    setActorInfo(actorInfo: byte): void; 
    getActorInfoLength(): byte; 
    setActorInfoLength(actorInfoLength: byte): void; 
    getActorSysPriority(): number; 
    setActorSysPriority(actorSysPriority: number): void; 
    getActorPortPriority(): number; 
    setActorPortPriority(actorPortPriority: number): void; 
    getActorKey(): number; 
    setActorKey(actorKey: number): void; 
    getActorPort(): number; 
    setActorPort(actorPort: number): void; 
    getActorDevice(): MAC; 
    setActorDevice(actorDevice: MAC): void; 
    getActorState(): _LacpState; 
    setActorState(actorState: _LacpState): void; 
    getPartnetInfo(): byte; 
    setPartnetInfo(partnetInfo: byte): void; 
    getPartnetInfoLength(): number; 
    setPartnetInfoLength(partnetInfoLength: number): void; 
    getPartnerSysPriority(): number; 
    setPartnerSysPriority(partnerSysPriority: number): void; 
    getPartnetPortPriority(): number; 
    setPartnetPortPriority(partnetPortPriority: number): void; 
    getPartnerKey(): number; 
    setPartnerKey(partnerKey: number): void; 
    getPartnerPort(): number; 
    setPartnerPort(partnerPort: number): void; 
    getPartnetDevice(): MAC; 
    setPartnetDevice(partnetDevice: MAC): void; 
    getPartnerState(): _LacpState; 
    setPartnerState(partnerState: _LacpState): void; 
}
declare type _LacpFrame = _LacpFrameBase;

declare interface _LcpFrameBase extends _Pdu {
    getAddress(): number; 
    setAddress(n: number): void; 
    getControl(): number; 
    setControl(n: number): void; 
    getProtocolId(): number; 
    setProtocolId(protocolId: number): void; 
    getCode(): number; 
    setCode(n: number): void; 
    getId(): number; 
    setId(n: number): void; 
    getIsPppFrame(): boolean; 
    setIsPppFrame(b: boolean): void; 
    getHAPAuthenType(): _PPPAuthenType; 
    setHAPAuthenType(hapAuthenType: _PPPAuthenType): void; 
    getRouteIp(): IP; 
    setRouteIp(routeIp: IP): void; 
}
declare type _LcpFrame = _LcpFrameBase;

declare interface _LinkBase extends BaseClass {
    getLinkType(): _LinkType; 
    getConnectionType(): _ConnectType; 
}
declare type _Link = _LinkBase;

declare interface _LinkLayerOptionBase extends _NdOption {
    getMacAddress(): MAC; 
    setMacAddress(macAddress: MAC): void; 
}
declare type _LinkLayerOption = _LinkLayerOptionBase;

declare interface _LinksysConfigInfoPageBase extends _LinksysConfigPage {}
declare type _LinksysConfigInfoPage = _LinksysConfigInfoPageBase;

declare interface _LinksysConfigPageBase extends _HTTPPage {
    getIsCgiPage(): boolean; 
    setIsCgiPage(b: boolean): void; 
    getDeviceXml(): string; 
    setDeviceXml(deviceXml: string): void; 
}
declare type _LinksysConfigPage = _LinksysConfigPageBase;

declare interface _LinksysFirmwareUpgPageBase extends _LinksysConfigPage {}
declare type _LinksysFirmwareUpgPage = _LinksysFirmwareUpgPageBase;

declare interface _LockingTreeBase extends BaseClass {
    setLock(s: string, s2: string, s3: string, b: boolean): boolean; 
    isLocked(s: string, s2: string, s3: string): boolean; 
}
declare type _LockingTree = _LockingTreeBase;

declare interface _LoopbackManagerBase extends _Process {
    getLoopback(n: number): _RouterPort; 
    getLoopbackAt(n: number): _RouterPort; 
    addLoopback(n: number): boolean; 
    removeLoopback(n: number): boolean; 
    getLoopbackCount(): number; 
}
declare type _LoopbackManager = _LoopbackManagerBase;

declare interface _MACEntryBase extends _IPCData {
    getMacAddress(): MAC; 
    setMacAddress(macAddress: MAC): void; 
    getPort(): string; 
    setPort(port: string): void; 
    getIsDynamic(): boolean; 
    setIsDynamic(isDynamic: boolean): void; 
}
declare type _MACEntry = _MACEntryBase;

declare interface _MACSwitchBase extends _Process {
    addStaticMac(macAddress: MAC, n: number, s: string): boolean; 
    removeStaticMac(macAddress: MAC, n: number, s: string): boolean; 
    getStaticMacCount(): number; 
    getGlobalMacAt(n: number): _StaticMac; 
    portExistedInStatic(s: string): boolean; 
    isEntryExisted(macAddress: MAC, n: number, s: string): boolean; 
}
declare type _MACSwitch = _MACSwitchBase;

declare interface _MACTableBase extends _IPCData {
    setEntries(): void; 
}
declare type _MACTable = _MACTableBase;

declare interface _MailBase extends _Pdu {
    getFrom(): string; 
    setFrom(from: string): void; 
    getRcpt(): string; 
    setRcpt(rcpt: string): void; 
    getContent(): string; 
    setContent(content: string): void; 
    getSubject(): string; 
    setSubject(subject: string): void; 
    getDate(): string; 
    setDate(date: string): void; 
    getTime(): string; 
    setTime(time: string): void; 
}
declare type _Mail = _MailBase;

declare interface _MailBoxBase extends BaseClass {}
declare type _MailBox = _MailBoxBase;

declare interface _ManagementFrameBase extends _Pdu {
    getSsid(): string; 
    setSsid(ssid: string): void; 
    getNetworkType(): _NetworkType; 
    setNetworkType(networkType: _NetworkType): void; 
    getRadioBand(): _RadioBand; 
    setRadioBand(radioBand: _RadioBand): void; 
    getHAPAuthenType(): _WirelessAuthenType; 
    setHAPAuthenType(hapAuthenType: _WirelessAuthenType): void; 
    getEncryptType(): _EncryptType; 
    setEncryptType(encryptType: _EncryptType): void; 
    getKey(): string; 
    setKey(key: string): void; 
}
declare type _ManagementFrame = _ManagementFrameBase;

declare interface _MtuOptionBase extends _NdOption {
    getMtu(): number; 
    setMtu(n: number): void; 
}
declare type _MtuOption = _MtuOptionBase;

declare interface _MultiUserManagerBase extends BaseClass {
    startServer(n: number, s: string): boolean; 
    stopServer(): boolean; 
    isServerStarted(): boolean; 
    getPortNumber(): number; 
    setPassword(s: string): void; 
    getPassword(): string; 
    setAcceptMode(acceptMode: _AcceptMode): void; 
    getAcceptMode(): _AcceptMode; 
    getRemoteNetworkCount(): number; 
    getRemoteNetworkAt(n: number): _RemoteNetwork; 
    getRemoteNetworkByName(s: string): _RemoteNetwork; 
}
declare type _MultiUserManager = _MultiUserManagerBase;

declare interface _NATConfigEntryBase extends _IPCData {
    getName(): string; 
    setName(name: string): void; 
    getExternalPort(): number; 
    setExternalPort(externalPort: number): void; 
    getInternalPort(): number; 
    setInternalPort(internalPort: number): void; 
    getProtocol(): _LinksysProtocol; 
    setProtocol(protocol: _LinksysProtocol): void; 
    getIpAddress(): IP; 
    setIpAddress(ipAddress: IP): void; 
    getIsEnable(): boolean; 
    setIsEnable(isEnable: boolean): void; 
}
declare type _NATConfigEntry = _NATConfigEntryBase;

declare interface _NATEntryBase extends _IPCData {
    getInsideLocalIp(): IP; 
    setInsideLocalIp(insideLocalIp: IP): void; 
    getInsideGlobalIp(): IP; 
    setInsideGlobalIp(insideGlobalIp: IP): void; 
    getOutsideLocalIp(): IP; 
    setOutsideLocalIp(outsideLocalIp: IP): void; 
    getOutsideGlobalIp(): IP; 
    setOutsideGlobalIp(outsideGlobalIp: IP): void; 
}
declare type _NATEntry = _NATEntryBase;

declare interface _NATListBase extends _IPCData {
    getAclId(): string; 
    setAclId(aclId: string): void; 
    getIsOverload(): boolean; 
    setIsOverload(isOverload: boolean): void; 
}
declare type _NATList = _NATListBase;

declare interface _NATListInterfaceBase extends _NATList {
    getPort(): string; 
    setPort(port: string): void; 
}
declare type _NATListInterface = _NATListInterfaceBase;

declare interface _NATListPoolBase extends _NATList {
    getPool(): string; 
    setPool(pool: string): void; 
}
declare type _NATListPool = _NATListPoolBase;

declare interface _NATPoolBase extends _IPCData {
    getPoolName(): string; 
    setPoolName(poolName: string): void; 
    getStartIp(): IP; 
    setStartIp(startIp: IP): void; 
    getEndIp(): IP; 
    setEndIp(endIp: IP): void; 
    getMask(): IP; 
    setMask(mask: IP): void; 
}
declare type _NATPool = _NATPoolBase;

declare interface _NATProcessBase extends _Process {
    addNatPool(s: string): boolean; 
    getNatPool(s: string): _NATPool; 
    getNatPoolAt(n: number): _NATPool; 
    removeNatPool(s: string): boolean; 
    getNatPoolCount(): number; 
    getInSrcStaticCount(): number; 
    getOutSrcStaticCount(): number; 
    getInSrcStaticAt(n: number): _NATEntry; 
    getOutSrcStaticAt(n: number): _NATEntry; 
    clearAllTranslations(): void; 
    removeInSrcList(s: string): boolean; 
    removeOutSrcList(s: string): boolean; 
    getInSrcList(s: string): _NATList; 
    getOutSrcList(s: string): _NATList; 
    getInSrcListAt(n: number): _NATList; 
    getOutSrcListAt(n: number): _NATList; 
    getInSrcListCount(): number; 
    getOutSrcListCount(): number; 
    getNatTable(): _NATTable; 
}
declare type _NATProcess = _NATProcessBase;

declare interface _NATTableBase extends _IPCData {
    setEntries(): void; 
}
declare type _NATTable = _NATTableBase;

declare interface _NATv6EntryBase extends _IPCData {
    getV6SrcIp(): IPv6; 
    setV6SrcIp(v6SrcIp: IPv6): void; 
    getV6DstIp(): IPv6; 
    setV6DstIp(v6DstIp: IPv6): void; 
    getV4SrcIp(): IPv6; 
    setV4SrcIp(v4SrcIp: IPv6): void; 
    getV4DstIp(): IPv6; 
    setV4DstIp(v4DstIp: IPv6): void; 
}
declare type _NATv6Entry = _NATv6EntryBase;

declare interface _NATv6ListBase extends _IPCData {
    getAclId(): string; 
    setAclId(aclId: string): void; 
    getIsOverload(): boolean; 
    setIsOverload(isOverload: boolean): void; 
}
declare type _NATv6List = _NATv6ListBase;

declare interface _NATv6ListInterfaceBase extends _NATv6List {
    getPort(): string; 
    setPort(port: string): void; 
}
declare type _NATv6ListInterface = _NATv6ListInterfaceBase;

declare interface _NATv6ListPoolBase extends _NATv6List {
    getPool(): string; 
    setPool(pool: string): void; 
}
declare type _NATv6ListPool = _NATv6ListPoolBase;

declare interface _NATv6PoolBase extends _IPCData {
    getPoolName(): string; 
    setPoolName(poolName: string): void; 
    getStartIp(): IP; 
    setStartIp(startIp: IP): void; 
    getEndIp(): IP; 
    setEndIp(endIp: IP): void; 
    getMask(): IP; 
    setMask(mask: IP): void; 
}
declare type _NATv6Pool = _NATv6PoolBase;

declare interface _NATv6TableBase extends _IPCData {
    setEntries(): void; 
}
declare type _NATv6Table = _NATv6TableBase;

declare interface _NdMessageBase extends _ICMPv6Message {
    setOptions(): void; 
}
declare type _NdMessage = _NdMessageBase;

declare interface _NdOptionBase extends _Pdu {
    getOptionType(): number; 
    setOptionType(n: number): void; 
}
declare type _NdOption = _NdOptionBase;

declare interface _NeighborMessageBase extends _NdMessage {
    getIsRouter(): boolean; 
    setIsRouter(b: boolean): void; 
    getIsSolicited(): boolean; 
    setIsSolicited(b: boolean): void; 
    getIsOverride(): boolean; 
    setIsOverride(b: boolean): void; 
    getTargetAddress(): IPv6; 
    setTargetAddress(targetAddress: IPv6): void; 
}
declare type _NeighborMessage = _NeighborMessageBase;

declare interface _NetworkFileBase extends BaseClass {
    getSavedFilename(): string; 
    getVersion(): string; 
    getNetworkDescription(): string; 
    setNetworkDescription(s: string): void; 
    getOptions(): _Options; 
    getMainNetwork(): _Network; 
    getUserProfile(): _UserProfile; 
    getMainSimulation(): _Simulation; 
    getActivityScriptEngine(): _ActivityScriptEngine; 
    getScriptEngine(): _ActivityScriptEngine; 
    resetScriptEngine(): void; 
    addScript(s: string, s2: string): boolean; 
    addScriptFile(s: string, s2: string): boolean; 
    addDefaultScripts(): void; 
    removeScript(s: string): boolean; 
    getScript(s: string): string; 
    addScriptDataStore(s: string, s2: string): boolean; 
    removeScriptDataStore(s: string): boolean; 
    getScriptDataStore(s: string): string; 
}
declare type _NetworkFile = _NetworkFileBase;

declare interface _NotificationPayloadBase extends _IkePayload {
    getDoi(): number; 
    setDoi(n: number): void; 
    getSpi(): number; 
    setSpi(n: number): void; 
    getNotificationData(): string; 
    setNotificationData(notificationData: string): void; 
    getNotifyType(): number; 
    setNotifyType(notifyType: number): void; 
}
declare type _NotificationPayload = _NotificationPayloadBase;

declare interface _NtpHeaderBase extends _Pdu {
    getIsNtpServerAuthenticate(): boolean; 
    setIsNtpServerAuthenticate(b: boolean): void; 
    getSrvKeyId(): number; 
    setSrvKeyId(n: number): void; 
    getMd5Passwd(): string; 
    setMd5Passwd(md5Passwd: string): void; 
    getHostIpAddress(): IP; 
    setHostIpAddress(hostIpAddress: IP): void; 
    getLeapIndicator(): number; 
    setLeapIndicator(n: number): void; 
    getNtpVersion(): number; 
    setNtpVersion(n: number): void; 
    getMode(): number; 
    setMode(n: number): void; 
    getCliStratum(): number; 
    setCliStratum(n: number): void; 
    getSrvStratum(): number; 
    setSrvStratum(n: number): void; 
    getPoll(): number; 
    setPoll(n: number): void; 
    getPrecision(): number; 
    setPrecision(n: number): void; 
    getRootDelay(): number; 
    setRootDelay(n: number): void; 
    getRootDespersion(): number; 
    setRootDespersion(n: number): void; 
    getRefClockID(): IP; 
    setRefClockID(refClockID: IP): void; 
    getRefClockTime(): string; 
    setRefClockTime(refClockTime: string): void; 
    getOriginateTime(): string; 
    setOriginateTime(originateTime: string): void; 
    getReceiveTime(): string; 
    setReceiveTime(receiveTime: string): void; 
    getTransmitTime(): string; 
    setTransmitTime(transmitTime: string): void; 
}
declare type _NtpHeader = _NtpHeaderBase;

declare interface _NtpServerProcessBase extends _Process {
    setEnabled(b: boolean): void; 
    isEnabled(): boolean; 
    setKeyID(n: number): void; 
    getKeyId(): number; 
    getServerMd5Str(): string; 
}
declare type _NtpServerProcess = _NtpServerProcessBase;

declare interface _NumberPoolBase extends _Pool {
    getStart(): number; 
    getEnd(): number; 
}
declare type _NumberPool = _NumberPoolBase;

declare interface _OSPFAreaBase extends BaseClass {
    getAreaId(): IP; 
    setAuthentication(ospfAuthType: _OSPFAuthType): void; 
    getAuthentication(): _OSPFAuthType; 
    getConfiguredPortCount(): number; 
    getConfiguredNetworkCount(): number; 
    getNeighborTable(s: string): _OSPFNeighborTable; 
    getDatabase(): _OSPFDatabase; 
    getFloodLength(s: string): number; 
    getLastFloodLength(s: string): number; 
    getLastFloodTime(s: string): number; 
    getMaxFloodLength(s: string): number; 
    getMaxFloodTime(s: string): number; 
    getSpfCount(): number; 
}
declare type _OSPFArea = _OSPFAreaBase;

declare interface _OSPFAreaNetworkBase extends _IPCData {
    getAreaId(): IP; 
    setAreaId(areaId: IP): void; 
    setIpAndMask(): void; 
}
declare type _OSPFAreaNetwork = _OSPFAreaNetworkBase;

declare interface _OSPFAsExternalLSABase extends _OSPFLSA {
    getNetworkMask(): IP; 
    setNetworkMask(networkMask: IP): void; 
    getEBit(): boolean; 
    setEBit(eBit: boolean): void; 
    getMetric(): number; 
    setMetric(metric: number): void; 
    getForwardingAddress(): IP; 
    setForwardingAddress(forwardingAddress: IP): void; 
    getExternalRouteTag(): number; 
    setExternalRouteTag(externalRouteTag: number): void; 
}
declare type _OSPFAsExternalLSA = _OSPFAsExternalLSABase;

declare interface _OSPFDDPacketBase extends _OSPFPacket {
    getMtu(): number; 
    setMtu(mtu: number): void; 
    getOption(): byte; 
    setOption(option: byte): void; 
    getInitBit(): boolean; 
    setInitBit(b: boolean): void; 
    getMasterBit(): boolean; 
    setMasterBit(b: boolean): void; 
    getMoreBit(): boolean; 
    setMoreBit(b: boolean): void; 
    getSeqNumber(): number; 
    setSeqNumber(n: number): void; 
    setListLSAHeaders(): void; 
}
declare type _OSPFDDPacket = _OSPFDDPacketBase;

declare interface _OSPFDatabaseBase extends _IPCData {
    setRouterLSAs(): void; 
    setNetworkLSAs(): void; 
    setSummaryLSAs(): void; 
    setAsExternalLSAs(): void; 
    setType7LSAs(): void; 
    getRouterLsaSeqNum(): number; 
    setRouterLsaSeqNum(routerLsaSeqNum: number): void; 
    getNetworkLsaSeqNum(): number; 
    setNetworkLsaSeqNum(networkLsaSeqNum: number): void; 
    getSummaryLsaSeqNum(): number; 
    setSummaryLsaSeqNum(summaryLsaSeqNum: number): void; 
    getAsExternalLsaSeqNum(): number; 
    setAsExternalLsaSeqNum(asExternalLsaSeqNum: number): void; 
    getType7LsaSeqNum(): number; 
    setType7LsaSeqNum(type7LsaSeqNum: number): void; 
}
declare type _OSPFDatabase = _OSPFDatabaseBase;

declare interface _OSPFHelloPacketBase extends _OSPFPacket {
    getNetworkMask(): IP; 
    setNetworkMask(networkMask: IP): void; 
    getHelloInterval(): number; 
    setHelloInterval(helloInterval: number): void; 
    getOption(): byte; 
    setOption(option: byte): void; 
    getPriority(): byte; 
    setPriority(priority: byte): void; 
    getDeadInterval(): number; 
    setDeadInterval(n: number): void; 
    getDesignatedRouter(): IP; 
    setDesignatedRouter(designatedRouter: IP): void; 
    getBackupDesignatedRouter(): IP; 
    setBackupDesignatedRouter(backupDesignatedRouter: IP): void; 
    setNeighbors(): void; 
}
declare type _OSPFHelloPacket = _OSPFHelloPacketBase;

declare interface _OSPFLSABase extends _IPCData {
    getHeader(): _OSPFLSAHeader; 
    setHeader(header: _OSPFLSAHeader): void; 
}
declare type _OSPFLSA = _OSPFLSABase;

declare interface _OSPFLSAHeaderBase extends _Pdu {
    getLsId(): IP; 
    setLsId(lsId: IP): void; 
    getAdvRouter(): IP; 
    setAdvRouter(advRouter: IP): void; 
    getType(): byte; 
    setType(type: byte): void; 
    getAge(): number; 
    setAge(age: number): void; 
    getOption(): byte; 
    setOption(option: byte): void; 
    getSeqNumber(): number; 
    setSeqNumber(n: number): void; 
    getChecksum(): number; 
    setChecksum(checksum: number): void; 
    getLength(): number; 
    setLength(length: number): void; 
}
declare type _OSPFLSAHeader = _OSPFLSAHeaderBase;

declare interface _OSPFLSAckPacketBase extends _OSPFPacket {
    setLsas(): void; 
}
declare type _OSPFLSAckPacket = _OSPFLSAckPacketBase;

declare interface _OSPFLSRBase extends _Pdu {
    getLsType(): byte; 
    setLsType(lsType: byte): void; 
    getOspfv3LsType(): number; 
    setOspfv3LsType(ospfv3LsType: number): void; 
    getLsId(): IP; 
    setLsId(lsId: IP): void; 
    getAdvertisingRouter(): IP; 
    setAdvertisingRouter(advertisingRouter: IP): void; 
    getIsOspfv3(): boolean; 
    setIsOspfv3(b: boolean): void; 
}
declare type _OSPFLSR = _OSPFLSRBase;

declare interface _OSPFLSRPacketBase extends _OSPFPacket {
    setLsrs(): void; 
}
declare type _OSPFLSRPacket = _OSPFLSRPacketBase;

declare interface _OSPFLSUPacketBase extends _OSPFPacket {
    setLsas(): void; 
}
declare type _OSPFLSUPacket = _OSPFLSUPacketBase;

declare interface _OSPFMainProcessBase extends _Process {
    addOspfProcess(n: number): boolean; 
    removeOspfProcess(n: number): boolean; 
    getOspfProcessAt(n: number): _Process; 
    getOspfProcess(n: number): _Process; 
    getOspfProcessCount(): number; 
}
declare type _OSPFMainProcess = _OSPFMainProcessBase;

declare interface _OSPFNeighborBase extends _IPCData {
    getRouterId(): IP; 
    setRouterId(routerId: IP): void; 
    getAddress(): IP; 
    setAddress(address: IP): void; 
    getPort(): string; 
    setPort(port: string): void; 
    getPriority(): number; 
    setPriority(priority: number): void; 
    getState(): _OSPFNeighborState; 
    setState(state: _OSPFNeighborState): void; 
    getOption(): number; 
    setOption(option: number): void; 
    getDr(): IP; 
    setDr(dr: IP): void; 
    getBackupDr(): IP; 
    setBackupDr(backupDr: IP): void; 
    getDeadInterval(): number; 
    setDeadInterval(deadInterval: number): void; 
    getAreaId(): IP; 
    setAreaId(areaId: IP): void; 
    getIsMaster(): boolean; 
    setIsMaster(isMaster: boolean): void; 
    getSeqNumber(): number; 
    setSeqNumber(seqNumber: number): void; 
    getIsVirtual(): boolean; 
    setIsVirtual(isVirtual: boolean): void; 
}
declare type _OSPFNeighbor = _OSPFNeighborBase;

declare interface _OSPFNeighborTableBase extends BaseClass {
    getNeighborAt(n: number): _OSPFNeighbor; 
    getNeighborCount(): number; 
    getPort(): _RouterPort; 
    getAdjNeighborCount(): number; 
    getAdjNeighborAt(n: number): IP; 
    getFloodLength(): number; 
    getLastFloodLength(): number; 
    getMaxFloodLength(): number; 
    getLastFloodTime(): number; 
    getMaxFloodTime(): number; 
}
declare type _OSPFNeighborTable = _OSPFNeighborTableBase;

declare interface _OSPFNetworkLSABase extends _OSPFLSA {
    getMask(): IP; 
    setMask(mask: IP): void; 
    setRouters(): void; 
}
declare type _OSPFNetworkLSA = _OSPFNetworkLSABase;

declare interface _OSPFPacketBase extends _Pdu {
    getVersion(): byte; 
    setVersion(version: byte): void; 
    getTypeCode(): byte; 
    setTypeCode(typeCode: byte): void; 
    getLength(): number; 
    setLength(length: number): void; 
    getRouterId(): IP; 
    setRouterId(routerId: IP): void; 
    getAreaId(): IP; 
    setAreaId(areaId: IP): void; 
    getCheckSum(): number; 
    setCheckSum(checkSum: number): void; 
    getAuthenticationType(): number; 
    setAuthenticationType(authenticationType: number): void; 
    getSequence(): number; 
    setSequence(n: number): void; 
}
declare type _OSPFPacket = _OSPFPacketBase;

declare interface _OSPFProcessBase extends _RoutingProtocol {
    getProcessId(): number; 
    getRouterId(): IP; 
    getAreaCount(): number; 
    getAreaAt(n: number): _OSPFArea; 
    getArea(ipAddress: IP): _OSPFArea; 
    removeArea(ipAddress: IP): void; 
    setAreaAuthentication(ipAddress: IP, ospfAuthType: _OSPFAuthType): boolean; 
    getAreaAuthenticationCount(): number; 
    getAreaAuthentication(ipAddress: IP): _OSPFAuthType; 
    setDefaultInfoOrig(ospfDefaultInfoOrig: _OSPFDefaultInfoOrig): void; 
    getDefaultInfoOrig(): _OSPFDefaultInfoOrig; 
    setLogAdjacencyChanges(ospfLogChanges: _OSPFLogChanges): void; 
    getLogAdjacencyChanges(): _OSPFLogChanges; 
    addConfiguredNetwork(ipAddress: IP, ipAddress2: IP, ipAddress3: IP): void; 
    removeConfigureNetwork(ipAddress: IP, ipAddress2: IP, ipAddress3: IP): void; 
    getConfNetworkCount(): number; 
    getConfNetworkAt(n: number): _OSPFAreaNetwork; 
    getAreaId(ipAddress: IP, ipAddress2: IP): IP; 
    setDefaultPassiveInt(b: boolean): void; 
    getDefaultPassiveInt(): boolean; 
    setPassiveInt(s: string, b: boolean): void; 
    generateOspfRoutes(ipAddress: IP): void; 
}
declare type _OSPFProcess = _OSPFProcessBase;

declare interface _OSPFRouterLSABase extends _OSPFLSA {
    getEBit(): boolean; 
    setEBit(eBit: boolean): void; 
    getBBit(): boolean; 
    setBBit(bBit: boolean): void; 
    getVBit(): boolean; 
    setVBit(vBit: boolean): void; 
    setLinks(): void; 
}
declare type _OSPFRouterLSA = _OSPFRouterLSABase;

declare interface _OSPFRouterLinkBase extends _IPCData {
    getLinkId(): IP; 
    setLinkId(linkId: IP): void; 
    getLinkData(): IP; 
    setLinkData(linkData: IP): void; 
    getType(): byte; 
    setType(type: byte): void; 
    getMetric(): number; 
    setMetric(metric: number): void; 
}
declare type _OSPFRouterLink = _OSPFRouterLinkBase;

declare interface _OSPFRoutingEntryBase extends _RoutingEntry {
    getRealCost(): number; 
    setRealCost(realCost: number): void; 
    getAdvRoute(): IP; 
    setAdvRoute(advRoute: IP): void; 
}
declare type _OSPFRoutingEntry = _OSPFRoutingEntryBase;

declare interface _OSPFSummaryLSABase extends _OSPFLSA {
    getNetworkMask(): IP; 
    setNetworkMask(networkMask: IP): void; 
    getMetric(): number; 
    setMetric(metric: number): void; 
}
declare type _OSPFSummaryLSA = _OSPFSummaryLSABase;

declare interface _OSPFType7LSABase extends _OSPFLSA {
    getNetworkMask(): IP; 
    setNetworkMask(networkMask: IP): void; 
    getEBit(): boolean; 
    setEBit(eBit: boolean): void; 
    getMetric(): number; 
    setMetric(metric: number): void; 
    getForwardingAddress(): IP; 
    setForwardingAddress(forwardingAddress: IP): void; 
    getExternalRouteTag(): number; 
    setExternalRouteTag(externalRouteTag: number): void; 
}
declare type _OSPFType7LSA = _OSPFType7LSABase;

declare interface _OSPFv3DDPacketBase extends _OSPFDDPacket {
    getOptionV3(): number; 
    setOptionV3(n: number): void; 
}
declare type _OSPFv3DDPacket = _OSPFv3DDPacketBase;

declare interface _OSPFv3HelloPacketBase extends _OSPFPacket {
    getInterfaceId(): number; 
    setInterfaceId(n: number): void; 
    getHelloInterval(): number; 
    setHelloInterval(helloInterval: number): void; 
    getOptionV3(): number; 
    setOptionV3(n: number): void; 
    getPriority(): byte; 
    setPriority(priority: byte): void; 
    getDeadInterval(): number; 
    setDeadInterval(deadInterval: number): void; 
    getDesignatedRouter(): IP; 
    setDesignatedRouter(designatedRouter: IP): void; 
    getBackupDesignatedRouter(): IP; 
    setBackupDesignatedRouter(backupDesignatedRouter: IP): void; 
    getNeighborSize(): number; 
    setNeighborSize(n: number): void; 
    setNeighbors(): void; 
}
declare type _OSPFv3HelloPacket = _OSPFv3HelloPacketBase;

declare interface _OSPFv6AsExternalLSABase extends _OSPFv6LSA {
    getEBit(): boolean; 
    setEBit(b: boolean): void; 
    getFBit(): boolean; 
    setFBit(b: boolean): void; 
    getTBit(): boolean; 
    setTBit(b: boolean): void; 
    getMetric(): number; 
    setMetric(n: number): void; 
    getIpv6AddressPrefix(): _OSPFv6Prefix; 
    setIpv6AddressPrefix(ipv6AddressPrefix: _OSPFv6Prefix): void; 
    getForwardingAddress(): IPv6; 
    setForwardingAddress(forwardingAddress: IPv6): void; 
    getExternalRouteTag(): number; 
    setExternalRouteTag(n: number): void; 
    getRefLinkStateId(): number; 
    setRefLinkStateId(n: number): void; 
}
declare type _OSPFv6AsExternalLSA = _OSPFv6AsExternalLSABase;

declare interface _OSPFv6DBDescriptionPacketBase extends _OSPFv6Packet {
    getOption(): _OSPFv6OptionField; 
    setOption(option: _OSPFv6OptionField): void; 
    getInterfaceMTU(): number; 
    setInterfaceMTU(interfaceMTU: number): void; 
    getIBit(): boolean; 
    setIBit(b: boolean): void; 
    getMBit(): boolean; 
    setMBit(b: boolean): void; 
    getMSBit(): boolean; 
    setMSBit(b: boolean): void; 
    getDDSequenceNumber(): number; 
    setDDSequenceNumber(n: number): void; 
    getLsaHeaderSize(): number; 
    setLsaHeaderSize(n: number): void; 
    setLsaHeaders(): void; 
}
declare type _OSPFv6DBDescriptionPacket = _OSPFv6DBDescriptionPacketBase;

declare interface _OSPFv6HelloPacketBase extends _OSPFv6Packet {
    getInterfaceId(): number; 
    setInterfaceId(n: number): void; 
    getPriority(): byte; 
    setPriority(priority: byte): void; 
    getOption(): _OSPFv6OptionField; 
    setOption(option: _OSPFv6OptionField): void; 
    getHelloInterval(): number; 
    setHelloInterval(helloInterval: number): void; 
    getDeadInterval(): number; 
    setDeadInterval(deadInterval: number): void; 
    getDesignatedRouter(): IP; 
    setDesignatedRouter(designatedRouter: IP): void; 
    getBackupDesignatedRouter(): IP; 
    setBackupDesignatedRouter(backupDesignatedRouter: IP): void; 
    getNeighborSize(): number; 
    setNeighborSize(n: number): void; 
    setNeighbors(): void; 
}
declare type _OSPFv6HelloPacket = _OSPFv6HelloPacketBase;

declare interface _OSPFv6InterAreaPrefixLSABase extends _OSPFv6LSA {
    getMetric(): number; 
    setMetric(n: number): void; 
    getIpv6AddressPrefix(): _OSPFv6Prefix; 
    setIpv6AddressPrefix(ipv6AddressPrefix: _OSPFv6Prefix): void; 
}
declare type _OSPFv6InterAreaPrefixLSA = _OSPFv6InterAreaPrefixLSABase;

declare interface _OSPFv6InterAreaRouterLSABase extends _OSPFv6LSA {
    getOption(): _OSPFv6OptionField; 
    setOption(option: _OSPFv6OptionField): void; 
    getMetric(): number; 
    setMetric(n: number): void; 
    getDesignatedRouterId(): _OSPFv6InterAreaRouterLSA; 
    setDesignatedRouterId(designatedRouterId: _OSPFv6InterAreaRouterLSA): void; 
}
declare type _OSPFv6InterAreaRouterLSA = _OSPFv6InterAreaRouterLSABase;

declare interface _OSPFv6IntraAreaPrefixLSABase extends _OSPFv6LSA {
    getReferencedLSType(): number; 
    setReferencedLSType(referencedLSType: number): void; 
    getReferencedLinkStateId(): number; 
    setReferencedLinkStateId(n: number): void; 
    getRefAdvertisingRouter(): _OSPFv6IntraAreaPrefixLSA; 
    setRefAdvertisingRouter(refAdvertisingRouter: _OSPFv6IntraAreaPrefixLSA): void; 
    getIpv6AddressPrefixLength(): number; 
    setIpv6AddressPrefixLength(n: number): void; 
    setIpv6AddressPrefixes(): void; 
}
declare type _OSPFv6IntraAreaPrefixLSA = _OSPFv6IntraAreaPrefixLSABase;

declare interface _OSPFv6LSABase extends _OSPFLSA {
    populateFieldTable(): void; 
}
declare type _OSPFv6LSA = _OSPFv6LSABase;

declare interface _OSPFv6LSAHeaderBase extends _Pdu {
    getAge(): number; 
    setAge(age: number): void; 
    getType(): number; 
    setType(type: number): void; 
    getTypeUBit(): boolean; 
    setTypeUBit(b: boolean): void; 
    getTypeS1Bit(): boolean; 
    setTypeS1Bit(b: boolean): void; 
    getTypeS2Bit(): boolean; 
    setTypeS2Bit(b: boolean): void; 
    getLSId(): IP; 
    setLSId(lsId: IP): void; 
    getAdvRouter(): IP; 
    setAdvRouter(advRouter: IP): void; 
    getSeqNum(): number; 
    setSeqNum(n: number): void; 
    getChecksum(): number; 
    setChecksum(checksum: number): void; 
    getLength(): number; 
    setLength(length: number): void; 
}
declare type _OSPFv6LSAHeader = _OSPFv6LSAHeaderBase;

declare interface _OSPFv6LinkLSABase extends _OSPFv6LSA {
    getRouterPriority(): byte; 
    setRouterPriority(routerPriority: byte): void; 
    getOption(): _OSPFv6OptionField; 
    setOption(option: _OSPFv6OptionField): void; 
    getLinkLocalInterfaceAddress(): _OSPFv6LinkLSA; 
    setLinkLocalInterfaceAddress(linkLocalInterfaceAddress: _OSPFv6LinkLSA): void; 
    getIpv6AddressPrefixLength(): number; 
    setIpv6AddressPrefixLength(n: number): void; 
    setPrefixes(): void; 
}
declare type _OSPFv6LinkLSA = _OSPFv6LinkLSABase;

declare interface _OSPFv6LinkStateAckPacketBase extends _OSPFv6Packet {
    getLsaHeaderLength(): number; 
    setLsaHeaderLength(n: number): void; 
    setLsaHeaders(): void; 
}
declare type _OSPFv6LinkStateAckPacket = _OSPFv6LinkStateAckPacketBase;

declare interface _OSPFv6LinkStateRequestPacketBase extends _OSPFv6Packet {
    getLSType(): number; 
    setLSType(lsType: number): void; 
    getLinkStateId(): number; 
    setLinkStateId(n: number): void; 
    getAdvertisingRouterSize(): number; 
    setAdvertisingRouterSize(n: number): void; 
    setAdvertisingRouters(): void; 
}
declare type _OSPFv6LinkStateRequestPacket = _OSPFv6LinkStateRequestPacketBase;

declare interface _OSPFv6LinkStateUpdatePacketBase extends _OSPFv6Packet {
    getLsaLength(): number; 
    setLsaLength(n: number): void; 
    setLsas(): void; 
}
declare type _OSPFv6LinkStateUpdatePacket = _OSPFv6LinkStateUpdatePacketBase;

declare interface _OSPFv6NetworkLSABase extends _OSPFv6LSA {
    getOption(): _OSPFv6OptionField; 
    setOption(option: _OSPFv6OptionField): void; 
    getRoutersLength(): number; 
    setRoutersLength(n: number): void; 
    setRouters(): void; 
}
declare type _OSPFv6NetworkLSA = _OSPFv6NetworkLSABase;

declare interface _OSPFv6OptionFieldBase extends _Pdu {
    getAucOption0(): byte; 
    setAucOption0(aucOption0: byte): void; 
    getAucOption1(): byte; 
    setAucOption1(aucOption1: byte): void; 
    getAucOption2(): byte; 
    setAucOption2(aucOption2: byte): void; 
    getOptionV6Bit(): boolean; 
    setOptionV6Bit(b: boolean): void; 
    getOptionEBit(): boolean; 
    setOptionEBit(b: boolean): void; 
    getOptionMCBit(): boolean; 
    setOptionMCBit(b: boolean): void; 
    getOptionNBit(): boolean; 
    setOptionNBit(b: boolean): void; 
    getOptionRBit(): boolean; 
    setOptionRBit(b: boolean): void; 
    getOptionDCBit(): boolean; 
    setOptionDCBit(b: boolean): void; 
}
declare type _OSPFv6OptionField = _OSPFv6OptionFieldBase;

declare interface _OSPFv6PacketBase extends _Pdu {
    getHeader(): _OSPFv6PacketHeader; 
    setHeader(header: _OSPFv6PacketHeader): void; 
}
declare type _OSPFv6Packet = _OSPFv6PacketBase;

declare interface _OSPFv6PacketHeaderBase extends _Pdu {
    getVersion(): number; 
    setVersion(version: number): void; 
    getType(): number; 
    setType(type: number): void; 
    getLength(): number; 
    setLength(length: number): void; 
    getRouterId(): IP; 
    setRouterId(routerId: IP): void; 
    getAreaId(): IP; 
    setAreaId(areaId: IP): void; 
    getChecksum(): number; 
    setChecksum(checksum: number): void; 
    getInstanceId(): number; 
    setInstanceId(instanceId: number): void; 
}
declare type _OSPFv6PacketHeader = _OSPFv6PacketHeaderBase;

declare interface _OSPFv6PrefixBase extends _Pdu {
    getPrefixLength(): byte; 
    setPrefixLength(prefixLength: byte): void; 
    getPrefixOptions(): byte; 
    setPrefixOptions(prefixOptions: byte): void; 
    getPrefixOptionPBit(): boolean; 
    setPrefixOptionPBit(b: boolean): void; 
    getPrefixOptionMCBit(): boolean; 
    setPrefixOptionMCBit(b: boolean): void; 
    getPrefixOptionLABit(): boolean; 
    setPrefixOptionLABit(b: boolean): void; 
    getPrefixOptionNUBit(): boolean; 
    setPrefixOptionNUBit(b: boolean): void; 
    getZeroField(): number; 
    setZeroField(zeroField: number): void; 
    getAddressPrefix(): IP; 
    setAddressPrefix(addressPrefix: IP): void; 
}
declare type _OSPFv6Prefix = _OSPFv6PrefixBase;

declare interface _OSPFv6RouterInterfaceBase extends _Pdu {
    getType(): byte; 
    setType(type: byte): void; 
    getMetric(): number; 
    setMetric(metric: number): void; 
    getIntefaceId(): number; 
    setIntefaceId(n: number): void; 
    getNeighborInterfaceId(): number; 
    setNeighborInterfaceId(n: number): void; 
    getNeighborRouterId(): IP; 
    setNeighborRouterId(neighborRouterId: IP): void; 
}
declare type _OSPFv6RouterInterface = _OSPFv6RouterInterfaceBase;

declare interface _OSPFv6RouterLSABase extends _OSPFv6LSA {
    getWBit(): boolean; 
    setWBit(b: boolean): void; 
    getVBit(): boolean; 
    setVBit(b: boolean): void; 
    getEBit(): boolean; 
    setEBit(b: boolean): void; 
    getBBit(): boolean; 
    setBBit(b: boolean): void; 
    getOption(): _OSPFv6OptionField; 
    setOption(option: _OSPFv6OptionField): void; 
    getInterfaceLength(): number; 
    setInterfaceLength(n: number): void; 
    setInterfaces(): void; 
}
declare type _OSPFv6RouterLSA = _OSPFv6RouterLSABase;

declare interface _OSPFv6Type7LSABase extends _OSPFv6LSA {
    getEBit(): boolean; 
    setEBit(b: boolean): void; 
    getFBit(): boolean; 
    setFBit(b: boolean): void; 
    getTBit(): boolean; 
    setTBit(b: boolean): void; 
    getMetric(): number; 
    setMetric(n: number): void; 
    getIpv6AddressPrefix(): _OSPFv6Prefix; 
    setIpv6AddressPrefix(ipv6AddressPrefix: _OSPFv6Prefix): void; 
    getForwardingAddress(): IPv6; 
    setForwardingAddress(forwardingAddress: IPv6): void; 
    getExternalRouteTag(): number; 
    setExternalRouteTag(n: number): void; 
    getRefLinkStateId(): number; 
    setRefLinkStateId(n: number): void; 
}
declare type _OSPFv6Type7LSA = _OSPFv6Type7LSABase;

declare interface _PAPProcessBase extends _Process {
    setSentPassword(s: string): void; 
    setSentUserName(s: string): void; 
    getSentPassword(): string; 
    getSentUserName(): string; 
}
declare type _PAPProcess = _PAPProcessBase;

declare interface _PPPFrameBase extends _Header {
    getAddressField(): byte; 
    setAddressField(addressField: byte): void; 
    getControlCode(): number; 
    setControlCode(controlCode: number): void; 
    getTypeCode(): number; 
    setTypeCode(typeCode: number): void; 
    getFrameCheckSequence(): number; 
    setFrameCheckSequence(n: number): void; 
}
declare type _PPPFrame = _PPPFrameBase;

declare interface _PPPProcessBase extends _PortKeepAliveProcess {
    setAuthenType(pppAuthenType: _PPPAuthenType): void; 
    getAuthenType(): _PPPAuthenType; 
    getPapProcess(): _PAPProcess; 
    getChapProcess(): _CHAPProcess; 
}
declare type _PPPProcess = _PPPProcessBase;

declare interface _PPPoeClientBase extends _Process {
    setUsername(s: string): void; 
    setPassword(s: string): void; 
    connect(s: string, s2: string): void; 
    disconnect(): void; 
}
declare type _PPPoeClient = _PPPoeClientBase;

declare interface _PPPoeHeaderBase extends _Header {
    getVersion(): byte; 
    setVersion(version: byte): void; 
    getType(): byte; 
    setType(type: byte): void; 
    getCode(): byte; 
    setCode(code: byte): void; 
    getSessionId(): number; 
    setSessionId(sessionId: number): void; 
    getLength(): number; 
    setLength(length: number): void; 
    getIpSubnet(): string; 
    setIpSubnet(ipSubnet: string): void; 
}
declare type _PPPoeHeader = _PPPoeHeaderBase;

declare interface _PacketTooBigMessageBase extends _ICMPv6Message {
    getMtu(): number; 
    setMtu(n: number): void; 
}
declare type _PacketTooBigMessage = _PacketTooBigMessageBase;

declare interface _PagpFrameBase extends _Pdu {
    getVersion(): byte; 
    setVersion(version: byte): void; 
    getMode(): _EthChannelMode; 
    setMode(mode: _EthChannelMode): void; 
    getLocalDevId(): MAC; 
    setLocalDevId(localDevId: MAC): void; 
    getLocalLearnCapability(): byte; 
    setLocalLearnCapability(localLearnCapability: byte): void; 
    getLocalPriority(): byte; 
    setLocalPriority(localPriority: byte): void; 
    getLocalPortIndex(): number; 
    setLocalPortIndex(n: number): void; 
    getLocalGroupCapability(): number; 
    setLocalGroupCapability(n: number): void; 
    getLocalGroupIndex(): number; 
    setLocalGroupIndex(n: number): void; 
    getPartnetDevId(): MAC; 
    setPartnetDevId(partnetDevId: MAC): void; 
    getPartnetLearnCapability(): byte; 
    setPartnetLearnCapability(partnetLearnCapability: byte): void; 
    getPartnetPriority(): byte; 
    setPartnetPriority(partnetPriority: byte): void; 
    getPartnetPortIndex(): number; 
    setPartnetPortIndex(n: number): void; 
    getPartnetGroupCapability(): number; 
    setPartnetGroupCapability(n: number): void; 
    getPartnetGroupIndex(): number; 
    setPartnetGroupIndex(n: number): void; 
    getPartnetCount(): byte; 
    setPartnetCount(partnetCount: byte): void; 
    getDeviceName(): string; 
    setDeviceName(deviceName: string): void; 
    getPortName(): string; 
    setPortName(portName: string): void; 
}
declare type _PagpFrame = _PagpFrameBase;

declare interface _PaletteDialogBase extends BaseClass {
    setVisible(b: boolean): void; 
    setWidgetVisible(s: string, b: boolean): void; 
    setDisabled(b: boolean): void; 
    setWidgetDisable(s: string, b: boolean): void; 
}
declare type _PaletteDialog = _PaletteDialogBase;

declare interface _PapPacketBase extends _Pdu {
    getCode(): byte; 
    setCode(code: byte): void; 
    getId(): byte; 
    setId(id: byte): void; 
    getPassword(): string; 
    setPassword(password: string): void; 
    getUsername(): string; 
    setUsername(username: string): void; 
    getRouteIp(): IP; 
    setRouteIp(routeIp: IP): void; 
}
declare type _PapPacket = _PapPacketBase;

declare interface _ParserViewBase extends BaseClass {
    setSecret(s: string): void; 
    getSecret(): string; 
    addCommand(s: string, s2: string, b: boolean, viewCommandAction: _ViewCommandAction): boolean; 
    removeCommand(s: string, s2: string, viewCommandAction: _ViewCommandAction): boolean; 
    getModeCount(): number; 
    getModeAt(n: number): string; 
    getIncludeCommandForModeCount(s: string): number; 
    incrementUserCount(): void; 
    decrementUserCount(): void; 
    getUserCount(): number; 
    isCommandAdded(s: string): boolean; 
}
declare type _ParserView = _ParserViewBase;

declare interface _ParserViewManagerBase extends _Process {
    addView(s: string): boolean; 
    removeView(s: string): boolean; 
    getViewCount(): number; 
    getViewAt(n: number): _ParserView; 
    getView(s: string): _ParserView; 
}
declare type _ParserViewManager = _ParserViewManagerBase;

declare interface _PduBase extends _Signal {
    getFieldValue(anObject: string): object; 
}
declare type _Pdu = _PduBase;

declare interface _PduGroupBase extends _Pdu {
    setPayloadPduList(): void; 
}
declare type _PduGroup = _PduGroupBase;

declare interface _PingProcessBase extends _Process {
    getDestinationIP(): IP; 
    getLastIP(): IP; 
    isBroadcast(): boolean; 
    getSentCount(): number; 
    getMinDelay(): number; 
    getMaxDelay(): number; 
    getReceivedCount(): number; 
    getLastDelay(): number; 
    getTotalDelay(): number; 
    getLastTtl(): number; 
}
declare type _PingProcess = _PingProcessBase;

declare interface _PolicyClassSetDscpBase extends BaseClass {
    getType(): _WredType; 
    isIpv4Only(): boolean; 
    getValue(): number; 
    update(wredType: _WredType, b: boolean, n: number): void; 
    toString(b: boolean): string; 
}
declare type _PolicyClassSetDscp = _PolicyClassSetDscpBase;

declare interface _PolicyMapQosClassBase extends BaseClass {
    resetBandwidth(): void; 
    setBandwidth(n: number): void; 
    getBandwidth(): number; 
    setBandwidthPercent(n: number): void; 
    getBandwidthPercent(): number; 
    setBandwidthRemainingPercent(n: number): void; 
    getBandwidthRemainingPercent(): number; 
    isBandwidthConfigured(): boolean; 
    resetQueueLimit(): void; 
    getQueueLimit(): number; 
    setQueueLimit(n: number): void; 
    getDefaultQueueLimit(): number; 
    resetPriority(): void; 
    setPriority(n: number, n2: number): void; 
    getPriority(): number; 
    setPriorityPercent(n: number, n2: number): void; 
    getPriorityPercent(): number; 
    getPriorityBurst(): number; 
    getPriorityBurstDefault(): number; 
    isPriorityConfigured(): boolean; 
    addSetDscpPrec(wredType: _WredType, b: boolean, n: number): void; 
    removeSetDscpPrec(): void; 
    getSetDscpPrec(): _PolicyClassSetDscp; 
    resetShapeAvgCir(): void; 
    setShapeAvgCir(n: number): void; 
    isShapeConfigured(): boolean; 
    getFairQueueSize(): number; 
    isFairQueueConfigured(): boolean; 
    getDefaultFairQueueSize(): number; 
    isClassDefault(): boolean; 
}
declare type _PolicyMapQosClass = _PolicyMapQosClassBase;

declare interface _PoolBase extends BaseClass {
    name(): string; 
}
declare type _Pool = _PoolBase;

declare interface _Pop3ClientBase extends _Process {}
declare type _Pop3Client = _Pop3ClientBase;

declare interface _Pop3HeaderBase extends _Header {
    getName(): string; 
    setName(name: string): void; 
    getUser(): string; 
    setUser(user: string): void; 
    getMailId(): string; 
    setMailId(mailId: string): void; 
    getPassword(): string; 
    setPassword(password: string): void; 
    getStrSmtpServer(): string; 
    setStrSmtpServer(strSmtpServer: string): void; 
    getStrPop3Server(): string; 
    setStrPop3Server(strPop3Server: string): void; 
    getHeaderType(): _Pop3HeaderType; 
    setHeaderType(headerType: _Pop3HeaderType): void; 
}
declare type _Pop3Header = _Pop3HeaderBase;

declare interface _Pop3ServerBase extends _Process {
    setEnable(b: boolean): void; 
    isEnabled(): boolean; 
}
declare type _Pop3Server = _Pop3ServerBase;

declare interface _PopupMenuBase extends BaseClass {
    count(): number; 
    getPopupMenuItemAt(n: number): _PopupMenuItem; 
    getPopupMenuItemByUuid(uuid: UUID): _PopupMenuItem; 
    getPopupMenuItemByName(s: string): _PopupMenuItem; 
    getPopupMenuItemUuid(s: string): UUID; 
    setItemVisibleUuid(uuid: UUID, b: boolean): void; 
    setItemEnabledUuid(uuid: UUID, b: boolean): void; 
    removeItemUuid(uuid: UUID): void; 
    insertItem(s: string, s2: string): UUID; 
    removeItem(s: string): void; 
    setItemVisible(s: string, b: boolean): void; 
    setItemEnabled(s: string, b: boolean): void; 
}
declare type _PopupMenu = _PopupMenuBase;

declare interface _PopupMenuItemBase extends BaseClass {
    getUuid(): UUID; 
    removeItem(): void; 
    getLabel(): string; 
    setEnabled(b: boolean): void; 
    setVisible(b: boolean): void; 
}
declare type _PopupMenuItem = _PopupMenuItemBase;

declare interface _PortKeepAliveProcessBase extends _Process {
    setKeepAliveOn(b: boolean): void; 
    isKeepAliveOn(): boolean; 
    setKeepAliveInterval(n: number): void; 
    getKeepAliveInterval(): number; 
}
declare type _PortKeepAliveProcess = _PortKeepAliveProcessBase;

declare interface _PortSecurityBase extends _Process {
    isEnabled(): boolean; 
    setEnabled(b: boolean): void; 
    setMaxMacNumber(n: number): boolean; 
    getMaxMacNumber(): number; 
    getTotalMac(): number; 
    getViolationCount(): number; 
    setViolationMode(portViolation: _PortViolation): void; 
    addSecureMacEntry(macAddress: MAC, b: boolean): boolean; 
    removeSecureMacEntry(macAddress: MAC): boolean; 
    getSecureMacCount(): number; 
    secureMacExist(macAddress: MAC): boolean; 
    getPort(): _Port; 
    isStickyOn(): boolean; 
    setStickyflag(b: boolean): void; 
}
declare type _PortSecurity = _PortSecurityBase;

declare interface _PrefixOptionBase extends _NdOption {
    getPrefixLength(): byte; 
    setPrefixLength(prefixLength: byte): void; 
    getIsOnLink(): boolean; 
    setIsOnLink(b: boolean): void; 
    getIsAutoConfig(): boolean; 
    setIsAutoConfig(b: boolean): void; 
    getValidLifetime(): number; 
    setValidLifetime(n: number): void; 
    getPreferredLifetime(): number; 
    setPreferredLifetime(n: number): void; 
    getPrefix(): IPv6; 
    setPrefix(prefix: IPv6): void; 
}
declare type _PrefixOption = _PrefixOptionBase;

declare interface _PrintDialogPT4Base extends BaseClass {
    setWidgetDisable(s: string, b: boolean): void; 
}
declare type _PrintDialogPT4 = _PrintDialogPT4Base;

declare interface _PrivilegeManagerBase extends _Process {
    addCommand(s: string, s2: string, b: boolean, n: number): boolean; 
    removeCommand(s: string, s2: string): boolean; 
    getModeCount(): number; 
    getModeAt(n: number): string; 
    getCommandForModeCount(s: string): number; 
    isCommandAdded(s: string): boolean; 
}
declare type _PrivilegeManager = _PrivilegeManagerBase;

declare interface _ProposalPayloadBase extends _IkePayload {
    getProposalNumber(): byte; 
    setProposalNumber(proposalNumber: byte): void; 
    getProposalId(): byte; 
    setProposalId(proposalId: byte): void; 
    setTransformList(): void; 
    getSpiSize(): byte; 
    setSpiSize(spiSize: byte): void; 
    getNumTransforms(): byte; 
    setNumTransforms(numTransforms: byte): void; 
    getSpi(): number; 
    setSpi(n: number): void; 
    getInSpi(): number; 
    setInSpi(n: number): void; 
}
declare type _ProposalPayload = _ProposalPayloadBase;

declare interface _RIPPacketBase extends _Pdu {
    getCommand(): byte; 
    setCommand(command: byte): void; 
    getVersion(): byte; 
    setVersion(version: byte): void; 
    getRoutingDomain(): number; 
    setRoutingDomain(routingDomain: number): void; 
    setRoutes(): void; 
    getIsRedistributed(): boolean; 
    setIsRedistributed(b: boolean): void; 
}
declare type _RIPPacket = _RIPPacketBase;

declare interface _RIPProcessBase extends _RoutingProtocol {
    setUpdateTimerInterval(n: number): void; 
    setAllRipTimerIntervals(n: number, n2: number, n3: number, n4: number): void; 
    setTimersBasicFlag(b: boolean): void; 
    setAutoSummaryFlag(b: boolean): void; 
    setDefaultPassiveInterface(b: boolean): void; 
    addRipConfigNetwork(ipAddress: IP): void; 
    removeRipConfigNetwork(ipAddress: IP): void; 
    addRipConfigNeighbor(ipAddress: IP): void; 
    removeRipConfigNeighbor(ipAddress: IP): void; 
    setDebugRipDatabaseFlag(b: boolean): void; 
    setDebugRipFlag(b: boolean): void; 
    setDebugRipEventFlag(b: boolean): void; 
    setDebugRipTriggerFlag(b: boolean): void; 
    setDefaultInformationOriginate(b: boolean): void; 
}
declare type _RIPProcess = _RIPProcessBase;

declare interface _RIPRoutePacketBase extends _Pdu {
    getAddressFamily(): byte; 
    setAddressFamily(addressFamily: byte): void; 
    getRouteTag(): byte; 
    setRouteTag(routeTag: byte): void; 
    getIpAddress(): IP; 
    setIpAddress(ipAddress: IP): void; 
    getSubnetMask(): IP; 
    setSubnetMask(subnetMask: IP): void; 
    getNextHop(): IP; 
    setNextHop(nextHop: IP): void; 
    getMetric(): number; 
    setMetric(n: number): void; 
    getIsRedistributed(): boolean; 
    setIsRedistributed(b: boolean): void; 
}
declare type _RIPRoutePacket = _RIPRoutePacketBase;

declare interface _RIPRoutingEntryBase extends _RoutingEntry {}
declare type _RIPRoutingEntry = _RIPRoutingEntryBase;

declare interface _RIPv6PacketBase extends _RIPPacket {}
declare type _RIPv6Packet = _RIPv6PacketBase;

declare interface _RIPv6RoutePacketBase extends _RIPRoutePacket {}
declare type _RIPv6RoutePacket = _RIPv6RoutePacketBase;

declare interface _RackViewBase extends BaseClass {
    setVisible(b: boolean): void; 
}
declare type _RackView = _RackViewBase;

declare interface _RadiusClientProcessBase extends _Process {
    removeFromServerVect(ipAddress: IP): void; 
    addToServerVect(ipAddress: IP, s: string, b: boolean, n: number): void; 
    getServerCount(): number; 
}
declare type _RadiusClientProcess = _RadiusClientProcessBase;

declare interface _RadiusPacketBase extends _Header {
    getCode(): byte; 
    setCode(code: byte): void; 
    getId(): number; 
    setId(n: number): void; 
    getLength(): number; 
    setLength(length: number): void; 
    getAuthenticator(): string; 
    setAuthenticator(authenticator: string): void; 
    getType(): _AttribType; 
    setType(type: _AttribType): void; 
    getAttributeLength(): byte; 
    setAttributeLength(attributeLength: byte): void; 
    getAttribValue(): string; 
    setAttribValue(attribValue: string): void; 
}
declare type _RadiusPacket = _RadiusPacketBase;

declare interface _RemoteNetworkBase extends _Device {
    connect(s: string, n: number, s2: string, s3: string): boolean; 
    disconnect(): void; 
    isConnected(): boolean; 
}
declare type _RemoteNetwork = _RemoteNetworkBase;

declare interface _RoutedSwitchPortBase extends _RouterPort {
    setSwitchPort(b: boolean): void; 
    isSwitchPort(): boolean; 
}
declare type _RoutedSwitchPort = _RoutedSwitchPortBase;

declare interface _RouterAdvertisementMessageBase extends _NdMessage {
    getCurHopLimit(): byte; 
    setCurHopLimit(curHopLimit: byte): void; 
    getIsManagedConfig(): boolean; 
    setIsManagedConfig(b: boolean): void; 
    getIsOtherConfig(): boolean; 
    setIsOtherConfig(b: boolean): void; 
    getRouterLifetime(): number; 
    setRouterLifetime(routerLifetime: number): void; 
    getReachableTime(): number; 
    setReachableTime(n: number): void; 
    getRetransTime(): number; 
    setRetransTime(n: number): void; 
}
declare type _RouterAdvertisementMessage = _RouterAdvertisementMessageBase;

declare interface _RouterSolicitationMessageBase extends _NdMessage {}
declare type _RouterSolicitationMessage = _RouterSolicitationMessageBase;

declare interface _RoutingEntryBase extends _IPCData {
    getTypeOfProtocol(): byte; 
    setTypeOfProtocol(typeOfProtocol: byte): void; 
    getNetworkId(): IP; 
    setNetworkId(networkId: IP): void; 
    getSubnetMask(): IP; 
    setSubnetMask(subnetMask: IP): void; 
    getPortName(): string; 
    setPortName(portName: string): void; 
    getNextHop(): IP; 
    setNextHop(nextHop: IP): void; 
    getAdminDistance(): number; 
    setAdminDistance(adminDistance: number): void; 
    getMetric(): number; 
    setMetric(metric: number): void; 
}
declare type _RoutingEntry = _RoutingEntryBase;

declare interface _RoutingNetworkBase extends _IPCData {
    getNetwork(): IP; 
    setNetwork(network: IP): void; 
    getSubnetMask(): IP; 
    setSubnetMask(subnetMask: IP): void; 
    setRoutingEntries(): void; 
}
declare type _RoutingNetwork = _RoutingNetworkBase;

declare interface _RoutingProcessBase extends _Process {
    clearAllRoutes(): void; 
    clearRoute(ipAddress: IP, ipAddress2: IP): void; 
    addStaticRoute(ipAddress: IP, ipAddress2: IP, ipAddress3: IP, s: string, n: number): boolean; 
    removeStaticRoute(ipAddress: IP, ipAddress2: IP, ipAddress3: IP, s: string, n: number): boolean; 
    getStaticRouteCount(): number; 
    getStaticRouteAt(n: number): _StaticRoute; 
    getRoutingTable(): _RoutingTable; 
}
declare type _RoutingProcess = _RoutingProcessBase;

declare interface _RoutingProtocolBase extends _Process {
    setAdminDistance(n: number): void; 
    getAdminDistance(): number; 
}
declare type _RoutingProtocol = _RoutingProtocolBase;

declare interface _RoutingTableBase extends _IPCData {
    setRoutingNetworks(): void; 
}
declare type _RoutingTable = _RoutingTableBase;

declare interface _RstpFrameBase extends _STPFrame {
    getProposal(): boolean; 
    setProposal(b: boolean): void; 
    getAgreement(): boolean; 
    setAgreement(b: boolean): void; 
    getPortState(): _RstpPortState; 
    setPortState(portState: _RstpPortState): void; 
    getPortRole(): _STPPortRole; 
    setPortRole(portRole: _STPPortRole): void; 
}
declare type _RstpFrame = _RstpFrameBase;

declare interface _RtpMessageBase extends _Header {
    getVersion(): number; 
    setVersion(n: number): void; 
    getType(): _RtpType; 
    setType(type: _RtpType): void; 
    getSequenceNumber(): number; 
    setSequenceNumber(n: number): void; 
}
declare type _RtpMessage = _RtpMessageBase;

declare interface _STPFrameBase extends _Pdu {
    getProtocolId(): number; 
    setProtocolId(protocolId: number): void; 
    getVersion(): byte; 
    setVersion(version: byte): void; 
    getMessageType(): _STPBpduType; 
    setMessageType(messageType: _STPBpduType): void; 
    getFlags(): byte; 
    setFlags(flags: byte): void; 
    getRootBridgeId(): _STPId; 
    setRootBridgeId(rootBridgeId: _STPId): void; 
    getRootPathCost(): number; 
    setRootPathCost(n: number): void; 
    getBridgeId(): _STPId; 
    setBridgeId(bridgeId: _STPId): void; 
    getPortId(): number; 
    setPortId(portId: number): void; 
    getMessageAge(): number; 
    setMessageAge(messageAge: number): void; 
    getMaxAge(): number; 
    setMaxAge(maxAge: number): void; 
    getHelloTime(): number; 
    setHelloTime(helloTime: number): void; 
    getForwardDelay(): number; 
    setForwardDelay(forwardDelay: number): void; 
    getVlanId(): number; 
    setVlanId(n: number): void; 
    setLengthValues(): void; 
}
declare type _STPFrame = _STPFrameBase;

declare interface _STPIdBase extends _Pdu {
    getMacAddress(): MAC; 
    setMacAddress(macAddress: MAC): void; 
    getPriority(): number; 
    setPriority(n: number): void; 
}
declare type _STPId = _STPIdBase;

declare interface _STPMainProcessBase extends _Process {
    getStpProcess(n: number): _STPProcess; 
}
declare type _STPMainProcess = _STPMainProcessBase;

declare interface _STPProcessBase extends _Process {
    getSwitchPriority(): number; 
    getRootBridgeId(): string; 
    getPortCount(): number; 
    isRootBridge(): boolean; 
    getSwitchId(): string; 
    hasPort(s: string): boolean; 
    getRootPort(): _SwitchPort; 
    getRootPathCost(): number; 
}
declare type _STPProcess = _STPProcessBase;

declare interface _STPTypeLengthValueBase extends _Pdu {
    getStpType(): number; 
    setStpType(stpType: number): void; 
    getStpLength(): number; 
    setStpLength(stpLength: number): void; 
    getStpValue(): number; 
    setStpValue(stpValue: number): void; 
}
declare type _STPTypeLengthValue = _STPTypeLengthValueBase;

declare interface _SaPayloadBase extends _IkePayload {
    getDoi(): number; 
    setDoi(n: number): void; 
    getSituation(): number; 
    setSituation(n: number): void; 
    setProposalPayloadList(): void; 
}
declare type _SaPayload = _SaPayloadBase;

declare interface _SccpMessageBase extends _Header {
    getMsgType(): _SkinnyMessageType; 
    setMsgType(msgType: _SkinnyMessageType): void; 
    getCalledNumber(): string; 
    setCalledNumber(calledNumber: string): void; 
    getCallerNumber(): string; 
    setCallerNumber(callerNumber: string): void; 
    getLineNumber(): string; 
    setLineNumber(lineNumber: string): void; 
    getSccpPort(): number; 
    setSccpPort(n: number): void; 
    getRtpPort(): number; 
    setRtpPort(n: number): void; 
    getMacAddress(): MAC; 
    setMacAddress(macAddress: MAC): void; 
    getStrIpAddress(): string; 
    setStrIpAddress(strIpAddress: string): void; 
    getState(): _CallState; 
    setState(state: _CallState): void; 
    getSystemMsg(): string; 
    setSystemMsg(systemMsg: string): void; 
}
declare type _SccpMessage = _SccpMessageBase;

declare interface _ScriptValueBase extends BaseClass {
    isBoolean(): boolean; 
    isFunction(): boolean; 
    isNull(): boolean; 
    isNumber(): boolean; 
    isObject(): boolean; 
    isUndefined(): boolean; 
    isValid(): boolean; 
    isString(): boolean; 
    isError(): boolean; 
    isArray(): boolean; 
    property(s: string): _ScriptValue; 
    toBoolean(): boolean; 
    toInt32(): number; 
    toString(): string; 
}
declare type _ScriptValue = _ScriptValueBase;

declare interface _SegmentHeaderBase extends _Header {
    getSrcPort(): number; 
    setSrcPort(srcPort: number): void; 
    getDstPort(): number; 
    setDstPort(dstPort: number): void; 
    getCheckSum(): number; 
    setCheckSum(checkSum: number): void; 
}
declare type _SegmentHeader = _SegmentHeaderBase;

declare interface _SignalBase extends _IPCData {
    populateFieldTable(): void; 
}
declare type _Signal = _SignalBase;

declare interface _SignatureCategoryBase extends BaseClass {}
declare type _SignatureCategory = _SignatureCategoryBase;

declare interface _SimFileBase extends BaseClass {
    getName(): string; 
    getPermission(): _SimFilePermission; 
    isExecutable(): boolean; 
    isWritable(): boolean; 
    isReadable(): boolean; 
    getSize(): number; 
}
declare type _SimFile = _SimFileBase;

declare interface _SlarpDataBase extends _Header {
    getCode(): number; 
    setCode(n: number): void; 
    getAddress(): IP; 
    setAddress(address: IP): void; 
    getMask(): IP; 
    setMask(mask: IP): void; 
    getUnused(): number; 
    setUnused(unused: number): void; 
    getMySeq(): number; 
    setMySeq(n: number): void; 
    getYourSeq(): number; 
    setYourSeq(n: number): void; 
    getReliability(): number; 
    setReliability(reliability: number): void; 
    getIsHdlcFrame(): boolean; 
    setIsHdlcFrame(b: boolean): void; 
}
declare type _SlarpData = _SlarpDataBase;

declare interface _SmtpClientBase extends _Process {}
declare type _SmtpClient = _SmtpClientBase;

declare interface _SmtpHeaderBase extends _Header {
    getSmtpHelloArgument(): string; 
    setSmtpHelloArgument(smtpHelloArgument: string): void; 
    getSmtpMailArgument(): string; 
    setSmtpMailArgument(smtpMailArgument: string): void; 
    getSmtpRcptArgument(): string; 
    setSmtpRcptArgument(smtpRcptArgument: string): void; 
    getSmtpDataArgument(): string; 
    setSmtpDataArgument(smtpDataArgument: string): void; 
    getMailsubject(): string; 
    setMailsubject(mailsubject: string): void; 
    getDate(): string; 
    setDate(date: string): void; 
    getTime(): string; 
    setTime(time: string): void; 
    getSmtpUserPassword(): string; 
    setSmtpUserPassword(smtpUserPassword: string): void; 
    getHeaderType(): _SmtpHeaderType; 
    setHeaderType(headerType: _SmtpHeaderType): void; 
}
declare type _SmtpHeader = _SmtpHeaderBase;

declare interface _SmtpServerBase extends _Process {
    setEnable(b: boolean): void; 
    isEnabled(): boolean; 
    getServerDomainName(): string; 
    setServerDomainName(s: string): void; 
}
declare type _SmtpServer = _SmtpServerBase;

declare interface _SnapLLCHeaderBase extends _LLCHeader {
    getOrgCode(): number; 
    setOrgCode(n: number): void; 
    getProtocolId(): number; 
    setProtocolId(n: number): void; 
}
declare type _SnapLLCHeader = _SnapLLCHeaderBase;

declare interface _SnmpAgentBase extends _Process {
    removeCommunity(s: string): boolean; 
    addCommunity(s: string, access: _Access): void; 
    getCommunityCount(): number; 
    isEnabled(): boolean; 
    setEnabled(b: boolean): void; 
}
declare type _SnmpAgent = _SnmpAgentBase;

declare interface _SnmpHeaderBase extends _Header {
    getVersion(): number; 
    setVersion(n: number): void; 
    getCommunity(): string; 
    setCommunity(community: string): void; 
}
declare type _SnmpHeader = _SnmpHeaderBase;

declare interface _SnmpPduBase extends _Pdu {
    getPduType(): _SnmpPduType; 
    setPduType(pduType: _SnmpPduType): void; 
    getRequestId(): number; 
    setRequestId(n: number): void; 
    getErrorStatus(): _SnmpError; 
    setErrorStatus(errorStatus: _SnmpError): void; 
    getErrorIndex(): number; 
    setErrorIndex(n: number): void; 
    getSize(): number; 
    setSize(n: number): void; 
    setVarBindings(): void; 
}
declare type _SnmpPdu = _SnmpPduBase;

declare interface _SshAuthPacketBase extends _SshPacket {
    getAuthenticationKey(): string; 
    setAuthenticationKey(authenticationKey: string): void; 
}
declare type _SshAuthPacket = _SshAuthPacketBase;

declare interface _SshPacketBase extends _TelnetPacket {
    getVersion(): _SshVersion; 
    setVersion(version: _SshVersion): void; 
}
declare type _SshPacket = _SshPacketBase;

declare interface _SshServerProcessBase extends _TelnetServerProcess {
    setVersion(sshVersion: _SshVersion): void; 
    getVersion(): _SshVersion; 
    isUsernameReceived(): boolean; 
    usernameReceived(b: boolean): void; 
    setRetryAmount(n: number): void; 
    getRetryAmount(): number; 
    setAuthTimeout(n: number): void; 
    getAuthTimeout(): number; 
}
declare type _SshServerProcess = _SshServerProcessBase;

declare interface _StaticMacBase extends _IPCData {
    getMacAddress(): MAC; 
    setMacAddress(macAddress: MAC): void; 
    getVlanId(): number; 
    setVlanId(vlanId: number): void; 
    getPort(): string; 
    setPort(port: string): void; 
}
declare type _StaticMac = _StaticMacBase;

declare interface _StaticRouteBase extends _RoutingEntry {}
declare type _StaticRoute = _StaticRouteBase;

declare interface _StringPoolBase extends _Pool {
    valuesToString(): string; 
}
declare type _StringPool = _StringPoolBase;

declare interface _SyslogEntryBase extends _Header {
    getDate(): string; 
    setDate(date: string): void; 
    getTime(): string; 
    setTime(time: string): void; 
    getHostIpAddress(): IP; 
    setHostIpAddress(hostIpAddress: IP): void; 
    getPriority(): number; 
    setPriority(n: number): void; 
    getMessage(): string; 
    setMessage(message: string): void; 
}
declare type _SyslogEntry = _SyslogEntryBase;

declare interface _SyslogServerBase extends _Process {
    setEnable(b: boolean): void; 
    isEnabled(): boolean; 
    setPortNumber(n: number): void; 
    getPortNumber(): number; 
}
declare type _SyslogServer = _SyslogServerBase;

declare interface _TFTPDataBase extends _TFTPResponse {
    getData(): _FileContent; 
    setData(data: _FileContent): void; 
}
declare type _TFTPData = _TFTPDataBase;

declare interface _TFTPErrorBase extends _TFTPHeader {
    getErrorCode(): _TFTPErrorCode; 
    setErrorCode(errorCode: _TFTPErrorCode): void; 
    getErrorMsg(): string; 
    setErrorMsg(errorMsg: string): void; 
}
declare type _TFTPError = _TFTPErrorBase;

declare interface _TFTPHeaderBase extends _Pdu {
    getType(): _TFTPType; 
    setType(type: _TFTPType): void; 
}
declare type _TFTPHeader = _TFTPHeaderBase;

declare interface _TFTPRequestBase extends _TFTPHeader {
    getFileName(): string; 
    setFileName(fileName: string): void; 
}
declare type _TFTPRequest = _TFTPRequestBase;

declare interface _TFTPResponseBase extends _TFTPHeader {
    getBlockNo(): number; 
    setBlockNo(n: number): void; 
}
declare type _TFTPResponse = _TFTPResponseBase;

declare interface _TFTPServerBase extends _Process {
    setEnabled(b: boolean): void; 
    isEnabled(): boolean; 
}
declare type _TFTPServer = _TFTPServerBase;

declare interface _TacacsClientProcessBase extends _Process {
    removeFromServerVect(ipAddress: IP): void; 
    addToServerVect(ipAddress: IP, s: string, b: boolean): void; 
    getServerCount(): number; 
}
declare type _TacacsClientProcess = _TacacsClientProcessBase;

declare interface _TacacsPacketBase extends _Header {
    getMajorVersion(): number; 
    setMajorVersion(majorVersion: number): void; 
    getMinorVersion(): number; 
    setMinorVersion(minorVersion: number): void; 
    getType(): number; 
    setType(type: number): void; 
    getM_seqNo(): number; 
    setM_seqNo(seqNo: number): void; 
    getM_flags(): number; 
    setM_flags(flags: number): void; 
    getM_sessionId(): number; 
    setM_sessionId(n: number): void; 
    getM_length(): number; 
    setM_length(n: number): void; 
    getAttribType(): _AttribType; 
    setAttribType(attribType: _AttribType): void; 
    getLength(): byte; 
    setLength(length: byte): void; 
    getAttribValue(): string; 
    setAttribValue(attribValue: string): void; 
}
declare type _TacacsPacket = _TacacsPacketBase;

declare interface _TcpHeaderBase extends _SegmentHeader {
    getSeqNumber(): number; 
    setSeqNumber(n: number): void; 
    getAckNumber(): number; 
    setAckNumber(n: number): void; 
    getDataOffset(): byte; 
    setDataOffset(dataOffset: byte): void; 
    getReserved(): byte; 
    setReserved(reserved: byte): void; 
    getControlBits(): byte; 
    setControlBits(controlBits: byte): void; 
    getWindowSize(): number; 
    setWindowSize(windowSize: number): void; 
    getUrgentPtr(): number; 
    setUrgentPtr(urgentPtr: number): void; 
    setOptions(): void; 
    getPayloadSize(): number; 
    setPayloadSize(n: number): void; 
}
declare type _TcpHeader = _TcpHeaderBase;

declare interface _TcpOptionBase extends _Pdu {
    getKind(): _TcpOptionKind; 
    setKind(kind: _TcpOptionKind): void; 
}
declare type _TcpOption = _TcpOptionBase;

declare interface _TcpOptionMSSBase extends _TcpOption {
    getLength(): byte; 
    setLength(length: byte): void; 
    getMaxSegmentSize(): number; 
    setMaxSegmentSize(maxSegmentSize: number): void; 
}
declare type _TcpOptionMSS = _TcpOptionMSSBase;

declare interface _TcpProcessBase extends _Process {
    getUserDefinedMSS(): number; 
    setUserDefinedMSS(n: number): void; 
    getUserDefinedWindowSize(): number; 
    isNagleEnabled(): boolean; 
    setNagleEnabled(b: boolean): void; 
    getNagleWaitingInterval(): number; 
    setNagleWaitingInterval(n: number): void; 
}
declare type _TcpProcess = _TcpProcessBase;

declare interface _TelephonyServiceBase extends BaseClass {
    setAutoRegistration(b: boolean): void; 
    isAutoRegEnabled(): boolean; 
    setMaxEphone(n: number): void; 
    getMaxEphoneNumber(): number; 
    setMaxDnNumber(n: number): void; 
    getMaxDnNumber(): number; 
    setSourcePort(n: number): void; 
    getSourcePort(): number; 
    setSystemMessage(s: string): void; 
    setAutoAssign(n: number, n2: number): void; 
    getAutoAssignCount(): number; 
    getAutoAssignStartDnAt(n: number): number; 
    getAutoAssignStopDnAt(n: number): number; 
}
declare type _TelephonyService = _TelephonyServiceBase;

declare interface _TelnetClientProcessBase extends _Process {
    getDestination(): IP; 
    disconnect(): void; 
}
declare type _TelnetClientProcess = _TelnetClientProcessBase;

declare interface _TelnetPacketBase extends _Pdu {
    getData(): string; 
    setData(data: string): void; 
    getEcho(): boolean; 
    setEcho(b: boolean): void; 
    getPromptSize(): number; 
    setPromptSize(n: number): void; 
}
declare type _TelnetPacket = _TelnetPacketBase;

declare interface _TelnetServerProcessBase extends _Process {
    getTelnetClientCount(): number; 
}
declare type _TelnetServerProcess = _TelnetServerProcessBase;

declare interface _TextFileContentBase extends _FileContent {
    getText(): string; 
    setText(text: string): void; 
}
declare type _TextFileContent = _TextFileContentBase;

declare interface _TimedAsExternalLSABase extends _IPCData {
    getLsa(): _OSPFAsExternalLSA; 
    setLsa(lsa: _OSPFAsExternalLSA): void; 
}
declare type _TimedAsExternalLSA = _TimedAsExternalLSABase;

declare interface _TimedNetworkLSABase extends _IPCData {
    getLsa(): _OSPFNetworkLSA; 
    setLsa(lsa: _OSPFNetworkLSA): void; 
}
declare type _TimedNetworkLSA = _TimedNetworkLSABase;

declare interface _TimedRouterLSABase extends _IPCData {
    getLsa(): _OSPFRouterLSA; 
    setLsa(lsa: _OSPFRouterLSA): void; 
}
declare type _TimedRouterLSA = _TimedRouterLSABase;

declare interface _TimedSummaryLSABase extends _IPCData {
    getLsa(): _OSPFSummaryLSA; 
    setLsa(lsa: _OSPFSummaryLSA): void; 
}
declare type _TimedSummaryLSA = _TimedSummaryLSABase;

declare interface _TimedType7LSABase extends _IPCData {
    getLsa(): _OSPFType7LSA; 
    setLsa(lsa: _OSPFType7LSA): void; 
}
declare type _TimedType7LSA = _TimedType7LSABase;

declare interface _TraceRouteProcessBase extends _Process {
    getLastIP(): IP; 
    getSentCount(): number; 
    getTimeout(): number; 
    getLastDelay(): number; 
}
declare type _TraceRouteProcess = _TraceRouteProcessBase;

declare interface _TransformPayloadBase extends _IkePayload {
    getTransformNumber(): byte; 
    setTransformNumber(transformNumber: byte): void; 
    getTransformId(): byte; 
    setTransformId(transformId: byte): void; 
    getSpiSize(): byte; 
    setSpiSize(spiSize: byte): void; 
    getDhGroupNumber(): number; 
    setDhGroupNumber(n: number): void; 
    getLifetime(): number; 
    setLifetime(n: number): void; 
    getBitNumber(): number; 
    setBitNumber(n: number): void; 
    getAuthenticationType(): number; 
    setAuthenticationType(n: number): void; 
    getEncryptionAlgorithm(): number; 
    setEncryptionAlgorithm(n: number): void; 
    getHashAlgorithm(): number; 
    setHashAlgorithm(n: number): void; 
}
declare type _TransformPayload = _TransformPayloadBase;

declare interface _TransformSetBase extends BaseClass {
    setTransformName(s: string): void; 
    getTransformName(): string; 
}
declare type _TransformSet = _TransformSetBase;

declare interface _TreeNodeBase extends BaseClass {
    getNodeId(): string; 
    getNodeName(): string; 
    getNodeValue(): string; 
    getParentNode(): _TreeNode; 
    getChildCount(): number; 
    getCheckType(): number; 
    getChildNodeAt(n: number): _TreeNode; 
    getChildNodeBy(s: string): _TreeNode; 
    getCheckOnlyTree(): _TreeNode; 
    getIncorrectFeedback(): string; 
    setIncorrectFeedback(s: string): void; 
    getLeafCount(): number; 
    getCheckLeafCount(): number; 
    isVariableEnabled(): boolean; 
    getVariableName(): string; 
    setCheck(b: boolean): void; 
    getComparatorClass(): _ComparatorClass; 
    setNodeName(s: string): void; 
    setNodeValue(s: string): void; 
    getLeafCountByComponent(s: string): number; 
    getCheckLeafCountByComponent(s: string): number; 
    getCheckLeafPoints(): number; 
}
declare type _TreeNode = _TreeNodeBase;

declare interface _TvDataBase extends _TextFileContent {}
declare type _TvData = _TvDataBase;

declare interface _TvHeaderBase extends _Header {
    getFileLocation(): string; 
    setFileLocation(fileLocation: string): void; 
    getTvData(): _TvData; 
    setTvData(tvData: _TvData): void; 
}
declare type _TvHeader = _TvHeaderBase;

declare interface _UdpHeaderBase extends _SegmentHeader {
    getLength(): number; 
    setLength(n: number): void; 
}
declare type _UdpHeader = _UdpHeaderBase;

declare interface _UdpProcessBase extends _Process {
    getHigherProcess(n: number): _Process; 
}
declare type _UdpProcess = _UdpProcessBase;

declare interface _UserProfileBase extends BaseClass {
    getName(): string; 
    getEmail(): string; 
    getAddInfo(): string; 
    setName(s: string): void; 
    setEmail(s: string): void; 
    setAddInfo(s: string): void; 
}
declare type _UserProfile = _UserProfileBase;

declare interface _UserTrafficBase extends BaseClass {
    getTrafficColorCode(): number; 
    getTrafficTypeString(): string; 
    getSourceDevice(): _Device; 
    getDestinationDevice(): _Device; 
    getPdu(): _Pdu; 
    getSendPort(): _Port; 
    getCanonicalSource(): string; 
    getCanonicalDestination(): string; 
    getStatus(): _TrafficStatus; 
    getTestCondition(): _TrafficStatus; 
    getPoints(): number; 
    getPduSize(): number; 
}
declare type _UserTraffic = _UserTrafficBase;

declare interface _VLANBase extends BaseClass {
    getName(): string; 
    getMacTable(): _MACTable; 
    isDefault(): boolean; 
    getVlanNumber(): number; 
}
declare type _VLAN = _VLANBase;

declare interface _VLANManagerBase extends _Process {
    getVlan(n: number): _VLAN; 
    getVlanAt(n: number): _VLAN; 
    addVlan(n: number, s: string): boolean; 
    removeVlan(n: number): boolean; 
    getVlanCount(): number; 
    getMaxVlans(): number; 
    getVlanByName(s: string): _VLAN; 
    changeVlanName(n: number, s: string): boolean; 
    addVlanInt(n: number): boolean; 
    removeVlanInt(n: number): boolean; 
    getVlanInt(n: number): _RouterPort; 
    getVlanIntAt(n: number): _RouterPort; 
    getVlanIntCount(): number; 
}
declare type _VLANManager = _VLANManagerBase;

declare interface _VTPFrameBase extends _Pdu {
    getVersion(): byte; 
    setVersion(version: byte): void; 
    getCode(): byte; 
    setCode(code: byte): void; 
    getDomainName(): string; 
    setDomainName(domainName: string): void; 
}
declare type _VTPFrame = _VTPFrameBase;

declare interface _VTPProcessBase extends _Process {
    setDomainName(s: string): void; 
    getDomainName(): string; 
    setMode(vtpMode: _VTPMode): void; 
    getMode(): _VTPMode; 
    setVersion(b: byte): void; 
    getVersion(): byte; 
    setPassword(s: string): void; 
    getPassword(): string; 
    getConfigRevision(): number; 
}
declare type _VTPProcess = _VTPProcessBase;

declare interface _VTPRequestFrameBase extends _VTPFrame {
    getStartValue(): number; 
    setStartValue(n: number): void; 
}
declare type _VTPRequestFrame = _VTPRequestFrameBase;

declare interface _VTPSubsetFrameBase extends _VTPFrame {
    getSequence(): byte; 
    setSequence(sequence: byte): void; 
    getConfigRevision(): number; 
    setConfigRevision(n: number): void; 
    setVlanInfos(): void; 
}
declare type _VTPSubsetFrame = _VTPSubsetFrameBase;

declare interface _VTPSummaryFrameBase extends _VTPFrame {
    getFollowers(): byte; 
    setFollowers(followers: byte): void; 
    getConfiRevision(): number; 
    setConfiRevision(n: number): void; 
    getUpdaterIp(): IP; 
    setUpdaterIp(updaterIp: IP): void; 
    getUpdateTimeStamp(): string; 
    setUpdateTimeStamp(updateTimeStamp: string): void; 
}
declare type _VTPSummaryFrame = _VTPSummaryFrameBase;

declare interface _VTPVlanInfoBase extends _Pdu {
    getStatus(): byte; 
    setStatus(status: byte): void; 
    getVlanType(): byte; 
    setVlanType(vlanType: byte): void; 
    getVlanId(): number; 
    setVlanId(vlanId: number): void; 
    getVlanName(): string; 
    setVlanName(vlanName: string): void; 
}
declare type _VTPVlanInfo = _VTPVlanInfoBase;

declare interface _VarBindingsBase extends _Pdu {
    getOidString(): string; 
    setOidString(oidString: string): void; 
    getOidNumber(): string; 
    setOidNumber(oidNumber: string): void; 
    getType(): _SmiType; 
    setType(type: _SmiType): void; 
    getValue(): string; 
    setValue(value: string): void; 
}
declare type _VarBindings = _VarBindingsBase;

declare interface _VariableBase extends BaseClass {
    name(): string; 
    valueToString(): string; 
    getPool(): _Pool; 
    getType(): _VariableType; 
}
declare type _Variable = _VariableBase;

declare interface _VariableManagerBase extends BaseClass {
    getVariableSize(): number; 
    getVariable(n: number): _Variable; 
    getNumberPoolSize(): number; 
    getStringPoolSize(): number; 
    getIpPoolSize(): number; 
    getNumberPoolAt(n: number): _Pool; 
    getStringPoolAt(n: number): _Pool; 
    getIpPoolAt(n: number): _Pool; 
}
declare type _VariableManager = _VariableManagerBase;

declare interface _VariableSizePduBase extends _Pdu {
    getDataSize(): number; 
    setDataSize(n: number): void; 
}
declare type _VariableSizePdu = _VariableSizePduBase;

declare interface _VendorIdPayloadBase extends _IkePayload {
    getVendorId(): number; 
    setVendorId(n: number): void; 
}
declare type _VendorIdPayload = _VendorIdPayloadBase;

declare interface _VirtualLineBase extends _TerminalLine {}
declare type _VirtualLine = _VirtualLineBase;

declare interface _VirtualTemplateInterfaceBase extends _RouterPort {
    setHostName(s: string): void; 
    getHostName(): string; 
    setPassword(s: string): void; 
    getPassword(): string; 
    setDefaultIpPoolName(s: string): void; 
    getDefaultIpPoolName(): string; 
    getAuthenProtocol(): _Auth; 
    setAuthenProtocol(auth: _Auth): void; 
    getIpUnNumberedInt(): _RouterPort; 
}
declare type _VirtualTemplateInterface = _VirtualTemplateInterfaceBase;

declare interface _VirtualTemplateManagerBase extends _Process {
    addVirtualTempIntByNum(n: number): void; 
    removeVirtualTempByNum(n: number): void; 
    getVirtualTempIntByNum(n: number): _VirtualTemplateInterface; 
    getIntCount(): number; 
    getIntAt(n: number): _VirtualTemplateInterface; 
    addVpdnGroupByName(s: string): void; 
    removeVpdnGroupByName(s: string): void; 
    getVpdnGroupByName(s: string): _VpdnGroup; 
    getVpdnGroupCount(): number; 
    getVpdnGroupAt(n: number): _VpdnGroup; 
    setVpdnEnable(b: boolean): void; 
    isVpdnEnable(): boolean; 
}
declare type _VirtualTemplateManager = _VirtualTemplateManagerBase;

declare interface _VpdnGroupBase extends BaseClass {
    setDialIn(b: boolean): void; 
    isDialIn(): boolean; 
    setProtocolPppoe(b: boolean): void; 
    isProtocolPppoe(): boolean; 
    setGroupName(s: string): void; 
    getGroupName(): string; 
    getVirtualTempInt(): _VirtualTemplateInterface; 
}
declare type _VpdnGroup = _VpdnGroupBase;

declare interface _WEPProcessBase extends _Process {
    setKey(s: string): void; 
    getKey(): string; 
}
declare type _WEPProcess = _WEPProcessBase;

declare interface _WPAProcessBase extends _WEPProcess {}
declare type _WPAProcess = _WPAProcessBase;

declare interface _WebViewBase extends BaseClass {
    getWebViewId(): UUID; 
    evaluateJavaScript(s: string): string; 
    evaluateJavaScriptAsync(s: string): void; 
    setHtml(s: string): void; 
    setUrl(s: string): void; 
    show(): void; 
    hide(): void; 
    setWindowTitle(s: string): void; 
    setGeometry(n: number, n2: number, n3: number, n4: number): void; 
    setWindowFlags(windowFlags: _WindowFlags): void; 
    setWindowModality(windowModality: _WindowModality): void; 
    setCanClose(b: boolean): void; 
}
declare type _WebView = _WebViewBase;

declare interface _WirelessClientProcessBase extends _WirelessCommon {
    addProfile(s: string, s2: string, wirelessNetworkType: _WirelessNetworkType, macAddress: MAC, wirelessAuthenType: _WirelessAuthenType, wirelessEncryptType: _WirelessEncryptType, s3: string, s4: string, s5: string, b: boolean, ipAddress: IP, ipAddress2: IP, ipAddress3: IP, ipAddress4: IP): boolean; 
    deleteProfile(s: string): boolean; 
    getProfile(s: string): _WirelessProfile; 
    getProfileCount(): number; 
    getProfileAt(n: number): _WirelessProfile; 
    getCurrentProfile(): _WirelessProfile; 
    setCurrentProfile(s: string, s2: string, wirelessNetworkType: _WirelessNetworkType, macAddress: MAC, wirelessAuthenType: _WirelessAuthenType, wirelessEncryptType: _WirelessEncryptType, s3: string, s4: string, s5: string, b: boolean, ipAddress: IP, ipAddress2: IP, ipAddress3: IP, ipAddress4: IP): boolean; 
    getCurrentNetworkCount(): number; 
    getCurrentNetworkAt(n: number): _WirelessProfile; 
    getCurrentApMac(): MAC; 
}
declare type _WirelessClientProcess = _WirelessClientProcessBase;

declare interface _WirelessCommonBase extends _Process {
    getAuthenType(): _WirelessAuthenType; 
    setSsid(s: string): void; 
    getSsid(): string; 
    getNetworkType(): _WirelessNetworkType; 
    setPort(s: string): boolean; 
    getPort(): _Port; 
    getWepProcess(): _WEPProcess; 
    resetAllAssociations(): void; 
}
declare type _WirelessCommon = _WirelessCommonBase;

declare interface _WirelessHeaderBase extends _Header {
    getFrameControl(): number; 
    setFrameControl(frameControl: number): void; 
    getDuration(): number; 
    setDuration(duration: number): void; 
    getId(): number; 
    setId(id: number): void; 
    getMacAddress1(): MAC; 
    setMacAddress1(macAddress1: MAC): void; 
    getMacAddress2(): MAC; 
    setMacAddress2(macAddress2: MAC): void; 
    getMacAddress3(): MAC; 
    setMacAddress3(macAddress3: MAC): void; 
    getSequenceControl(): number; 
    setSequenceControl(sequenceControl: number): void; 
    getMacAddress4(): MAC; 
    setMacAddress4(macAddress4: MAC): void; 
    getCrc(): number; 
    setCrc(n: number): void; 
}
declare type _WirelessHeader = _WirelessHeaderBase;

declare interface _WirelessProfileBase extends _IPCData {
    getName(): string; 
    setName(name: string): void; 
    getSsid(): string; 
    setSsid(ssid: string): void; 
    getNetworkType(): _WirelessNetworkType; 
    setNetworkType(networkType: _WirelessNetworkType): void; 
    getRadioBand(): _WirelessRadioBand; 
    setRadioBand(radioBand: _WirelessRadioBand): void; 
    getMacAddress(): MAC; 
    setMacAddress(macAddress: MAC): void; 
    getStrength(): number; 
    setStrength(strength: number): void; 
    getHAPAuthenType(): _WirelessAuthenType; 
    setHAPAuthenType(hapAuthenType: _WirelessAuthenType): void; 
    getKey(): string; 
    setKey(key: string): void; 
    getIsDhcpEnabled(): boolean; 
    setIsDhcpEnabled(isDhcpEnabled: boolean): void; 
    getIpAddress(): IP; 
    setIpAddress(ipAddress: IP): void; 
    getSubnetMask(): IP; 
    setSubnetMask(subnetMask: IP): void; 
    getDefaultGateway(): IP; 
    setDefaultGateway(defaultGateway: IP): void; 
    getDnsServer(): IP; 
    setDnsServer(dnsServer: IP): void; 
}
declare type _WirelessProfile = _WirelessProfileBase;

declare interface _WirelessRouterBase extends _Router {
    setDefaultGateway(ipAddress: IP): void; 
    setInternetConnectionType(internetConnectionType: _InternetConnectionType): void; 
    getInternetConnectionType(): _InternetConnectionType; 
    getDefaultGateway(): IP; 
    setRemoteManagementEnable(b: boolean): void; 
    isRemoteManagementEnable(): boolean; 
    addNatEntry(s: string, n: number, n2: number, linksysProtocol: _LinksysProtocol, ipAddress: IP, b: boolean): void; 
    removeNatEntry(s: string, n: number, n2: number, linksysProtocol: _LinksysProtocol, ipAddress: IP, b: boolean): void; 
    removeAllNatEntries(): void; 
    getNatEntryCount(): number; 
    getNatEntryAt(n: number): _NATConfigEntry; 
    setFirmwareVersion(s: string): void; 
    getFirmwareVersion(): string; 
    setDMZEntry(b: boolean, ipAddress: IP): void; 
    removeDMZEntry(): void; 
}
declare type _WirelessRouter = _WirelessRouterBase;

declare interface _ZfwProcessBase extends _Process {
    getZoneNameCount(): number; 
    getZoneNameAt(n: number): _Zone; 
    getZonePairCount(): number; 
    getZonePairEntryAt(n: number): _ZonePair; 
    getZonePairNameAt(n: number): string; 
}
declare type _ZfwProcess = _ZfwProcessBase;

declare interface _ZoneBase extends BaseClass {
    getZoneName(): string; 
    setZone(s: string): void; 
}
declare type _Zone = _ZoneBase;

declare interface _ZonePairBase extends BaseClass {
    getSrcZone(): string; 
    getDestZone(): string; 
    setSrcZone(s: string): void; 
    setDestZone(s: string): void; 
    getPolicyMap(): string; 
    setPolicyMap(s: string): void; 
}
declare type _ZonePair = _ZonePairBase;

declare interface _BaseUIBase extends BaseClass {
    /** Zamezí interakci ((nejspíše) bez změny vzhledu) */
    setDisabled(value: boolean): void; 
    setVisible(value: boolean): void; 
    setWidgetDisable(_: string, __: boolean): void; 
    setWidgetVisible(_: string, __: boolean): void; 
}
declare type _BaseUI = _BaseUIBase;

declare interface _BluetoothManagerBase extends BaseClass {
    acceptPairRequest(..._: unknown[]): unknown; 
    broadcastBeacon(..._: unknown[]): unknown; 
    createCustomProcess(..._: unknown[]): unknown; 
    deleteCustomProcess(..._: unknown[]): unknown; 
    discover(..._: unknown[]): unknown; 
    enableBroadcast(..._: unknown[]): unknown; 
    getBeaconData(..._: unknown[]): unknown; 
    getBeaconFrequency(..._: unknown[]): unknown; 
    getBeaconUuid(..._: unknown[]): unknown; 
    getDevice(..._: unknown[]): unknown; 
    getDeviceAt(..._: unknown[]): unknown; 
    getDeviceByName(..._: unknown[]): unknown; 
    getDeviceCount(): number; 
    getOwnerDevice(..._: unknown[]): unknown; 
    isBeaconBroadcasting(..._: unknown[]): unknown; 
    isBroadcastEnabled(..._: unknown[]): unknown; 
    isDiscoverable(..._: unknown[]): unknown; 
    pair(..._: unknown[]): unknown; 
    setBeaconBroadcasting(..._: unknown[]): unknown; 
    setBeaconData(..._: unknown[]): unknown; 
    setBeaconFrequency(..._: unknown[]): unknown; 
    setBeaconUuid(..._: unknown[]): unknown; 
    setDiscoverable(..._: unknown[]): unknown; 
    unpair(..._: unknown[]): unknown; 
}
declare type _BluetoothManager = _BluetoothManagerBase;

declare interface _CacheFlowDatabaseBase extends BaseClass {
    getAgerPolls(..._: unknown[]): unknown; 
    getDistributionTable(..._: unknown[]): unknown; 
    getFlowSummaryTable(..._: unknown[]): unknown; 
    getTotalFlowCount(): number; 
    incrementFlow(..._: unknown[]): unknown; 
    reset(..._: unknown[]): unknown; 
}
declare type _CacheFlowDatabase = _CacheFlowDatabaseBase;

declare interface _ClusterBase extends BaseClass {
    getCenterXCoordinate(): number; 
    getCenterYCoordinate(): number; 
    getChildClusterAt(index: number): _Cluster | null; 
    getChildClusterCount(): number; 
    getIconPath(): string; 
    getId(): string; 
    getName(): string; 
    getParentCluster(): _Cluster | null; 
    getXCoordinate(): number; 
    getYCoordinate(): number; 
    moveToLocation(x: number, y: number): void; 
    moveToLocationCentered(x: number, y: number): void; 
    setIconPath(value: string): void; 
    setName(value: string): void; 
}
/**
 * Všechny metody na souřadnice (vč. "moveTo" metod) + "getParrentCluster" dokáží crashnout PT, pokud se volají na root clusteru.
 * PT totiž očividně plně neinicializuje root cluster, dokud nemusí a zmiňované metody prostě PT zabijí.
 * Poté, co se root cluster inicializuje (např. otevřením cluster dialogu) vše funguje v pořádku.
 * Pozn.: Myšlenka neinicializovaného clusteru je moje domněnka a ve skutečnosti tomu může být jinak.
 */
declare type _Cluster = _ClusterBase;

declare interface _ConsolePortBase extends _Port {
    getTerminalLine(): _ConsoleLine; 
}
declare type _ConsolePort = _ConsolePortBase;

declare interface _CsmaCdProcessBase extends BaseClass {
    getKeepAliveInterval(): number; 
    getPacketCnt(): number; 
    getUserTrafficAt(index: number): unknown; 
    isKeepAliveOn(): boolean; 
    setKeepAliveInterval(value: number): void; 
    setKeepAliveOn(value: boolean): void; 
}
declare type _CsmaCdProcess = _CsmaCdProcessBase;

declare interface _DeviceDescriptorBase extends BaseClass {
    addRequiredScriptModule(..._: unknown[]): unknown; 
    addSpecifiedModel(..._: unknown[]): unknown; 
    addSupportedModuleType(..._: unknown[]): unknown; 
    getModel(): string; 
    getRequiredScriptModuleAt(..._: unknown[]): unknown; 
    getRequiredScriptModuleCount(): number; 
    getRootModule(): _ModuleDescriptor; 
    getSpecifiedModelAt(..._: unknown[]): unknown; 
    getSpecifiedModelCount(): number; 
    getSupportedModuleTypeAt(..._: unknown[]): unknown; 
    getSupportedModuleTypeCount(): number; 
    getType(): number; 
    isExistSpecifiedModel(_: string): boolean; 
    isModelSupported(): boolean; 
    isModuleTypeSupported(..._: unknown[]): unknown; 
    removeRequiredScriptModule(..._: unknown[]): unknown; 
    removeSpecifiedModel(..._: unknown[]): unknown; 
    removeSupportedModuleType(..._: unknown[]): unknown; 
    setModelSupportedFlag(value: boolean): void; 
}
declare type _DeviceDescriptor = _DeviceDescriptorBase;

declare interface _DeviceFactoryBase extends BaseClass {
    getAvailableDeviceAt(index: number): _DeviceDescriptor; 
    getAvailableDeviceCount(): number; 
    getAvailableDeviceForTypeAt(..._: unknown[]): unknown; 
    getAvailableDeviceForTypeCount(..._: unknown[]): unknown; 
    getDescriptor(_: number, __: string): unknown | null; 
}
declare type _DeviceFactory = _DeviceFactoryBase;

declare interface _FifoQueueBase extends BaseClass {
    getQueueAt(..._: unknown[]): unknown; 
    getQueueCount(): number; 
    getQueueType(..._: unknown[]): unknown; 
}
declare type _FifoQueue = _FifoQueueBase;

declare interface _FileBase extends BaseClass {
    getAbsPath(): string; 
    getContent(_: boolean): { pduSize: number, pduType: pduType | string }; 
    getName(): string; 
    getParent(): _Directory | null; 
    getPermission(): number; 
    getSize(): number; 
    isDirectory(): boolean; 
    isExecutable(): boolean; 
    isReadable(): boolean; 
    isWritable(): boolean; 
    setTextContent(content: string, _: boolean): void; 
}
declare type _File = _FileBase;

declare interface _FlowMonitorBase extends BaseClass {
    getActiveFlowCount(): number; 
    getActiveTimeoutCount(): number; 
    getCacheDatabase(..._: unknown[]): unknown; 
    getCurrentEntryCount(): number; 
    getExporterAt(..._: unknown[]): unknown; 
    getExporterCount(): number; 
    getFlowsAddedCount(): number; 
    getFlowsAgedCount(): number; 
    getHighWaterMark(..._: unknown[]): unknown; 
    getInactiveTimeoutCount(): number; 
    getInterfaceInput(..._: unknown[]): unknown; 
    getInterfaceOutput(..._: unknown[]): unknown; 
    getMonitorDataAt(..._: unknown[]): unknown; 
    getMonitorDataCount(): number; 
    getMonitorName(..._: unknown[]): unknown; 
    getRecord(..._: unknown[]): unknown; 
    getTotalFlowAdded(..._: unknown[]): unknown; 
    monitorInUse(..._: unknown[]): unknown; 
    toString(..._: unknown[]): unknown; 
    unsetRecord(..._: unknown[]): unknown; 
}
declare type _FlowMonitor = _FlowMonitorBase;

declare interface _FlowMonitorManagerBase extends BaseClass {
    createMonitor(..._: unknown[]): unknown; 
    getMonitor(..._: unknown[]): unknown; 
    getMonitorAt(..._: unknown[]): unknown; 
    getMonitorCount(): number; 
    removeMonitor(..._: unknown[]): unknown; 
}
declare type _FlowMonitorManager = _FlowMonitorManagerBase;

declare interface _FlowRecordManagerBase extends BaseClass {
    createRecord(..._: unknown[]): unknown; 
    getRecord(..._: unknown[]): unknown; 
    getRecordAt(..._: unknown[]): unknown; 
    getRecordCount(): number; 
    removeRecord(..._: unknown[]): unknown; 
}
declare type _FlowRecordManager = _FlowRecordManagerBase;

declare interface _HardwareFactoryBase extends BaseClass {
    devices(): _DeviceFactory; 
    modules(): _ModuleFactory; 
}
declare type _HardwareFactory = _HardwareFactoryBase;

declare interface _IpcManagerBase extends BaseClass {
    getListeningPort(): number; 
    getOpenData(_: string): string; 
    launchCep(_: string): boolean; 
    putSaveData(..._: unknown[]): unknown; 
    registerOpenFileType(..._: unknown[]): unknown; 
    sendMessageTo(..._: unknown[]): unknown; 
    sendMessageToAll(..._: unknown[]): unknown; 
    sendMessageToInstance(..._: unknown[]): unknown; 
    sendMessageToRemote(..._: unknown[]): unknown; 
    sendMessageToRemoteInstance(..._: unknown[]): unknown; 
    setExclusive(..._: unknown[]): unknown; 
    thisInstance(..._: unknown[]): unknown; 
    unregisterOpenFileType(..._: unknown[]): unknown; 
}
declare type _IpcManager = _IpcManagerBase;

declare interface _MenuBase extends BaseClass {
    count(): number; 
    /** Pokud vrátí "null", pak se může jednat o oddělovací čáru */
    getMenuItemAt(index: number): _MenuItem | null; 
    getMenuItemByName(label: string): _MenuItem | null; 
    getMenuItemByUuid(uuid: UUID): _MenuItem | null; 
    getMenuItemUuid(label: string): UUID | NULL_UUID; 
    insertItem(_: string, label: string): UUID; 
    /** Odstraní možnost s daným textem/labelem; Prázdný string pro odstranění oddělovací čáry */
    removeItem(label: string): void; 
    removeItemUuid(uuid: UUID): void; 
    setItemEnabled(label: string, value: boolean): void; 
    setItemEnabledUuid(uuid: UUID, value: boolean): void; 
    setItemVisible(label: string, value: boolean): void; 
    setItemVisibleUuid(uuid: UUID, value: boolean): void; 
}
declare type _Menu = _MenuBase;

declare interface _MenuItemBase extends BaseClass {
    getLabel(): string; 
    getUuid(): UUID; 
    removeItem(): void; 
    setEnabled(value: boolean): void; 
    setVisible(value: boolean): void; 
}
declare type _MenuItem = _MenuItemBase;

declare interface _ModuleBase extends BaseClass {
    addModuleAt(..._: unknown[]): unknown; 
    addSlot(..._: unknown[]): unknown; 
    getDescriptor(..._: unknown[]): unknown; 
    getModuleAt(..._: unknown[]): unknown; 
    getModuleCount(): number; 
    getModuleNameAsString(..._: unknown[]): unknown; 
    getModuleNumber(..._: unknown[]): unknown; 
    getModuleType(..._: unknown[]): unknown; 
    getOwnerDevice(..._: unknown[]): unknown; 
    getPortAt(..._: unknown[]): unknown; 
    getPortCount(): number; 
    getSlotCount(): number; 
    getSlotPath(..._: unknown[]): unknown; 
    getSlotTypeAt(..._: unknown[]): unknown; 
    removeModuleAt(..._: unknown[]): unknown; 
}
declare type _Module = _ModuleBase;

declare interface _ModuleDescriptorBase extends BaseClass {
    addModuleAt(..._: unknown[]): unknown; 
    addModulePhysicalView(..._: unknown[]): unknown; 
    addSlot(..._: unknown[]): unknown; 
    create(..._: unknown[]): unknown; 
    getGroup(..._: unknown[]): unknown; 
    getImagePath(): string; 
    getInfo(): string; 
    getModel(): string; 
    getModuleAt(..._: unknown[]): unknown; 
    getModuleCount(): number; 
    getModulePhysicalViewAt(..._: unknown[]): unknown; 
    getModulePhysicalViewCount(): number; 
    getSlotCount(): number; 
    getSlotTypeAt(..._: unknown[]): unknown; 
    getType(..._: unknown[]): unknown; 
    isHotSwappable(): boolean; 
    removeModuleAt(..._: unknown[]): unknown; 
    setGroup(..._: unknown[]): unknown; 
    setHotSwappable(value: boolean): boolean; 
    setImagePath(..._: unknown[]): unknown; 
    setInfo(info: string): void; 
}
declare type _ModuleDescriptor = _ModuleDescriptorBase;

declare interface _ModuleFactoryBase extends BaseClass {
    addModuleModel(..._: unknown[]): unknown; 
    getAvailableModuleAt(): _ModuleDescriptor; 
    getAvailableModuleCount(): number; 
    getAvailableModuleForTypeAt(..._: unknown[]): unknown; 
    getAvailableModuleForTypeCount(..._: unknown[]): unknown; 
    getDescriptor(_: number, __: string): unknown | null; 
}
declare type _ModuleFactory = _ModuleFactoryBase;

declare interface _ModulePhysicalViewBase extends BaseClass {
    getModuleAdded(..._: unknown[]): unknown; 
    getSlotNum(..._: unknown[]): unknown; 
    getX1(..._: unknown[]): unknown; 
    getX2(..._: unknown[]): unknown; 
    getY1(..._: unknown[]): unknown; 
    getY2(..._: unknown[]): unknown; 
    isHorizontal(..._: unknown[]): unknown; 
    isNonRemovable(..._: unknown[]): unknown; 
    isPower(..._: unknown[]): unknown; 
    setHorizontal(..._: unknown[]): unknown; 
    setIsNonRemovable(..._: unknown[]): unknown; 
    setIsPower(..._: unknown[]): unknown; 
    setModuleAdded(..._: unknown[]): unknown; 
    setSlotNum(..._: unknown[]): unknown; 
    setX1(..._: unknown[]): unknown; 
    setX2(..._: unknown[]): unknown; 
    setY1(..._: unknown[]): unknown; 
    setY2(..._: unknown[]): unknown; 
}
declare type _ModulePhysicalView = _ModulePhysicalViewBase;

declare interface _NFExporterBase extends BaseClass {
    addMonitor(..._: unknown[]): unknown; 
    createFrameInstance(..._: unknown[]): unknown; 
    getDestinationAddr(..._: unknown[]): unknown; 
    getDestinationUdpPort(..._: unknown[]): unknown; 
    getDeviceUpTime(..._: unknown[]): unknown; 
    getExporterName(..._: unknown[]): unknown; 
    getExporterVersion(..._: unknown[]): unknown; 
    getOwnerDevice(..._: unknown[]): unknown; 
    getSrcPort(..._: unknown[]): unknown; 
    getTemplateById(..._: unknown[]): unknown; 
    getTemplateByRecordName(..._: unknown[]): unknown; 
    isFullyConfigured(..._: unknown[]): unknown; 
    removeMontior(..._: unknown[]): unknown; 
    removeTemplate(..._: unknown[]): unknown; 
    setDestinationAddr(..._: unknown[]): unknown; 
    setDestinationUdpPort(..._: unknown[]): unknown; 
    setExporterName(..._: unknown[]): unknown; 
    setExporterVersion(..._: unknown[]): unknown; 
    setSrcPort(..._: unknown[]): unknown; 
}
declare type _NFExporter = _NFExporterBase;

declare interface _NFExporterManagerBase extends BaseClass {
    createNFExporter(..._: unknown[]): unknown; 
    getNFExporterAt(..._: unknown[]): unknown; 
    getNFExporterByIpAndPort(..._: unknown[]): unknown; 
    getNFExporterByName(..._: unknown[]): unknown; 
    getNFExporterCount(): number; 
    removeNFExporter(..._: unknown[]): unknown; 
    removeNFExporterAt(..._: unknown[]): unknown; 
}
declare type _NFExporterManager = _NFExporterManagerBase;

declare interface _ParameterMapManagerBase extends BaseClass {
    deleteParameterMap(..._: unknown[]): unknown; 
    getParameterMap(..._: unknown[]): unknown; 
    getParameterMapAt(..._: unknown[]): unknown; 
    getParameterMapCount(): number; 
    isParameterMapExists(..._: unknown[]): unknown; 
}
declare type _ParameterMapManager = _ParameterMapManagerBase;

declare interface _PhysicalObjectBase extends BaseClass {
    /** Vrací cestu k souboru */
    getBackground(): string; 
    getCenterX(): number; 
    getCenterY(): number; 
    getChild(..._: unknown[]): unknown; 
    getChildAt(index: number): null | unknown; 
    getChildByPath(..._: unknown[]): unknown; 
    getChildCount(): number; 
    getDevice(): _Device; 
    getEnvironment(): null | unknown; 
    getGlobalX(): number; 
    getGlobalY(): number; 
    getHeight(): number; 
    getName(): string; 
    getParent(): null | unknown; 
    getPathUuid(): string; 
    getType(): number; 
    getWidth(): number; 
    getX(): number; 
    getXScale(): number; 
    getY(): number; 
    getYScale(): number; 
    moveBy(x: number, y: number): void; 
    moveIntoObject(..._: unknown[]): unknown; 
    moveOutOfCurrentObject(..._: unknown[]): unknown; 
    moveTo(..._: unknown[]): unknown; 
    nameToUuidPath(..._: unknown[]): unknown; 
    setBackground(..._: unknown[]): unknown; 
    setVelocity(..._: unknown[]): unknown; 
    setX(x: number): void; 
    setXVelocity(..._: unknown[]): unknown; 
    setY(y: number): void; 
    setYVelocity(..._: unknown[]): unknown; 
    uuidToNamePath(..._: unknown[]): unknown; 
    xVelocity(..._: unknown[]): unknown; 
    yVelocity(..._: unknown[]): unknown; 
}
declare type _PhysicalObject = _PhysicalObjectBase;

declare interface _QueueBase extends BaseClass {
    getName(..._: unknown[]): unknown; 
    getPacketCnt(..._: unknown[]): unknown; 
}
declare type _Queue = _QueueBase;

declare interface _ServerBase extends _Pc {
    validateIoeUser(..._: unknown[]): unknown; 
}
declare type _Server = _ServerBase;

declare interface _StrictPriorityQueueBase extends BaseClass {
    getQueueAt(..._: unknown[]): unknown; 
    getQueueCount(): number; 
    getQueueType(..._: unknown[]): unknown; 
}
declare type _StrictPriorityQueue = _StrictPriorityQueueBase;

declare interface _SystemFileManagerBase extends BaseClass {
    convertFromNativeSeparators(..._: unknown[]): unknown; 
    convertToNativeSeparators(..._: unknown[]): unknown; 
    copySrcDirectoryToDestDirectory(..._: unknown[]): unknown; 
    copySrcFileToDestFile(..._: unknown[]): unknown; 
    directoryExists(path: string): string; 
    fileExists(path: string): string; 
    /** Prakticky resolvuje cestu. Pokud je vstup prázdný string, výstup je také prázdný string. */
    getAbsolutePath(path: string): string; 
    /** Vrátí obsah souboru zakódovaný v base64 */
    getFileBinaryContents(path: string): string; 
    getFileCheckSum(path: string): string; 
    /** Funguje do doby, než narazí při čtení na něco, co neumí dekódovat - v tu chvlíli přestane a vrátí to co doposud má. */
    getFileContents(path: string): string; 
    getFileModificationTime(path: string): number; 
    getFilePermissions(path: string): number; 
    /** Pokud je cesta nesprávná, vrátí se `0`. */
    getFileSize(path: string): number; 
    getFileWatcher(): _SystemFileWatcher; 
    getFilesInDirectory(path: string): string[]; 
    /**
     * Otevře (Windows) dialog pro otevření souboru, vrátí se absolutní cesta k vybranému souboru.
     * Uživatel musí vybrat soubor, který existuje.
     * Pokud uživatel nic nevybere, vrátí se prázdný string.
     * @param title Titulek otevřeného dialogu (= název okna)
     * @param filename Defaultní jméno
     * @param filterMask Filtr; Např. "*.exe" pro zobrazení pouze ".exe" souborů; Prázdný string (nebo "*") zobrazí vše.
     */
    getOpenFileName(title: string, filename: string, filterMask: string): string; 
    /**
     * Otevře (Windows) dialog pro otevření souborů, vrátí se array absolutních cest k vybraným souborů.
     * Pokud uživatel nic nevybere, vrátí se prázdná array.
     * @param title Titulek otevřeného dialogu (= název okna)
     * @param filename Defaultní jméno
     * @param filterMask Filtr; Např. "*.exe" pro zobrazení pouze ".exe" souborů; Prázdný string (nebo "*") zobrazí vše.
     */
    getOpenFileNames(title: string, filename: string, filterMask: string): string[]; 
    getRelativePath(from: string, to: string): string; 
    /**
     * Otevře (Windows) dialog pro uložení souboru, vrátí se absolutní cesta k vybranému místu.
     * Pokud uživatel nic nevybere, vrátí se prázdný string.
     * @param title Titulek otevřeného dialogu (= název okna)
     * @param filename Defaultní jméno
     * @param filterMask Filtr; Např. "*.exe" pro zobrazení pouze ".exe" souborů; Prázdný string (nebo "*") zobrazí vše.
     */
    getSaveFileName(title: string, filename: string, filterMask: string): string; 
    isAbsolutePath(path: string): boolean; 
    isRelativePath(path: string): boolean; 
    makeDirectory(..._: unknown[]): unknown; 
    moveSrcDirectoryToDestDirectory(..._: unknown[]): unknown; 
    moveSrcFileToDestFile(..._: unknown[]): unknown; 
    removeDirectory(..._: unknown[]): unknown; 
    removeFile(..._: unknown[]): unknown; 
    setFilePermissions(..._: unknown[]): unknown; 
    unzipFile(..._: unknown[]): unknown; 
    unzipFileTo(..._: unknown[]): unknown; 
    writeBinaryToFile(..._: unknown[]): unknown; 
    writePlainTextToFile(..._: unknown[]): unknown; 
    writeTextToFile(..._: unknown[]): unknown; 
    zipDirectory(..._: unknown[]): unknown; 
    zipDirectoryTo(..._: unknown[]): unknown; 
}
/**
 * Všechny cesty mohou být absolutní i relativní.
 * Pokud je cesta relativní, tak je relativní ke složce, kde se nachází executable PT.
 * Ve Windows je tedy `C:/Program Files/Cisco Packet Tracer VERZE_PACKET_TRACERU/bin/`.
 */
declare type _SystemFileManager = _SystemFileManagerBase;

declare interface _SystemFileWatcherBase extends BaseClass {
    addPath(..._: unknown[]): unknown; 
    removePath(..._: unknown[]): unknown; 
}
declare type _SystemFileWatcher = _SystemFileWatcherBase;

declare interface _UsbControllerBase extends BaseClass {
    available(..._: unknown[]): unknown; 
    begin(..._: unknown[]): unknown; 
    deployProjectFromFileSystem(..._: unknown[]): unknown; 
    end(..._: unknown[]): unknown; 
    getOwnerDevice(): _Device; 
    isPortUp(): boolean; 
    isProtocolUp(): boolean; 
    isSerialMonitoring(): boolean; 
    peek(..._: unknown[]): unknown; 
    peekChar(..._: unknown[]): unknown; 
    print(..._: unknown[]): unknown; 
    read(..._: unknown[]): unknown; 
    readChar(..._: unknown[]): unknown; 
    readLine(..._: unknown[]): unknown; 
    setSerialMonitoring(..._: unknown[]): unknown; 
    write(..._: unknown[]): unknown; 
}
declare type _UsbController = _UsbControllerBase;

declare interface _UsbPortBase extends _Port {
    getController(): _UsbController; 
    getHardwareQueue(): _UsbController; 
    isUsbHost(): boolean; 
}
declare type _UsbPort = _UsbPortBase;

declare interface _UserAppManagerBase extends BaseClass {
    addGlobalApp(..._: unknown[]): unknown; 
    getGlobalApp(appId: string): _UserDesktopAppConfig | null; 
    getGlobalAppAt(index: number): _UserDesktopAppConfig; 
    getGlobalAppByPath(path: string): _UserDesktopAppConfig | null; 
    getGlobalAppCount(): number; 
    removeGlobalApp(appId: string): void; 
}
declare type _UserAppManager = _UserAppManagerBase;

declare interface _UserDesktopAppConfigBase extends BaseClass {
    getAuthor(): string; 
    getAutoInstallDeviceAt(index: number): unknown; 
    getAutoInstallDeviceCount(): number; 
    getCommandAt(index: number): { command: string, description: string }; 
    getCommandCount(): number; 
    getContact(): string; 
    getDescription(): string; 
    getFilesDir(): _Directory; 
    getGuiName(): string; 
    getHtmlFile(): string; 
    getIconFile(): string; 
    getId(): string; 
    getLanguage(): string; 
    getName(): string; 
    getProjectDir(): string; 
    getVersion(): string; 
    hasAutoInstallDevice(..._: unknown[]): unknown; 
    isBackgroundGuiApp(): boolean; 
    isOnDesktop(): boolean; 
    setOnDesktop(value: boolean): void; 
}
declare type _UserDesktopAppConfig = _UserDesktopAppConfigBase;

declare interface _AppWindowEvents {
    registerEvent(eventName: "FileNewed", obj: object | null, callback: eventCallback<{}>): void;
    registerEvent(eventName: "FileOpened", obj: object | null, callback: eventCallback<{}>): void;
    registerEvent(eventName: "FileSaved", obj: object | null, callback: eventCallback<{}>): void;
    registerEvent(eventName: "FileSaveDone", obj: object | null, callback: eventCallback<{
        success: boolean,
    }>): void;
    registerEvent(eventName: "FileSaveToBytesDone", obj: object | null, callback: eventCallback<{}>): void;
}
declare interface _AppWindowBase extends BaseClass {
    deletePTConf(..._: unknown[]): unknown; 
    fileOpenFromURL(..._: unknown[]): unknown; 
    fileSaveAsNoPrompt(..._: unknown[]): unknown; 
    fileSaveToBytes(..._: unknown[]): unknown; 
    getClipboardText(): string; 
    getDefaultFileSaveLocation(): string; 
    getEnvironmentDialog(): unknown | null; 
    getHeight(): number; 
    getListOfFilesSaved(_: string): string[]; 
    getListOfFilesToOpen(_: string): string[]; 
    getMaximumHeight(): number; 
    getMaximumWidth(): number; 
    getMinimumHeight(): number; 
    getMinimumWidth(): number; 
    getNetAcadUserUUID(): string; 
    getPTSAMode(..._: unknown[]): unknown; 
    getProcessId(): number; 
    getSecondaryToolBar(): _ToolBar; 
    getSessionId(): string; 
    getTempFileLocation(): string; 
    getUserFolder(..._: unknown[]): unknown; 
    getWidth(): number; 
    getX(): number; 
    getY(): number; 
    helpPath(_: string): void; 
    isActivityWizardOpen(..._: unknown[]): unknown; 
    isInterfaceLocked(..._: unknown[]): unknown; 
    isPTSA(..._: unknown[]): unknown; 
    listDirectory(..._: unknown[]): unknown; 
    openURL(..._: unknown[]): unknown; 
    raise(..._: unknown[]): unknown; 
    setCheckOutdatedDevices(..._: unknown[]): unknown; 
    setClipboardText(..._: unknown[]): unknown; 
    setDisabled(..._: unknown[]): unknown; 
    setMaximumHeight(..._: unknown[]): unknown; 
    setMaximumSize(..._: unknown[]): unknown; 
    setMaximumWidth(..._: unknown[]): unknown; 
    setMinimumHeight(..._: unknown[]): unknown; 
    setMinimumSize(..._: unknown[]): unknown; 
    setMinimumWidth(..._: unknown[]): unknown; 
    setPLFrameVisible(..._: unknown[]): unknown; 
    setPTSAMode(..._: unknown[]): unknown; 
    setPTSAPluginVisible(..._: unknown[]): unknown; 
    setRSFrameVisible(..._: unknown[]): unknown; 
    setWindowGeometry(..._: unknown[]): unknown; 
    suppressInstructionDlg(..._: unknown[]): unknown; 
    exit(): void; 
    exitNoConfirm(b: boolean): void; 
    fileActivityWizard(): void; 
    fileNew(b: boolean): boolean; 
    fileOpen(s: string): boolean; 
    fileOpenFromBytes(s: string): boolean; 
    fileSave(): boolean; 
    fileSaveAs(s: string): boolean; 
    fileSaveAsAsync(s: string): void; 
    fileSaveAsPkz(s: string): boolean; 
    fileSaveAsPkzAsync(s: string): void; 
    fileSaveAsync(): void; 
    fileSaveToBytesAsync(): void; 
    getActiveDialog(): _ActiveDialog | null; 
    getActiveFile(): _NetworkFile; 
    getActiveWorkspace(): _Workspace; 
    getActivityWizard(): _ActivityWizard | null; 
    getAdminDialog(): _AdministrativeDialog | null; 
    getBasePath(): string; 
    getCommonToolbar(): _CommonToolbar; 
    getDialogManager(): _DialogManager; 
    getInfoDialog(): _InfoDialog; 
    getInstructionDlg(): _InstructionDlg | null; 
    getLogicalToolbar(): _LogicalToolbar; 
    getMenuBar(): _MenuBar; 
    getNetworkComponentBox(): _NetworkComponentBox; 
    getPDUListWindow(): _PDUListWindow; 
    getPLSwitch(): _PLSwitch; 
    getPaletteDialog(): _PaletteDialog | null; 
    getPhysicalLocationDialog(): _PhysicalLocationDialog; 
    getPhysicalToolbar(): _PhysicalToolbar; 
    getPrintDialog(): _PrintDialogPT4 | null; 
    getRSSwitch(): _RSSwitch; 
    getRealtimeToolbar(): _RealtimeToolbar; 
    getSimulationPanel(): _SimulationPanel; 
    getSimulationToolbar(): _SimulationToolbar; 
    getToolBar(): _ToolBar; 
    getUserCreatedPDU(): _UserCreatedPDU; 
    getVersion(): string; 
    getWebViewManager(): _WebViewManager; 
    isLogicalMode(): boolean; 
    isPhysicalMode(): boolean; 
    isPreventClose(): boolean; 
    isRealtimeMode(): boolean; 
    isSimulationMode(): boolean; 
    setPreventClose(b: boolean): void; 
    setVisible(b: boolean): void; 
    showMaximized(): void; 
    showMinimized(): void; 
    showNormal(): void; 
    writeToPT(s: string): void; 
}
declare type _AppWindow = _AppWindowBase;

declare interface _CableBase extends _Link {
    getOtherPort(s: string, s2: string): _Port; 
    getPort1(): _Port; 
    getPort2(): _Port; 
}
declare type _Cable = _CableBase;

declare interface _CiscoDeviceEvents {
    registerEvent(eventName: "DoneBooting", obj: object | null, callback: eventCallback<{}>): void;
    registerEvent(eventName: "LineConnected", obj: object | null, callback: eventCallback<{
        lineNum: number,
        srcIp: IP,
        srcTcpPort: number,
        loginMethod: _LoginMethod,
    }>): void;
    registerEvent(eventName: "LineDisconnected", obj: object | null, callback: eventCallback<{
        lineNum: number,
    }>): void;
    registerEvent(eventName: "LineAuthenticationStarted", obj: object | null, callback: eventCallback<{
        lineNum: number,
        srcIp: IP,
        srcTcpPort: number,
        loginMethod: _LoginMethod,
    }>): void;
    registerEvent(eventName: "LineAuthenticationFailed", obj: object | null, callback: eventCallback<{
        lineNum: number,
    }>): void;
    registerEvent(eventName: "LineAuthenticationFinished", obj: object | null, callback: eventCallback<{
        lineNum: number,
        success: boolean,
    }>): void;
}
declare interface _CiscoDeviceBase extends _Device {
    addUserPassEntry(..._: unknown[]): unknown; 
    enterCommand(..._: unknown[]): unknown; 
    getBootSystems(..._: unknown[]): unknown; 
    getStartupFile(..._: unknown[]): unknown; 
    getUserEntryAt(..._: unknown[]): unknown; 
    getUserPassCount(): number; 
    isBooting(): boolean; 
    isUserExist(..._: unknown[]): unknown; 
    removeUserPassAt(..._: unknown[]): unknown; 
    removeUserPassEntry(..._: unknown[]): unknown; 
    addBootSystem(s: string): boolean; 
    clearFtpPasswd(): void; 
    clearFtpUsername(): void; 
    getBannerMotd(): string; 
    getBia(): MAC; 
    getConfigRegister(): number; 
    getConsole(): _Port; 
    getConsoleLine(): _TerminalLine; 
    getEnablePassword(): string; 
    getEnableSecret(): string; 
    getFtpPasswd(): string; 
    getFtpUsername(): string; 
    getHostName(): string; 
    getIpcTerminalLine(): _TerminalLine; 
    getLine(n: number): _TerminalLine; 
    getNextConfigRegister(): number; 
    getServicePasswordEncryption(): boolean; 
    getTimeZone(): string; 
    getVtyLine(n: number): _TerminalLine; 
    removeAllBootSystem(): void; 
    removeBootSystem(s: string): boolean; 
    setBannerMotd(s: string): void; 
    setEnablePassword(s: string, n: number): void; 
    setEnableSecret(secret: string): void; 
    setFtpPasswd(s: string, n: number): void; 
    setFtpUsername(s: string): void; 
    setHostName(hostname: string): void; 
    setNextConfigRegister(n: number): void; 
    setServicePasswordEncryption(b: boolean): void; 
    setStartupFile(s: string): void; 
    setTimeZone(s: string, n: number, n2: number): void; 
    skipBoot(): void; 
}
declare type _CiscoDevice = _CiscoDeviceBase;

declare interface _ClassMapBase extends BaseClass {
    getDescription(): string; 
    getMapName(): string; 
    getMapType(): _MapType; 
    getMatchType(): _ClassMapMatchType; 
    getMatchTypeString(): string; 
    getStatementCnt(): number; 
    isClassDefault(): boolean; 
    setDescription(s: string): void; 
    setMapType(mapType: _MapType): void; 
    setMatchType(classMapMatchType: _ClassMapMatchType): void; 
    toReverseString(): string; 
    toString(): string; 
}
declare type _ClassMap = _ClassMapBase;

declare interface _ClassMapManagerBase extends BaseClass {
    classMapExist(s: string): boolean; 
    deleteClassMap(s: string): void; 
    getClassMap(s: string): _ClassMap; 
    getClassMapAt(n: number): _ClassMap; 
    getClassMapCount(): number; 
    hasCircularReference(s: string, s2: string): boolean; 
    rearrangeMaps(s: string, s2: string): void; 
}
declare type _ClassMapManager = _ClassMapManagerBase;

declare interface _CommandLogEvents {
    registerEvent(eventName: "EntryAdded", obj: object | null, callback: eventCallback<{
        index: number,
    }>): void;
}
declare interface _CommandLogBase extends BaseClass {
    clear(): void; 
    getEntryAt(n: number): _CommandLogEntry; 
    getEntryCount(): number; 
    isEnabled(): boolean; 
    setEnabled(value: boolean): void; 
}
declare type _CommandLog = _CommandLogBase;

declare interface _CommonToolbarBase extends BaseClass {
    setDisabled(b: boolean): void; 
    setVisible(b: boolean): void; 
    setWidgetDisable(s: string, b: boolean): void; 
    setWidgetVisible(s: string, b: boolean): void; 
    changeState(s: string): void; 
}
declare type _CommonToolbar = _CommonToolbarBase;

declare interface _ComponentItemBase extends BaseClass {
    rtti(): number; 
    getHeight(): number; 
    getName(): string; 
    getParent(): null | unknown; 
    getThisClusterID(): string; 
    getWidth(): number; 
    getXCoordinateCenter(): number; 
    getYCoordinateCenter(): number; 
    loadAccessoryImage(..._: unknown[]): unknown; 
    moveIntoCluster(..._: unknown[]): unknown; 
    moveOutOfCurrentCluster(..._: unknown[]): unknown; 
    removeAccessory(..._: unknown[]): unknown; 
    setVelocity(x: number, y: number): void; 
    setXCenter(x: number): void; 
    setYCenter(y: number): void; 
    type(): number; 
    device(): _Device; 
    getClusterID(): string; 
    getXCoordinate(): number; 
    getYCoordinate(): number; 
    moveBy(x: number, y: number): void; 
    moveTo(x: number, y: number): void; 
    setSelected(value: boolean): void; 
    setVisible(value: boolean): void; 
    setX(x: number): void; 
    setXVelocity(x: number): void; 
    setY(y: number): void; 
    setYVelocity(x: number): void; 
    xVelocity(): number; 
    yVelocity(): number; 
}
declare type _ComponentItem = _ComponentItemBase;

declare interface _ConsoleLineBase extends _TerminalLine {
    flush(_: number): void; 
    getDataBits(): number; 
    getFlowControl(): number; 
    getParity(): number; 
    getSpeed(): number; 
    getStopBits(): number; 
    /** Následně je potřeba `.flush()` */
    println(text: string): void; 
    setSettings(..._: unknown[]): unknown; 
    getOutput(): string; 
}
declare type _ConsoleLine = _ConsoleLineBase;

declare interface _DeviceEvents {
    registerEvent(eventName: "NameChanged", obj: object | null, callback: eventCallback<{
        newName: string,
        oldName: string,
    }>): void;
    registerEvent(eventName: "PowerChanged", obj: object | null, callback: eventCallback<{
        on: boolean,
    }>): void;
    registerEvent(eventName: "ModuleAdded", obj: object | null, callback: eventCallback<{
        inType: _ModuleType,
        model: string,
    }>): void;
    registerEvent(eventName: "ModuleRemoved", obj: object | null, callback: eventCallback<{
        inType: _ModuleType,
        model: string,
    }>): void;
    registerEvent(eventName: "PortAdded", obj: object | null, callback: eventCallback<{
        portName: string,
    }>): void;
    registerEvent(eventName: "PortRemoved", obj: object | null, callback: eventCallback<{
        portName: string,
    }>): void;
}
declare interface _DeviceBase extends BaseClass {
    addDeviceExternalAttributes(..._: unknown[]): unknown; 
    addProgrammingSerialOutputs(..._: unknown[]): unknown; 
    addSound(..._: unknown[]): unknown; 
    addUserDesktopApp(..._: unknown[]): unknown; 
    addUserDesktopAppFrom(..._: unknown[]): unknown; 
    addUserDesktopAppFromGlobal(..._: unknown[]): unknown; 
    clearDeviceExternalAttributes(..._: unknown[]): unknown; 
    clearProgrammingSerialOutputs(..._: unknown[]): unknown; 
    destroySounds(..._: unknown[]): unknown; 
    getAreaLeftX(): number; 
    getAreaTopY(): number; 
    getCenterXCoordinate(): number; 
    getCenterYCoordinate(): number; 
    getCustomInterface(): string; 
    getCustomLogicalImage(): string; 
    getCustomPhysicalImage(): string; 
    getDescriptor(): _DeviceDescriptor; 
    getDeviceExternalAttributeValue(..._: unknown[]): unknown; 
    getDeviceExternalAttributes(..._: unknown[]): unknown; 
    getGlobalXPhysicalWS(..._: unknown[]): unknown; 
    getGlobalYPhysicalWS(..._: unknown[]): unknown; 
    getPhysicalObject(): _PhysicalObject; 
    getPorts(): string[]; 
    getProgrammingSerialOutputs(..._: unknown[]): unknown; 
    getRootModule(..._: unknown[]): unknown; 
    getSerialNumber(): string; 
    getSupportedModule(..._: unknown[]): unknown; 
    getUpTime(): number; 
    getUsbPortAt(index: number): _UsbPort | -1; 
    getUsbPortCount(): number; 
    getUserDesktopAppAt(..._: unknown[]): unknown; 
    getUserDesktopAppByDir(..._: unknown[]): unknown; 
    getUserDesktopAppById(..._: unknown[]): unknown; 
    getUserDesktopAppCount(): number; 
    isDesktopAvailable(): boolean; 
    isOutdated(): boolean; 
    isProjectRunning(..._: unknown[]): unknown; 
    moveByInPhysicalWS(..._: unknown[]): unknown; 
    moveToLocationCentered(x: number, y: number): void; 
    playSound(..._: unknown[]): unknown; 
    relinkUserDesktopApp(..._: unknown[]): unknown; 
    removeUserDesktopApp(..._: unknown[]): unknown; 
    restoreToDefault(..._: unknown[]): unknown; 
    runCodeInProject(..._: unknown[]): unknown; 
    runProject(..._: unknown[]): unknown; 
    setCustomInterface(..._: unknown[]): unknown; 
    setCustomLogicalImage(..._: unknown[]): unknown; 
    setCustomPhysicalImage(..._: unknown[]): unknown; 
    setDeviceExternalAttributes(..._: unknown[]): unknown; 
    setTime(..._: unknown[]): unknown; 
    stopProject(..._: unknown[]): unknown; 
    stopSound(..._: unknown[]): unknown; 
    stopSounds(..._: unknown[]): unknown; 
    subtractDeviceExternalAttributes(..._: unknown[]): unknown; 
    updateTemplateCreationTime(..._: unknown[]): unknown; 
    activityTreeToXml(): string; 
    addCustomVar(key: string, value: string): void; 
    addModule(s: string, moduleType: _ModuleType, s2: string): boolean; 
    getCommandLine(): _TerminalLine; 
    getCustomVarNameAt(index: number): string; 
    getCustomVarStr(key: string): string; 
    getCustomVarValueStrAt(index: number): string; 
    getCustomVarsCount(): number; 
    getModel(): string; 
    getName(): string; 
    getPort(portName: string): _Port | null; 
    getPortAt(index: number): _Port | null; 
    getPortCount(): number; 
    getPower(): boolean; 
    getProcess(s: "ACLProcess"): _ACLProcess;
    getProcess(s: "ARPProcess"): _ARPProcess;
    getProcess(s: "AaaProcess"): _AaaProcess;
    getProcess(s: "AcsServerProcess"): _AcsServerProcess;
    getProcess(s: "CDPProcess"): _CDPProcess;
    getProcess(s: "CHAPProcess"): _CHAPProcess;
    getProcess(s: "CMEProcess"): _CMEProcess;
    getProcess(s: "CbacProcess"): _CbacProcess;
    getProcess(s: "CloudPotsPort"): _CloudPotsPort;
    getProcess(s: "CloudSerialPort"): _CloudSerialPort;
    getProcess(s: "CustomUdpProcess"): _CustomUdpProcess;
    getProcess(s: "DHCPClientProcess"): _DHCPClientProcess;
    getProcess(s: "DHCPServerProcess"): _DHCPServerProcess;
    getProcess(s: "DNSClient"): _DNSClient;
    getProcess(s: "DNSServerProcess"): _DNSServerProcess;
    getProcess(s: "EIGRPMainProcess"): _EIGRPMainProcess;
    getProcess(s: "EIGRPProcess"): _EIGRPProcess;
    getProcess(s: "EmailServer"): _EmailServer;
    getProcess(s: "FRSubInterface"): _FRSubInterface;
    getProcess(s: "FTPServer"): _FTPServer;
    getProcess(s: "FileManager"): _FileManager;
    getProcess(s: "FrameRelayProcess"): _FrameRelayProcess;
    getProcess(s: "HTTPClient"): _HTTPClient;
    getProcess(s: "HTTPServer"): _HTTPServer;
    getProcess(s: "HTTPsServer"): _HTTPsServer;
    getProcess(s: "HostIp"): _HostIp;
    getProcess(s: "HostPort"): _HostPort;
    getProcess(s: "ICMPProcess"): _ICMPProcess;
    getProcess(s: "IPsProcess"): _IPsProcess;
    getProcess(s: "IPsecProcess"): _IPsecProcess;
    getProcess(s: "LoopbackManager"): _LoopbackManager;
    getProcess(s: "MACSwitch"): _MACSwitch;
    getProcess(s: "NATProcess"): _NATProcess;
    getProcess(s: "NtpServerProcess"): _NtpServerProcess;
    getProcess(s: "OSPFMainProcess"): _OSPFMainProcess;
    getProcess(s: "OSPFProcess"): _OSPFProcess;
    getProcess(s: "PAPProcess"): _PAPProcess;
    getProcess(s: "PPPProcess"): _PPPProcess;
    getProcess(s: "PPPoeClient"): _PPPoeClient;
    getProcess(s: "ParserViewManager"): _ParserViewManager;
    getProcess(s: "PingProcess"): _PingProcess;
    getProcess(s: "Pop3Client"): _Pop3Client;
    getProcess(s: "Pop3Server"): _Pop3Server;
    getProcess(s: "Port"): _Port;
    getProcess(s: "PortKeepAliveProcess"): _PortKeepAliveProcess;
    getProcess(s: "PortSecurity"): _PortSecurity;
    getProcess(s: "PrivilegeManager"): _PrivilegeManager;
    getProcess(s: "RIPProcess"): _RIPProcess;
    getProcess(s: "RadiusClientProcess"): _RadiusClientProcess;
    getProcess(s: "RoutedSwitchPort"): _RoutedSwitchPort;
    getProcess(s: "RouterPort"): _RouterPort;
    getProcess(s: "RoutingProcess"): _RoutingProcess;
    getProcess(s: "RoutingProtocol"): _RoutingProtocol;
    getProcess(s: "STPMainProcess"): _STPMainProcess;
    getProcess(s: "STPProcess"): _STPProcess;
    getProcess(s: "SmtpClient"): _SmtpClient;
    getProcess(s: "SmtpServer"): _SmtpServer;
    getProcess(s: "SnmpAgent"): _SnmpAgent;
    getProcess(s: "SshServerProcess"): _SshServerProcess;
    getProcess(s: "SwitchPort"): _SwitchPort;
    getProcess(s: "SyslogServer"): _SyslogServer;
    getProcess(s: "TFTPServer"): _TFTPServer;
    getProcess(s: "TacacsClientProcess"): _TacacsClientProcess;
    getProcess(s: "TcpProcess"): _TcpProcess;
    getProcess(s: "TelnetClientProcess"): _TelnetClientProcess;
    getProcess(s: "TelnetServerProcess"): _TelnetServerProcess;
    getProcess(s: "TraceRouteProcess"): _TraceRouteProcess;
    getProcess(s: "UdpProcess"): _UdpProcess;
    getProcess(s: "VLANManager"): _VLANManager;
    getProcess(s: "VTPProcess"): _VTPProcess;
    getProcess(s: "VirtualTemplateInterface"): _VirtualTemplateInterface;
    getProcess(s: "VirtualTemplateManager"): _VirtualTemplateManager;
    getProcess(s: "WEPProcess"): _WEPProcess;
    getProcess(s: "WPAProcess"): _WPAProcess;
    getProcess(s: "WirelessClientProcess"): _WirelessClientProcess;
    getProcess(s: "WirelessCommon"): _WirelessCommon;
    getProcess(s: "ZfwProcess"): _ZfwProcess;
    getType(): _DeviceType; 
    getXCoordinate(): number; 
    getXPhysicalWS(): number; 
    getYCoordinate(): number; 
    getYPhysicalWS(): number; 
    hasCustomVar(key: string): boolean; 
    moveToLocInPhysicalWS(n: number, n2: number): boolean; 
    moveToLocation(x: number, y: number): boolean; 
    removeCustomVar(key: string): boolean; 
    removeModule(s: string): boolean; 
    serializeToXml(): string; 
    setName(name: string): void; 
    setPower(value: boolean): void; 
}
declare type _Device = _DeviceBase;

declare interface _DialogManagerBase extends BaseClass {
    getFocusedDialogName(..._: unknown[]): unknown; 
    closeAll(): void; 
    getCurrentDialog(): _DeviceDialog; 
    getDialog(s: string): _DeviceDialog; 
}
declare type _DialogManager = _DialogManagerBase;

declare interface _DirectoryBase extends BaseClass {
    getSimFile(s: string): _SimFile; 
    getSimFileAt(n: number): _SimFile; 
    getSimFileCount(): number; 
    addDirectory(name: string, _: boolean): boolean; 
    addFile(name: string, _: boolean): unknown; // Parametry jsou (nejspíše) správně, ale vyhazuje chybu, která je (částečně) špatně encodovaný string
    addHttpPage(name: string, content: string, _: boolean): boolean; 
    addTextFile(name: string, content: string, _: boolean): boolean; 
    /** Existuje, ale **NEPOUŽÍVAT**, pravděpodobně PT spadne :)
     * (Tipl bych si, že ona pravděpodobnost je určena správností prvního argumentu, ale nehodlám se s tímhle (zatím) trápit)
     */
    copyAllFilesFrom(from: string, _: boolean): unknown; 
    fileExist(name: string): boolean; 
    getFile(name: string): _File | _Directory; 
    getFileAt(index: number): _File | _Directory; 
    getFileCount(): number; 
    removeAllFiles(_: boolean): boolean; 
    removeFile(name: string, _: boolean): boolean; 
    renameFile(oldName: string, newName: string, _: boolean): boolean; 
    getSpaceUsed(): number; 
}
declare type _Directory = _DirectoryBase;

declare interface _HostPortEvents {
    registerEvent(eventName: "IpChanged", obj: object | null, callback: eventCallback<{
        newIp: IP,
        newMask: IP,
        oldIp: IP,
        oldMask: IP,
    }>): void;
    registerEvent(eventName: "Ipv6LinkLocalChanged", obj: object | null, callback: eventCallback<{
        newIp: IPv6,
        oldIp: IPv6,
    }>): void;
    registerEvent(eventName: "Ipv6AddressAdded", obj: object | null, callback: eventCallback<{
        ipAddress: IPv6,
        prefix: number,
        inType: _IPV6AddressType,
    }>): void;
    registerEvent(eventName: "Ipv6AddressRemoved", obj: object | null, callback: eventCallback<{
        ipAddress: IPv6,
        prefix: number,
        inType: _IPV6AddressType,
    }>): void;
}
declare interface _HostPortBase extends _Port {
    getIpv6Addresses(..._: unknown[]): unknown; 
    getIpv6Multicast(..._: unknown[]): unknown; 
    getUnicastIpv6Address(..._: unknown[]): unknown; 
    getUnicastIpv6Prefix(..._: unknown[]): unknown; 
    isInboundFirewallOn(..._: unknown[]): unknown; 
    isInboundIpv6FirewallOn(..._: unknown[]): unknown; 
    isSetToDhcpv6(..._: unknown[]): unknown; 
    setDefaultGateway(..._: unknown[]): unknown; 
    setDnsServerIp(..._: unknown[]): unknown; 
    setInboundFirewallService(..._: unknown[]): unknown; 
    setInboundIpv6FirewallService(..._: unknown[]): unknown; 
    setv6DefaultGateway(..._: unknown[]): unknown; 
    setv6ServerIp(..._: unknown[]): unknown; 
    addIpv6Address(ipv6Address: IPv6, n: number, ipv6AddressType: _IPV6AddressType, b: boolean): boolean; 
    getIpAddress(): IP; 
    getIpMtu(): number; 
    getIpv6Address(ipv6Address: IPv6): _IPV6AddressConfig; 
    getIpv6LinkLocal(): IPv6; 
    getIpv6Mtu(): number; 
    getMtu(): number; 
    getSubnetMask(): IP; 
    hasIpv6Address(ipv6Address: IPv6): boolean; 
    isDhcpClientOn(): boolean; 
    isInIpv6Multicast(ipv6Address: IPv6): boolean; 
    isIpv6AddressAutoConfig(): boolean; 
    isIpv6Enabled(): boolean; 
    removeAllIpv6Addresses(): void; 
    removeIpv6Address(ipv6Address: IPv6, n: number, ipv6AddressType: _IPV6AddressType): boolean; 
    setDefaultArpTimeout(): void; 
    setDhcpClientFlag(b: boolean): void; 
    setIpMtu(n: number): void; 
    setIpSubnetMask(ipAddress: IP, ipAddress2: IP): void; 
    setIpv6AddressAutoConfig(b: boolean): void; 
    setIpv6Enabled(b: boolean): void; 
    setIpv6LinkLocal(ipv6Address: IPv6): void; 
    setIpv6Mtu(n: number): void; 
    setMtu(n: number): void; 
}
declare type _HostPort = _HostPortBase;

declare interface _InfoDialogBase extends BaseClass {
    setDisabled(b: boolean): void; 
    setVisible(b: boolean): void; 
}
declare type _InfoDialog = _InfoDialogBase;

declare interface _LogicalToolbarBase extends BaseClass {
    setDisabled(b: boolean): void; 
    setVisible(b: boolean): void; 
    setWidgetDisable(s: string, b: boolean): void; 
    setWidgetVisible(s: string, b: boolean): void; 
    showLevel1Cluster(): void; 
    showLevel2Cluster(): void; 
    showLevel3Cluster(): void; 
    showLevel4Cluster(): void; 
    moveBack(..._: unknown[]): unknown; 
    createCluster(): void; 
    showViewPort(): void; 
}
declare type _LogicalToolbar = _LogicalToolbarBase;

declare interface _LogicalWorkspaceEvents {
    registerEvent(eventName: "DeviceAdded", obj: object | null, callback: eventCallback<{
        name: string,
        model: string,
    }>): void;
    registerEvent(eventName: "DeviceRemoved", obj: object | null, callback: eventCallback<{
        name: string,
    }>): void;
    registerEvent(eventName: "RemoteNetworkAdded", obj: object | null, callback: eventCallback<{
        name: string,
    }>): void;
    registerEvent(eventName: "RemoteNetworkRemoved", obj: object | null, callback: eventCallback<{
        name: string,
    }>): void;
    registerEvent(eventName: "LinkCreated", obj: object | null, callback: eventCallback<{
        deviceName1: string,
        portName1: string,
        deviceName2: string,
        portName2: string,
        connType: _ConnectType,
    }>): void;
    registerEvent(eventName: "LinkDeleted", obj: object | null, callback: eventCallback<{
        deviceName1: string,
        portName1: string,
        deviceName2: string,
        portName2: string,
        connType: _ConnectType,
    }>): void;
}
declare interface _LogicalWorkspaceBase extends BaseClass {
    addCluster(..._: unknown[]): unknown; 
    /**
     * _ je číslo, možná string, nevím co dělá
     * Parametr `z` je "layer"/vrstva/z-index
    */
    addTextPopup(x: number, y: number, z: number, _: unknown, text: string): UUID; 
    /**
     * @param device0 Název prvního zařízení
     * @param device1 Název druhého zařízení
     */
    autoConnectDevices(device0: string, device1: string): void; 
    /** Centruje pohled */
    centerOn(x: number, y: number): void; 
    /** Centruje pohled */
    centerOnComponentByName(deviceName: string): void; 
    /**
     * Well "funguje", ale Note potom zmizí eShrug
     * Je potřeba nějak donutit PT, aby Note znovu vyrendroval.
     */
    changeNoteText(uuid: UUID, newText: string): boolean; 
    getCanvasEllipseIds(): UUID[]; 
    getCanvasItemIds(): UUID[]; 
    getCanvasItemRealX(uuid: UUID): number | -9999999; 
    getCanvasItemRealY(uuid: UUID): number | -9999999; 
    getCanvasItemX(uuid: UUID): number | -9999999; 
    getCanvasItemY(uuid: UUID): number | -9999999; 
    getCanvasLineIds(): UUID[]; 
    getCanvasNoteIds(): UUID[]; 
    getCanvasNoteText(uuid: UUID): string; 
    getCanvasPolygonIds(): UUID[]; 
    getCanvasRectIds(): UUID[]; 
    getCluster(clusterId: string): _Cluster | null; 
    getClusterForItem(_: string): unknown | null; 
    getClusterFromItem(_: string): unknown | null; 
    getClusterIdForItem(_: string): string; 
    getClusterItemId(_: string): UUID | NULL_UUID; 
    getComponentChildCountFor(_: string): number; 
    getComponentChildForAt(_: string, __: number): unknown | null; 
    getComponentChildForByName(_: string, __: string): unknown | null; 
    getCurrentCluster(): _Cluster; 
    /**
     *    Top left    Bottom right
     *   X       Y      X      Y         Barva       Text
     * ["592", "158", "627", "193", "", "0,0,0", "Nějaký text "]
     */
    getEllipseItemData(uuid: UUID): [string, string, string, string, string, string]; 
    getIncNoteZOrder(..._: unknown[]): unknown; 
    /**
     * ["Start X", "Start Y", "End X", "End Y", "Barva ve formátu 'R,G,B'"]
     */
    getLineItemData(uuid: UUID): [string, string, string, string, string] | []; 
    getMUItemCount(): number; 
    /**
     * ["Text?", "Barva ve formátu 'R,G,B'", "X0?", "Y0?", "X1?", "Y1?", ...]
     * Pokud tomu tak je, tak jsou souřadnice minimálně posunuté
     */
    getPolygonItemData(uuid: UUID): [string, string, ...string[]]; 
    /** Nepoužívat, PT spadne */
    getRectItemData(uuid: UUID): unknown | []; 
    getRootCluster(): _Cluster; 
    getWorkspaceImage(_: string): unknown | []; 
    moveCanvasItemBy(uuid: UUID, x: number, y: number): void; 
    moveItemToCluster(..._: unknown[]): unknown; 
    moveRemoteNetwork(..._: unknown[]): unknown; 
    removeCluster(..._: unknown[]): unknown; 
    removeTextPopup(..._: unknown[]): unknown; 
    setCanvasItemRealPos(..._: unknown[]): unknown; 
    setCanvasItemX(..._: unknown[]): unknown; 
    setCanvasItemY(..._: unknown[]): unknown; 
    setDeviceCustomImage(..._: unknown[]): unknown; 
    showClusterContents(..._: unknown[]): unknown; 
    unCluster(..._: unknown[]): unknown; 
    addDevice(deviceType: _DeviceType, s: string): string; 
    /** x, y, z, text */
    addNote(x: number, y: number, z: number, text: string): UUID; 
    addRemoteNetwork(): string; 
    /** Nefunguje, resp. nechápu, co je layer */
    clearLayer(layer: number): boolean; 
    createLink(s: string, s2: string, s3: string, s4: string, connectType: _ConnectType): boolean; 
    deleteLink(s: string, s2: string): boolean; 
    drawCircle(n: number, n2: number, n3: number, n4: number, n5: number, n6: number, n7: number): UUID; 
    drawLine(n: number, n2: number, n3: number, n4: number, n5: number, n6: number, n7: number, n8: number, n9: number): UUID; 
    getComponentItem(deviceName: string): _ComponentItem; 
    getComponentItemsCount(): number; 
    getLayerInbetweenComponents(s: string, s2: string): number; 
    getState(): number; 
    getUnusedLayer(): number; 
    isLayerUsed(n: number): boolean; 
    removeCanvasItem(uuid: UUID): boolean; 
    removeDevice(s: string): boolean; 
    removeRemoteNetwork(s: string): boolean; 
}
declare type _LogicalWorkspace = _LogicalWorkspaceBase;

declare interface _MenuBarBase extends BaseClass {
    getExtensionsIPCPopupMenu(): _Menu; 
    getExtensionsMUPopupMenu(): _Menu; 
    getExtensionsScriptingPopupMenu(): _Menu; 
    getFileRecentFilesPopupMenu(): _Menu; 
    getViewToolbarsPopupMenu(): _Menu; 
    getViewZoomPopupMenu(): _Menu; 
    getEditPopupMenu(): _PopupMenu; 
    getExtensionsPopupMenu(): _PopupMenu; 
    getFilePopupMenu(): _PopupMenu; 
    getHelpPopupMenu(): _PopupMenu; 
    getOptionsPopupMenu(): _PopupMenu; 
    getToolsPopupMenu(): _PopupMenu; 
    getViewPopupMenu(): _PopupMenu; 
    isVisible(): boolean; 
    setVisible(value: boolean): void; 
}
declare type _MenuBar = _MenuBarBase;

declare interface _NetworkBase extends BaseClass {
    getLinkAt(index: number): _Cable; // Nějaký rozbitý, z nějakého důvodu vrací string "object"
    getLinkCount(): number; 
    getTotalDeviceAttributeValue(..._: unknown[]): unknown; 
    getDevice(deviceName: string): _Device | undefined; 
    getDeviceAt(index: number): _Device; 
    getDeviceCount(): number; 
}
declare type _Network = _NetworkBase;

declare interface _NetworkComponentBoxBase extends BaseClass {
    setDisabled(b: boolean): void; 
    setVisible(b: boolean): void; 
    setWidgetDisable(s: string, b: boolean): void; 
    setWidgetVisible(s: string, b: boolean): void; 
    getConnectionTypes(..._: unknown[]): unknown; 
    getDeviceModels(..._: unknown[]): unknown; 
    getDeviceTypes(..._: unknown[]): unknown; 
    setAllWidgetsDisable(..._: unknown[]): unknown; 
    setAllWidgetsVisible(..._: unknown[]): unknown; 
    setFrameVisible(..._: unknown[]): unknown; 
}
declare type _NetworkComponentBox = _NetworkComponentBoxBase;

declare interface _OptionsBase extends BaseClass {
    isCLITabShown(): boolean; 
    isConfigTabShown(): boolean; 
    isDesktopTabShown(): boolean; 
    isGUITabShown(): boolean; 
    isPhysicalTabShown(): boolean; 
    setCLITabShown(b: boolean): void; 
    setConfigTabShown(b: boolean): void; 
    setDesktopTabShown(b: boolean): void; 
    setGUITabShown(b: boolean): void; 
    setIsDeviceModelShown(b: boolean): void; 
    setPhysicalTabShown(b: boolean): void; 
    addCustomHideOption(..._: unknown[]): unknown; 
    getCurrentLanguage(..._: unknown[]): unknown; 
    getCustomHideOption(..._: unknown[]): unknown; 
    isAutoCablingDisabled(..._: unknown[]): unknown; 
    isBottomToolbarShown(..._: unknown[]): unknown; 
    isCableInfoPopup(..._: unknown[]): unknown; 
    isCliTabHidden(..._: unknown[]): unknown; 
    isConfigTabHidden(..._: unknown[]): unknown; 
    isDesktopTabHidden(..._: unknown[]): unknown; 
    isDevTaskbarShown(..._: unknown[]): unknown; 
    isEnableCableLengthEffects(..._: unknown[]): unknown; 
    isExternalNetworkAccessEnabled(..._: unknown[]): unknown; 
    isGuiTabHidden(..._: unknown[]): unknown; 
    isHideDevModelLabel(..._: unknown[]): unknown; 
    isHideQoSStamp(..._: unknown[]): unknown; 
    isMainToolbarShown(..._: unknown[]): unknown; 
    isPhysicalTabHidden(..._: unknown[]): unknown; 
    isSecondaryToolbarShown(..._: unknown[]): unknown; 
    isTelephonySound(..._: unknown[]): unknown; 
    isUseCliDefaultTab(..._: unknown[]): unknown; 
    isUsingMetric(..._: unknown[]): unknown; 
    setBottomToolbarShown(..._: unknown[]): unknown; 
    setCableInfoPopup(..._: unknown[]): unknown; 
    setCliTabHidden(..._: unknown[]): unknown; 
    setConfigTabHidden(..._: unknown[]): unknown; 
    setCustomHideOption(..._: unknown[]): unknown; 
    setDesktopTabHidden(..._: unknown[]): unknown; 
    setDisableAutoCabling(..._: unknown[]): unknown; 
    setEnableCableLengthEffects(..._: unknown[]): unknown; 
    setEnableExternalNetworkAccess(..._: unknown[]): unknown; 
    setGuiTabHidden(..._: unknown[]): unknown; 
    setHideDevModelLabel(..._: unknown[]): unknown; 
    setHideQoSStamp(..._: unknown[]): unknown; 
    setMainToolbarShown(..._: unknown[]): unknown; 
    setPhysicalTabHidden(..._: unknown[]): unknown; 
    setSecondaryToolbarShown(..._: unknown[]): unknown; 
    setShowDevTaskbar(..._: unknown[]): unknown; 
    setTelephonySound(..._: unknown[]): unknown; 
    setUseCliDefaultTab(..._: unknown[]): unknown; 
    setUseMetric(..._: unknown[]): unknown; 
    addBackgroundImage(s: string, s2: string): void; 
    getBufferFullAction(): _BufferFullAction; 
    getConfigFilePath(): string; 
    isAccessible(): boolean; 
    isAnimation(): boolean; 
    isChallenge_PDUInfo(): boolean; 
    isDeviceModelShown(): boolean; 
    isDockFirst(): boolean; 
    isHideDevLabel(): boolean; 
    isLinkLightsShown(): boolean; 
    isLoggingEnabled(): boolean; 
    isPortNotShownOnMouseOver(): boolean; 
    isPortShown(): boolean; 
    isSound(): boolean; 
    removeBackgroundImage(s: string): void; 
    saveFile(s: string): void; 
    setAccessible(b: boolean): void; 
    setAnimation(b: boolean): void; 
    setBufferFullAction(bufferFullAction: _BufferFullAction): void; 
    setHideDevLabel(b: boolean, b2: boolean): void; 
    setIsChallenge_PDUInfo(b: boolean): void; 
    setIsDockFirst(b: boolean): void; 
    setIsLinkLightShown(b: boolean): void; 
    setIsLoggingEnabled(b: boolean): void; 
    setIsPortShown(b: boolean): void; 
    setPortNotShownOnMouseOver(b: boolean): void; 
    setSound(b: boolean): void; 
}
declare type _Options = _OptionsBase;

declare interface _PDUListWindowBase extends BaseClass {
    setDisabled(b: boolean): void; 
    setVisible(b: boolean): void; 
}
declare type _PDUListWindow = _PDUListWindowBase;

declare interface _PLSwitchEvents {
    registerEvent(eventName: "ModeSwitched", obj: object | null, callback: eventCallback<{
        isLogical: boolean,
    }>): void;
}
declare interface _PLSwitchBase extends BaseClass {
    setDisabled(b: boolean): void; 
    setVisible(b: boolean): void; 
    setWidgetDisable(s: string, b: boolean): void; 
    setWidgetVisible(s: string, b: boolean): void; 
    showLogicalMode(): void; 
    showPhysicalMode(): void; 
}
declare type _PLSwitch = _PLSwitchBase;

declare interface _PcBase extends _Device {
    getDhcpFlag(): boolean; 
    getRs232Port(): _ConsolePort; 
    setDefaultGateway(ip: string): void; 
    setDhcpFlag(value: boolean): void; 
    getCommandPrompt(): _TerminalLine; 
}
declare type _Pc = _PcBase;

declare interface _PhysicalLocationDialogBase extends BaseClass {
    setDisabled(b: boolean): void; 
    setVisible(b: boolean): void; 
    setWidgetDisable(s: string, b: boolean): void; 
    setWidgetVisible(s: string, b: boolean): void; 
    jumpBtn_clicked(): void; 
    refreshTree(): void; 
}
declare type _PhysicalLocationDialog = _PhysicalLocationDialogBase;

declare interface _PhysicalToolbarBase extends BaseClass {
    setDisabled(b: boolean): void; 
    setVisible(b: boolean): void; 
    setWidgetDisable(s: string, b: boolean): void; 
    setWidgetVisible(s: string, b: boolean): void; 
    addCity(): void; 
    addCloset(): void; 
    addGrid(): void; 
    moveObject(): void; 
    setBGImage(): void; 
    showPhysicalLocationDialog(): void; 
    switchToHomeRack(): void; 
    switchToTopView(): void; 
}
declare type _PhysicalToolbar = _PhysicalToolbarBase;

declare interface _PolicyMapBase extends BaseClass {
    getClassAt(n: number): _PolicyMapQosClass; 
    getClassCnt(): number; 
    getMapName(): string; 
    getMapType(): _MapType; 
    getTotalBandwidth(): number; 
    getTotalBandwidthPercent(): number; 
    getTotalBandwidthRemainPercent(): number; 
    hasGtsFeature(): boolean; 
    hasOutputFeature(): boolean; 
    isBandwidthConfigured(): boolean; 
    isFairQueueConfigured(): boolean; 
    isPriorityConfigured(): boolean; 
    isShapeConfigured(): boolean; 
    setMapType(mapType: _MapType): void; 
    toString(): string; 
    updateOutputPort(): void; 
}
declare type _PolicyMap = _PolicyMapBase;

declare interface _PolicyMapManagerBase extends BaseClass {
    getPolicyMap(s: string): _PolicyMap; 
    getPolicyMapAt(n: number): _PolicyMap; 
    getPolicyMapCount(): number; 
}
declare type _PolicyMapManager = _PolicyMapManagerBase;

declare interface _PortEvents {
    registerEvent(eventName: "PowerChanged", obj: object | null, callback: eventCallback<{
        on: boolean,
    }>): void;
    registerEvent(eventName: "MacChanged", obj: object | null, callback: eventCallback<{
        newMac: MAC,
        oldMac: MAC,
    }>): void;
    registerEvent(eventName: "PacketReceived", obj: object | null, callback: eventCallback<{
        inType: string,
        size: number,
    }>): void;
    registerEvent(eventName: "PortStatusChanged", obj: object | null, callback: eventCallback<{
        portUp: boolean,
    }>): void;
    registerEvent(eventName: "LineProtocolChanged", obj: object | null, callback: eventCallback<{
        portUp: boolean,
    }>): void;
}
declare interface _PortBase extends _Process {
    getDuplex(): boolean; 
    setDuplex(b: boolean): void; 
    deleteLink(): void; 
    getChannel(): number; 
    getHardwareQueue(): unknown; // Dostal jsem _UsbController, protože to byl USB port, ostatní budou mít (zcela jistě) něco jiného
    getHigherProcessCount(): number; 
    getLightStatus(): number; 
    getPortNameNumber(): number; 
    getQosQueue(): unknown | null; 
    getTerminalTypeShortString(): string; 
    isAutoCross(): boolean; 
    isBandwidthAutoNegotiate(): boolean; 
    isDuplexAutoNegotiate(): boolean; 
    isEthernetPort(): boolean; 
    isFullDuplex(): boolean; 
    isPowerOn(): boolean; 
    isStraightPins(): boolean; 
    isWirelessPort(): boolean; 
    setBandwidthAutoNegotiate(value: boolean): void; 
    setChannel(value: number): void; 
    setDuplexAutoNegotiate(value: boolean): void; 
    setFullDuplex(value: boolean): void; 
    getBandwidth(): number; 
    getBia(): MAC; 
    getClockRate(): number; 
    getDescription(): string; 
    getEncapProcess(): _Process | null; 
    getKeepAliveProcess(): _Process | null; 
    getLink(): _Link | null; 
    getMacAddress(): MAC; 
    getName(): string; 
    getPower(): boolean; 
    getRemotePortName(): string; 
    getType(): _PortType; 
    isPortUp(): boolean; 
    isProtocolUp(): boolean; 
    setBandwidth(value: number): void; 
    setClockRate(value: number): void; 
    setDescription(value: string): void; 
    setMacAddress(macAddress: MAC): void; 
    setPower(value: boolean): void; 
}
declare type _Port = _PortBase;

declare interface _ProcessBase extends BaseClass {
    getOwnerDevice(): _Device; 
}
declare type _Process = _ProcessBase;

declare interface _RSSwitchEvents {
    registerEvent(eventName: "ModeSwitched", obj: object | null, callback: eventCallback<{
        isRealtime: boolean,
    }>): void;
}
declare interface _RSSwitchBase extends BaseClass {
    setDisabled(b: boolean): void; 
    setVisible(b: boolean): void; 
    setWidgetDisable(s: string, b: boolean): void; 
    setWidgetVisible(s: string, b: boolean): void; 
    showRealtimeMode(): void; 
    showSimulationMode(): void; 
}
declare type _RSSwitch = _RSSwitchBase;

declare interface _RealtimeToolbarBase extends BaseClass {
    setDisabled(b: boolean): void; 
    setVisible(b: boolean): void; 
    setWidgetDisable(s: string, b: boolean): void; 
    setWidgetVisible(s: string, b: boolean): void; 
    fastForwardTime(): void; 
    resetNetwork(): void; 
}
declare type _RealtimeToolbar = _RealtimeToolbarBase;

declare interface _RouterBase extends _CiscoDevice {
    getNetflowExporterManager(..._: unknown[]): unknown; 
    getNetflowMonitorManager(..._: unknown[]): unknown; 
    getNetflowRecordManager(..._: unknown[]): unknown; 
    getParameterMapManager(..._: unknown[]): unknown; 
    addSubInt(s: string, n: number): boolean; 
    addUserPass(s: string, s2: string, n: number): void; 
    changePortEncapsulation(s: string, s2: string): boolean; 
    getClassMapManager(): _ClassMapManager; 
    getPolicyMapManager(): _PolicyMapManager; 
    getUserPass(s: string): string; 
    removeSubInt(s: string): boolean; 
    removeUserPass(s: string): void; 
}
declare type _Router = _RouterBase;

declare interface _RouterPortBase extends _HostPort {
    getHardwareQueue(): _CsmaCdProcess; 
    isIkeEnabled(): boolean; 
    isProxyArpEnabled(): boolean; 
    setIkeEnabled(value: boolean): void; 
    setProxyArpEnabled(value: boolean): void; 
    addEntryEigrpPassive(n: number, b: boolean): void; 
    addOspfMd5Key(n: number, s: string): boolean; 
    addSummaryAddress(n: number, ipAddress: IP, ipAddress2: IP, n2: number): boolean; 
    getAclInID(): string; 
    getAclOutID(): string; 
    getBandwidthInfo(): number; 
    getDelay(): number; 
    getIntOfAs(n: number): number; 
    getIpsInID(): string; 
    getIpsOutID(): string; 
    getNatMode(): _NATMode; 
    getOspfAuthKey(): string; 
    getOspfAuthType(): number; 
    getOspfCost(): number; 
    getOspfDeadInterval(): number; 
    getOspfHelloInterval(): number; 
    getOspfPriority(): number; 
    getZoneMemberName(): string; 
    isCdpEnable(): boolean; 
    isRipPassive(): boolean; 
    isRipSplitHorizon(): boolean; 
    removeEntryEigrpPassive(n: number): void; 
    removeOspfMd5Key(n: number): void; 
    removeSummaryAddress(n: number, ipAddress: IP, ipAddress2: IP, n2: number): boolean; 
    resetBandwidth(): void; 
    resetDelay(): void; 
    setAclInID(s: string): void; 
    setAclOutID(s: string): void; 
    setBandwidthInfo(n: number): void; 
    setCdpEnable(value: boolean): void; 
    setDelay(n: number): void; 
    setIntForAs(n: number, n2: number): void; 
    setIpsInID(s: string): void; 
    setIpsOutID(s: string): void; 
    setNatMode(natMode: _NATMode): void; 
    setOspfAuthKey(s: string): void; 
    setOspfCost(value: number): void; 
    setOspfDeadInterval(value: number): void; 
    setOspfHelloInterval(value: number): void; 
    setOspfPriority(value: number): void; 
    setRipPassive(value: boolean): void; 
    setRipSplitHorizon(value: boolean): void; 
    setZoneMemberName(s: string): void; 
}
declare type _RouterPort = _RouterPortBase;

declare interface _SimulationEvents {
    registerEvent(eventName: "ForwardStarted", obj: object | null, callback: eventCallback<{}>): void;
    registerEvent(eventName: "ForwardEnded", obj: object | null, callback: eventCallback<{}>): void;
    registerEvent(eventName: "NewFrameInstanceAdded", obj: object | null, callback: eventCallback<{
        trafficType: _TrafficType,
        index: number,
    }>): void;
    registerEvent(eventName: "SimulationReset", obj: object | null, callback: eventCallback<{}>): void;
    registerEvent(eventName: "SimulationModeChanged", obj: object | null, callback: eventCallback<{}>): void;
}
declare interface _SimulationBase extends BaseClass {
    backward(..._: unknown[]): unknown; 
    createFrameInstance(..._: unknown[]): unknown; 
    createFrameInstanceCustomType(..._: unknown[]): unknown; 
    createTimer(..._: unknown[]): unknown; 
    createTimerUuid(..._: unknown[]): unknown; 
    finalizeFrameInstance(..._: unknown[]): unknown; 
    forward(..._: unknown[]): unknown; 
    getCurrentFrameInstanceIndex(..._: unknown[]): unknown; 
    getCurrentSimTime(..._: unknown[]): unknown; 
    getIpcTimer(..._: unknown[]): unknown; 
    resetSimulation(..._: unknown[]): unknown; 
    setSimulationMode(..._: unknown[]): unknown; 
    getFrameInstanceAt(n: number): _FrameInstance; 
    getFrameInstanceCount(): number; 
    isSimulationMode(): boolean; 
}
declare type _Simulation = _SimulationBase;

declare interface _SimulationPanelBase extends BaseClass {
    setDisabled(b: boolean): void; 
    setVisible(b: boolean): void; 
    setWidgetDisable(s: string, b: boolean): void; 
    setWidgetVisible(s: string, b: boolean): void; 
    back(): void; 
    changePlaySpeed(n: number): void; 
    forward(): void; 
    isPlaying(): boolean; 
    play(): void; 
    populateEventList(): void; 
    resetSimulation(): void; 
    setAllFilters(): void; 
    setConstantDelay(b: boolean): void; 
    setFilter(s: string, b: boolean): void; 
    showFiltersDialog(): void; 
}
declare type _SimulationPanel = _SimulationPanelBase;

declare interface _SimulationToolbarBase extends BaseClass {
    setDisabled(b: boolean): void; 
    setVisible(b: boolean): void; 
    setWidgetDisable(s: string, b: boolean): void; 
    setWidgetVisible(s: string, b: boolean): void; 
    isEventListOn(): boolean; 
    resetNetwork(): void; 
    setEventListToggle(b: boolean): void; 
}
declare type _SimulationToolbar = _SimulationToolbarBase;

declare interface _SwitchPortBase extends _Port {
    addTrunkVlans(n: number, n2: number): void; 
    getAccessVlan(): number; 
    getAdminOpMode(): number; 
    getNativeVlanId(): number; 
    getPortSecurity(): _PortSecurity; 
    getVoipVlanId(): number; 
    isAccessPort(): boolean; 
    isAdminModeSet(): boolean; 
    isCdpEnable(): boolean; 
    isNonegotiate(): boolean; 
    removeTrunkVlans(n: number, n2: number): void; 
    setAccessPort(b: boolean): void; 
    setAccessVlan(n: number): void; 
    setAdminOpMode(switchPortMode: _SwitchPortMode): void; 
    setCdpEnable(b: boolean): void; 
    setNativeVlanId(n: number): void; 
    setNonegotiateFlag(b: boolean): void; 
    setVoipVlanId(n: number): void; 
}
declare type _SwitchPort = _SwitchPortBase;

declare interface _TerminalLineEvents {
    registerEvent(eventName: "TerminalUpdated", obj: object | null, callback: eventCallback<{
        updatedStr: string,
    }>): void;
    registerEvent(eventName: "OutputWritten", obj: object | null, callback: eventCallback<{
        newOutput: string,
        isDebug: boolean,
        cursorPositionFromEnd: number,
    }>): void;
    registerEvent(eventName: "CursorPositionChanged", obj: object | null, callback: eventCallback<{
        positionFromEnd: number,
    }>): void;
    registerEvent(eventName: "DirectiveSent", obj: object | null, callback: eventCallback<{
        directiveCommand: _DirectiveCommand,
        cursorPositionFromEnd: number,
    }>): void;
    registerEvent(eventName: "CommandStarted", obj: object | null, callback: eventCallback<{
        inputCommand: string,
        completeCommand: string,
        inputMode: string,
    }>): void;
    registerEvent(eventName: "CommandEnded", obj: object | null, callback: eventCallback<{
        inputCommand: string,
        status: _CommandStatus,
    }>): void;
    registerEvent(eventName: "CommandAutoCompleted", obj: object | null, callback: eventCallback<{
        inputCommand: string,
        completeCommand: string,
    }>): void;
    registerEvent(eventName: "ModeChanged", obj: object | null, callback: eventCallback<{
        newMode: string,
        newModeArg: string,
        newPrompt: string,
    }>): void;
    registerEvent(eventName: "PromptChanged", obj: object | null, callback: eventCallback<{
        newPrompt: string,
    }>): void;
    registerEvent(eventName: "CommandSelectedFromHistory", obj: object | null, callback: eventCallback<{
        historyCommand: string,
    }>): void;
}
declare interface _TerminalLineBase extends BaseClass {
    flush(..._: unknown[]): unknown; 
    getDataBits(..._: unknown[]): unknown; 
    getFlowControl(..._: unknown[]): unknown; 
    getParity(..._: unknown[]): unknown; 
    getSpeed(..._: unknown[]): unknown; 
    getStopBits(..._: unknown[]): unknown; 
    println(..._: unknown[]): unknown; 
    setSettings(..._: unknown[]): unknown; 
    enterChar(b: byte, specialChar: _SpecialChar): void; 
    enterCommand(s: string): void; 
    getCommandInput(): string; 
    getConfigHistory(): _CommandHistory; 
    getCurrentHistory(): _CommandHistory; 
    getHistorySize(): number; 
    getMode(): string; 
    getName(): string; 
    getPrompt(): string; 
    getTelnetClientAt(n: number): _TelnetClientProcess; 
    getTelnetClientCount(): number; 
    getUserHistory(): _CommandHistory; 
}
declare type _TerminalLine = _TerminalLineBase;

declare interface _ToolBarBase extends BaseClass {
    addItem(..._: unknown[]): unknown; 
    getItemByUuid(..._: unknown[]): unknown; 
    removeItemUuid(..._: unknown[]): unknown; 
    setItemAtEnabled(..._: unknown[]): unknown; 
    setItemAtVisible(..._: unknown[]): unknown; 
    setItemVisible(..._: unknown[]): unknown; 
    setVisible(..._: unknown[]): unknown; 
    count(): number; 
    setItemEnabled(s: string, b: boolean): void; 
}
declare type _ToolBar = _ToolBarBase;

declare interface _UserCreatedPDUBase extends BaseClass {
    setDisabled(b: boolean): void; 
    setVisible(b: boolean): void; 
    setWidgetDisable(s: string, b: boolean): void; 
    setWidgetVisible(s: string, b: boolean): void; 
    addSimplePdu(..._: unknown[]): unknown; 
    activateScenario(n: number): void; 
    colorPDU(n: number): void; 
    deletePDU(n: number): void; 
    deleteScenarioBtn_clicked(): void; 
    editPDU(n: number): void; 
    firePDU(n: number): void; 
    newScenarioBtn_clicked(): void; 
    scenarioInfoBtn_clicked(): void; 
    setScenarioDescription(s: string): void; 
    toggleOpenListWindowBtn(b: boolean): void; 
}
declare type _UserCreatedPDU = _UserCreatedPDUBase;

declare interface _WebViewManagerBase extends BaseClass {
    closeAll(): void; 
    closeWebView(uuid: UUID): boolean; 
    createWebView(s: string, s2: string, n: number, n2: number): _WebView; 
    getWebView(uuid: UUID): _WebView; 
}
declare type _WebViewManager = _WebViewManagerBase;

declare interface _WorkspaceBase extends BaseClass {
    devicesAt(..._: unknown[]): unknown; 
    fillColor(..._: unknown[]): unknown; 
    getCurrentPhysicalObject(..._: unknown[]): unknown; 
    getEnvironmentTimeInSeconds(..._: unknown[]): unknown; 
    getProperties(..._: unknown[]): unknown; 
    getProperty(..._: unknown[]): unknown; 
    getRootPhysicalObject(..._: unknown[]): unknown; 
    getZLevel(..._: unknown[]): unknown; 
    hasProperty(..._: unknown[]): unknown; 
    moveItemInWorkspace(..._: unknown[]): unknown; 
    pauseEnvironmentTime(..._: unknown[]): unknown; 
    resetEnvironment(..._: unknown[]): unknown; 
    resumeEnvironmentTime(..._: unknown[]): unknown; 
    setBaseZLevel(..._: unknown[]): unknown; 
    setComponentOpacity(..._: unknown[]): unknown; 
    setComponentRotation(..._: unknown[]): unknown; 
    setLogicalBackgroundPath(..._: unknown[]): unknown; 
    setParentGraphicFromComponent(..._: unknown[]): unknown; 
    setProperty(..._: unknown[]): unknown; 
    setThingCustomText(..._: unknown[]): unknown; 
    setThingRotation(..._: unknown[]): unknown; 
    setVisible(..._: unknown[]): unknown; 
    switchToPhysicalObject(..._: unknown[]): unknown; 
    zoomIn(..._: unknown[]): unknown; 
    zoomOut(..._: unknown[]): unknown; 
    zoomReset(..._: unknown[]): unknown; 
    getGeoView(): _GeoView; 
    getLogicalWorkspace(): _LogicalWorkspace; 
    getRackView(): _RackView; 
    isGeoView(): boolean; 
    isLogicalView(): boolean; 
    isRackView(): boolean; 
}
declare type _Workspace = _WorkspaceBase;

