let botao = document.getElementById('botao')
let input = document.getElementsByTagName("input")
const confirme = document.querySelectorAll("[required]")
let texto = document.getElementById("texto")
const email = document.getElementById("email")
const nome = document.getElementById("nome")
const telefone = document.getElementById("telefone")
const erro1 = document.getElementById("erro1")
const erro2 = document.getElementById("erro2")
const erro3 = document.getElementById("erro3")
const erro4 = document.getElementById("erro4")
for(index = 0 ; index < input.length ; index++){
  
}
botao.addEventListener("click", campos)
nome.addEventListener("change", verificar)
email.addEventListener("change", verificar1)
telefone.addEventListener("change", verificar2)
texto.addEventListener("change", verificar3)
function verificar(){   
    erro1.classList.remove("on")
    erro1.classList.add("off")  
}
function verificar1(){
        erro2.classList.remove("on")
        erro2.classList.add("off") 
}
function verificar2(){
     erro3.classList.remove("on")
        erro3.classList.add("off")
}
function verificar3(){
    erro4.classList.remove("on")
    erro4.classList.add("off")
    texto.style.borderColor = "#3CCC87"
}
function campos(){   
    if (nome.value == "") {
        nome.classList.add("erro")
        erro1.classList.add("on")
    }else{
        nome.classList.remove("on")
        erro1.classList.remove("on")
        erro1.classList.add("off")        
    }
    if (email.value == "") {
        email.classList.add("erro")
        erro2.classList.add("on")
    }else{
        erro2.classList.remove("on")
        erro2.classList.add("off")
    }
    if (telefone.value == "") {
        telefone.classList.add("erro")
        erro3.classList.add("on")
    }else{
        erro3.classList.remove("on")
        erro3.classList.add("off")
    }
    if (texto.value == "") {
        texto.style.borderColor = "red"
        erro4.classList.add("on")
    }else{
        texto.style.borderColor = "#3CCC87"
        erro4.classList.add("off")
    }   
}




