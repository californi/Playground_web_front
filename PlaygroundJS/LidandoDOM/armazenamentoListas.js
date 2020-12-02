function salvar(item) {
    var listaarray = pegarArmazenamentoArray("minhaLista");
    listaarray.push(item);
    localStorage.setItem("minhaLista", JSON.stringify(listaarray));
}

function carregarLista() {
    var listaarray = pegarListaSalva();
    var ul = document.getElementById("minhaLista");
    if (listaarray != null) {
        for (var i = 0; i < listaarray.length; i++) {
            var li = document.createElement("li");
            li.innerHTML = listaarray[i];
            ul.appendChild(li);
        }
    }
}

function pegarListaSalva() {
    return pegarArmazenamentoArray("minhaLista");
}

function pegarArmazenamentoArray(key) {
    var listaarray = localStorage.getItem(key);
    if (listaarray == null || listaarray == "") {
        listaarray = new Array();
    }
    else {
        listaarray = JSON.parse(listaarray);
    }
    return listaarray;
}