
let direita = document.getElementById("arrow-right")
let esquerda = document.getElementById("arrow-left")
let conteudo = document.getElementsByClassName("content")
let h1 = document.getElementById("h1")
let botao = document.getElementById("saiba-mais-link")
let imagem1 = document.getElementById("image1")
let imagem2 = document.getElementById("image2")
let imagem3 = document.getElementById("image3")
let imagem4 = document.getElementById("image4")
let conteudo1 = document.getElementById("frame1")
let conteudo2 = document.getElementById("frame2")
let conteudo3 = document.getElementById("frame3")
let conteudo4 = document.getElementById("frame4")

let contador = 0;
let contador1 =0;
esquerda.addEventListener("click", imagemAnterior)
direita.addEventListener("click", proximaImagem)


function proximaImagem() {
    contador++
    if (contador == 1) {
        imagem1.classList.add("desativada")
        imagem2.classList.remove("desativada")
        conteudo2.classList.remove("desativada")
        esquerda.style.opacity = 1
    }
    if (contador == 2) {
        imagem2.classList.add("desativada")
        imagem3.classList.remove("desativada")
        conteudo3.classList.remove("desativada")       
        contador1=2
    }
    else if (contador == 3) {
        imagem3.classList.add("desativada")
        imagem4.classList.remove("desativada")
        conteudo4.classList.remove("desativada")
        direita.style.opacity = 0.3
    }
    if (contador >= 3) {
        contador = 3
        contador1 = 4
    }    
}
contador1 = 4
function imagemAnterior() {
    contador1--

    if (contador1 <= 3) {
        imagem4.classList.add("desativada")
        imagem3.classList.remove("desativada")
        conteudo3.classList.remove("desativada")
        conteudo4.classList.add("desativada")
    }
    if (contador1 <= 2) {
        imagem3.classList.add("desativada")
        imagem2.classList.remove("desativada")
        conteudo2.classList.remove("desativada")
        conteudo3.classList.add("desativada")
    }
    if (contador1 <= 1) {
        imagem2.classList.add("desativada")
        imagem1.classList.remove("desativada")
        conteudo1.classList.remove("desativada")
        conteudo2.classList.add("desativada")
        esquerda.style.opacity = 0.3
        direita.style.opacity = 0.3
    }
    if (contador1 <= 1) {
        contador1 = 1
        contador = 0
    }   
}
