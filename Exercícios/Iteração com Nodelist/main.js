let container = document.querySelector('.container')
let listaP = container.querySelectorAll('p')

let estiloBody = getComputedStyle(document.body)
let fundoBody = estiloBody.backgroundColor


for(let i of listaP){
 i.style.backgroundColor = fundoBody
 i.style.color = '#ffffff'
}