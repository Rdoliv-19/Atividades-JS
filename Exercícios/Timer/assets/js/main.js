const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')
let segundos = 0

function iniciaRelogio(){
    const timer = setInterval(function(){
        segundos++
        relogio.innerHTML = criaSegundos(segundos)
    }, 1000)
}

iniciar.addEventListener('click', function(event){

   iniciaRelogio()
         
})


function criaSegundos(segundos){
    const data = new Date(segundos * 1000);

    return data.toLocaleDateString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });
}



