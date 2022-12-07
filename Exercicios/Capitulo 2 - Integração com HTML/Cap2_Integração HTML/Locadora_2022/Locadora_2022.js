function converterduracao() {

let inName = document.getElementById('inName');
let inMinuto = document.getElementById('inMinuto');
let output1 = document.getElementById('output1');
let output2 = document.getElementById('output2');

let titulo = inName.value;
console.log(titulo);
let duracao = Number(inMinuto.value);

let hora = Math.floor(duracao / 60);
let minuto = (duracao & 60);

output1.textContent = titulo
output2.textContent = hora + " Hora(s) e " + minuto + " Minuto(s)"
}

let button = document.getElementById('converter');
button.addEventListener("click", converterduracao);
