function situation () {
    let inName = document.getElementById('inName').value;
    let inScore1 = Number(document.getElementById('nota1').value);
    let inScore2 = Number(document.getElementById('nota2').value);

    let outMedia = document.getElementById('outMedia');
    let outSituation = document.getElementById('outSituação');

    let media = Math.floor((inScore1 + inScore2) / 2);

    if (media < 7) {
        outMedia.textContent = "Média das Notas: " + media;
        outSituation.textContent = 'Que pena ' + inName + "! Você foi reprovado.";
        document.getElementById("outSituação").className = "Reprovado";
    } else {
        outMedia.textContent = "Média das Notas: " + media;
        outSituation.textContent = 'Parabéns ' + inName + "! Você foi aprovado.";
        document.getElementById("outSituação").className = "Aprovado";
    }
}
let buttonSituation = document.getElementById('situação');
buttonSituation.addEventListener('click', situation);