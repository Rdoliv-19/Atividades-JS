const form = document.querySelector('#formulario');

//não recarrega a página no envio
form.addEventListener('submit', function (evento){
    evento.preventDefault();
    console.log('Formulario não enviado');
    setResultado('teste')
});

function setResultado(msn){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = msn;
}