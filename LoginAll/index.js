function logar () {

    var email = document.getElementById('e-mail').value;
    var senha = document.getElementById('senha').value;

    if(email == "" && senha == ""){
        alert('Campos não Preenchidos');
    }else{
        alert('Sucesso na autenticação');
        location.href = "../landing/index.html";
    }
}