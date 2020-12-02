//Scripts
var view = {
    mostrarMensagem: function (msg) {
        document.getElementById("principal").innerHTML = msg;
    },
    limparMensagem: function () {
        document.getElementById("principal").innerHTML = "";
    }
};

var model = {
    jogador: "Player 1",
    time: "contra-terrorista",
    municao: 4,
    fogo: function () {
        if (this.municao > 0)
            return true;
        else
            return false;
    },
    recarregar: function () {
        this.municao++;
        view.mostrarMensagem("Recarregado!, agora temos " + this.municao);
    }
};

var controller = {
    jogadores: 2,
    mudarCalibre: function (dado) {
        if (isNaN(dado))
            return "dados invalidos.";
        else
        {
            if (model.fogo()) {
                model.municao = dado;
                return "calibri alterado!";
            }
        }
    }
};
