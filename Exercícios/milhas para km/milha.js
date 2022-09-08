function calculaKm(){
    let inputmilha = Number(document.querySelector('.captura-milha').value)
    
    inputmilha = parseFloat(inputmilha)
    
    const milha = 1.61;

    let calculo = inputmilha * milha;

    alert(`O valor em KM é ${calculo.toFixed(0)} Kmh`)
}