function falaOi(){
    console.log('oi')
}

const dado = function dadosDaFunção(){
    console.log('teste')
}

function executaFuncao(funcao){
    funcao()
}

//executaFuncao(dado);

// Arrow function
const funcaoArrow = () => {
    console.log(`Função arrow`)
}

//funcaoArrow();

const obj = {
    teste: function(){
        console.log(`Teste função em objeto`)
    }
}

obj.teste()