let botao = document.querySelector("#openModal")
let div = document.querySelector(".modal-wrapper")

botao.addEventListener("click", function(){
    div.classList.remove('invisible')
})

document.addEventListener("keydown", function(event){
    
    let eOEsc = event.key === "Escape"

    if(eOEsc){
        div.setAttribute("class", "invisible")
    }
})

console.log(div)