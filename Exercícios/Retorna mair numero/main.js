function retornaNumero(num1, num2){
    if (num1 > num2){
        console.log(`Retornado Num1`)
        return num1        
    }else{
        console.log(`Retornado Num2`)
        return num2        
    }
}

console.log(retornaNumero(2, 7))