import m from "mithril";
import {Player} from "./playerClass"

const root = document.body;

export class Map{
    readonly user:Player;

    constructor(user:Player){
        this.user = user;
    }

    start(){
            return m("div",{class:"startBox"}, [
                m("h1",{class:"title"},"←Attention!⤛"),
                m("p",{class:"description"}, "♦ Click on a door to go to the next room ♦"),
                m("p",{class:"description"}, "♦ Click on the button at the bottom to turn around in the current room ♦"),
                m("p",{class:"description"}, "♦ Be careful not to get lost ♦"),
                m("p",{class:"description"}, "♦ And don't forget: Keep the lights on. ♦"),
                m("button",{class:"startButton", onclick: () => this.startGame()
                },"Start Game")
            ])
    }

    startGame(){
        this.user.reset();
        this.user.goThroughDoor("white")
        root.removeAttribute("ID");
    }

    gameOver(){
        return m("div",{class:"endBox"}, [
            m("h1", {class:"title"}, "⤜You-died→"),
            m("p",{class:"description"}, "♦ I warned you ♦"),
            m("p",{class:"description"}, "♦ Happy? ♦"),
            m("button",{class:"restartButton", onclick: () => this.user.goThroughDoor("start")},"No.")
        ])
    }

    darkness(){
        this.user.setToScared();
        setTimeout( () => {
            if(m.route.get()==="/darkness"){
                this.user.goThroughDoor("gameOver");
            }
        },10000)
        return m("div",{class:"darkness"},
            m("div",{class:"abyss"},[
                m("button",{class:"hiddenSwitch", onclick: ()=> {
                        root.removeAttribute("ID");
                        this.user.goThroughDoor("darkRed");
                    }}),
                m("div",{class:"warning"},"It's coming...")]
            ))
    }

    goodEnd(){
        return m("div",{class:"startBox"}, [
            m("h1", {class:"title"}, "⤜Game-Over!→"),
            m("p",{class:"description"}, "♦ You barricade the door ♦"),
            m("p",{class:"description"}, "♦ No one will be able to turn the lights off now ♦"),
            m("button",{class:"restartButton", onclick: () => {this.user.goThroughDoor("start")}},"Good.")
        ])
    }

    white(){
        if(this.user.getNorth()){
            return [m("div",{class:"white"},
                [m("button",{class:"door",
                    onclick: () => {this.user.goThroughDoor("lightRed")}}, "-"),
                    m("button",{class:"door",
                        onclick: () => {this.user.goThroughDoor("lightBlue")}}, "-")]),
                m("div",
                    m("button",{class:"turn", onclick: () => {this.user.turnAroundTo("white")}}, "Turn South")
                )];
        }
        else{
            return [m("div",{class:"white"},
                m("button",{class:"door",
                    onclick: () =>{this.user.goThroughDoor("darkPurple")}}, "-")),
                m("div",
                    m("button",{class:"turn", onclick: () => {this.user.turnAroundTo("white")}}, "Turn North")
                )]
        }
    }

    black(){
        if(this.user.getNorth()){
            return [m("div",{class:"black"},
                m("button", {class:"lockedDoor",
                    onclick: () => {
                        this.user.checkDoor();
                    }}, "-"),""),
                m("div",
                    m("button",{class:"turn", onclick: () => {this.user.turnAroundTo("black")}}, "Turn South")
                )]
        }
        else{
            return [m("div",{class:"black"},
                m("button",{class:"door",
                    onclick: () => {this.user.goThroughDoor("red")}}, "-")),
                m("div",
                    m("button",{class:"turn", onclick: () => {this.user.turnAroundTo("black")}}, "Turn North")
                )]
        }
    }

    blackNoKey(){
        return [m("div",{class:"black"},
            m("button", {class:"lockedDoor",
                onclick: () => {
                    this.user.checkDoor();
                }}, "-")),
            m("div",{class: "locked"}, "It's locked"),
            m("div",
                m("button",{class:"turn", onclick: () => {this.user.turnAroundTo("black")}}, "Turn South")
            )]
    }

