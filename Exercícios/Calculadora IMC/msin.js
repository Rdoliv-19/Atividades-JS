/*
-Capturar o Form e parar o envio 
-capturar o peso e altura e converter em número

-criar uma função para mostrar o resultado (captura resultado do HTML ,Cria paragrafo, limpa, recebe mensagem como parametro e atribiu ao p, coloca o paragragro como filho no resultado )

-compara se o peso for invalido chamar a função de resultado passando a mensagem (dar return)

-criar função que calcula o IMC
*/

let form = document.querySelector(".form")

form.addEventListener("submit", function(event){
    event.preventDefault();

    let inputPeso = event.target.querySelector("#peso")
    let inputAltura = event.target.querySelector("#altura")

    let peso = Number(inputPeso.value)
    let altura = Number(inputAltura.value)

    if(!peso){
        resultado("Peso inválido", false)
        return
    }

    if(!altura){
        resultado("Altura inválida", false)
        return
    }

    const imc = criaImc(peso, altura);
    const mostraNivel = getNivelImc(imc)

    const msg = `Seu IMC é ${imc} (${mostraNivel})`

    resultado(msg, true)
})

function resultado(msg, classeResultado){
    let resultado = document.querySelector(".resultado")

    let paragrafo = document.createElement("p")
    paragrafo = ""

    resultado.innerHTML = msg
    resultado.appendChild(paragrafo)

    if (classeResultado){
        paragrafo.classList.add(".resultado-ok")
    } else{
        paragrafo.classList.add("erro")
    }

}

function criaImc(peso, altura){
    let imc = peso / (altura * altura)
    return imc.toFixed(2)
}

function getNivelImc(imc){
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau1', 'Obesidade grau2', 'Obesidade grau2']

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >=24.9) return nivel[2];
    if (imc >=18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}