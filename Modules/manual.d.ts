
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
// Definice nad tímto komentářem nejsou dostupné v dekompilovaném ptaplayer programu nebo se jedná o pomocné definice, které ve skutečnosti neexistují

declare interface _UserAppManager extends BaseClass {
    addGlobalApp(..._: unknown[]): unknown;
    getGlobalApp(appId: string): _UserDesktopAppConfig | null;
    getGlobalAppAt(index: number): _UserDesktopAppConfig;
    getGlobalAppByPath(path: string): _UserDesktopAppConfig | null;
    getGlobalAppCount(): number;
    removeGlobalApp(appId: string): void;
}
declare interface _UserDesktopAppConfig extends BaseClass {
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
type pduType = "TextFileContent" | "HttpPage";
declare interface _File extends BaseClass {
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
declare interface _Directory extends BaseClass {
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
    getSpaceUsed(): number;
    removeAllFiles(_: boolean): boolean;
    removeFile(name: string, _: boolean): boolean;
    renameFile(oldName: string, newName: string, _: boolean): boolean;
}
/**
 * Všechny cesty mohou být absolutní i relativní.
 * Pokud je cesta relativní, tak je relativní ke složce, kde se nachází executable PT.
 * Ve Windows je tedy `C:/Program Files/Cisco Packet Tracer VERZE_PACKET_TRACERU/bin/`.
 */
declare interface _SystemFileManager extends BaseClass {
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
declare interface _SystemFileWatcher extends BaseClass {
    addPath(..._: unknown[]): unknown;
    removePath(..._: unknown[]): unknown;
}
declare interface _Simulation extends BaseClass {
    backward(..._: unknown[]): unknown;
    createFrameInstance(..._: unknown[]): unknown;
    createFrameInstanceCustomType(..._: unknown[]): unknown;
    createTimer(..._: unknown[]): unknown;
    createTimerUuid(..._: unknown[]): unknown;
    finalizeFrameInstance(..._: unknown[]): unknown;
    forward(..._: unknown[]): unknown;
    getCurrentFrameInstanceIndex(..._: unknown[]): unknown;
    getCurrentSimTime(..._: unknown[]): unknown;
    getFrameInstanceAt(..._: unknown[]): unknown;
    getFrameInstanceCount(): number;
    getIpcTimer(..._: unknown[]): unknown;
    isSimulationMode(..._: unknown[]): unknown;
    resetSimulation(..._: unknown[]): unknown;
    setSimulationMode(..._: unknown[]): unknown;
}
declare interface _Options extends BaseClass {
    addBackgroundImage(..._: unknown[]): unknown;
    addCustomHideOption(..._: unknown[]): unknown;
    getBufferFullAction(..._: unknown[]): unknown;
    getConfigFilePath(..._: unknown[]): unknown;
    getCurrentLanguage(..._: unknown[]): unknown;
    getCustomHideOption(..._: unknown[]): unknown;
    isAccessible(..._: unknown[]): unknown;
    isAnimation(..._: unknown[]): unknown;
    isAutoCablingDisabled(..._: unknown[]): unknown;
    isBottomToolbarShown(..._: unknown[]): unknown;
    isCableInfoPopup(..._: unknown[]): unknown;
    isChallenge_PDUInfo(..._: unknown[]): unknown;
    isCliTabHidden(..._: unknown[]): unknown;
    isConfigTabHidden(..._: unknown[]): unknown;
    isDesktopTabHidden(..._: unknown[]): unknown;
    isDevTaskbarShown(..._: unknown[]): unknown;
    isDeviceModelShown(..._: unknown[]): unknown;
    isDockFirst(..._: unknown[]): unknown;
    isEnableCableLengthEffects(..._: unknown[]): unknown;
    isExternalNetworkAccessEnabled(..._: unknown[]): unknown;
    isGuiTabHidden(..._: unknown[]): unknown;
    isHideDevLabel(..._: unknown[]): unknown;
    isHideDevModelLabel(..._: unknown[]): unknown;
    isHideQoSStamp(..._: unknown[]): unknown;
    isLinkLightsShown(..._: unknown[]): unknown;
    isLoggingEnabled(..._: unknown[]): unknown;
    isMainToolbarShown(..._: unknown[]): unknown;
    isPhysicalTabHidden(..._: unknown[]): unknown;
    isPortNotShownOnMouseOver(..._: unknown[]): unknown;
    isPortShown(..._: unknown[]): unknown;
    isSecondaryToolbarShown(..._: unknown[]): unknown;
    isSound(..._: unknown[]): unknown;
    isTelephonySound(..._: unknown[]): unknown;
    isUseCliDefaultTab(..._: unknown[]): unknown;
    isUsingMetric(..._: unknown[]): unknown;
    removeBackgroundImage(..._: unknown[]): unknown;
    saveFile(..._: unknown[]): unknown;
    setAccessible(..._: unknown[]): unknown;
    setAnimation(..._: unknown[]): unknown;
    setBottomToolbarShown(..._: unknown[]): unknown;
    setBufferFullAction(..._: unknown[]): unknown;
    setCableInfoPopup(..._: unknown[]): unknown;
    setCliTabHidden(..._: unknown[]): unknown;
    setConfigTabHidden(..._: unknown[]): unknown;
    setCustomHideOption(..._: unknown[]): unknown;
    setDesktopTabHidden(..._: unknown[]): unknown;
    setDisableAutoCabling(..._: unknown[]): unknown;
    setEnableCableLengthEffects(..._: unknown[]): unknown;
    setEnableExternalNetworkAccess(..._: unknown[]): unknown;
    setGuiTabHidden(..._: unknown[]): unknown;
    setHideDevLabel(..._: unknown[]): unknown;
    setHideDevModelLabel(..._: unknown[]): unknown;
    setHideQoSStamp(..._: unknown[]): unknown;
    setIsChallenge_PDUInfo(..._: unknown[]): unknown;
    setIsDockFirst(..._: unknown[]): unknown;
    setIsLinkLightShown(..._: unknown[]): unknown;
    setIsLoggingEnabled(..._: unknown[]): unknown;
    setIsPortShown(..._: unknown[]): unknown;
    setMainToolbarShown(..._: unknown[]): unknown;
    setPhysicalTabHidden(..._: unknown[]): unknown;
    setPortNotShownOnMouseOver(..._: unknown[]): unknown;
    setSecondaryToolbarShown(..._: unknown[]): unknown;
    setShowDevTaskbar(..._: unknown[]): unknown;
    setSound(..._: unknown[]): unknown;
    setTelephonySound(..._: unknown[]): unknown;
    setUseCliDefaultTab(..._: unknown[]): unknown;
    setUseMetric(..._: unknown[]): unknown;
}
declare interface _Network extends BaseClass {
    getDevice(deviceName: string): _Device | undefined;
    getDeviceAt(index: number): _Device;
    getDeviceCount(): number;
    getLinkAt(index: number): _Cable; // Nějaký rozbitý, z nějakého důvodu vrací string "object"
    getLinkCount(): number;
    getTotalDeviceAttributeValue(..._: unknown[]): unknown;
}
declare interface _Cable extends BaseClass {
    getConnectionType(): number;
    getOtherPort(port: _Port): _Port;
    getPort1(): _Port;
    getPort2(): _Port;
}
declare interface _RouterPort extends _HostPort {
    addEntryEigrpPassive(..._: unknown[]): unknown;
    addOspfMd5Key(..._: unknown[]): unknown;
    addSummaryAddress(..._: unknown[]): unknown;
    getAclInID(): string;
    getAclOutID(): string;
    getBandwidthInfo(): number;
    getDelay(): number;
    getHardwareQueue(): _CsmaCdProcess;
    getIntOfAs(..._: unknown[]): unknown;
    getIpsInID(): string;
    getIpsOutID(): string;
    getNatMode(): number;
    getOspfAuthKey(): string;
    getOspfAuthType(): number;
    getOspfCost(): number;
    getOspfDeadInterval(): number;
    getOspfHelloInterval(): number;
    getOspfPriority(): number;
    getZoneMemberName(): string;
    isCdpEnable(): boolean;
    isIkeEnabled(): boolean;
    isProxyArpEnabled(): boolean;
    isRipPassive(): boolean;
    isRipSplitHorizon(): boolean;
    removeEntryEigrpPassive(..._: unknown[]): unknown;
    removeOspfMd5Key(..._: unknown[]): unknown;
    removeSummaryAddress(..._: unknown[]): unknown;
    resetBandwidth(..._: unknown[]): unknown;
    resetDelay(..._: unknown[]): unknown;
    setAclInID(..._: unknown[]): unknown;
    setAclOutID(..._: unknown[]): unknown;
    setBandwidthInfo(..._: unknown[]): unknown;
    setCdpEnable(value: boolean): void;
    setDelay(..._: unknown[]): unknown;
    setIkeEnabled(value: boolean): void;
    setIntForAs(..._: unknown[]): unknown;
    setIpMtu(..._: unknown[]): unknown;
    setIpSubnetMask(..._: unknown[]): unknown;
    setIpsInID(..._: unknown[]): unknown;
    setIpsOutID(..._: unknown[]): unknown;
    setNatMode(..._: unknown[]): unknown;
    setOspfAuthKey(..._: unknown[]): unknown;
    setOspfCost(value: number): void;
    setOspfDeadInterval(value: number): void;
    setOspfHelloInterval(value: number): void;
    setOspfPriority(value: number): void;
    setProxyArpEnabled(value: boolean): void;
    setRipPassive(value: boolean): void;
    setRipSplitHorizon(value: boolean): void;
    setZoneMemberName(..._: unknown[]): unknown;
}
declare interface _FifoQueue extends BaseClass {
    getQueueAt(..._: unknown[]): unknown;
    getQueueCount(): number;
    getQueueType(..._: unknown[]): unknown;
}
declare interface _Queue extends BaseClass {
    getName(..._: unknown[]): unknown;
    getPacketCnt(..._: unknown[]): unknown;
}
declare interface _Router extends _CiscoDevice {
    addSubInt(..._: unknown[]): unknown;
    addUserPass(..._: unknown[]): unknown;
    changePortEncapsulation(..._: unknown[]): unknown;
    getClassMapManager(..._: unknown[]): unknown;
    getNetflowExporterManager(..._: unknown[]): unknown;
    getNetflowMonitorManager(..._: unknown[]): unknown;
    getNetflowRecordManager(..._: unknown[]): unknown;
    getParameterMapManager(..._: unknown[]): unknown;
    getPolicyMapManager(..._: unknown[]): unknown;
    getUserPass(..._: unknown[]): unknown;
    removeSubInt(..._: unknown[]): unknown;
    removeUserPass(..._: unknown[]): unknown;
}
declare interface _Module extends BaseClass {
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
declare interface _SwitchPort extends _Port {
    addTrunkVlans(..._: unknown[]): unknown;
    getAccessVlan(..._: unknown[]): unknown;
    getAdminOpMode(..._: unknown[]): unknown;
    getNativeVlanId(..._: unknown[]): unknown;
    getPortSecurity(..._: unknown[]): unknown;
    getVoipVlanId(..._: unknown[]): unknown;
    isAccessPort(..._: unknown[]): unknown;
    isAdminModeSet(..._: unknown[]): unknown;
    isCdpEnable(..._: unknown[]): unknown;
    isNonegotiate(..._: unknown[]): unknown;
    removeTrunkVlans(..._: unknown[]): unknown;
    setAccessPort(..._: unknown[]): unknown;
    setAccessVlan(..._: unknown[]): unknown;
    setAdminOpMode(..._: unknown[]): unknown;
    setCdpEnable(..._: unknown[]): unknown;
    setNativeVlanId(..._: unknown[]): unknown;
    setNonegotiateFlag(..._: unknown[]): unknown;
    setVoipVlanId(..._: unknown[]): unknown;
}
declare interface _StrictPriorityQueue extends BaseClass {
    getQueueAt(..._: unknown[]): unknown;
    getQueueCount(): number;
    getQueueType(..._: unknown[]): unknown;
}
declare interface _CiscoDevice extends _Device {
    addBootSystem(..._: unknown[]): unknown;
    addUserPassEntry(..._: unknown[]): unknown;
    clearFtpPasswd(..._: unknown[]): unknown;
    clearFtpUsername(..._: unknown[]): unknown;
    enterCommand(..._: unknown[]): unknown;
    getBannerMotd(..._: unknown[]): unknown;
    getBia(..._: unknown[]): unknown;
    getBootSystems(..._: unknown[]): unknown;
    getConfigRegister(..._: unknown[]): unknown;
    getConsole(..._: unknown[]): unknown;
    getConsoleLine(..._: unknown[]): unknown;
    getEnablePassword(): string;
    getEnableSecret(): string;
    getFtpPasswd(..._: unknown[]): unknown;
    getFtpUsername(..._: unknown[]): unknown;
    getHostName(): string;
    getIpcTerminalLine(..._: unknown[]): unknown;
    getLine(..._: unknown[]): unknown;
    getNextConfigRegister(..._: unknown[]): unknown;
    getServicePasswordEncryption(..._: unknown[]): unknown;
    getStartupFile(..._: unknown[]): unknown;
    getTimeZone(..._: unknown[]): unknown;
    getUserEntryAt(..._: unknown[]): unknown;
    getUserPassCount(): number;
    getVtyLine(..._: unknown[]): unknown;
    isBooting(): boolean;
    isUserExist(..._: unknown[]): unknown;
    removeAllBootSystem(..._: unknown[]): unknown;
    removeBootSystem(..._: unknown[]): unknown;
    removeUserPassAt(..._: unknown[]): unknown;
    removeUserPassEntry(..._: unknown[]): unknown;
    setBannerMotd(..._: unknown[]): unknown;
    setEnablePassword(..._: unknown[]): unknown;
    setEnableSecret(secret: string): void;
    setFtpPasswd(..._: unknown[]): unknown;
    setFtpUsername(..._: unknown[]): unknown;
    setHostName(hostname: string): void;
    setNextConfigRegister(..._: unknown[]): unknown;
    setServicePasswordEncryption(..._: unknown[]): unknown;
    setStartupFile(..._: unknown[]): unknown;
    setTimeZone(..._: unknown[]): unknown;
    skipBoot(..._: unknown[]): unknown;
}
declare interface _CsmaCdProcess extends BaseClass {
    getKeepAliveInterval(): number;
    getPacketCnt(): number;
    getUserTrafficAt(index: number): unknown;
    isKeepAliveOn(): boolean;
    setKeepAliveInterval(value: number): void;
    setKeepAliveOn(value: boolean): void;
}
declare interface _Process extends BaseClass {
    getOwnerDevice(..._: unknown[]): unknown;
}
declare interface _ModuleDescriptor extends BaseClass {
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
declare interface _ModulePhysicalView extends BaseClass {
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
declare interface _PolicyMapManager extends BaseClass {
    getPolicyMap(..._: unknown[]): unknown;
    getPolicyMapAt(..._: unknown[]): unknown;
    getPolicyMapCount(): number;
}
declare interface _PolicyMap extends BaseClass {
    getClassAt(..._: unknown[]): unknown;
    getClassCnt(..._: unknown[]): unknown;
    getMapName(..._: unknown[]): unknown;
    getMapType(..._: unknown[]): unknown;
    getTotalBandwidth(..._: unknown[]): unknown;
    getTotalBandwidthPercent(..._: unknown[]): unknown;
    getTotalBandwidthRemainPercent(..._: unknown[]): unknown;
    hasGtsFeature(..._: unknown[]): unknown;
    hasOutputFeature(..._: unknown[]): unknown;
    isBandwidthConfigured(..._: unknown[]): unknown;
    isFairQueueConfigured(..._: unknown[]): unknown;
    isPriorityConfigured(..._: unknown[]): unknown;
    isShapeConfigured(..._: unknown[]): unknown;
    setMapType(..._: unknown[]): unknown;
    toString(..._: unknown[]): unknown;
    updateOutputPort(..._: unknown[]): unknown;
}
declare interface _PhysicalObject extends BaseClass {
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
declare interface _Pc extends _Device {
    getCommandPrompt(): _ConsoleLine;
    getDhcpFlag(): boolean;
    getRs232Port(): _ConsolePort;
    setDefaultGateway(ip: string): void;
    setDhcpFlag(value: boolean): void;
}
declare interface _UsbPort extends _Port {
    getController(): _UsbController;
    getHardwareQueue(): _UsbController;
    isUsbHost(): boolean;
}
declare interface _ConsolePort extends _Port {
    getTerminalLine(): _ConsoleLine;
}
declare interface _ConsoleLine extends BaseClass {
    enterChar(..._: unknown[]): unknown;
    enterCommand(command: string): void;
    flush(_: number): void;
    /** Získá současný vstup */
    getCommandInput(): string;
    getConfigHistory(): _CommandHistory;
    getCurrentHistory(): _CommandHistory;
    getDataBits(): number;
    getFlowControl(): number;
    getHistorySize(): number;
    getMode(): string;
    getName(): string;
    getOutput(): string;
    getParity(): number;
    getPrompt(): string;
    getSpeed(): number;
    getStopBits(): number;
    getTelnetClientAt(..._: unknown[]): unknown;
    getTelnetClientCount(): number;
    getUserHistory(): _CommandHistory;
    /** Následně je potřeba `.flush()` */
    println(text: string): void;
    setSettings(..._: unknown[]): unknown;
}
declare interface _UsbController extends BaseClass {
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
declare interface _HostPort extends _Port {
    addIpv6Address(..._: unknown[]): unknown;
    getIpAddress(..._: unknown[]): unknown;
    getIpMtu(..._: unknown[]): unknown;
    getIpv6Address(..._: unknown[]): unknown;
    getIpv6Addresses(..._: unknown[]): unknown;
    getIpv6LinkLocal(..._: unknown[]): unknown;
    getIpv6Mtu(..._: unknown[]): unknown;
    getIpv6Multicast(..._: unknown[]): unknown;
    getMtu(..._: unknown[]): unknown;
    getSubnetMask(..._: unknown[]): unknown;
    getUnicastIpv6Address(..._: unknown[]): unknown;
    getUnicastIpv6Prefix(..._: unknown[]): unknown;
    hasIpv6Address(..._: unknown[]): unknown;
    isDhcpClientOn(..._: unknown[]): unknown;
    isInIpv6Multicast(..._: unknown[]): unknown;
    isInboundFirewallOn(..._: unknown[]): unknown;
    isInboundIpv6FirewallOn(..._: unknown[]): unknown;
    isIpv6AddressAutoConfig(..._: unknown[]): unknown;
    isIpv6Enabled(..._: unknown[]): unknown;
    isSetToDhcpv6(..._: unknown[]): unknown;
    removeAllIpv6Addresses(..._: unknown[]): unknown;
    removeIpv6Address(..._: unknown[]): unknown;
    setDefaultArpTimeout(..._: unknown[]): unknown;
    setDefaultGateway(..._: unknown[]): unknown;
    setDhcpClientFlag(..._: unknown[]): unknown;
    setDnsServerIp(..._: unknown[]): unknown;
    setInboundFirewallService(..._: unknown[]): unknown;
    setInboundIpv6FirewallService(..._: unknown[]): unknown;
    setIpMtu(..._: unknown[]): unknown;
    setIpSubnetMask(..._: unknown[]): unknown;
    setIpv6AddressAutoConfig(..._: unknown[]): unknown;
    setIpv6Enabled(..._: unknown[]): unknown;
    setIpv6LinkLocal(..._: unknown[]): unknown;
    setIpv6Mtu(..._: unknown[]): unknown;
    setMtu(..._: unknown[]): unknown;
    setv6DefaultGateway(..._: unknown[]): unknown;
    setv6ServerIp(..._: unknown[]): unknown;

