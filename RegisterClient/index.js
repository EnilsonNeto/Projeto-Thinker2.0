
function registrar () {

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var cnpj = document.getElementById('cnpj').value;
    var senha = document.getElementById('senha').value;
    var csenha = document.getElementById('csenha').value;
    var checkbox = document.getElementById('termos_de_contrato');

    if(name == "" && email == "" && cnpj == "" && senha == "" && csenha == ""){
        alert('Campos não Preenchidos');
    }else if(!checkbox.checked){
        alert('Necessita aceitar os termos para continuar')
    }else{
        alert('Sucesso no cadastro');
        location.href = "../LoginAll/index.html";
    }
}