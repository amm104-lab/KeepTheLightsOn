import m from "mithril";
export class Player {
    constructor(key, oil, toolSet, north, scared) {
        this.key = key;
        this.oil = oil;
        this.toolKit = toolSet;
        this.north = north;
        this.scared = scared;
    }
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
        m.route.set(`/${room}`);
    }
    checkDoor() {
        if (this.getToolKit()) {
            m.route.set("/blackToolSet");
        }
        else {
            if (this.getKey() && this.getOil()) {
                this.goThroughDoor("darkRed");
            }
            else if (this.getKey()) {
                m.route.set("/blackNoOil");
            }
            else {
                m.route.set("/blackNoKey");
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
}
