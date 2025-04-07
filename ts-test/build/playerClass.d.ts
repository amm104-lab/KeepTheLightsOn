export declare class Player {
    private key;
    private oil;
    private toolKit;
    private north;
    private scared;
    constructor(key: Boolean, oil: Boolean, toolSet: Boolean, north: Boolean, scared: Boolean);
    reset(): void;
    goThroughDoor(nextRoom: String): void;
    turnAroundTo(room: String): void;
    checkDoor(): void;
    getKey(): Boolean;
    getOil(): Boolean;
    getToolKit(): Boolean;
    getNorth(): Boolean;
    getScared(): Boolean;
    changeKey(): void;
    changeOil(): void;
    changeToolKit(): void;
    changeNorth(): void;
    changeScared(): void;
    setToScared(): void;
}
