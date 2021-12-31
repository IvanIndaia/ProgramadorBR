let video = document.getElementById("video1")
document.getElementsByClassName("controle").visibility = "hidden"

function retroceder() {
    video.currentTime -= 15
}

function avancar() {
    video.currentTime += 15
}

function diminuir() {
    video.playbackRate -= 0.1
}

function aumentar() {
    video.playbackRate += 0.1
}

function pausar() {
    video.pause()
}

function play() {
    video.play()
}

function stop() {
    video.pause()
    video.currentTime = 0
}

function ocultarMidia() {
    document.getElementsByClassName("controle").visibility = "hidden"
}

function mostrarMidia() {
    document.getElementsByClassName("controle").visibility = "visible"
}



