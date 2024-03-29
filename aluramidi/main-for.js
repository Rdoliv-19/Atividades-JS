const listaDeTeclas = document.querySelectorAll('.tecla');

function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio)

    
    if (elemento != null && elemento.localName === 'audio' ){
            elemento.play();
        }
        else{
            console.log('Elemento não encontrado ou seletor inválido')
        }
}


for (let contador = 0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    //template string 
    const idAudio = `#som_${instrumento}`;
  
    tecla.onclick = function () {
        tocaSom(idAudio); 
    } 
    
    tecla.onkeydown = function(evento){
       // console.log(evento.code == 'Space')
        
        if (evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
       
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
}
 
const splash = document.querySelector('[data-splash]')

splash.addEventListener("click", (evento) =>{
    console.log(evento)
    const nova = splash.classList.add('novaClasse')

    nova[2]
})



