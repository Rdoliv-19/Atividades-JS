const paragrafos = document.querySelector(".paragrafos")
const ps = paragrafos.querySelectorAll('p')

const estiloBody = getComputedStyle(document.body);
const backgroundColorBody = estiloBody.backgroundColor;
const color = estiloBody.color

for( let p of ps){
    p.style.background = backgroundColorBody
    p.style.color = '#ffffff'
}