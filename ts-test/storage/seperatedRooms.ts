// import m from "mithril";
//
// const root = document.body;
// let key = false;
// let oilcan = false;
//
// let white = {
//     view: function (){
//         return [m("div",{class:"white"},
//             [m("button",{class:"door",
//                 onclick: function(){goThroughDoor("lightRed")}}, "-"),
//                 m("button",{class:"door",
//                     onclick: function(){goThroughDoor("lightBlue")}}, "-")]),
//             m("div",
//                 m("button",{class:"turn", onclick: function(){turnAroundTo("whiteBack")}}, "Turn South")
//             )];
//     }
// }
//
// let whiteBack = {
//     view: function (){
//         return [m("div",{class:"white"},
//             m("button",{class:"door",
//                 onclick: function(){goThroughDoor("darkPurpleBack")}}, "-")),
//             m("div",
//                 m("button",{class:"turn", onclick: function(){turnAroundTo("white")}}, "Turn North")
//             )]
//     }
// }
//
// let black = {
//     view: function (){
//         return [m("div",{class:"black"},
//             m("button", {class:"lockedDoor",
//                 onclick: function (){
//                     checkDoor();
//                 }}, "-")),
//             m("div",
//                 m("button",{class:"turn", onclick: function(){turnAroundTo("blackBack")}}, "Turn South")
//             )]
//     }
// }
//
// let blackNoKey = {
//     view: function (){
//         return [m("div",{class:"black"},
//             m("button", {class:"lockedDoor",
//                 onclick: function (){
//                     checkDoor();
//                 }}, "-")),
//             m("div",{class: "locked"}, "It's locked"),
//             m("div",
//                 m("button",{class:"turn", onclick: function(){turnAroundTo("blackBack")}}, "Turn South")
//             )]
//     }
// }
//
// let blackNoOil = {
//     view: function (){
//         return [m("div",{class:"black"},
//             m("button", {class:"lockedDoor",
//                 onclick: function (){
//                     checkDoor();
//                 }}, "-")),
//             m("div",{class: "locked"}, "Rusted. It won't open like this"),
//             m("div",
//                 m("button",{class:"turn", onclick: function(){turnAroundTo("blackBack")}}, "Turn South")
//             )]
//     }
// }
//
// let blackBack = {
//     view: function (){
//         return [m("div",{class:"black"},
//             m("button",{class:"door",
//                 onclick: function(){goThroughDoor("redBack")}}, "-")),
//             m("div",
//                 m("button",{class:"turn", onclick: function(){turnAroundTo("black")}}, "Turn North")
//             )]
//     }
// }
//
// let blue = {
//     view: function (){
//         return [m("div",{class:"blue"},
//             m("button", {class:"door",
//                 onclick: function(){goThroughDoor("darkBlue")}}, "-")),
//             m("div",
//                 m("button",{class:"turn", onclick: function(){turnAroundTo("blueBack")}}, "Turn South")
//             )]
//     }
// }
//
// let blueBack = {
//     view: function (){
//         return [m("div",{class:"blue"},
//             m("button",{class:"door",
//                 onclick: function(){goThroughDoor("lightBlueBack")}}, "-")),
//             m("div",
//                 m("button",{class:"turn", onclick: function(){turnAroundTo("blue")}}, "Turn North")
//             )]
//
//     }
// }
//
// let lightBlue = {
//     view: function (){
//         return [m("div",{class:"lightBlue"},
//             [m("button",{class:"door",
//                 onclick: function(){goThroughDoor("purple")}}, "-"),
//                 m("button",{class:"door",
//                     onclick: function(){goThroughDoor("blue")}}, "-")]),
//             m("div",
//                 m("button",{class:"turn", onclick: function(){turnAroundTo("lightBlueBack")}}, "Turn South")
//             )]
//     }
// }
//
// let lightBlueBack = {
//     view: function (){
//         return [m("div",{class:"lightBlue"},
//             m("button",{class:"door",
//                 onclick: function(){goThroughDoor("whiteBack")}}, "-")),
//             m("div",
//                 m("button",{class:"turn", onclick: function(){turnAroundTo("lightBlue")}}, "Turn North")
//             )]
//     }
// }
//
// let darkBlue = {
//     view: function (){
//         return [m("div",{class:"darkBlue"},
//             m("button", {class:"item",
//                 onclick: function(){
//                     key=true;
//                     console.log("you found a key!")
//                     m.route.set("darkBlueObtained")
//                 }
//             }, "🔑")),
//             m("div",
//                 m("button",{class:"turn", onclick: function(){turnAroundTo("darkBlueBack")}}, "Turn South")
//             )]
//     }
// }
//
// let darkBlueObtained = {
//     view: function (){
//         return [m("div",{class:"darkBlue"},
//             m("div", {class: "locked"}, "You found a key!")),
//             m("div",
//                 m("button",{class:"turn", onclick: function(){turnAroundTo("darkBlueBack")}}, "Turn South")
//             )]
//     }
// }
//
// let darkBlueBack = {
//     view: function (){
//         return [m("div",{class:"darkBlue"}, [
//             m("button", {class:"door",
//                 onclick: function(){goThroughDoor("blueBack")}}, "-"),
//             m("button", {class:"door",
//                 onclick: function(){goThroughDoor("purpleBack")}}, "-"),]),
//             m("div",
//                 m("button",{class:"turn", onclick: function(){turnAroundTo("darkBlue")}}, "Turn North")
//             )]
//     }
// }
//
// let red = {
//     view: function (){
//         return [m("div",{class:"red"},
//             [m("button",{class:"door",
//                 onclick: function(){goThroughDoor("black")}}, "-"),
//                 m("button",{class:"door",
//                     onclick: function(){goThroughDoor("yellow")}}, "-")]),
//             m("div",
//                 m("button",{class:"turn", onclick: function(){turnAroundTo("redBack")}}, "Turn South")
//             )]
//     }
// }
//
// let redBack = {
//     view: function (){
//         return [m("div",{class:"red"},
//             m("button", {class:"door",
//                 onclick: function(){goThroughDoor("lightRedBack")}}, "-")),
//             m("div",
//                 m("button",{class:"turn", onclick: function(){turnAroundTo("red")}}, "Turn North")
//             )]
//     }
// }
//
// let lightRed = {
//     view: function (){
//         return [m("div",{class:"lightRed"},
//             [m("button",{class:"door",
//                 onclick: function(){goThroughDoor("red")}}, "-"),
//                 m("button",{class:"door",
//                     onclick: function(){goThroughDoor("lightPurple")}}, "-")]),
//             m("div",
//                 m("button",{class:"turn", onclick: function(){turnAroundTo("lightRedBack")}}, "Turn South")
//             )]
//     }
// }
//
// let lightRedBack = {
//     view: function (){
//         return [m("div",{class:"lightRed"},
//             m("button", {class:"door",
//                 onclick: function(){goThroughDoor("whiteBack")}}, "-")),
//             m("div",
//                 m("button",{class:"turn", onclick: function(){turnAroundTo("lightRed")}}, "Turn North")
//             )]
//     }
// }
//
// let darkRed = {
//     view: function (){
//         return [m("div",{class:"darkRed"},
//             m("button",{class:"switch", onclick: function(){
//                     console.log("click");
//                     root.setAttribute("ID","lightsOff");
//                     deleteChildren();
//                     console.log("you turned the lights off");
//                 }},"")),
//             m("div",
//                 m("button",{class:"turn", onclick: function(){turnAroundTo("darkRedBack")}},"Turn South")
//             )]
//     }
// }
//
// let darkRedBack = {
//     view: function (){
//         return [m("div",{class:"darkRed"},
//             m("button",{class:"door",
//                 onclick: function(){goThroughDoor("blackBack")}})),
//             m("div",
//                 m("button",{class:"turn", onclick: function(){turnAroundTo("darkRed")}}, "Turn North")
//             )]
//     }
// }
//
// let purple = {
//     view: function (){
//         return [m("div",{class:"purple"},
//             [m("button",{class:"door",
//                 onclick:function(){goThroughDoor("darkPurple")}}, "-"),
//                 m("button",{class:"door",
//                     onclick: function(){goThroughDoor("darkBlue")}}, "-")]),
//             m("div",
//                 m("button",{class:"turn", onclick: function(){turnAroundTo("purpleBack")}}, "Turn South")
//             )]
//     }
// }
//
// let purpleBack = {
//     view: function (){
//         return [m("div",{class:"purple"},
//             m("button", {class:"door",
//                 onclick: function(){goThroughDoor("lightBlueBack")}}, "-")),
//             m("div",
//                 m("button",{class:"turn", onclick: function(){turnAroundTo("purple")}}, "Turn North")
//             )]
//     }
// }
//
// let lightPurple = {
//     view: function (){
//         return [m("div",{class:"lightPurple"},
//             [m("button",{class:"door",
//                 onclick: function(){goThroughDoor("yellow")}}, "-"),
//                 m("button",{class:"door",
//                     onclick: function(){goThroughDoor("darkPurple")}}, "-")]),
//             m("div",
//                 m("button",{class:"turn", onclick: function(){turnAroundTo("lightPurpleBack")}}, "Turn South")
//             )]
//     }
// }
//
// let lightPurpleBack = {
//     view: function (){
//         return [m("div",{class:"lightPurple"},
//             m("button", {class:"door",
//                 onclick: function(){goThroughDoor("lightRedBack")}}, "-")),
//             m("div",
//                 m("button",{class:"turn", onclick: function(){turnAroundTo("lightPurple")}}, "Turn North")
//             )]
//     }
// }
//
// let darkPurple = {
//     view: function (){
//         return [m("div",{class:"darkPurple"},
//             m("button", {class:"door",
//                 onclick: function(){goThroughDoor("white")}}, "-")),
//             m("div",
//                 m("button",{class:"turn", onclick: function(){turnAroundTo("darkPurpleBack")}}, "Turn South")
//             )]
//     }
// }
//
// let darkPurpleBack = {
//     view: function (){
//         return [m("div",{class:"darkPurple"},
//             [m("button",{class:"door",
//                 onclick: function(){goThroughDoor("purpleBack")}}, "-"),
//                 m("button",{class:"door",
//                     onclick: function(){goThroughDoor("lightPurpleBack")}}, "-"),
//                 m("button",{class:"door",
//                     onclick: function(){goThroughDoor("yellowBack")}}, "-")
//             ]),
//             m("div",
//                 m("button",{class:"turn", onclick: function(){turnAroundTo("darkPurple")}}, "Turn North")
//             )]
//     }
// }
//
// let yellow = {
//     view: function (){
//         return [m("div",{class:"yellow"},
//             [m("button",{class:"door",
//                 onclick: function(){goThroughDoor("orange")}}, "-"),
//                 m("button",{class:"door",
//                     onclick: function(){goThroughDoor("darkPurple")}}, "-")]),
//             m("div",
//                 m("button",{class:"turn", onclick: function(){turnAroundTo("yellowBack")}}, "Turn South")
//             )]
//     }
// }
//
// let yellowBack = {
//     view: function (){
//         return [m("div",{class:"yellow"},
//             [m("button",{class:"door",
//                 onclick: function(){goThroughDoor("lightPurpleBack")}}, "-"),
//                 m("button",{class:"door",
//                     onclick: function(){goThroughDoor("redBack")}}, "-")]),
//             m("div",
//                 m("button",{class:"turn", onclick: function(){turnAroundTo("yellow")}}, "Turn North")
//             )]
//     }
// }
//
// let orange = {
//     view: function (){
//         return [m("div",{class:"orange"}, [
//             m("button",{class: "tool", onclick: function (){
//                     oilcan=true;
//                     console.log("you got an oilcan!")
//                     m.route.set("orangeObtained")
//                 }}, "🛠")
//         ]),
//             m("div",
//                 m("button",{class:"turn", onclick: function(){turnAroundTo("orangeBack")}}, "Turn South")
//             )]
//     }
// }
//
// let orangeObtained = {
//     view: function (){
//         return [m("div",{class:"orange"}, [
//             m("div",{class:"locked"}, "You found an Oilcan!")
//         ]),
//             m("div",
//                 m("button",{class:"turn", onclick: function(){turnAroundTo("orangeBack")}}, "Turn South")
//             )]
//     }
// }
//
// let orangeBack = {
//     view: function (){
//         return [m("div",{class:"orange"},
//             m("button",{class:"door",
//                 onclick: function (){goThroughDoor("yellowBack")}}, "-"),),
//             m("div",
//                 m("button",{class:"turn", onclick: function(){turnAroundTo("orange")}}, "Turn North")
//             )]
//     }
// }
//
// function goThroughDoor(nextRoom:String){
//     // console.log(nextRoom);
//     m.route.set(`/${nextRoom}`)
// }
//
// function turnAroundTo(room:String){
//     // console.log(room);
//     m.route.set(`/${room}`)
// }
//
// function checkDoor(){
//     if(key&&oilcan){
//         console.log("you got everything to go further");
//         goThroughDoor("darkRed");
//     }
//     else if(key){
//         console.log("the door doesnt move. its rusted")
//         m.route.set("/blackNoOil")
//     }
//     else {
//         console.log("its locked")
//         m.route.set("/blackNoKey")
//     }
// }
//
// function deleteChildren(){
//     let e = document.body;
//     let child = e.lastElementChild;
//
//     while (child) {
//         e.removeChild(child);
//         child = e.lastElementChild;
//     }
// }
//
// m.route(root,"/white", {
//     "/white":white,
//     "/whiteBack":whiteBack,
//     "/black":black,
//     "/blackNoKey":blackNoKey,
//     "/blackNoOil":blackNoOil,
//     "/blackBack":blackBack,
//     "/blue":blue,
//     "/blueBack":blueBack,
//     "/lightBlue":lightBlue,
//     "/lightBlueBack":lightBlueBack,
//     "/darkBlue":darkBlue,
//     "/darkBlueObtained":darkBlueObtained,
//     "/darkBlueBack":darkBlueBack,
//     "/red":red,
//     "/redBack":redBack,
//     "/lightRed":lightRed,
//     "/lightRedBack":lightRedBack,
//     "/darkRed":darkRed,
//     "/darkRedBack":darkRedBack,
//     "/purple":purple,
//     "/purpleBack":purpleBack,
//     "/lightPurple":lightPurple,
//     "/lightPurpleBack":lightPurpleBack,
//     "/darkPurple":darkPurple,
//     "/darkPurpleBack":darkPurpleBack,
//     "/yellow":yellow,
//     "/yellowBack":yellowBack,
//     "/orange":orange,
//     "/orangeObtained":orangeObtained,
//     "/orangeBack":orangeBack,
// })