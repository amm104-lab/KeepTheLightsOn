import m from "mithril";
import { Player } from "./playerClass";
import { Map } from "./mapClass";
const root = document.body;
const user = new Player(false, false, false, true, false);
const map = new Map(user);
let start = { view: function () { return map.start(); } };
let gameOver = { view: function () { return map.gameOver(); } };
let darkness = { view: function () { return map.darkness(); } };
let goodEnd = { view: function () { return map.goodEnd(); } };
let white = { view: function () { return map.white(); } };
let black = { view: function () { return map.black(); } };
let blackNoKey = { view: function () { return map.blackNoKey(); } };
let blackNoOil = { view: function () { return map.blackNoOil(); } };
let blackToolSet = { view: function () { return map.blackToolSet(); } };
let blue = { view: function () { return map.blue(); } };
let lightBlue = { view: function () { return map.lightBlue(); } };
let darkBlue = { view: function () { return map.darkBlue(); } };
let darkBlueObtained = { view: function () { return map.darkBlueObtained(); } };
let red = { view: function () { return map.red(); } };
let lightRed = { view: function () { return map.lightRed(); } };
let darkRed = { view: function () { return map.darkRed(); } };
let purple = { view: function () { return map.purple(); } };
let lightPurple = { view: function () { return map.lightPurple(); } };
let darkPurple = { view: function () { return map.darkPurple(); } };
let yellow = { view: function () { return map.yellow(); } };
let orange = { view: function () { return map.orange(); } };
let orangeObtained = { view: function () { return map.orangeObtained(); } };
let green = { view: function () { return map.green(); } };
let greenObtained = { view: function () { return map.greenObtained(); } };
m.route(root, "/start", {
    "/start": start,
    "/gameOver": gameOver,
    "/goodEnd": goodEnd,
    "/darkness": darkness,
    "/white": white,
    "/black": black,
    "/blackNoKey": blackNoKey,
    "/blackNoOil": blackNoOil,
    "/blackToolSet": blackToolSet,
    "/blue": blue,
    "/lightBlue": lightBlue,
    "/darkBlue": darkBlue,
    "/darkBlueObtained": darkBlueObtained,
    "/red": red,
    "/lightRed": lightRed,
    "/darkRed": darkRed,
    "/purple": purple,
    "/lightPurple": lightPurple,
    "/darkPurple": darkPurple,
    "/yellow": yellow,
    "/orange": orange,
    "/orangeObtained": orangeObtained,
    "/green": green,
    "/greenObtained": greenObtained
});
