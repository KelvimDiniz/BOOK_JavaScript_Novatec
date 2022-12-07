// VARIAVEIS
var a = 5 % 2;
var b = 7 % 4;
var c = Math.abs(-5);
var d = Math.ceil(4.2);
var e = Math.floor(4.9);
var f = Math.pow(3, 2);


// a = 5 % 2 = 1 A sobra da divisão
document.getElementById('Modulo_1').textContent = 'a = 5 % 2 // a = ' + a;

// b = 7 % 4 = 3 a sobra da divisão 
document.getElementById('Modulo_2').textContent = 'b = 7 % 4 // b = ' + b;

// Math.abs(-5) = tranforma o valor dentro da função em absoluto  
document.getElementById('Função_Math.abs').textContent = 'Math.abs(-5) = ' + c;

// var d = Math.ceil(4.2) = Arredonda para cima o valor da função
document.getElementById('Função_Math.ceil').textContent = 'Math.ceil(4.2) = ' + d;

// var e = Math.floor(4.9) = arrendonda para baixo o valor da função
document.getElementById('Função_Math.Floor').textContent = 'Math.floor(4.9) = ' +  e;

// var f = Math.pow(3, 2) = Retorna a base elevada ao expoente (Potência)
document.getElementById('Função_Math.pow').textContent = 'Math.pow(3, 2) = ' + f;