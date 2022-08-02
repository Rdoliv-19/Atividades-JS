let carro = "HB20"

function qualCarro(cor, ano){
    carro = carro + " " + cor + " " + ano 
}

const botao = document.querySelector("#botao")

botao.onclick = qualCarro("Verde", 2020)

console.log(botao)