    blackNoOil(){
        return [m("div",{class:"black"},
            m("button", {class:"lockedDoor",
                onclick: () => {
                    this.user.checkDoor();
                }}, "-")),
            m("div",{class: "locked"}, "Rusted. It won't open like this"),
            m("div",
                m("button",{class:"turn", onclick: () => {this.user.turnAroundTo("black")}}, "Turn South")
            )]
    }

    blackToolKit(){
        return [m("div",{class:"black"},
            m("button", {class:"lockedDoor"}, "-")),
            m("div",{class:"toolBox"},[
                m("p","Do you want to use the Tool Kit?"),
                m("div",{class:"buttonBox"},
                    m("button",{class:"choice", onclick: () => {this.user.goThroughDoor("goodEnd")}}, "Yes"),
                    m("button",{class:"choice", onclick: () => {
                            this.user.changeToolKit();
                            this.user.goThroughDoor("black");
                        }}, "No"))]
            )]
    }

    blue(){
        if(this.user.getNorth()){
            return [m("div",{class:"blue"},
                m("button", {class:"door",
                    onclick: () => {this.user.goThroughDoor("darkBlue")}}, "-")),
                m("div",
                    m("button",{class:"turn", onclick: () => {this.user.turnAroundTo("blue")}}, "Turn South")
                )]
        }
        else{
            return [m("div",{class:"blue"},
                m("button",{class:"door",
                    onclick: () => {this.user.goThroughDoor("lightBlue")}}, "-")),
                m("div",
                    m("button",{class:"turn", onclick: () => {this.user.turnAroundTo("blue")}}, "Turn North")
                )]
        }
    }

    lightBlue(){
        if(this.user.getNorth()){
            return [m("div",{class:"lightBlue"},
                [m("button",{class:"door",
                    onclick: () => {this.user.goThroughDoor("purple")}}, "-"),
                    m("button",{class:"door",
                        onclick: () => {this.user.goThroughDoor("blue")}}, "-")]),
                m("div",
                    m("button",{class:"turn", onclick: () => {this.user.turnAroundTo("lightBlue")}}, "Turn South")
                )]
        }
        else{
            return [m("div",{class:"lightBlue"},
                m("button",{class:"door",
                    onclick: () => {this.user.goThroughDoor("white")}}, "-")),
                m("div",
                    m("button",{class:"turn", onclick: () => {this.user.turnAroundTo("lightBlue")}}, "Turn North")
                )]
        }
    }

    darkBlue(){
        if(this.user.getNorth()){
            if(this.user.getKey()){
                return m("div",{class:"darkBlue"},
                    m("button",{class:"turn", onclick: () => {this.user.turnAroundTo("darkBlue")}}, "Turn South")
                )
            }
            else{
                return [
                    m("div",{class:"darkBlue"},
                        m("button", {class:"item",
                            onclick: () => {
                                this.user.changeKey();
                                this.user.goThroughDoor("darkBlueObtained")
                            }
                        }, "🔑")),
                    m("div",
                        m("button",{class:"turn", onclick: () => {this.user.turnAroundTo("darkBlue")}}, "Turn South")
                    )]
            }
        }
        else{
            return [m("div",{class:"darkBlue"}, [
                m("button", {class:"door",
                    onclick: () => {this.user.goThroughDoor("blue")}}, "-"),
                m("button", {class:"door",
                    onclick: () => {this.user.goThroughDoor("purple")}}, "-"),]),
                m("div",
                    m("button",{class:"turn", onclick: () => {this.user.turnAroundTo("darkBlue")}}, "Turn North")
                )]
        }
    }

    darkBlueObtained(){
        return [m("div",{class:"darkBlue"},
            m("div", {class: "locked"}, "You found a key!")),
            m("div",
                m("button",{class:"turn", onclick: () => {this.user.turnAroundTo("darkBlue")}}, "Turn South")
            )]
    }

