import m from "mithril";
export class Player {
    constructor(key, oil, toolSet, north, scared) {
        this.key = key;
        this.oil = oil;
        this.toolKit = toolSet;
        this.north = north;
        this.scared = scared;
    }
    //Game functions
    reset() {
        this.key = false;
        this.oil = false;
        this.toolKit = false;
        this.north = true;
        this.scared = false;
    }
    goThroughDoor(nextRoom) {
        m.route.set(`/${nextRoom}`);
    }
    turnAroundTo(room) {
        this.changeNorth();
        this.goThroughDoor(room);
    }
    checkDoor() {
        if (this.getToolKit()) {
            this.goThroughDoor("blackToolSet");
        }
        else {
            if (this.getKey() && this.getOil()) {
                this.goThroughDoor("darkRed");
            }
            else if (this.getKey()) {
                this.goThroughDoor("blackNoOil");
            }
            else {
                this.goThroughDoor("blackNoKey");
            }
        }
    }
    //Get
    getKey() {
        return this.key;
    }
    getOil() {
        return this.oil;
    }
    getToolKit() {
        return this.toolKit;
    }
    getNorth() {
        return this.north;
    }
    getScared() {
        return this.scared;
    }
    //Change
    changeKey() {
        this.key = !this.key;
    }
    changeOil() {
        this.oil = !this.oil;
    }
    changeToolKit() {
        this.toolKit = !this.toolKit;
    }
    changeNorth() {
        this.north = !this.north;
    }
    changeScared() {
        this.scared = !this.scared;
    }
    setToScared() {
        this.scared = true;
    }
}
