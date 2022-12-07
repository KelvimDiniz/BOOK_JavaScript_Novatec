function revendaCar() {
    let veiculo = document.getElementById('veiculo');
    let preco = document.getElementById('preco');
    let output1 = document.getElementById('output1')
    let output2 = document.getElementById('output2')
    let output3 = document.getElementById('output3')


    let valorCar = Number(preco.value) * 0.5;
    let nameCar = veiculo.value;
    let parcela = Math.ceil(valorCar / 12);

    output1.textContent = 'Promoção ' + nameCar;
    output2.textContent = "Entrada de R$: " + valorCar.toFixed(2);
    output3.textContent = "+ 12x de R$: " + parcela.toFixed(2);
}
let button = document.getElementById('button-promocao');
button.addEventListener('click', revendaCar)