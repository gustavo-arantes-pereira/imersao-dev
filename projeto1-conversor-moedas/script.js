var anosLuzTexto = prompt("Anos Luz: ")

var anosLuzFloat = parseFloat(anosLuzTexto)

var valorEmKm = anosLuzFloat * 9460528405000.02
var valorEmKmFormatado = valorEmKm.toFixed(2)

alert(valorEmKmFormatado + " Km")