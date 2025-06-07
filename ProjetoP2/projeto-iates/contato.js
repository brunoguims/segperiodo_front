$(document).ready(function () {
    $("#btnEnviarMensagem").click(function () {
        var nome = $("#nome").text();
        var email = $("#email").text();
        var mensagemTexto = $("#mensagem").text();

        var mensagem = {
            nome: nome,
            email: email,
            mensagem: mensagemTexto
        };

        inserirMensagem(mensagem);
        alert("Mensagem enviada com sucesso!");
    });
});