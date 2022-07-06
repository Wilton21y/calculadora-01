function imseri(num) {
  var numero = document.getElementById('res').innerHTML;
  document.getElementById('res').innerHTML = numero + num;
}

function limpar() {
  document.getElementById('res').innerHTML = '';

}

function del() {
  var resultado = document.getElementById('res').innerHTML;
  document.getElementById('res').innerHTML = resultado.substring(0, resultado.length - 1);

}
function cal(){
  var resultado = document.getElementById('res').innerHTML;

  if (resultado) {
    document.getElementById('res').innerHTML=eval(resultado);
  }else {
    alert('sem valores para calcular!')
  }
}
