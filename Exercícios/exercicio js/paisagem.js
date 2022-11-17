// function ePaisagem(largura, altura){

//     if(largura > altura){
//         console.log(`Imagem esta no modo paisagem`)
//     } else{
//         console.log(`Esta no modo retrato`)
//     }
// }

function ePaisagem(largura, altura){
    return largura > altura ? true : false
}



console.log(ePaisagem(1000, 500))