    red(){
        if(this.user.getNorth()){
            return [m("div",{class:"red"},
                [m("button",{class:"door",
                    onclick: () => {this.user.goThroughDoor("black")}}, "-"),
                    m("button",{class:"door",
                        onclick: () => {this.user.goThroughDoor("yellow")}}, "-")]),
                m("div",
                    m("button",{class:"turn", onclick: () => {this.user.turnAroundTo("red")}}, "Turn South")
                )]
        }
        else{
            return [m("div",{class:"red"},
                m("button", {class:"door",
                    onclick: () => {this.user.goThroughDoor("lightRed")}}, "-")),
                m("div",
                    m("button",{class:"turn", onclick: () => {this.user.turnAroundTo("red")}}, "Turn North")
                )]
        }
    }

    lightRed(){
        if(this.user.getNorth()){
            return [m("div",{class:"lightRed"},
                [m("button",{class:"door",
                    onclick: () => {this.user.goThroughDoor("red")}}, "-"),
                    m("button",{class:"door",
                        onclick: () => {this.user.goThroughDoor("lightPurple")}}, "-")]),
                m("div",
                    m("button",{class:"turn", onclick: () => {this.user.turnAroundTo("lightRed")}}, "Turn South")
                )]
        }
        else{
            return [m("div",{class:"lightRed"},
                m("button", {class:"door",
                    onclick: () => {this.user.goThroughDoor("white")}}, "-")),
                m("div",
                    m("button",{class:"turn", onclick: () => {this.user.turnAroundTo("lightRed")}}, "Turn North")
                )]
        }
    }

    darkRed(){
        let text: string;
        if(this.user.getScared()){
            text= "Find the Toolkit."}
        else{
            text="Are you sure about this?"}
        if(this.user.getNorth()){
            return [m("div",{class:"darkRed"},
                m("button",{class:"switch", onclick: () => {
                        root.setAttribute("ID","lightsOff");
                        this.user.goThroughDoor("darkness");
                    }},""),text),
                m("div",
                    m("button",{class:"turn", onclick: () => {this.user.turnAroundTo("darkRed")}},"Turn South")
                )]
        }
        else{
            return [m("div",{class:"darkRed"},
                m("button",{class:"door",
                    onclick: () => {this.user.goThroughDoor("black")}})),
                m("div",
                    m("button",{class:"turn", onclick: () => {this.user.turnAroundTo("darkRed")}}, "Turn North")
                )]
        }
    }

    purple(){
        if(this.user.getNorth()){
            return [m("div",{class:"purple"},
                [m("button",{class:"door",
                    onclick:() => {this.user.goThroughDoor("darkPurple")}}, "-"),
                    m("button",{class:"door",
                        onclick: () => {this.user.goThroughDoor("darkBlue")}}, "-")]),
                m("div",
                    m("button",{class:"turn", onclick: () => {this.user.turnAroundTo("purple")}}, "Turn South")
                )]
        }
        else{
            return [m("div",{class:"purple"},
                m("button", {class:"door",
                    onclick: () => {this.user.goThroughDoor("lightBlue")}}, "-")),
                m("div",
                    m("button",{class:"turn", onclick: () => {this.user.turnAroundTo("purple")}}, "Turn North")
                )]
        }
    }

    lightPurple(){
        if(this.user.getNorth()){
            return [m("div",{class:"lightPurple"},
                [m("button",{class:"door",
                    onclick: () => {this.user.goThroughDoor("yellow")}}, "-"),
                    m("button",{class:"door",
                        onclick: () => {this.user.goThroughDoor("darkPurple")}}, "-")]),
                m("div",
                    m("button",{class:"turn", onclick: () => {this.user.turnAroundTo("lightPurple")}}, "Turn South")
                )]
        }
        else{
            return [m("div",{class:"lightPurple"},
                m("button", {class:"door",
                    onclick: () => {this.user.goThroughDoor("lightRed")}}, "-")),
                m("div",
                    m("button",{class:"turn", onclick: () => {this.user.turnAroundTo("lightPurple")}}, "Turn North")
                )]
        }
    }

