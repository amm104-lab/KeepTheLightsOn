// import m from "mithril";
//
// const root = document.body;
//
// const player:{key:Boolean, oilcan:Boolean, north:Boolean} = {
//     key: false,
//     oilcan:false,
//     north:true,
// };
//
// let white = {
//     view: function (){
//         if(player.north){
//             return [m("div",{class:"white"},
//                 [m("button",{class:"door",
//                     onclick: function(){goThroughDoor("lightRed")}}, "-"),
//                     m("button",{class:"door",
//                         onclick: function(){goThroughDoor("lightBlue")}}, "-")]),
//                 m("div",
//                     m("button",{class:"turn", onclick: function(){turnAroundTo("white")}}, "Turn South")
//                 )];
//         }
//         else{
//             return [m("div",{class:"white"},
//                 m("button",{class:"door",
//                     onclick: function(){goThroughDoor("darkPurple")}}, "-")),
//                 m("div",
//                     m("button",{class:"turn", onclick: function(){turnAroundTo("white")}}, "Turn North")
//                 )]
//         }
//     }
// }
//
// let black = {
//     view: function (){
//         if(player.north){
//             return [m("div",{class:"black"},
//                 m("button", {class:"lockedDoor",
//                     onclick: function (){
//                         checkDoor();
//                     }}, "-")),
//                 m("div",
//                     m("button",{class:"turn", onclick: function(){turnAroundTo("black")}}, "Turn South")
//                 )]
//         }
//         else{
//             return [m("div",{class:"black"},
//                 m("button",{class:"door",
//                     onclick: function(){goThroughDoor("red")}}, "-")),
//                 m("div",
//                     m("button",{class:"turn", onclick: function(){turnAroundTo("black")}}, "Turn North")
//                 )]
//         }
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
//                 m("button",{class:"turn", onclick: function(){turnAroundTo("black")}}, "Turn South")
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
//                 m("button",{class:"turn", onclick: function(){turnAroundTo("black")}}, "Turn South")
//             )]
//     }
// }
//
// let blue = {
//     view: function (){
//         if(player.north){
//             return [m("div",{class:"blue"},
//                 m("button", {class:"door",
//                     onclick: function(){goThroughDoor("darkBlue")}}, "-")),
//                 m("div",
//                     m("button",{class:"turn", onclick: function(){turnAroundTo("blue")}}, "Turn South")
//                 )]
//         }
//         else{
//             return [m("div",{class:"blue"},
//                 m("button",{class:"door",
//                     onclick: function(){goThroughDoor("lightBlue")}}, "-")),
//                 m("div",
//                     m("button",{class:"turn", onclick: function(){turnAroundTo("blue")}}, "Turn North")
//                 )]
//         }
//     }
// }
//
// let lightBlue = {
//     view: function (){
//         if(player.north){
//             return [m("div",{class:"lightBlue"},
//                 [m("button",{class:"door",
//                     onclick: function(){goThroughDoor("purple")}}, "-"),
//                     m("button",{class:"door",
//                         onclick: function(){goThroughDoor("blue")}}, "-")]),
//                 m("div",
//                     m("button",{class:"turn", onclick: function(){turnAroundTo("lightBlue")}}, "Turn South")
//                 )]
//         }
//         else{
//             return [m("div",{class:"lightBlue"},
//                 m("button",{class:"door",
//                     onclick: function(){goThroughDoor("white")}}, "-")),
//                 m("div",
//                     m("button",{class:"turn", onclick: function(){turnAroundTo("lightBlue")}}, "Turn North")
//                 )]
//         }
//     }
// }
//
// let darkBlue = {
//     view: function (){
//         if(player.north){
//             if(player.key){
//                 return m("div",{class:"darkBlue"},
//                     m("button",{class:"turn", onclick: function(){turnAroundTo("darkBlue")}}, "Turn South")
//                 )
//             }
//             else{
//                 return [
//                     m("div",{class:"darkBlue"},
//                         m("button", {class:"item",
//                             onclick: function(){
//                                 player.key=true;
//                                 console.log("you found a key!")
//                                 m.route.set("darkBlueObtained")
//                             }
//                         }, "🔑")),
//                     m("div",
//                         m("button",{class:"turn", onclick: function(){turnAroundTo("darkBlue")}}, "Turn South")
//                     )]
//             }
//         }
//         else{
//             return [m("div",{class:"darkBlue"}, [
//                 m("button", {class:"door",
//                     onclick: function(){goThroughDoor("blue")}}, "-"),
//                 m("button", {class:"door",
//                     onclick: function(){goThroughDoor("purple")}}, "-"),]),
//                 m("div",
//                     m("button",{class:"turn", onclick: function(){turnAroundTo("darkBlue")}}, "Turn North")
//                 )]
//         }
//     }
// }
//
// let darkBlueObtained = {
//     view: function (){
//         return [m("div",{class:"darkBlue"},
//             m("div", {class: "locked"}, "You found a key!")),
//             m("div",
//                 m("button",{class:"turn", onclick: function(){turnAroundTo("darkBlue")}}, "Turn South")
//             )]
//     }
// }
//
// let red = {
//     view: function (){
//         if(player.north){
//             return [m("div",{class:"red"},
//                 [m("button",{class:"door",
//                     onclick: function(){goThroughDoor("black")}}, "-"),
//                     m("button",{class:"door",
//                         onclick: function(){goThroughDoor("yellow")}}, "-")]),
//                 m("div",
//                     m("button",{class:"turn", onclick: function(){turnAroundTo("red")}}, "Turn South")
//                 )]
//         }
//         else{
//             return [m("div",{class:"red"},
//                 m("button", {class:"door",
//                     onclick: function(){goThroughDoor("lightRed")}}, "-")),
//                 m("div",
//                     m("button",{class:"turn", onclick: function(){turnAroundTo("red")}}, "Turn North")
//                 )]
//         }
//     }
// }
//
// let lightRed = {
//     view: function (){
//         if(player.north){
//             return [m("div",{class:"lightRed"},
//                 [m("button",{class:"door",
//                     onclick: function(){goThroughDoor("red")}}, "-"),
//                     m("button",{class:"door",
//                         onclick: function(){goThroughDoor("lightPurple")}}, "-")]),
//                 m("div",
//                     m("button",{class:"turn", onclick: function(){turnAroundTo("lightRed")}}, "Turn South")
//                 )]
//         }
//         else{
//             return [m("div",{class:"lightRed"},
//                 m("button", {class:"door",
//                     onclick: function(){goThroughDoor("white")}}, "-")),
//                 m("div",
//                     m("button",{class:"turn", onclick: function(){turnAroundTo("lightRed")}}, "Turn North")
//                 )]
//         }
//     }
// }
//
// let darkRed = {
//     view: function (){
//         if(player.north){
//             return [m("div",{class:"darkRed"},
//                 m("button",{class:"switch", onclick: function(){
//                         console.log("click");
//                         root.setAttribute("ID","lightsOff");
//                         deleteChildren();
//                         console.log("you turned the lights off");
//                     }},""),"Are you sure about this?"),
//                 m("div",
//                     m("button",{class:"turn", onclick: function(){turnAroundTo("darkRed")}},"Turn South")
//                 )]
//         }
//         else{
//             return [m("div",{class:"darkRed"},
//                 m("button",{class:"door",
//                     onclick: function(){goThroughDoor("black")}})),
//                 m("div",
//                     m("button",{class:"turn", onclick: function(){turnAroundTo("darkRed")}}, "Turn North")
//                 )]
//         }
//     }
// }
//
// let purple = {
//     view: function (){
//         if(player.north){
//             return [m("div",{class:"purple"},
//                 [m("button",{class:"door",
//                     onclick:function(){goThroughDoor("darkPurple")}}, "-"),
//                     m("button",{class:"door",
//                         onclick: function(){goThroughDoor("darkBlue")}}, "-")]),
//                 m("div",
//                     m("button",{class:"turn", onclick: function(){turnAroundTo("purple")}}, "Turn South")
//                 )]
//         }
//         else{
//             return [m("div",{class:"purple"},
//                 m("button", {class:"door",
//                     onclick: function(){goThroughDoor("lightBlue")}}, "-")),
//                 m("div",
//                     m("button",{class:"turn", onclick: function(){turnAroundTo("purple")}}, "Turn North")
//                 )]
//         }
//     }
// }
//
// let lightPurple = {
//     view: function (){
//         if(player.north){
//             return [m("div",{class:"lightPurple"},
//                 [m("button",{class:"door",
//                     onclick: function(){goThroughDoor("yellow")}}, "-"),
//                     m("button",{class:"door",
//                         onclick: function(){goThroughDoor("darkPurple")}}, "-")]),
//                 m("div",
//                     m("button",{class:"turn", onclick: function(){turnAroundTo("lightPurple")}}, "Turn South")
//                 )]
//         }
//         else{
//             return [m("div",{class:"lightPurple"},
//                 m("button", {class:"door",
//                     onclick: function(){goThroughDoor("lightRed")}}, "-")),
//                 m("div",
//                     m("button",{class:"turn", onclick: function(){turnAroundTo("lightPurple")}}, "Turn North")
//                 )]
//         }
//     }
// }
//
// let darkPurple = {
//     view: function (){
//         if(player.north){
//             return [m("div",{class:"darkPurple"},
//                 m("button", {class:"door",
//                     onclick: function(){goThroughDoor("white")}}, "-")),
//                 m("div",
//                     m("button",{class:"turn", onclick: function(){turnAroundTo("darkPurple")}}, "Turn South")
//                 )]
//         }
//         else{
//             return [m("div",{class:"darkPurple"},
//                 [m("button",{class:"door",
//                     onclick: function(){goThroughDoor("purple")}}, "-"),
//                     m("button",{class:"door",
//                         onclick: function(){goThroughDoor("lightPurple")}}, "-"),
//                     m("button",{class:"door",
//                         onclick: function(){goThroughDoor("yellow")}}, "-")
//                 ]),
//                 m("div",
//                     m("button",{class:"turn", onclick: function(){turnAroundTo("darkPurple")}}, "Turn North")
//                 )]
//         }
//     }
// }
//
// let yellow = {
//     view: function (){
//         if(player.north){
//             return [m("div",{class:"yellow"},
//                 [m("button",{class:"door",
//                     onclick: function(){goThroughDoor("orange")}}, "-"),
//                     m("button",{class:"door",
//                         onclick: function(){goThroughDoor("darkPurple")}}, "-")]),
//                 m("div",
//                     m("button",{class:"turn", onclick: function(){turnAroundTo("yellow")}}, "Turn South")
//                 )]
//         }
//         else{
//             return [m("div",{class:"yellow"},
//                 [m("button",{class:"door",
//                     onclick: function(){goThroughDoor("lightPurple")}}, "-"),
//                     m("button",{class:"door",
//                         onclick: function(){goThroughDoor("red")}}, "-")]),
//                 m("div",
//                     m("button",{class:"turn", onclick: function(){turnAroundTo("yellow")}}, "Turn North")
//                 )]
//         }
//     }
// }
//
// let orange = {
//     view: function (){
//         if(player.north){
//             if(player.oilcan){
//                 return m("div",{class:"orange"},
//                     m("button",{class:"turn", onclick: function(){turnAroundTo("orange")}}, "Turn South")
//                 )
//             }
//             else{
//                 return [m("div",{class:"orange"}, [
//                     m("button",{class: "tool", onclick: function (){
//                             player.oilcan=true;
//                             console.log("you got an oilcan!")
//                             m.route.set("orangeObtained")
//                         }}, "🛠")
//                 ]),
//                     m("div",
//                         m("button",{class:"turn", onclick: function(){turnAroundTo("orange")}}, "Turn South")
//                     )]
//             }
//         }
//         else{
//             return [m("div",{class:"orange"},
//                 m("button",{class:"door",
//                     onclick: function (){goThroughDoor("yellow")}}, "-"),),
//                 m("div",
//                     m("button",{class:"turn", onclick: function(){turnAroundTo("orange")}}, "Turn North")
//                 )]
//         }
//     }
// }
//
// let orangeObtained = {
//     view: function (){
//         return [m("div",{class:"orange"}, [
//             m("div",{class:"locked"}, "You found an Oilcan!")
//         ]),
//             m("div",
//                 m("button",{class:"turn", onclick: function(){turnAroundTo("orange")}}, "Turn South")
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
//     player.north = !player.north
//     m.route.set(`/${room}`)
// }
//
// function checkDoor(){
//     if(player.key&&player.oilcan){
//         console.log("you got everything to go further");
//         goThroughDoor("darkRed");
//     }
//     else if(player.key){
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
//     "/black":black,
//     "/blackNoKey":blackNoKey,
//     "/blackNoOil":blackNoOil,
//     "/blue":blue,
//     "/lightBlue":lightBlue,
//     "/darkBlue":darkBlue,
//     "/darkBlueObtained":darkBlueObtained,
//     "/red":red,
//     "/lightRed":lightRed,
//     "/darkRed":darkRed,
//     "/purple":purple,
//     "/lightPurple":lightPurple,
//     "/darkPurple":darkPurple,
//     "/yellow":yellow,
//     "/orange":orange,
//     "/orangeObtained":orangeObtained,
// })