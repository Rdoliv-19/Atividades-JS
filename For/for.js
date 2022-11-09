// let lista = ['segunda', 'terça', 'quarta', 'quinta', 'sexta']

// lista.push['sábado']

// //console.log(lista[2])

// for (let i=0; i < lista.length; i++){
//     console.log('Hoje o dia da semana é ' + lista[i])
// }

let marcas = [
    {tag: 'p', ano: 2015,},
    {tag: 'h1', ano: 2016},
    {tag: 'section', ano: 2017},
    {tag: 'footer', ano: 2018},
    {tag: 'article', ano: 2019},
]

let container = document.querySelector('.container')


for(i=0; i < marcas.length; i++){
   let criaTag = document.createElement(marcas[i].tag)
   criaTag.innerHTML = marcas[i].ano
   
   container.appendChild(criaTag)
}
