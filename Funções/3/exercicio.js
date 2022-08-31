function meuEscopo(){
    const form = document.queryselector('.form');
    const resultado = document.queryselector('.resultado');

    function recebeEventoForm (evento){
        evento.preventDefault();
    }

    form.addEventListener('submit', recebeEventoForm);

    const nome = form.querySelector('.nome');
    const sobrenome = form.querySelector('.sobrenome');

    const pessoas = [];

    pessoas.push({
        nome: nome.value,
        sobrenome: sobrenome.value,
    })

    resultado.innerHtml(nome.value, sobrenome.value,)

}

let lista = [
    {
        nome: 'Seu nome',
        sobrenome: 'Seu sobrenome',
        idade: 'Sua idade',
        peso: 'Seu peso'
    }
]

console.log(lista)