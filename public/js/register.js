function cadastrar() {
    var nomeVar = ipt_nome.value;
    var distroVar = slc_distro.value;
    var emailVar = ipt_email.value;
    var senhaVar = ipt_senha.value;
    var confirmacaoSenhaVar = ipt_confirmacao.value;
    
    if (nomeVar == "" || emailVar == "" || senhaVar == "" || confirmacaoSenhaVar == "") {
        window.alert("Preencha todos os campos para prosseguir!");
        return false;
    }else if (distroVar == "0"){
        alert('Selecione alguma opção!')
    }else if (emailVar.indexOf("@") == -1 || emailVar.indexOf(".com") == -1) {
        window.alert("Ops, e-mail inválido! Verifique e tente novamente.");
        return false;
    }else if (senhaVar != confirmacaoSenhaVar) {
        window.alert("As senhas inseridas devem ser iguais para prosseguir!");
        return false;
    }else{
        fetch("/usuarios/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nomeServer: nomeVar,
                distroServer: distroVar,
                emailServer: emailVar,
                senhaServer: senhaVar
            })
        }).then(function (resposta) {
    
            console.log("resposta: ", resposta);
    
            if (resposta.ok) {
                window.alert("Cadastro realizado com sucesso!");
                window.location = "login.html";
                limparFormulario();
            } else {
                alert('Este email já está cadastrado!')
                throw ("Houve um erro ao tentar realizar o cadastro!");
            }
        }).catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });
    
        return false;
    }
}