let dia = Number(prompt('Distancia do sol para a terra'));

document.body.innerHTML += (`<br>A distância é: ${dia}</br>`)
document.body.innerHTML += (`<br>O valor de ${dia} é NaN?: ${Number.isNaN(dia)}</br`)
document.body.innerHTML += (`<br>O número é inteiro ? ${Number.isInteger(dia)}</br`)
document.body.innerHTML += (`<br>Arredondando o número para baixo fica: ${Math.floor(dia)} </br>`)
document.body.innerHTML += (`<br>Arredondando o número para cima fica: ${Math.ceil(dia)}</br>`)
document.body.innerHTML += (`<br> Em duas casas decimais fica: ${dia.toFixed(2)} </br>`)



let qt = parseInt(prompt('Primeira quantidade'))
let qt2 = parseInt(prompt('Segunda quantidade'))

let soma = qt / qt2


let texto = document.querySelector('.texto')

texto.innerHTML = soma






