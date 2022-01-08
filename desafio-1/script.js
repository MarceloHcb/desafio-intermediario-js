
document.getElementById("arrow-left").addEventListener("click", anterior)
document.getElementById("arrow-right").addEventListener("click", proximo)
const inputs = document.querySelectorAll("input")
let imagem = document.querySelectorAll(".img")
const conteudo = document.querySelectorAll(".content")
let contador = 0;
const a = document.getElementsByClassName("off")
console.log(imagem)
function proximo() {
    contador++
    console.log(contador)
    if (contador <= 3) {
        a[contador].classList.add("ativa")
        imagem[contador].classList.add("ativa")
        
    } else if (contador >= 3) {
        contador = 4
        this.style.opacity = 0.3
    }
}
function anterior() {
    contador--
    console.log(contador)
    if (contador > 0) {
        a[contador].classList.remove("ativa")
    }    
    else if (contador < 0) {
        contador = 0
        this.style.opacity = 0.3
    }
    console.log(inputs)
}