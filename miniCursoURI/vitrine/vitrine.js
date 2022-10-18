// JavaScript source code
function adicionarOrcamento(produto) {
    document.querySelector("#textaraMensagem").value += produto;
}

function enviarOrcamento() {
    const nome = document.querySelector("#inputNome").value;
    const orcamento = document.querySelector("#textaraMensagem").value;

    const mensagem = orcamento.replace(/(\r\n|\n|\r)/gm, "%0A%0D");
    /*substituir o numero do link abaixo "000000000" para um numero de celular que existe*/
    window.open('https://wa.me/5554000000000?text=' + 'Meu nome e: ' + nome + '. Gostaria de orcar os seguintes itens: %0A%0D' + mensagem);
}