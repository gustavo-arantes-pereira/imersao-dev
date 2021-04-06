var numero_secreto = parseInt(Math.random() * 10)
var numero_tentativas = 3

while(numero_tentativas > 0){
  var chute = parseInt(prompt("Digite um número:"))
  
  if(chute == numero_secreto){
    alert("Você acertou !")
    numero_tentativas = 0 // OLÁ, SIMPLES MAS FUNCIONA !!
  } else if(chute > numero_secreto) {
    alert("Tá quente !")
    numero_tentativas--
  } else {
    alert("Tá frio !")
    numero_tentativas--
  }
}

if(chute != numero_secreto) {
  alert("Suas tentativas acabaram, o número secreto era " + numero_secreto)
}