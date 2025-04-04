export class Player{
    //items
    private key:Boolean;
    private oil:Boolean;
    private toolKit:Boolean;

    //status
    private north:Boolean;
    private scared:Boolean;

    constructor(key:Boolean, oil:Boolean, toolSet:Boolean, north:Boolean, scared:Boolean) {
        this.key = key;
        this.oil = oil;
        this.toolKit = toolSet;
        this.north = north;
        this.scared = scared;
    }

    reset(){
        this.key = false;
        this.oil = false;
        this.toolKit = false;
        this.north = true;
        this.scared = false;
    }




    //Get
    getKey():Boolean {
        return this.key;
    }

    getOil():Boolean {
        return this.oil;
    }

    getToolKit():Boolean {
        return this.toolKit;
    }

    getNorth():Boolean {
        return this.north;
    }

    getScared():Boolean {
        return this.scared;
    }




    //Change
    changeKey():void {
        this.key = !this.key;
    }

    changeOil():void {
        this.oil = !this.oil;
    }

    changeToolKit():void {
        this.toolKit = !this.toolKit;
    }

    changeNorth():void {
        this.north = !this.north;
    }

    changeScared():void {
        this.scared = !this.scared;
    }
}