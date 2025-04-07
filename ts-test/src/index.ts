import m from "mithril";
import {Player} from "./playerClass"

const root = document.body;

const user = new Player(false,false,false,true,false);

let start = {
    view: function(){
        return m("div",{class:"startBox"}, [
            m("h1",{class:"title"},"←Attention!⤛"),
            m("p",{class:"description"}, "♦ Click on a door to go to the next room ♦"),
            m("p",{class:"description"}, "♦ Click on the button at the bottom to turn around in the current room ♦"),
            m("p",{class:"description"}, "♦ Be careful not to get lost ♦"),
            m("p",{class:"description"}, "♦ And don't forget: Keep the lights on. ♦"),
            m("button",{class:"startButton", onclick: function(){
                user.reset();
                user.goThroughDoor("white")
                }},"Start Game")
        ])
    }
}

let gameOver = {
    view: function(){
        return m("div",{class:"endBox"}, [
            m("h1", {class:"title"}, "⤜You-died→"),
            m("p",{class:"description"}, "♦ I warned you ♦"),
            m("p",{class:"description"}, "♦ Happy? ♦"),
            m("button",{class:"restartButton", onclick: function(){m.route.set("start")}},"No.")
        ])
    }
}

let darkness = {
    view: function(){
        user.changeScared();
        setTimeout( () => {
            if(m.route.get()==="darkness"){
                m.route.set("gameOver");
            }
            console.log(m.route.get());
        },10000)
        return m("div",{class:"darkness"},
            m("div",{class:"abyss"},[
                m("button",{class:"hiddenSwitch", onclick: function(){
                    root.removeAttribute("ID");
                    m.route.set("darkRed");
                }}),
                m("div",{class:"warning"},"It's coming...")]
            ))
    }
}

let goodEnd = {
    view: function(){
        return m("div",{class:"startBox"}, [
            m("h1", {class:"title"}, "⤜Game-Over!→"),
            m("p",{class:"description"}, "♦ You barricade the door ♦"),
            m("p",{class:"description"}, "♦ No one will be able to turn the lights off now ♦"),
            m("button",{class:"restartButton", onclick: function(){m.route.set("start")}},"Good.")
        ])
    }
}

let white = {
    view: function (){
        if(user.getNorth()){
            return [m("div",{class:"white"},
                [m("button",{class:"door",
                    onclick: function(){user.goThroughDoor("lightRed")}}, "-"),
                    m("button",{class:"door",
                        onclick: function(){user.goThroughDoor("lightBlue")}}, "-")]),
                m("div",
                    m("button",{class:"turn", onclick: function(){user.turnAroundTo("white")}}, "Turn South")
                )];
        }
        else{
            return [m("div",{class:"white"},
                m("button",{class:"door",
                    onclick: function(){user.goThroughDoor("darkPurple")}}, "-")),
                m("div",
                    m("button",{class:"turn", onclick: function(){user.turnAroundTo("white")}}, "Turn North")
                )]
        }
    }
}

let black = {
    view: function (){
        if(user.getNorth()){
            return [m("div",{class:"black"},
                m("button", {class:"lockedDoor",
                    onclick: function (){
                        user.checkDoor();
                    }}, "-"),""),
                m("div",
                    m("button",{class:"turn", onclick: function(){user.turnAroundTo("black")}}, "Turn South")
                )]
        }
        else{
            return [m("div",{class:"black"},
                m("button",{class:"door",
                    onclick: function(){user.goThroughDoor("red")}}, "-")),
                m("div",
                    m("button",{class:"turn", onclick: function(){user.turnAroundTo("black")}}, "Turn North")
                )]
        }
    }
}

let blackNoKey = {
    view: function (){
        return [m("div",{class:"black"},
            m("button", {class:"lockedDoor",
                onclick: function (){
                    user.checkDoor();
                }}, "-")),
            m("div",{class: "locked"}, "It's locked"),
            m("div",
                m("button",{class:"turn", onclick: function(){user.turnAroundTo("black")}}, "Turn South")
            )]
    }
}

let blackNoOil = {
    view: function (){
        return [m("div",{class:"black"},
            m("button", {class:"lockedDoor",
                onclick: function (){
                    user.checkDoor();
                }}, "-")),
            m("div",{class: "locked"}, "Rusted. It won't open like this"),
            m("div",
                m("button",{class:"turn", onclick: function(){user.turnAroundTo("black")}}, "Turn South")
            )]
    }
}

