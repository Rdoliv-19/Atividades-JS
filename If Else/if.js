// let hora = 13

// if (hora >= 0 && hora <= 11 ){
//     console.log('Bom dia');
// } else if (hora >= 12 && hora <= 18 ){
//     console.log('Boa tarde');
// } else if (hora >=19 && hora <=23){
//     console.log('Boa noite')
// } else{
//     console.log('Hora inválida')
// }

function atribuiVariavel(num){
    let valor=''

    if(num >= 10 && num <15){
        valor="mair que 10 menor que 15"
    } else if( num >15 && num<=20){
        valor='Valor esta entre 15 e 20'
    }else{
        valor = 'Acima de 20'
    }

    return valor
}

console.log(atribuiVariavel(50))