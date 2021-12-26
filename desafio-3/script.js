let botao = document.getElementById('botao')
let input = document.getElementById("input")
const confirme = document.querySelectorAll("[required]")
let texto = document.getElementById("texto")
const email = document.getElementById("email")
const nome = document.getElementById("nome")
const erro1 = document.getElementById("erro1")
const erro2 = document.getElementById("erro2")
const erro3 = document.getElementById("erro3")
const erro4 = document.getElementById("erro4")

botao.addEventListener("click", (event) => {
    event.preventDefault()
    if (nome.value == "") {
        nome.classList.add("erro")
        erro1.classList.add("on")
    }
    if (email.value == "") {
        email.classList.add("erro")
        erro2.classList.add("on")
    }
    if (telefone.value == "") {
        telefone.classList.add("erro")
        erro3.classList.add("on")
    }
    if (texto.value == "") {
        texto.style.borderColor = "red"
        erro4.classList.add("on")
    }
    if (nome.value !== "") {
        erro1.classList.remove("on")
        erro1.classList.add("off")
    }
    if (email.value !== "") {
        erro2.classList.remove("on")
        erro2.classList.add("off")
    }
    if (telefone.value !== "") {
        erro3.classList.remove("on")
        erro3.classList.add("off")
    }
    if (texto.value !== "") {
        texto.style.borderColor = "#3CCC87"
        erro4.classList.add("off")
    }
})