let blackToolSet = {
    view: function (){
        return [m("div",{class:"black"},
            m("button", {class:"lockedDoor"}, "-")),
            m("div",{class:"toolBox"},[
                m("p","Do you want to use the Tool Kit?"),
                m("div",{class:"buttonBox"},
                    m("button",{class:"choice", onclick: function(){m.route.set("/goodEnd")}}, "Yes"),
                    m("button",{class:"choice", onclick: function(){
                        user.changeToolKit();
                        user.goThroughDoor("black");
                        }}, "No"))]
            )]
    }
}

let blue = {
    view: function (){
        if(user.getNorth()){
            return [m("div",{class:"blue"},
                m("button", {class:"door",
                    onclick: function(){user.goThroughDoor("darkBlue")}}, "-")),
                m("div",
                    m("button",{class:"turn", onclick: function(){user.turnAroundTo("blue")}}, "Turn South")
                )]
        }
        else{
            return [m("div",{class:"blue"},
                m("button",{class:"door",
                    onclick: function(){user.goThroughDoor("lightBlue")}}, "-")),
                m("div",
                    m("button",{class:"turn", onclick: function(){user.turnAroundTo("blue")}}, "Turn North")
                )]
        }
    }
}

let lightBlue = {
    view: function (){
        if(user.getNorth()){
            return [m("div",{class:"lightBlue"},
                [m("button",{class:"door",
                    onclick: function(){user.goThroughDoor("purple")}}, "-"),
                    m("button",{class:"door",
                        onclick: function(){user.goThroughDoor("blue")}}, "-")]),
                m("div",
                    m("button",{class:"turn", onclick: function(){user.turnAroundTo("lightBlue")}}, "Turn South")
                )]
        }
        else{
            return [m("div",{class:"lightBlue"},
                m("button",{class:"door",
                    onclick: function(){user.goThroughDoor("white")}}, "-")),
                m("div",
                    m("button",{class:"turn", onclick: function(){user.turnAroundTo("lightBlue")}}, "Turn North")
                )]
        }
    }
}

let darkBlue = {
    view: function (){
        if(user.getNorth()){
            if(user.getKey()){
                return m("div",{class:"darkBlue"},
                    m("button",{class:"turn", onclick: function(){user.turnAroundTo("darkBlue")}}, "Turn South")
                )
            }
            else{
                return [
                    m("div",{class:"darkBlue"},
                        m("button", {class:"item",
                            onclick: function(){
                                user.changeKey();
                                m.route.set("darkBlueObtained")
                            }
                        }, "🔑")),
                    m("div",
                        m("button",{class:"turn", onclick: function(){user.turnAroundTo("darkBlue")}}, "Turn South")
                    )]
            }
        }
        else{
            return [m("div",{class:"darkBlue"}, [
                m("button", {class:"door",
                    onclick: function(){user.goThroughDoor("blue")}}, "-"),
                m("button", {class:"door",
                    onclick: function(){user.goThroughDoor("purple")}}, "-"),]),
                m("div",
                    m("button",{class:"turn", onclick: function(){user.turnAroundTo("darkBlue")}}, "Turn North")
                )]
        }
    }
}

let darkBlueObtained = {
    view: function (){
        return [m("div",{class:"darkBlue"},
            m("div", {class: "locked"}, "You found a key!")),
            m("div",
                m("button",{class:"turn", onclick: function(){user.turnAroundTo("darkBlue")}}, "Turn South")
            )]
    }
}

let red = {
    view: function (){
        if(user.getNorth()){
            return [m("div",{class:"red"},
                [m("button",{class:"door",
                    onclick: function(){user.goThroughDoor("black")}}, "-"),
                    m("button",{class:"door",
                        onclick: function(){user.goThroughDoor("yellow")}}, "-")]),
                m("div",
                    m("button",{class:"turn", onclick: function(){user.turnAroundTo("red")}}, "Turn South")
                )]
        }
        else{
            return [m("div",{class:"red"},
                m("button", {class:"door",
                    onclick: function(){user.goThroughDoor("lightRed")}}, "-")),
                m("div",
                    m("button",{class:"turn", onclick: function(){user.turnAroundTo("red")}}, "Turn North")
                )]
        }
    }
}

