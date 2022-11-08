let botao = document.querySelector("#openModal")
let div = document.body.childNodes[3];

botao.addEventListener("click", function(){
    div.classList.remove("invisible")
})

document.addEventListener('keydown', function(event){
    
    let isEscKey = event.key === 'Escape'

    if(isEscKey){
        div.classList.add("invisible")
    }
})





