import m from "mithril";

console.log("Hello World")

const root = document.body
let count = 0

// m.mount(root, {
//     view: function () {
//         return m("h1", "Hello World")
//     }
// })

let Hello = {
    view: function() {
        return m("main", [
            m("h1", {class: "title"}, "My first-ish app"),
            m("button", {onclick: function() {
                    count++
                    backToSplash(count)
                }}, count + " clicks"),
        ])
    }
}

// m.mount(root, Hello)

let Splash = {
    view: function() {
        return m("a", {href: "#!/hello"}, "Enter!")
    }
}

m.route(root, "/splash", {
    "/splash": Splash,
    "/hello": Hello,
})

function backToSplash (clicks:number) {
    if(clicks == 5){
        console.log(clicks)
        m.route.set("/splash")
    }
}