let lightRed = {
    view: function (){
        if(user.getNorth()){
            return [m("div",{class:"lightRed"},
                [m("button",{class:"door",
                    onclick: function(){user.goThroughDoor("red")}}, "-"),
                    m("button",{class:"door",
                        onclick: function(){user.goThroughDoor("lightPurple")}}, "-")]),
                m("div",
                    m("button",{class:"turn", onclick: function(){user.turnAroundTo("lightRed")}}, "Turn South")
                )]
        }
        else{
            return [m("div",{class:"lightRed"},
                m("button", {class:"door",
                    onclick: function(){user.goThroughDoor("white")}}, "-")),
                m("div",
                    m("button",{class:"turn", onclick: function(){user.turnAroundTo("lightRed")}}, "Turn North")
                )]
        }
    }
}

let darkRed = {
    view: function (){
        let text: string;
        if(user.getScared()){text= "Find the Toolkit."}
        else{text="Are you sure about this?"}
        if(user.getNorth()){
            return [m("div",{class:"darkRed"},
                m("button",{class:"switch", onclick: function(){
                        console.log("click");
                        root.setAttribute("ID","lightsOff");
                        console.log("you turned the lights off");
                        m.route.set("darkness");
                    }},""),text),
                m("div",
                    m("button",{class:"turn", onclick: function(){user.turnAroundTo("darkRed")}},"Turn South")
                )]
        }
        else{
            return [m("div",{class:"darkRed"},
                m("button",{class:"door",
                    onclick: function(){user.goThroughDoor("black")}})),
                m("div",
                    m("button",{class:"turn", onclick: function(){user.turnAroundTo("darkRed")}}, "Turn North")
                )]
        }
    }
}

let purple = {
    view: function (){
        if(user.getNorth()){
            return [m("div",{class:"purple"},
                [m("button",{class:"door",
                    onclick:function(){user.goThroughDoor("darkPurple")}}, "-"),
                    m("button",{class:"door",
                        onclick: function(){user.goThroughDoor("darkBlue")}}, "-")]),
                m("div",
                    m("button",{class:"turn", onclick: function(){user.turnAroundTo("purple")}}, "Turn South")
                )]
        }
        else{
            return [m("div",{class:"purple"},
                m("button", {class:"door",
                    onclick: function(){user.goThroughDoor("lightBlue")}}, "-")),
                m("div",
                    m("button",{class:"turn", onclick: function(){user.turnAroundTo("purple")}}, "Turn North")
                )]
        }
    }
}

let lightPurple = {
    view: function (){
        if(user.getNorth()){
            return [m("div",{class:"lightPurple"},
                [m("button",{class:"door",
                    onclick: function(){user.goThroughDoor("yellow")}}, "-"),
                    m("button",{class:"door",
                        onclick: function(){user.goThroughDoor("darkPurple")}}, "-")]),
                m("div",
                    m("button",{class:"turn", onclick: function(){user.turnAroundTo("lightPurple")}}, "Turn South")
                )]
        }
        else{
            return [m("div",{class:"lightPurple"},
                m("button", {class:"door",
                    onclick: function(){user.goThroughDoor("lightRed")}}, "-")),
                m("div",
                    m("button",{class:"turn", onclick: function(){user.turnAroundTo("lightPurple")}}, "Turn North")
                )]
        }
    }
}

let darkPurple = {
    view: function (){
        if(user.getNorth()){
            return [m("div",{class:"darkPurple"},
                m("button", {class:"door",
                    onclick: function(){user.goThroughDoor("white")}}, "-")),
                m("div",
                    m("button",{class:"turn", onclick: function(){user.turnAroundTo("darkPurple")}}, "Turn South")
                )]
        }
        else{
            return [m("div",{class:"darkPurple"},
                [m("button",{class:"door",
                    onclick: function(){user.goThroughDoor("purple")}}, "-"),
                    m("button",{class:"door",
                        onclick: function(){user.goThroughDoor("lightPurple")}}, "-"),
                    m("button",{class:"door",
                        onclick: function(){user.goThroughDoor("yellow")}}, "-")
                ]),
                m("div",
                    m("button",{class:"turn", onclick: function(){user.turnAroundTo("darkPurple")}}, "Turn North")
                )]
        }
    }
}

