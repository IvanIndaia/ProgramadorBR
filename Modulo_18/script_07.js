
setInterval(() => {
    $("h1").toggleClass("bg-blue")
}, 500)

$("h1").css({
    "background-color": "red",
    "font-size": "70px"
})

let box = $(".box")

box.width(600)

box.append(
    "Largura:  ", box.width(), "<br>",
    "Largura + padding: ", box.innerWidth(), "<br>",
    "Largura + padding + borda: ", box.outerWidth(), "<br>",
    "Largura + padding + borda + margem: ", box.outerWidth(true)
)