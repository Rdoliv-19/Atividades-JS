




form.addEventListener('submit', function (teste){

    let form = document.querySelector('.formulario');
let nome = document.querySelector('.nome');
let resultado = document.querySelector('.resultado');

    teste.preventDefault();

    resultado.innerHTML(nome.value)

})