let yellow = {
    view: function (){
        if(user.getNorth()){
            return [m("div",{class:"yellow"},
                [m("button",{class:"door",
                    onclick: function(){user.goThroughDoor("orange")}}, "-"),
                    m("button",{class:"door",
                        onclick: function(){user.goThroughDoor("darkPurple")}}, "-")]),
                m("div",
                    m("button",{class:"turn", onclick: function(){user.turnAroundTo("yellow")}}, "Turn South")
                )]
        }
        else{
            return [m("div",{class:"yellow"},
                [m("button",{class:"door",
                    onclick: function(){user.goThroughDoor("lightPurple")}}, "-"),
                    m("button",{class:"door",
                        onclick: function(){user.goThroughDoor("red")}}, "-")]),
                m("div",
                    m("button",{class:"turn", onclick: function(){user.turnAroundTo("yellow")}}, "Turn North")
                )]
        }
    }
}

let orange = {
    view: function (){
        if(user.getNorth()){
            if(user.getOil()){
                return [m("div",{class:"orange"},
                    m("button",{class:"turn", onclick: function(){user.turnAroundTo("orange")}}, "Turn South")
                ),
                    m("div",{class:"hide"},m("button",{class:"door", id: "hiddenPassage",
                        onclick: function (){user.goThroughDoor("green")}}))]
            }
            else{
                return [m("div",{class:"orange"}, [
                    m("button",{class: "tool", onclick: function (){
                            user.changeOil();
                            m.route.set("orangeObtained")
                        }}, "🛢️")
                ]),
                    m("div",
                        m("button",{class:"turn", onclick: function(){user.turnAroundTo("orange")}}, "Turn South")
                    )]
            }
        }
        else{
            return [m("div",{class:"orange"},
                m("button",{class:"door",
                    onclick: function (){user.goThroughDoor("yellow")}}, "-"),),
                m("div",
                    m("button",{class:"turn", onclick: function(){user.turnAroundTo("orange")}}, "Turn North")
                )]
        }
    }
}

let orangeObtained = {
    view: function (){
        return [m("div",{class:"orange"}, [
            m("div",{class:"locked"}, "You found some Oil!")
        ]),
            m("div",
                m("button",{class:"turn", onclick: function(){user.turnAroundTo("orange")}}, "Turn South")
            )]
    }
}

let green = {
    view: function (){
        if(user.getNorth()){
            if(user.getToolKit()){
                return m("div",{class:"green"},
                    m("button",{class:"turn", onclick: function(){user.turnAroundTo("green")}}, "Turn South")
                )
            }
            else{
                return [m("div",{class:"green"}, [
                    m("button",{class: "tool", onclick: function (){
                            user.changeToolKit();
                            m.route.set("greenObtained")
                        }}, "🛠")
                ]),
                    m("div",
                        m("button",{class:"turn", onclick: function(){user.turnAroundTo("green")}}, "Turn South")
                    )]
            }
        }
        else{
            return [m("div",{class:"green"},
                m("button",{class:"door",
                    onclick: function (){user.goThroughDoor("orange")}}, "-"),),
                m("div",
                    m("button",{class:"turn", onclick: function(){user.turnAroundTo("green")}}, "Turn North")
                )]
        }
    }
}

let greenObtained = {
    view: function (){
        return [m("div",{class:"green"}, [
            m("div",{class:"locked"}, "You found a Toolkit!")
        ]),
            m("div",
                m("button",{class:"turn", onclick: function(){user.turnAroundTo("green")}}, "Turn South")
            )]
    }
}

m.route(root,"/start", {
    "/start":start,
    "/gameOver":gameOver,
    "/goodEnd":goodEnd,
    "/darkness":darkness,
    "/white":white,
    "/black":black,
    "/blackNoKey":blackNoKey,
    "/blackNoOil":blackNoOil,
    "/blackToolSet":blackToolSet,
    "/blue":blue,
    "/lightBlue":lightBlue,
    "/darkBlue":darkBlue,
    "/darkBlueObtained":darkBlueObtained,
    "/red":red,
    "/lightRed":lightRed,
    "/darkRed":darkRed,
    "/purple":purple,
    "/lightPurple":lightPurple,
    "/darkPurple":darkPurple,
    "/yellow":yellow,
    "/orange":orange,
    "/orangeObtained":orangeObtained,
    "/green":green,
    "/greenObtained":greenObtained
})