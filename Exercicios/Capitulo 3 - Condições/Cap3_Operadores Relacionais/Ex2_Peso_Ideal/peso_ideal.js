function idealHeight() {
    let inName = document.getElementById('inName').value;
    let male = document.getElementById("male").checked;
    let female = document.getElementById("female").checked;
    let height = String(document.getElementById("height").value);
    let output = document.getElementById("answerBox");

    let newheight = height.replace(',' , ".");
    let maleHeight = (Math.pow(newheight,2) * 22).toFixed(0);
    let femaleHeight = (Math.pow(newheight,2) * 21).toFixed(0);

    if ( inName == "" ) {
        output.textContent = "Insira um nome por favor!";
        document.getElementById('inName').focus();
    } else if ( male == false && female == false) {
        output.textContent = "Selecione o sexo por favor!";
    } else if ( newheight == "" ) {
        output.textContent = "Insira a altura por favor!";
        document.getElementById("height").focus();
    } else if ( male == true && female == false ) {
        output.textContent = inName + ": Seu peso ideal é " + maleHeight + "kg (Masculino)";
    } else if ( male == false && female == true ) {
        output.textContent = inName + ": Seu peso ideal é " + femaleHeight + "kg (Feminino)";
    } return

}

let calcular = document.getElementById("calcular");
calcular.addEventListener('click', idealHeight);

function cleanInputs () {
    document.getElementById("answerBox").textContent = "";
    document.getElementById('inName').value = "";
    document.getElementById("male").checked = false;
    document.getElementById("female").checked = false;
    document.getElementById("height").value = "";
    
}


let clean = document.getElementById("clean");
clean.addEventListener('click', cleanInputs);