const objetos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];

let div = document.querySelector(".container")

for(i=0; i < objetos.length; i++){
    let criaTag = document.createElement(objetos[i].tag)
    criaTag.innerHTML = objetos[i].texto
    div.appendChild(criaTag)
}



