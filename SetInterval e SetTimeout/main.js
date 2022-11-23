function mostraHora(){
    let data = new Date();

    return data.toLocaleString('pt-BR', {
        hour12: false
    });
}

//agenda intervalo de tempo para executar a função
const timer = setInterval(function(){
    console.log(mostraHora())
}, 1000)

//agenda tempo para parar a função
setTimeout( function(){
    clearInterval(timer)
}, 10000)