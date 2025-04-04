// import m from "mithril";
//
// const root = document.body
//
// let white = {
//     view: function (){
//         return m("div",{"class":"white"},
//             [m("button",{class:"door",
//                 onclick: goThroughDoor("lightRed")}, "Door"),
//                 m("button",{class:"door",
//                     onclick: goThroughDoor("lightBlue")}, "Door")]
//         );
//     }
// }
//
// let black = {
//     view: function (){
//         return m("div",{"class":"black"}, m("button", {class:"lockedDoor", onclick: function (){
//                 //TODO
//             }}, "Door") );
//     }
// }
//
// let blue = {
//     view: function (){
//         return m("div",{"class":"blue"},m("button", {class:"door", onclick: goThroughDoor("darkblue")}, "Door"));
//     }
// }
//
// let lightBlue = {
//     view: function (){
//         return m("div",{"class":"lightBlue"},
//             [m("button",{class:"door", onclick: goThroughDoor("purple")}, "Door"),
//                 m("button",{class:"door", onclick: goThroughDoor("blue")}, "Door")]);
//     }
// }
//
// let darkBlue = {
//     view: function (){
//         return m("div",{"class":"darkBlue"}, m("button", {class:"item"}, "Key"));
//     }
// }
//
// let red = {
//     view: function (){
//         return m("div",{"class":"red"},
//             [m("button",{class:"door", onclick: goThroughDoor("black")}, "Door"),
//                 m("button",{class:"door", onclick: goThroughDoor("yellow")}, "Door")]);
//     }
// }
//
// let lightRed = {
//     view: function (){
//         return m("div",{"class":"lightRed"},
//             [m("button",{class:"door", onclick: goThroughDoor("red")}, "Door"),
//                 m("button",{class:"door", onclick: goThroughDoor("lightPurple")}, "Door")]);
//     }
// }
//
// let darkRed = {
//     view: function (){
//         return m("div",{"class":"darkRed"}, "");
//     }
// }
//
// let purple = {
//     view: function (){
//         return m("div",{"class":"purple"},
//             [m("button",{class:"door", onclick:goThroughDoor("darkPurple")}, "Door"),
//                 m("button",{class:"door", onclick: goThroughDoor("darkBlue")}, "Door")]);
//     }
// }
//
// let lightPurple = {
//     view: function (){
//         return m("div",{"class":"lightPurple"},
//             [m("button",{class:"door", onclick: goThroughDoor("yellow")}, "Door"),
//                 m("button",{class:"door", onclick: goThroughDoor("darkPurple")}, "Door")]);
//     }
// }
//
// let darkPurple = {
//     view: function (){
//         return m("div",{"class":"darkPurple"}, m("button", {class:"door", onclick: goThroughDoor("white")}, "Door"));
//     }
// }
//
// let yellow = {
//     view: function (){
//         return m("div",{"class":"yellow"},
//             [m("button",{class:"door", onclick: goThroughDoor("orange")}, "Door"),
//                 m("button",{class:"door", onclick: goThroughDoor("darkPurple")}, "Door")]);
//     }
// }
//
// let orange = {
//     view: function (){
//         return m("div",{"class":"orange"}, m("button",{class: "item"}, "oil can"));
//     }
// }
//
// function goThroughDoor(nextRoom:String){
//     m.route.set(`/${nextRoom}`);
// }
//
// m.route(root,"/white", {
//     "/white":white,
//     "/black":black,
//     "/blue":blue,
//     "/lightBlue":lightBlue,
//     "/darkBlue":darkBlue,
//     "/red":red,
//     "/lightRed":lightRed,
//     "/darkRed":darkRed,
//     "/purple":purple,
//     "/lightPurple":lightPurple,
//     "/darkPurple":darkPurple,
//     "/yellow":yellow,
//     "/orange":orange,
// })