    darkPurple(){
        if(this.user.getNorth()){
            return [m("div",{class:"darkPurple"},
                m("button", {class:"door",
                    onclick: () => {this.user.goThroughDoor("white")}}, "-")),
                m("div",
                    m("button",{class:"turn", onclick: () => {this.user.turnAroundTo("darkPurple")}}, "Turn South")
                )]
        }
        else{
            return [m("div",{class:"darkPurple"},
                [m("button",{class:"door",
                    onclick: () => {this.user.goThroughDoor("purple")}}, "-"),
                    m("button",{class:"door",
                        onclick: () => {this.user.goThroughDoor("lightPurple")}}, "-"),
                    m("button",{class:"door",
                        onclick: () => {this.user.goThroughDoor("yellow")}}, "-")
                ]),
                m("div",
                    m("button",{class:"turn", onclick: () => {this.user.turnAroundTo("darkPurple")}}, "Turn North")
                )]
        }
    }

    yellow(){
        if(this.user.getNorth()){
            return [m("div",{class:"yellow"},
                [m("button",{class:"door",
                    onclick: () => {this.user.goThroughDoor("orange")}}, "-"),
                    m("button",{class:"door",
                        onclick: () => {this.user.goThroughDoor("darkPurple")}}, "-")]),
                m("div",
                    m("button",{class:"turn", onclick: () => {this.user.turnAroundTo("yellow")}}, "Turn South")
                )]
        }
        else{
            return [m("div",{class:"yellow"},
                [m("button",{class:"door",
                    onclick: () => {this.user.goThroughDoor("lightPurple")}}, "-"),
                    m("button",{class:"door",
                        onclick: () => {this.user.goThroughDoor("red")}}, "-")]),
                m("div",
                    m("button",{class:"turn", onclick: () => {this.user.turnAroundTo("yellow")}}, "Turn North")
                )]
        }
    }

    orange(){
        if(this.user.getNorth()){
            if(this.user.getOil()){
                return [m("div",{class:"orange"},
                    m("button",{class:"turn", onclick: () => {this.user.turnAroundTo("orange")}}, "Turn South")
                ),
                    m("div",{class:"hide"},m("button",{class:"door", id: "hiddenPassage",
                        onclick:  () => {this.user.goThroughDoor("green")}}))]
            }
            else{
                return [m("div",{class:"orange"}, [
                    m("button",{class: "tool", onclick:  () => {
                            this.user.changeOil();
                            this.user.goThroughDoor("orangeObtained");
                        }}, "🛢️")
                ]),
                    m("div",
                        m("button",{class:"turn", onclick: () => {this.user.turnAroundTo("orange")}}, "Turn South")
                    )]
            }
        }
        else{
            return [m("div",{class:"orange"},
                m("button",{class:"door",
                    onclick: () => {this.user.goThroughDoor("yellow")}}, "-"),),
                m("div",
                    m("button",{class:"turn", onclick: () => {this.user.turnAroundTo("orange")}}, "Turn North")
                )]
        }
    }

    orangeObtained(){
        return [m("div",{class:"orange"}, [
            m("div",{class:"locked"}, "You found some Oil!")
        ]),
            m("div",
                m("button",{class:"turn", onclick: () => {this.user.turnAroundTo("orange")}}, "Turn South")
            )]
    }

    green(){
        if(this.user.getNorth()){
            if(this.user.getToolKit()){
                return m("div",{class:"green"},
                    m("button",{class:"turn", onclick: () => {this.user.turnAroundTo("green")}}, "Turn South")
                )
            }
            else{
                return [m("div",{class:"green"}, [
                    m("button",{class: "tool", onclick:  () => {
                            this.user.changeToolKit();
                            this.user.goThroughDoor("greenObtained")
                        }}, "🛠")
                ]),
                    m("div",
                        m("button",{class:"turn", onclick: () => {this.user.turnAroundTo("green")}}, "Turn South")
                    )]
            }
        }
        else{
            return [m("div",{class:"green"},
                m("button",{class:"door",
                    onclick: () => {this.user.goThroughDoor("orange")}}, "-"),),
                m("div",
                    m("button",{class:"turn", onclick: () => {this.user.turnAroundTo("green")}}, "Turn North")
                )]
        }
    }

    greenObtained(){
        return [m("div",{class:"green"}, [
            m("div",{class:"locked"}, "You found a Toolkit!")
        ]),
            m("div",
                m("button",{class:"turn", onclick: () => {this.user.turnAroundTo("green")}}, "Turn South")
            )]
    }

}

