function deepin(){
    window.open = ('./assets/img/deepin-arch.png', '_blank')
}

function verify_login(){
    var nome = sessionStorage.NOME_USUARIO;
    if(nome == undefined){
        window.location = '../login.html'
    }else{
        spn_name.innerHTML = nome;
    }
}