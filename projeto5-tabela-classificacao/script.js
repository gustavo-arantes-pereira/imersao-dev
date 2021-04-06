var gustavo = {
  nome : "Gustavo",
  vitorias : 3,
  empates : 0,
  derrotas : 2,
  pontos : 9
}

var mariaGabriela = {
  nome : "Maria Gabriela",
  vitorias : 2,
  empates : 0,
  derrotas : 3,
  pontos : 6
}

var jogadores = [gustavo, mariaGabriela]
exibirDadosJogadores()

function exibirDadosJogadores(){
  var html = ""
  
  for (i=0; i < jogadores.length; i++){
    html += "<tr><td>" + jogadores[i].nome + "</td>"
    html += "<td>" + jogadores[i].vitorias + "</td>"
    html += "<td>" + jogadores[i].empates + "</td>"
    html += "<td>" + jogadores[i].derrotas + "</td>"
    html += "<td>" + jogadores[i].pontos + "</td>"
    html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
    html += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
    html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>"    
  }
  
  var corpoTabela = document.getElementById("tabelaJogadores") 
  corpoTabela.innerHTML = html
}

function adicionarVitoria(jogador){
  jogadores[jogador].vitorias++  
  jogadores[jogador].pontos += 3
  
  // A lógica daqui pra baixo é pensando apenas em 2 jogadores
  if (jogador == 1) 
    jogadores[0].derrotas++
  else 
    jogadores[1].derrotas++
  
  exibirDadosJogadores(jogadores)
}

function adicionarEmpate(jogador){
  jogadores[jogador].empates++
  jogadores[jogador].pontos++
  
  // A lógica daqui pra baixo é pensando apenas em 2 jogadores
  if (jogador == 1){
    jogadores[0].empates++
    jogadores[0].pontos++
  }
  else {
    jogadores[1].empates++
    jogadores[1].pontos++
  }
  
  exibirDadosJogadores(jogadores)
}

function adicionarDerrota(jogador){
  jogadores[jogador].derrotas++
  
  if (jogador == 1){
    jogadores[0].vitorias++
    jogadores[0].pontos += 3
  }
  else {
    jogadores[1].vitorias++
    jogadores[1].pontos += 3
  }
  
  exibirDadosJogadores(jogadores)
}