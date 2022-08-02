let botao = document.querySelector('.botao')
let resposta = document.querySelector('.resposta')

botao.addEventListener("click", () =>{
    resposta.innerText = soma.value
})

let x = 5
let y = 5

function soma(x,y){
    x + y
}