let listaDeTeclas = document.querySelectorAll('input[type="button"]')


for (let contador = 0; contador < listaDeTeclas.length; contador++){
  
   let tecla = listaDeTeclas[contador];
   
  tecla.onkeydown = function (){
    listaDeTeclas[contador].classList.add('ativa')
  }
  
  tecla.onkeyup = function (){
    listaDeTeclas[contador].classList.remove('ativa')
  }
}