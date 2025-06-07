$(document).ready(function () {
    var mensagens = obterMensagens();

    mensagens.forEach(function (mensagem) {
        var linha = `
            <tr>
                <td>${mensagem.nome}</td>
                <td>${mensagem.email}</td>
                <td>${mensagem.mensagem}</td>
            </tr>
        `;
        $("#tabelaMensagens tbody").append(linha);
    });
});