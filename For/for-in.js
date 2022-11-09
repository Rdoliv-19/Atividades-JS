// For in retorna os indices ou chave do objeto ( idices, arrays, objetos)

let pessoas = {
    nome: 'Rodrigo',
    sobrenome: 'Oliveira',
    idade: 31,
    endereço: 'Rua 7'
}

for(let i in pessoas){
    console.log()
}

for( let chave in pessoas){
    console.log(chave, pessoas[chave])
}
