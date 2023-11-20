var contador = 0;

function AtualizarContador(){
  console.log("Atualizando contador");
  while (contador < 2000) {
    contador++;
    document.getElementById("contador").textContent = contador;
  }
}
setInterval(AtualizarContador, 2000);
