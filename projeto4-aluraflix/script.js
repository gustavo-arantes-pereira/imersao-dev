function adicionarTrailer(){
  var trailer = document.querySelector('#trailer').value
  var mensagem = document.querySelector('#message')
  var listaTrailers = document.querySelector('#listaTrailers')
  
  if(validaTrailer(trailer))
    listaTrailers.innerHTML = listaTrailers.innerHTML + trailer
  else
    mensagem.innerHTML = mensagem.innerHTML + "Formato incorreto !"
  
  console.log(trailer)
}

function validaTrailer(trailer){
  if(trailer.startsWith("<iframe "))
    return true
  else
    return false
}