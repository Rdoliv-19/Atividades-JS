let data = new Date

let diaSemana = data.getDay()
let nomeDia;

switch (diaSemana) {
    case 0:
        nomeDia = 'Domingo'
        break;
    case 1:
        nomeDia = 'Segunda'
        break;
    case 2:
        nomeDia = 'Terça'
        break;
    case 3:
        nomeDia = 'Quarta'
        break;

}