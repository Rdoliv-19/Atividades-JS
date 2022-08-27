/*const casa1 = {
    sala: 'Sofa',
    quarto: 'TV',
    cozinha: 'mesa',
    lavanderia: 'Pia',
}

const casa2 = {
    Garagem: 'Bancada',
    Quarto: 'Cama',
    Cozinha: 'cadeira',
    banheiro: 'Vaso',
}

const casa4 = {
    dispensa: 'porta',
    quarto: 'prateleira',
    sala: 'game',
    laje: 'churrasqueira',
}

const casa5 = {
    quintal: 'Plantas',
    garagem: 'carro',
    sala: 'computador',
    quarto: 'espelho',
}

let apartamentos = []

apartamentos.push('máquina')
 
}*/

function adicionaNoArray(){
const itens = document.getElementsByClassName('itens');

let primeiro = itens.querySelector('.1item');
let segundo = itens.querySelector('.2item');
let terceiro = itens.querySelector('.3item');
let quarto = itens.querySelector('.4item');

let sacola = []

sacola.push({
    primeiro: primeiro.value,
    segundo: segundo.value,
    terceiro: terceiro.value,
    quarto: quarto.value,
})

console.log(sacola)
}









