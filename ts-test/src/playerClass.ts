import m from "mithril";

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


    //Game functions
    reset(){
        this.key = false;
        this.oil = false;
        this.toolKit = false;
        this.north = true;
        this.scared = false;
    }

    goThroughDoor(nextRoom:String){
        m.route.set(`/${nextRoom}`)
    }

    turnAroundTo(room:String){
        this.changeNorth()
        m.route.set(`/${room}`)
    }

    checkDoor(){
        if(this.getToolKit()){
            m.route.set("/blackToolSet")
        }
        else{
            if(this.getKey() && this.getOil()){
                this.goThroughDoor("darkRed");
            }
            else if(this.getKey()){
                m.route.set("/blackNoOil")
            }
            else {
                m.route.set("/blackNoKey")
            }
        }
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

    setToScared():void {
        this.scared = true;
    }
}