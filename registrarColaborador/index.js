function registrar () {

    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var cpf = document.getElementById('cpf').value;
    var senha = document.getElementById('senha').value;
    var csenha = document.getElementById('csenha').value;
    var tel = document.getElementById('telefone').value;
    var checkbox = document.getElementById('termos_de_contrato');

    if(nome == "" && email == "" && cpf == "" && senha == "" && csenha == "" && tel == ""){
        alert('Campos não Preenchidos');
    }else if(!checkbox.checked){
        alert('Necessita aceitar os termos para continuar')
    }else{
        alert('Sucesso no cadastro');
        location.href = "../LoginAll/index.html";
    }
}