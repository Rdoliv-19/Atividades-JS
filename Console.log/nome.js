console.log('Boa noite')
console.log('Já são 22 horas')
console.log('Exibido no log')

const texto = document.querySelector('#texto')

texto.addEventListener("input", () =>{
    console.log(texto.value)
})

const botao = document.querySelector('#botao')

const saida = document.querySelector('#saida')


botao.addEventListener("click", () =>{
  saida =  saida.innerhtml=("Novo elemento")
})