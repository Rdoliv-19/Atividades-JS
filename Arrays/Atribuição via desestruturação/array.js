let numeros = [100, 200 , 300, 400, 500]
let [primeiro, segundo] = numeros
console.log(primeiro, segundo)

let anos = [2010, 2011, 2012, 2013, 2014, 2015]

let[primeiroAno, segundoAno, ... resto] = anos

console.log(primeiroAno, segundoAno)
console.log(resto)