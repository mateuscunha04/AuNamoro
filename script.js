let btcadela = document.getElementById("cadela");
let btcao = document.getElementById("cao");
let popup = document.getElementById("pop-up");
let shadow = document.getElementById("shadow");
let desc = document.getElementById("perfil");
let genero = "";

function fechaPopup(sexo){
    popup.style.display = 'none';
    shadow.style.display = 'none';
    genero = sexo;
    

    if(sexo == 2){
        desc.style.background = "#00BCCA";
        document.body.style.background = "#06B9A4";
        document.getElementById("raca").style.color = "black";
        document.getElementById("nome").style.color = "black";
        document.getElementById("idade").style.color = "black";
        console.log(genero);
    }
}

function match(){
    document.getElementById("deumatch").style.display = "flex";
}