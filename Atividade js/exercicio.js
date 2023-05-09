//Leonardo Blanco RM-99119


var buttonElement = document.getElementById("myButton");

  buttonElement.addEventListener("click", function() {
    var r = Math.round(Math.random() * 255);
    var g = Math.round(Math.random() * 255);
    var b = Math.round(Math.random() * 255);
    document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
  });

  function adicionarItem() {
    var input = document.getElementById("item");
    var valor = input.value;
    var lista = document.getElementById("lista");
    var novoItem = document.createElement("li");
    novoItem.textContent = valor;
    lista.appendChild(novoItem);
    input.value = "";
  }
  
  var btnEnviar = document.getElementById("btnEnviar");
  btnEnviar.addEventListener("click", adicionarItem);

  
  function trocarImagem() {
    var imagem = document.getElementById("myImg");
    if (imagem.src.match("pordosol1.jpg")) {
      imagem.src = "pordosol2.jpg";
    } else {
      imagem.src = "pordosol1.jpg";
    }
  }

  document.getElementById("botao").addEventListener("click", function() {
	document.getElementById("mensagem").innerHTML = "Você clicou no botão!";
    });

    function ocultarElemento() {
        var elemento = document.getElementById("elemento-a-ocultar");
        elemento.style.display = "none";
    }
  