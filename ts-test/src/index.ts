import m from "mithril";
import {Player} from "./playerClass"
import {Map} from "./mapClass";

const root = document.body;

const user = new Player(false,false,false,true,false);

const map = new Map(user);

let start = {view: () => {return map.start()}};

let gameOver = {view:() => {return map.gameOver()}};

let darkness = {view:() => {return map.darkness()}};

let goodEnd = {view:() => {return map.goodEnd()}};

let white = {view: () => {return map.white()}};

let black = {view: () => {return map.black()}};

let blackNoKey = {view: () => {return map.blackNoKey()}};

let blackNoOil = {view: () => {return map.blackNoOil()}};

let blackToolKit = {view: () => {return map.blackToolKit()}};

let blue = {view: () => {return map.blue()}};

let lightBlue = {view: () => {return map.lightBlue()}};

let darkBlue = {view: () => {return map.darkBlue()}};

let darkBlueObtained = {view: () => {return map.darkBlueObtained()}};

let red = {view: () => {return map.red()}};

let lightRed = {view: () => {return map.lightRed()}};

let darkRed = {view: () => {return map.darkRed()}};

let purple = {view: () => {return map.purple()}};

let lightPurple = {view: () => {return map.lightPurple()}};

let darkPurple = {view: () => {return map.darkPurple()}};

let yellow = {view: () => {return map.yellow()}};

let orange = {view: () => {return map.orange()}};

let orangeObtained = {view: () => {return map.orangeObtained()}};

let green = {view: () => {return map.green()}};

let greenObtained = {view: () => {return map.greenObtained()}};

m.route(root,"/start", {
    "/start":start,
    "/gameOver":gameOver,
    "/goodEnd":goodEnd,
    "/darkness":darkness,
    "/white":white,
    "/black":black,
    "/blackNoKey":blackNoKey,
    "/blackNoOil":blackNoOil,
    "/blackToolKit":blackToolKit,
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