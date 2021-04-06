var cartaPaulo = {
    nome: "Seiya de Pegaso",
    imagem: "https://i.pinimg.com/originals/c2/1a/ac/c21aacd5d092bf17cfff269091f04606.jpg",
    atributos: {
        ataque: 80,
        defesa: 60,
        magia: 90
    }
}

var cartaRafa = {
    nome: "Bulbasauro",
    imagem: "http://4.bp.blogspot.com/-ZoCqleSAYNc/UQgfMdobjUI/AAAAAAAACP0/s_iiWjmw2Ys/s1600/001Bulbasaur_Dream.png",
    atributos: {
        ataque: 70,
        defesa: 65,
        magia: 85
    }
}

var cartaGui = {
    nome: "Lorde Darth Vader",
    imagem: "https://images-na.ssl-images-amazon.com/images/I/51VJBqMZVAL._SX328_BO1,204,203,200_.jpg",
    atributos: {
        ataque: 88,
        defesa: 62,
        magia: 90
    }
}

var cartaLol = {
    nome: "Caitlyn",
    imagem: "http://1.bp.blogspot.com/-K7CbqWc1-p0/VLc98v85s0I/AAAAAAAABqk/-ZB684VVHbg/s1600/Caitlyn_OriginalSkin.jpg",
    atributos: {
        ataque: 95,
        defesa: 40,
        magia: 10
    }
}

var cartaNaruto = {
    nome: "Naruto",
    imagem: "https://conteudo.imguol.com.br/c/entretenimento/16/2017/06/27/naruto-1498593686428_v2_450x337.png",
    atributos: {
        ataque: 80,
        defesa: 60,
        magia: 100
    }
}

var cartaBatman = {
    nome: "Batman",
    imagem: "https://assets.b9.com.br/wp-content/uploads/2020/09/Batman-issue86-heder-1280x677.jpg",
    atributos: {
        ataque: 95,
        defesa: 70,
        magia: 0
    }
}

var cartaMarvel = {
    nome: "Capitã Marvel",
    imagem: "https://cinepop.com.br/wp-content/uploads/2018/09/capitamarvel21.jpg",
    atributos: {
        ataque: 90,
        defesa: 80,
        magia: 0
    }
}

var cartaGoku = {
  nome : "Goku",
  imagem: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpapers.co%2Fwallpaper%2Fpapers.co-bc55-dragonball-goku-blue-art-illustration-anime-34-iphone6-plus-wallpaper.jpg&f=1&nofb=1",
  atributos : {
    ataque : 96,
    defesa : 80,
    magia : 82
  }
}

var cartaSasuke = {
  nome : "Sasuke",
  imagem: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fgetwallpapers.com%2Fwallpaper%2Ffull%2F5%2Fc%2F7%2F527961.jpg&f=1&nofb=1",
  atributos : {
    ataque : 75,
    defesa : 87,
    magia : 95
  }
}

var cartaVegeta = {
  nome : "Vegeta",
  imagem: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fgetwallpapers.com%2Fwallpaper%2Ffull%2F7%2F1%2Fe%2F1293373-free-download-vegeta-wallpaper-for-android-1899x3377-ipad-retina.jpg&f=1&nofb=1",
  atributos : {
    ataque : 94,
    defesa : 80,
    magia : 81
  }
}

var cartas = [cartaPaulo, cartaRafa, cartaGui, cartaLol, cartaNaruto, cartaBatman, cartaMarvel, cartaGoku, cartaSasuke, cartaVegeta]

var deckMaquina = []
var cartaMaquina
var qtdCartasMaquina = 0

var deckJogador = []
var cartaJogador
var qtdCartasJogador = 0

var turno = 0

embaralharCartas()  
atualizaPlacar()

function sortearCarta() {  
    // Gera um número inteiro aleatório entre 0 e o tamanho total do array "deckMaquina"
    var numeroCartaMaquina = parseInt(Math.random() * deckMaquina.length)
    var numeroCartaJogador = parseInt(Math.random() * deckJogador.length)
        
    // Recebe a carta na posição aleatória gerada acima
    cartaMaquina = deckMaquina[numeroCartaMaquina]
    cartaJogador = deckJogador[numeroCartaJogador]
    
    // Insere as cartas que estão em uso no deck principal 
    cartas.push(deckMaquina[numeroCartaMaquina])
    cartas.push(deckJogador[numeroCartaJogador])
  
    // Remove dos respectivos decks as cartas sorteadas
    deckMaquina.splice(numeroCartaMaquina, 1)
    deckJogador.splice(numeroCartaJogador, 1)   
    
    // Desabilita o botão Sortear carta
    document.getElementById('btnSortear').disabled = true
    // Habilita o botão Jogar
    document.getElementById('btnJogar').disabled = false

    exibeCartaJogador()
}

function embaralharCartas(){
    var ponteiroJogador = 0
    var ponteiroMaquina = 0
    
    // A cada leitura é incrementado 2 ao "i" pois dentro do for
    // é retirado duas cartas do deck principal.
    for (var i = 0; i < cartas.length; i + 2){
        // Aqui dividi os players (1- randomizar uma carta, 2- inserir a carta 
        // aleatória apontada, no deck selecionado e 3- remover a 
        // carta selecionada do deck principal) para eliminar a possibilidade
        // de ambos os "ponteiros" estarem apontando para a mesma carta.
        ponteiroJogador = parseInt(Math.random() * cartas.length)
        deckJogador.push(cartas[ponteiroJogador])
        cartas.splice(ponteiroJogador, 1)
        
        ponteiroMaquina = parseInt(Math.random() * cartas.length)      
        deckMaquina.push(cartas[ponteiroMaquina])
        cartas.splice(ponteiroMaquina, 1)
    }
    
    // Atualiza a quantidade de cartas de cada deck
    qtdCartasJogador = deckJogador.length
    qtdCartasMaquina = deckMaquina.length
}

function exibeCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + ": " + cartaJogador.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
  
    // Aqui verifica se o turno é par    
    if (turno % 2 == 0)
      atualizaStatusRadioButton(1) // vez do jogador
    else
      atualizaStatusRadioButton(2) // vez a máquina
}

function exibeCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p>" + atributo + ": " + cartaMaquina.atributos[atributo] + "</p>"
    }

    var html = "<div id='opcoes' class='carta-status --spacing'>"

    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

// Função responsável por habilitar ou desabilitar os "radio buttons" recebendo como 
// parâmetro o valor que define de quem é a vez. (desafio do Paulo) !!
function atualizaStatusRadioButton(turno){
  var radioAtributo = document.getElementsByName('atributo')
  
  if (turno == 1){      
    for (var i = 0; i < radioAtributo.length; i++)
      radioAtributo[i].disabled = false
  }
  else if (turno == 2)
    for (var i = 0; i < radioAtributo.length; i++)
      radioAtributo[i].disabled = true
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    
    // Caso o turno for par
    if (turno % 2 == 0){
      for (var i = 0; i < radioAtributo.length; i++)
          if (radioAtributo[i].checked)
              return radioAtributo[i].value // Retorna o atributo selecionado
    } else {
        var atributo = calcularMaiorAtributoMaquina()
      
        return atributo // Retorna o maior atributo
    }
    return "Erro" // Caso não for selecionado nenhum atributo retorna a string "Erro"
}

function atualizaPlacar() {
  var divPlacar = document.getElementById('placar')
  
  // Aqui é gerado a tabela que vai exibir aquantidade de cartas nos decks do jogador e da máquina
  var html = '<table>' +
                  '<tr>' + 
                      '<th colspan="2">Quantidade de Cartas<th>' + 
                  '</tr>' +
                  '<tr>' +
                      '<td>Jogador</td>' +
                      '<td>Máquina</td>' +
                  '</tr>' +
                  '<tr>' +
                      '<td>' + qtdCartasJogador + '</td>' +
                      '<td>' + qtdCartasMaquina + '</td>' +
                  '</tr>' +
              '</table>'
  
  divPlacar.innerHTML = html
}

function calcularMaiorAtributoMaquina(){
    var indice = "" // vai definir a posição do maior atributo
    var maior = 0 // vai definir o maior atributo
    
    for (var atributo in cartaMaquina.atributos) {
      if (cartaMaquina.atributos[atributo] > maior){
        // Caso o valor deste atributo for maior que o valor da variável "maior", 
        // a variável recebe o valor do atributo e o índice aponta para este atributo.
        maior = cartaMaquina.atributos[atributo]
        indice = atributo
      }
    }    
    return indice // Retorna a posição do maior atributo
}

function atualizaDeck(player){
    
    if (player == 1){
        // Insere as cartas que participaram da rodada no deck do jogador e depois as remove do deck principal.
        deckJogador.push(cartas[0])        
        deckJogador.push(cartas[1])
        cartas.splice(0, 2)
    } else if (player == 2){
        // Insere as cartas que participaram da rodada no deck da máquina e depois as remove do deck principal.
        deckMaquina.push(cartas[0])        
        deckMaquina.push(cartas[1])
        cartas.splice(0, 2)
    } else {
        // Devolve as cartas que participaram da rodada para seus respectivos decks
        // e depois as remove do deck principal.
        deckMaquina.push(cartas[0])        
        deckJogador.push(cartas[1])
        cartas.splice(0, 2)
    }
    
    // Atualiza a quantidade de cartas de cada deck
    qtdCartasJogador = deckJogador.length
    qtdCartasMaquina = deckMaquina.length
}

function jogar() {
    var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()
    
    // Verifica se o usuário selecionou algum atributo.
    if (atributoSelecionado != "Erro"){
      if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]){
          htmlResultado = "<p class='resultado-final' style='color: green'>YEAHH, você venceu !!</p>"
          atualizaDeck(1)
          document.getElementById('btnProximaRodada').disabled = false
      } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]){
          htmlResultado = "<p class='resultado-final' style='color: red'>OH NÃO, você perdeu !!</p>"
          atualizaDeck(2)
          document.getElementById('btnProximaRodada').disabled = false
      } else {
          htmlResultado = "<p class='resultado-final' style='color: yellow'>EMPATE !!</p>"
          atualizaDeck(3)
          document.getElementById('btnProximaRodada').disabled = false
      }
      
      divResultado.innerHTML = htmlResultado   
      exibeCartaMaquina()
      
      document.getElementById('btnJogar').disabled = true
      
      if (deckJogador.length == 0){
          alert("FIM DE JOGO !")
          divResultado.innerHTML = "<p class='resultado-final' style='color: red'>OH NÃO, você perdeu !!</p>"
          document.getElementById('btnProximaRodada').disabled = true    
          atualizaPlacar()
      } else if (deckMaquina.length == 0){    
          alert("FIM DE JOGO !")
          document.getElementById('btnProximaRodada').disabled = true     
          atualizaPlacar()
      }
      turno++
    } else
        alert("Por favor selecione um atributo.")
}

function proximaRodada() {
  var divCartas = document.getElementById('cartas')
  
  divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta"></div>`
  document.getElementById('btnSortear').disabled = false
  document.getElementById('btnJogar').disabled = true
  document.getElementById('btnProximaRodada').disabled = true
  
  var divResultado = document.getElementById('resultado')
  divResultado.innerHTML = ""
  atualizaPlacar()
}