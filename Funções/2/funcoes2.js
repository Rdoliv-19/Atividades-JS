/*function somaNumeros(x, y){
    return x + y
    
}

console.log(somaNumeros(5, 5))

function exibeTexto(nome){
  return `Bom dia ${nome}`
    
}

console.log(exibeTexto('João'))

function casados(ele, ela, ano){
    return `${ele} é casado com ${ela} a ${ano} anos!`
}

console.log(casados('Rodrigo', 'Luana', 10))

function apartamentos (v1, v2, v3, v4, cond){
    return `A visinha do apartamento ${v1} é amiga do visinho do apartamento ${v2}.
    Moro o apartamento ${v3} que fica ao lado do apartamento ${v4}. Nosso condomínio é o ${cond}`
}

console.log(apartamentos(15, 16, 30, 29, 'Dez Cerejeiras'))

function contas(x, y, z){
    let numeros = x + y + z
    return numeros
}

console.log(contas(5,5,20))*/


const lista = ['celta', 'gol', 'palio']

function adicionaCarroNoFinal(){
    lista.push('HB20')
}

function adicionaCarroNoComeco(){
    lista.unshift('Parati')
}

function loja(meuCarro){
    return `A loja que visitei hoje tem esta lista de carros ${lista}. Eu escolhi o ${meuCarro}`
}

adicionaCarroNoFinal();
adicionaCarroNoComeco();

console.log(lista)
console.log(loja(lista[2]))
console.log(lista.length)

