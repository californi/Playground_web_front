// meuWorker.js
onmessage = pong;
function pong(evento) {
    if (evento.data == "ping") {
        importScripts("funcoes.js");
        postMessage(mostrarMe(evento.data));
    }
}