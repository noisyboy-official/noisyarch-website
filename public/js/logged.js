var nome;

function verify_login(){
    nome = sessionStorage.NOME_USUARIO;
    if(nome == undefined){
        window.location = '../login.html'
    }else{
        spn_name.innerHTML = nome;
    }
}

function logout(){
    sessionStorage.clear();
    nome = undefined;
    window.location = '../login.html'
}