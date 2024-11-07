var nome = sessionStorage.getItem("nomeMesmo");
var jafoi = sessionStorage.getItem("jafoiMesmo");
var pergunta1 = sessionStorage.getItem("Pergunta1Mesmo")
var pergunta2 = sessionStorage.getItem("Pergunta2Mesmo")
var pergunta3 = sessionStorage.getItem("Pergunta3Mesmo")
var usuario;
var email;
var senha;




function cadastrar() {

    var usuarioCad = ipt_usuario.value;
    var emailCad = ipt_email.value;
    var senhaCad = ipt_senha.value;

    usuario = usuarioCad;
    email = emailCad;
    senha = senhaCad;

    console.log(usuario)



    // aguardar();

    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo


    // Verificando se há algum campo em branco



    // Enviando o valor da nova input
    fetch("/usuarios/cadastrar", { //url chama função
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            nomeServer: nome,
            emailServer: email,
            senhaServer: senha,
            jafoiServer: jafoi,
            pergunta1Server: pergunta1,
            pergunta2Server: pergunta2,
            pergunta3Server: pergunta3,
            usuarioServer: usuario
            // senhaConfirmadaServer: confirmacaoSenha

        }),
    })
    console.log(jafoi)

    setTimeout(() => {
        window.location = "login.html";
    }, "2000");

}

function guardarIndex() {
    var nomeIndex = document.getElementById("input_nome").value;
    var jafoiIndex = slc_opcao.value;
    console.log(document.getElementById("input_nome"));
    console.log(nomeIndex);


    if (nomeIndex  != '' && jafoiIndex != '') {
        setTimeout(()=> location.href = 'http://localhost:3333/perguntas.html', 1000);
    }else{
        alert("Todos os campos devem ser preenchidos")
    }

    sessionStorage.setItem("nomeMesmo", nomeIndex);
    // alert(`${nomeIndex} armazenado no session storage`)
    nome = sessionStorage.getItem("nomeMesmo");

    sessionStorage.setItem("jafoiMesmo", jafoiIndex);
    // alert(`${jafoiIndex} armazenado no session storage`)
    jafoi = sessionStorage.getItem("jafoiMesmo");



}

function guardarPerguntas() {

    var Pergunta1Index = document.getElementById("ipt_pergunta1").value;
    var Pergunta2Index = document.getElementById("slc_respostas").value;
    var Pergunta3Index = document.getElementById("ipt_pergunta3").value;

    sessionStorage.setItem("Pergunta1Mesmo", Pergunta1Index);
    // alert(`${Pergunta1Index} armazenado no session storage`)
    pergunta1 = sessionStorage.getItem("Pergunta1Mesmo");

    sessionStorage.setItem("Pergunta2Mesmo", Pergunta2Index);
    // alert(`${Pergunta2Index} armazenado no session storage`)
    pergunta2 = sessionStorage.getItem("Pergunta2Mesmo");

    sessionStorage.setItem("Pergunta3Mesmo", Pergunta3Index);
    // alert(`${Pergunta3Index} armazenado no session storage`)
    pergunta3 = sessionStorage.getItem("Pergunta3Mesmo");


}

