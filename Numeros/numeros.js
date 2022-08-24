const entrada = Number(prompt('Digite um número'))
let numero = document.getElementById("numero-titulo")
let texto = document.getElementById("texto")

entrada.mra
numero.innerHTML = entrada;

texto.innerHTML += `<p>Raiz quadrada: ${entrada ** 0.5}.</p>`
texto.innerHTML += `<p>${entrada} é inteiro: ${Number.isInteger(entrada)}.</p>`
texto.innerHTML += `<p>É NaN: ${Number.isNaN(entrada)}.</p>`
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(entrada)}.</p>`
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(entrada)}.</p>`
texto.innerHTML += `<p>Com duas casas decimais: ${entrada.toFixed(2)}.</p>`