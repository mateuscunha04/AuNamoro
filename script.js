btcadela = document.getElementById("cadela");
btcao = document.getElementById("cao");
popup = document.getElementById("pop-up");
shadow = document.getElementById("shadow");
genero = "";

function fechaPopup(sexo){
    popup.style.display = 'none';
    shadow.style.display = 'none';
    genero = sexo;
    console.log(genero);
}