    //TODO: Test this
    registerEvent(eventName: "ipChanged", obj: object | null, callback: eventCallback<{
        newIp: string,
        newMask: string,
        oldIp: string,
        oldMask: string
    }>): void;
}
declare interface _BluetoothManager extends BaseClass {
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
declare interface _DeviceDescriptor extends BaseClass {
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
declare interface _Device extends BaseClass {
    activityTreeToXml(): string;
    addCustomVar(key: string, value: string): void;
    addDeviceExternalAttributes(..._: unknown[]): unknown;
    addModule(..._: unknown[]): unknown;
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
    getCommandLine(): _ConsoleLine;
    getCustomInterface(): string;
    getCustomLogicalImage(): string;
    getCustomPhysicalImage(): string;
    getCustomVarNameAt(index: number): string;
    getCustomVarStr(key: string): string;
    getCustomVarValueStrAt(index: string): string;
    getCustomVarsCount(): number;
    getDescriptor(): _DeviceDescriptor;
    getDeviceExternalAttributeValue(..._: unknown[]): unknown;
    getDeviceExternalAttributes(..._: unknown[]): unknown;
    getGlobalXPhysicalWS(..._: unknown[]): unknown;
    getGlobalYPhysicalWS(..._: unknown[]): unknown;
    getModel(): string;
    getName(): string;
    getPhysicalObject(): _PhysicalObject;
    getPort(portName: string): _Port | null;
    getPortAt(index: number): _Port | null;
    getPortCount(): number;
    getPorts(): string[];
    getPower(): boolean;
    getProcess(..._: unknown[]): unknown;
    getProgrammingSerialOutputs(..._: unknown[]): unknown;
    getRootModule(..._: unknown[]): unknown;
    getSerialNumber(): string;
    getSupportedModule(..._: unknown[]): unknown;
    getType(): number;
    getUpTime(): number;
    getUsbPortAt(index: number): _UsbPort|-1;
    getUsbPortCount(): number;
    getUserDesktopAppAt(..._: unknown[]): unknown;
    getUserDesktopAppByDir(..._: unknown[]): unknown;
    getUserDesktopAppById(..._: unknown[]): unknown;
    getUserDesktopAppCount(): number;
    getXCoordinate(..._: unknown[]): unknown;
    getXPhysicalWS(..._: unknown[]): unknown;
    getYCoordinate(..._: unknown[]): unknown;
    getYPhysicalWS(..._: unknown[]): unknown;
    hasCustomVar(key: string): boolean;
    isDesktopAvailable(): boolean;
    isOutdated(): boolean;
    isProjectRunning(..._: unknown[]): unknown;
    moveByInPhysicalWS(..._: unknown[]): unknown;
    moveToLocInPhysicalWS(..._: unknown[]): unknown;
    moveToLocation(x: number, y: number): void;
    moveToLocationCentered(x: number, y: number): void;
    playSound(..._: unknown[]): unknown;
    relinkUserDesktopApp(..._: unknown[]): unknown;
    removeCustomVar(key: string): void;
    removeModule(..._: unknown[]): unknown;
    removeUserDesktopApp(..._: unknown[]): unknown;
    restoreToDefault(..._: unknown[]): unknown;
    runCodeInProject(..._: unknown[]): unknown;
    runProject(..._: unknown[]): unknown;
    serializeToXml(): string;
    setCustomInterface(..._: unknown[]): unknown;
    setCustomLogicalImage(..._: unknown[]): unknown;
    setCustomPhysicalImage(..._: unknown[]): unknown;
    setDeviceExternalAttributes(..._: unknown[]): unknown;
    setName(name: string): void;
    setPower(value: boolean): void;
    setTime(..._: unknown[]): unknown;
    stopProject(..._: unknown[]): unknown;
    stopSound(..._: unknown[]): unknown;
    stopSounds(..._: unknown[]): unknown;
    subtractDeviceExternalAttributes(..._: unknown[]): unknown;
    updateTemplateCreationTime(..._: unknown[]): unknown;
}
declare interface _Server extends _Pc {
    validateIoeUser(..._: unknown[]): unknown;
}
declare interface _Port extends BaseClass {
    deleteLink(): void;
    getBandwidth(): number;
    getBia(): string;
    getChannel(): number;
    getClockRate(): number;
    getDescription(): string;
    getEncapProcess(): unknown|null;
    getHardwareQueue(): unknown; // Dostal jsem _UsbController, protože to byl USB port, ostatní budou mít (zcela jistě) něco jiného
    getHigherProcessCount(): number;
    getKeepAliveProcess(): unknown|null;
    getLightStatus(): number;
    getLink(): _Cable | null;
    getMacAddress(): string;
    getName(): string;
    getOwnerDevice(): _Device;
    getPortNameNumber(): number;
    getPower(): boolean;
    getQosQueue(): unknown|null;
    getRemotePortName(): string;
    getTerminalTypeShortString(): string;
    getType(): number;
    isAutoCross(): boolean;
    isBandwidthAutoNegotiate(): boolean;
    isDuplexAutoNegotiate(): boolean;
    isEthernetPort(): boolean;
    isFullDuplex(): boolean;
    isPortUp(): boolean;
    isPowerOn(): boolean;
    isProtocolUp(): boolean;
    isStraightPins(): boolean;
    isWirelessPort(): boolean;
    setBandwidth(value: number): void;
    setBandwidthAutoNegotiate(value: boolean): void;
    setChannel(value: number): void;
    setClockRate(value: number): void;
    setDescription(value: string): void;
    setDuplexAutoNegotiate(value: boolean): void;
    setFullDuplex(value: boolean): void;
    setMacAddress(..._: unknown[]): unknown;
    setPower(value: boolean): void;
}
declare interface _TerminalLine extends BaseClass {
    enterChar(..._: unknown[]): unknown;
    enterCommand(..._: unknown[]): unknown;
    flush(..._: unknown[]): unknown;
    getCommandInput(..._: unknown[]): unknown;
    getConfigHistory(..._: unknown[]): unknown;
    getCurrentHistory(..._: unknown[]): unknown;
    getDataBits(..._: unknown[]): unknown;
    getFlowControl(..._: unknown[]): unknown;
    getHistorySize(..._: unknown[]): unknown;
    getMode(..._: unknown[]): unknown;
    getName(..._: unknown[]): unknown;
    getParity(..._: unknown[]): unknown;
    getPrompt(..._: unknown[]): unknown;
    getSpeed(..._: unknown[]): unknown;
    getStopBits(..._: unknown[]): unknown;
    getTelnetClientAt(..._: unknown[]): unknown;
    getTelnetClientCount(): number;
    getUserHistory(..._: unknown[]): unknown;
    println(..._: unknown[]): unknown;
    setSettings(..._: unknown[]): unknown;
}
declare interface _ParameterMapManager extends BaseClass {
    deleteParameterMap(..._: unknown[]): unknown;
    getParameterMap(..._: unknown[]): unknown;
    getParameterMapAt(..._: unknown[]): unknown;
    getParameterMapCount(): number;
    isParameterMapExists(..._: unknown[]): unknown;
}
declare interface _FlowRecordManager extends BaseClass {
    createRecord(..._: unknown[]): unknown;
    getRecord(..._: unknown[]): unknown;
    getRecordAt(..._: unknown[]): unknown;
    getRecordCount(): number;
    removeRecord(..._: unknown[]): unknown;
}
declare interface _FlowMonitorManager extends BaseClass {
    createMonitor(..._: unknown[]): unknown;
    getMonitor(..._: unknown[]): unknown;
    getMonitorAt(..._: unknown[]): unknown;
    getMonitorCount(): number;
    removeMonitor(..._: unknown[]): unknown;
}
declare interface _FlowMonitor extends BaseClass {
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
declare interface _CacheFlowDatabase extends BaseClass {
    getAgerPolls(..._: unknown[]): unknown;
    getDistributionTable(..._: unknown[]): unknown;
    getFlowSummaryTable(..._: unknown[]): unknown;
    getTotalFlowCount(): number;
    incrementFlow(..._: unknown[]): unknown;
    reset(..._: unknown[]): unknown;
}
declare interface _NFExporterManager extends BaseClass {
    createNFExporter(..._: unknown[]): unknown;
    getNFExporterAt(..._: unknown[]): unknown;
    getNFExporterByIpAndPort(..._: unknown[]): unknown;
    getNFExporterByName(..._: unknown[]): unknown;
    getNFExporterCount(): number;
    removeNFExporter(..._: unknown[]): unknown;
    removeNFExporterAt(..._: unknown[]): unknown;
}
declare interface _NFExporter extends BaseClass {
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
declare interface _ClassMapManager extends BaseClass {
    classMapExist(..._: unknown[]): unknown;
    deleteClassMap(..._: unknown[]): unknown;
    getClassMap(..._: unknown[]): unknown;
    getClassMapAt(..._: unknown[]): unknown;
    getClassMapCount(): number;
    hasCircularReference(..._: unknown[]): unknown;
    rearrangeMaps(..._: unknown[]): unknown;
}
declare interface _ClassMap extends BaseClass {
    getDescription(..._: unknown[]): unknown;
    getMapName(..._: unknown[]): unknown;
    getMapType(..._: unknown[]): unknown;
    getMatchType(..._: unknown[]): unknown;
    getMatchTypeString(..._: unknown[]): unknown;
    getStatementCnt(..._: unknown[]): unknown;
    isClassDefault(..._: unknown[]): unknown;
    setDescription(..._: unknown[]): unknown;
    setMapType(..._: unknown[]): unknown;
    setMatchType(..._: unknown[]): unknown;
    toReverseString(..._: unknown[]): unknown;
    toString(..._: unknown[]): unknown;
}
declare interface _HardwareFactory extends BaseClass {
    devices(): _DeviceFactory;
    modules(): _ModuleFactory;
}
declare interface _DeviceFactory extends BaseClass {
    getAvailableDeviceAt(index: number): _DeviceDescriptor;
    getAvailableDeviceCount(): number;
    getAvailableDeviceForTypeAt(..._: unknown[]): unknown;
    getAvailableDeviceForTypeCount(..._: unknown[]): unknown;
    getDescriptor(_: number, __: string): unknown|null;
}
declare interface _ModuleFactory extends BaseClass {
    addModuleModel(..._: unknown[]): unknown;
    getAvailableModuleAt(): _ModuleDescriptor;
    getAvailableModuleCount(): number;
    getAvailableModuleForTypeAt(..._: unknown[]): unknown;
    getAvailableModuleForTypeCount(..._: unknown[]): unknown;
    getDescriptor(_: number, __: string): unknown|null;
}
declare interface _CommandLog extends BaseClass {
    clear(): void;
    getEntryAt(..._: unknown[]): unknown;
    getEntryCount(): number;
    isEnabled(): boolean;
    setEnabled(value: boolean): void;
}
declare interface _IpcManager extends BaseClass {
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
declare interface _AppWindow extends BaseClass {
    deletePTConf(..._: unknown[]): unknown;
    exit(): void;
    exitNoConfirm(_: boolean): void;
    fileActivityWizard(..._: unknown[]): unknown;
    fileNew(..._: unknown[]): unknown;
    fileOpen(..._: unknown[]): unknown;
    fileOpenFromBytes(..._: unknown[]): unknown;
    fileOpenFromURL(..._: unknown[]): unknown;
    fileSave(..._: unknown[]): unknown;
    fileSaveAs(..._: unknown[]): unknown;
    fileSaveAsAsync(..._: unknown[]): unknown;
    fileSaveAsNoPrompt(..._: unknown[]): unknown;
    fileSaveAsPkz(..._: unknown[]): unknown;
    fileSaveAsPkzAsync(..._: unknown[]): unknown;
    fileSaveAsync(..._: unknown[]): unknown;
    fileSaveToBytes(..._: unknown[]): unknown;
    fileSaveToBytesAsync(..._: unknown[]): unknown;
    getActiveDialog(): unknown|null;
    getActiveFile(): _NetworkFile;
    getActiveWorkspace(): _Workspace;
    getActivityWizard(): unknown|null;
    getAdminDialog(): unknown|null;
    getBasePath(): string;
    getClipboardText(): string;
    getCommonToolbar(): _CommonToolbar;
    getDefaultFileSaveLocation(): string;
    getDialogManager(): _DialogManager;
    getEnvironmentDialog(): unknown|null;
    getHeight(): number;
    getInfoDialog(): _InfoDialog;
    getInstructionDlg(): unknown|null;
    getListOfFilesSaved(_: string): string[];
    getListOfFilesToOpen(_: string): string[];
    getLogicalToolbar(): _LogicalToolbar;
    getMaximumHeight(): number;
    getMaximumWidth(): number;
    getMenuBar(): _MenuBar;
    getMinimumHeight(): number;
    getMinimumWidth(): number;
    getNetAcadUserUUID(): string;
    getNetworkComponentBox(): _NetworkComponentBox;
    getPDUListWindow(): _PDUListWindow;
    getPLSwitch(): _PLSwitch;
    getPTSAMode(..._: unknown[]): unknown;
    getPaletteDialog(): unknown|null;
    getPhysicalLocationDialog(): _PhysicalLocationDialog;
    getPhysicalToolbar(): _PhysicalToolbar;
    getPrintDialog(): unknown|null;
    getProcessId(): number;
    getRSSwitch(): _RSSwitch;
    getRealtimeToolbar(): _RealtimeToolbar;
    getSecondaryToolBar(): _ToolBar;
    getSessionId(): string;
    getSimulationPanel(): _SimulationPanel;
    getSimulationToolbar(): _SimulationToolbar;
    getTempFileLocation(): string;
    getToolBar(): _ToolBar;
    getUserCreatedPDU(..._: unknown[]): unknown;
    getUserFolder(..._: unknown[]): unknown;
    getVersion(..._: unknown[]): unknown;
    getWebViewManager(..._: unknown[]): unknown;
    getWidth(): number;
    getX(): number;
    getY(): number;
    helpPath(_: string): void;
    isActivityWizardOpen(..._: unknown[]): unknown;
    isInterfaceLocked(..._: unknown[]): unknown;
    isLogicalMode(..._: unknown[]): unknown;
    isPTSA(..._: unknown[]): unknown;
    isPhysicalMode(..._: unknown[]): unknown;
    isPreventClose(..._: unknown[]): unknown;
    isRealtimeMode(..._: unknown[]): unknown;
    isSimulationMode(..._: unknown[]): unknown;
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
    setPreventClose(..._: unknown[]): unknown;
    setRSFrameVisible(..._: unknown[]): unknown;
    setVisible(..._: unknown[]): unknown;
    setWindowGeometry(..._: unknown[]): unknown;
    showMaximized(..._: unknown[]): unknown;
    showMinimized(..._: unknown[]): unknown;
    showNormal(..._: unknown[]): unknown;
    suppressInstructionDlg(..._: unknown[]): unknown;
    writeToPT(..._: unknown[]): unknown;
}
declare interface _WebViewManager extends BaseClass {
    closeAll(..._: unknown[]): unknown;
    closeWebView(..._: unknown[]): unknown;
    createWebView(..._: unknown[]): unknown;
    getWebView(..._: unknown[]): unknown;
}
declare interface BaseUI extends BaseClass {
    /** Zamezí interakci ((nejspíše) bez změny vzhledu) */
    setDisabled(value: boolean): void;
    setVisible(value: boolean): void;
    setWidgetDisable(_: string, __: boolean): void;
    setWidgetVisible(_: string, __: boolean): void;
}
declare interface _UserCreatedPDU extends BaseUI {
    activateScenario(..._: unknown[]): unknown;
    addSimplePdu(..._: unknown[]): unknown;
    colorPDU(..._: unknown[]): unknown;
    deletePDU(..._: unknown[]): unknown;
    deleteScenarioBtn_clicked(..._: unknown[]): unknown;
    editPDU(..._: unknown[]): unknown;
    firePDU(..._: unknown[]): unknown;
    newScenarioBtn_clicked(..._: unknown[]): unknown;
    scenarioInfoBtn_clicked(..._: unknown[]): unknown;
    setScenarioDescription(..._: unknown[]): unknown;
    toggleOpenListWindowBtn(..._: unknown[]): unknown;
}
declare interface _ToolBar extends BaseClass {
    addItem(..._: unknown[]): unknown;
    count(..._: unknown[]): unknown;
    getItemByUuid(..._: unknown[]): unknown;
    removeItemUuid(..._: unknown[]): unknown;
    setItemAtEnabled(..._: unknown[]): unknown;
    setItemAtVisible(..._: unknown[]): unknown;
    setItemEnabled(..._: unknown[]): unknown;
    setItemVisible(..._: unknown[]): unknown;
    setVisible(..._: unknown[]): unknown;
}
declare interface _SimulationToolbar extends BaseUI {
    isEventListOn(..._: unknown[]): unknown;
    resetNetwork(..._: unknown[]): unknown;
    setEventListToggle(..._: unknown[]): unknown;
}
declare interface _SimulationPanel extends BaseUI {
    back(..._: unknown[]): unknown;
    changePlaySpeed(..._: unknown[]): unknown;
    forward(..._: unknown[]): unknown;
    isPlaying(..._: unknown[]): unknown;
    play(..._: unknown[]): unknown;
    populateEventList(..._: unknown[]): unknown;
    resetSimulation(..._: unknown[]): unknown;
    setAllFilters(..._: unknown[]): unknown;
    setConstantDelay(..._: unknown[]): unknown;
    setFilter(..._: unknown[]): unknown;
    showFiltersDialog(..._: unknown[]): unknown;
}
declare interface _RealtimeToolbar extends BaseUI {
    fastForwardTime(): void;
    resetNetwork(): void;
}
declare interface _RSSwitch extends BaseUI {
    showRealtimeMode(): void;
    showSimulationMode(): void;
}
declare interface _PhysicalToolbar extends BaseUI {
    addCity(..._: unknown[]): unknown;
    addCloset(..._: unknown[]): unknown;
    addGrid(..._: unknown[]): unknown;
    moveObject(..._: unknown[]): unknown;
    setBGImage(..._: unknown[]): unknown;
    showPhysicalLocationDialog(..._: unknown[]): unknown;
    switchToHomeRack(..._: unknown[]): unknown;
    switchToTopView(..._: unknown[]): unknown;
}
declare interface _PhysicalLocationDialog extends BaseUI {
    jumpBtn_clicked(..._: unknown[]): unknown;
    refreshTree(..._: unknown[]): unknown;
}
declare interface _PLSwitch extends BaseUI {
    showLogicalMode(): void;
    showPhysicalMode(): void;
}
declare interface _PDUListWindow extends BaseClass {
    setDisabled(..._: unknown[]): unknown;
    setVisible(..._: unknown[]): unknown;
}
declare interface _NetworkComponentBox extends BaseUI {
    getConnectionTypes(..._: unknown[]): unknown;
    getDeviceModels(..._: unknown[]): unknown;
    getDeviceTypes(..._: unknown[]): unknown;
    setAllWidgetsDisable(..._: unknown[]): unknown;
    setAllWidgetsVisible(..._: unknown[]): unknown;
    setFrameVisible(..._: unknown[]): unknown;
}
declare interface _MenuBar extends BaseClass {
    getEditPopupMenu(): _Menu;
    getExtensionsIPCPopupMenu(): _Menu;
    getExtensionsMUPopupMenu(): _Menu;
    getExtensionsPopupMenu(): _Menu;
    getExtensionsScriptingPopupMenu(): _Menu;
    getFilePopupMenu(): _Menu;
    getFileRecentFilesPopupMenu(): _Menu;
    getHelpPopupMenu(): _Menu;
    getOptionsPopupMenu(): _Menu;
    getToolsPopupMenu(): _Menu;
    getViewPopupMenu(): _Menu;
    getViewToolbarsPopupMenu(): _Menu;
    getViewZoomPopupMenu(): _Menu;
    isVisible(): boolean;
    setVisible(value: boolean): void;
}
declare interface _Menu extends BaseClass {
    count(): number;
    /** Pokud vrátí "null", pak se může jednat o oddělovací čáru */
    getMenuItemAt(index: number): _MenuItem|null;
    getMenuItemByName(label: string): _MenuItem|null;
    getMenuItemByUuid(uuid: UUID): _MenuItem|null;
    getMenuItemUuid(label: string): UUID|NULL_UUID;
    insertItem(_: string, label: string): UUID;
    /** Odstraní možnost s daným textem/labelem; Prázdný string pro odstranění oddělovací čáry */
    removeItem(label: string): void;
    removeItemUuid(uuid: UUID): void;
    setItemEnabled(label: string, value: boolean): void;
    setItemEnabledUuid(uuid: UUID, value: boolean): void;
    setItemVisible(label: string, value: boolean): void;
    setItemVisibleUuid(uuid: UUID, value: boolean): void;
}
declare interface _MenuItem extends BaseClass {
    getLabel(): string;
    getUuid(): UUID;
    removeItem(): void;
    setEnabled(value: boolean): void;
    setVisible(value: boolean): void;
}
declare interface _LogicalToolbar extends BaseUI {
    createCluster(..._: unknown[]): unknown;
    moveBack(..._: unknown[]): unknown;
    showViewPort(..._: unknown[]): unknown;
}
declare interface _InfoDialog extends BaseClass {
    setDisabled(..._: unknown[]): unknown;
    setVisible(..._: unknown[]): unknown;
}
declare interface _DialogManager extends BaseClass {
    closeAll(..._: unknown[]): unknown;
    getCurrentDialog(..._: unknown[]): unknown;
    getDialog(..._: unknown[]): unknown;
    getFocusedDialogName(..._: unknown[]): unknown;
}
declare interface _CommonToolbar extends BaseUI {
    changeState(..._: unknown[]): unknown;
}
declare interface _Workspace extends BaseClass {
    devicesAt(..._: unknown[]): unknown;
    fillColor(..._: unknown[]): unknown;
    getCurrentPhysicalObject(..._: unknown[]): unknown;
    getEnvironmentTimeInSeconds(..._: unknown[]): unknown;
    getGeoView(..._: unknown[]): unknown;
    getLogicalWorkspace(): _LogicalWorkspace;
    getProperties(..._: unknown[]): unknown;
    getProperty(..._: unknown[]): unknown;
    getRackView(..._: unknown[]): unknown;
    getRootPhysicalObject(..._: unknown[]): unknown;
    getZLevel(..._: unknown[]): unknown;
    hasProperty(..._: unknown[]): unknown;
    isGeoView(..._: unknown[]): unknown;
    isLogicalView(..._: unknown[]): unknown;
    isRackView(..._: unknown[]): unknown;
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
}
declare interface _LogicalWorkspace extends BaseClass {
    addCluster(..._: unknown[]): unknown;
    addDevice(..._: unknown[]): unknown;
    /** x, y, z, text */
    addNote(x: number, y: number, z: number, text: string): UUID;
    addRemoteNetwork(..._: unknown[]): unknown;
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
    /** Nefunguje, resp. nechápu, co je layer */
    clearLayer(layer: number): boolean;
    createLink(s: string, s2: string, s3: string, s4: string, connectType: _ConnectType): boolean;
    deleteLink(..._: unknown[]): unknown;
    drawCircle(..._: unknown[]): unknown;
    drawLine(..._: unknown[]): unknown;
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
    getCluster(clusterId: string): _Cluster|null;
    getClusterForItem(_: string): unknown|null;
    getClusterFromItem(_: string): unknown|null;
    getClusterIdForItem(_: string): string;
    getClusterItemId(_: string): UUID|NULL_UUID;
    getComponentChildCountFor(_: string): number;
    getComponentChildForAt(_: string, __: number): unknown|null;
    getComponentChildForByName(_: string, __: string): unknown|null;
    getComponentItem(deviceName: string): _ComponentItem;
    getComponentItemsCount(): number;
    getCurrentCluster(): _Cluster;
    /**
     *    Top left    Bottom right
     *   X       Y      X      Y         Barva       Text
     * ["592", "158", "627", "193", "", "0,0,0", "Nějaký text "]
     */
    getEllipseItemData(uuid: UUID): [string, string, string, string, string, string];
    getIncNoteZOrder(..._: unknown[]): unknown;
    getLayerInbetweenComponents(..._: unknown[]): unknown;
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
    getRectItemData(uuid: UUID): unknown|[];
    getRootCluster(): _Cluster;
    getState(): number;
    getUnusedLayer(..._: unknown[]): unknown;
    getWorkspaceImage(_: string): unknown|[];
    isLayerUsed(..._: unknown[]): unknown;
    moveCanvasItemBy(uuid: UUID, x: number, y: number): void;
    moveItemToCluster(..._: unknown[]): unknown;
    moveRemoteNetwork(..._: unknown[]): unknown;
    removeCanvasItem(uuid: UUID): boolean;
    removeCluster(..._: unknown[]): unknown;
    removeDevice(..._: unknown[]): unknown;
    removeRemoteNetwork(..._: unknown[]): unknown;
    removeTextPopup(..._: unknown[]): unknown;
    setCanvasItemRealPos(..._: unknown[]): unknown;
    setCanvasItemX(..._: unknown[]): unknown;
    setCanvasItemY(..._: unknown[]): unknown;
    setDeviceCustomImage(..._: unknown[]): unknown;
    showClusterContents(..._: unknown[]): unknown;
    unCluster(..._: unknown[]): unknown;
}
declare interface _ComponentItem extends BaseClass {
    device(): _Device;
    getClusterID(): string;
    getHeight(): number;
    getName(): string;
    getParent(): null | unknown;
    getThisClusterID(): string;
    getWidth(): number;
    getXCoordinate(): number;
    getXCoordinateCenter(): number;
    getYCoordinate(): number;
    getYCoordinateCenter(): number;
    loadAccessoryImage(..._: unknown[]): unknown;
    moveBy(x: number, y: number): void;
    moveIntoCluster(..._: unknown[]): unknown;
    moveOutOfCurrentCluster(..._: unknown[]): unknown;
    moveTo(x: number, y: number): void;
    removeAccessory(..._: unknown[]): unknown;
    setSelected(value: boolean): void;
    setVelocity(x: number, y: number): void;
    setVisible(value: boolean): void;
    setX(x: number): void;
    setXCenter(x: number): void;
    setXVelocity(x: number): void;
    setY(y: number): void;
    setYCenter(y: number): void;
    setYVelocity(x: number): void;
    type(): number;
    xVelocity(): number;
    yVelocity(): number;
}
/**
 * Všechny metody na souřadnice (vč. "moveTo" metod) + "getParrentCluster" dokáží crashnout PT, pokud se volají na root clusteru.
 * PT totiž očividně plně neinicializuje root cluster, dokud nemusí a zmiňované metody prostě PT zabijí.
 * Poté, co se root cluster inicializuje (např. otevřením cluster dialogu) vše funguje v pořádku.
 * Pozn.: Myšlenka neinicializovaného clusteru je moje domněnka a ve skutečnosti tomu může být jinak.
 */
declare interface _Cluster extends BaseClass {
    getCenterXCoordinate(): number;
    getCenterYCoordinate(): number;
    getChildClusterAt(index: number): _Cluster|null;
    getChildClusterCount(): number;
    getIconPath(): string;
    getId(): string;
    getName(): string;
    getParentCluster(): _Cluster|null;
    getXCoordinate(): number;
    getYCoordinate(): number;
    moveToLocation(x: number, y: number): void;
    moveToLocationCentered(x: number, y: number): void;
    setIconPath(value: string): void;
    setName(value: string): void;
}
