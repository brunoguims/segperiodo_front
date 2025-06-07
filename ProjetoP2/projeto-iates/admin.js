$(document).ready(function () {
    $("#btnLogin").click(function () {
        var email = $("#email").val();
        var senha = $("#senha").val();

        var objLoginSenha = { email: email, senha: senha };

        if (validarUsuario(objLoginSenha)) {
            window.location.href = "mensagens.html";
        } else {
            $("#mensagemErro").show();
        }
    });
});