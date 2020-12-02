// JavaScript source code
window.onload = function () {
    //nosso CEP; 13414155
    //var url = "https://viacep.com.br/ws/13414155/json/";

    //var request = new XMLHttpRequest();

    //request.onload = function () {
    //    if (request.status == 200) {
    //        atualizarCEP(request.responseText);
    //    }
    //};

    //request.open("GET", url);
    //request.send(null);
}

function atualizarCEP(cep) {
    var cepDiv = document.getElementById("cep");
    //var cep = JSON.parse(responseText);
    cepDiv.innerHTML = "Av. " + cep.logradouro + ", Bairro " + cep.bairro;
}