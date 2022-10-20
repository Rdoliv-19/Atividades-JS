let botao = document.querySelector("#adicionar-paciente")

botao.addEventListener("click", function(event){
    event.preventDefault()


    let formulario = document.querySelector("#form-adiciona")

    let nome = formulario.nome.value;
    let peso = formulario.peso.value;
    let altura = formulario.altura.value;
    let gordura = formulario.gordura.value;

    let criaTr = document.createElement("tr")

    let Tdnome = document.createElement("td")
    let Tdpeso = document.createElement("td")
    let Tdaltura = document.createElement("td")
    let Tdgordura = document.createElement("td")

    Tdnome.textContent = nome;
    Tdpeso.textContent = peso;
    Tdaltura.textContent = altura;
    Tdgordura.textContent = gordura;

    criaTr.appendChild(Tdnome)
    criaTr.appendChild(Tdpeso)
    criaTr.appendChild(Tdaltura)
    criaTr.appendChild(Tdgordura)

   let benvindo = document.querySelector(".bem-vindo")

   let p = document.createElement("p")
   p.innerHTML = "Bem vindo ao sistema"

   benvindo.appendChild(p)

    
})