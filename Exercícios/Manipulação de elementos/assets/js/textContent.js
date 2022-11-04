let titulo = document.querySelector("h1");
let peso = document.querySelector("#peso")
let botao = document.querySelector("#botao")
let container = document.querySelector(".container")
let formulario = document.querySelector("#formulario")

let paiDoFormulario = formulario.parentNode

console.log(container.nextElementSibling)
peso.value = "200 kilos"
titulo.innerHTML = "Ou um novo IMC"

titulo.setAttribute("class", "cor-titulo tamanho secundario")
titulo.setAttribute("id", "tamanho-titulo")

let novoTamhoTitulo = titulo.getAttribute("id")

titulo.removeAttribute("class", "tamanho secundario")

botao.addEventListener("click", function(event){
    event.preventDefault()
    botao.setAttribute("class", "novaCorbotao")
    document.body.classList.add("novaCorDeFundo")
    paiDoFormulario.classList.add("cor-do-formulario")
})





// let div = document.createElement("div")

// div.innerText = "Nova Div"

// titulo.appendChild(div)




