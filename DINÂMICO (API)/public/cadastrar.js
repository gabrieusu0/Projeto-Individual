var nome = sessionStorage.getItem("nomeMesmo");
var jafoi = sessionStorage.getItem("jafoiMesmo");
var pergunta1 = sessionStorage.getItem("Pergunta1Mesmo");
var pergunta2 = sessionStorage.getItem("Pergunta2Mesmo");
var pergunta3 = sessionStorage.getItem("Pergunta3Mesmo");
var pergunta4 = sessionStorage.getItem("Pergunta4Mesmo");
var pergunta5 = sessionStorage.getItem("Pergunta5Mesmo");
var pergunta6 = sessionStorage.getItem("Pergunta6Mesmo");
var fkPergunta1;
var fkPergunta2;
var fkPergunta3;
var usuario = sessionStorage.getItem("usuarioMesmo");
var email = sessionStorage.getItem("emailMesmo");
var senha = sessionStorage.getItem("senhaMesmo");
var eai = sessionStorage.getItem("eaiMesmo");





function guardarDados() {

    var usuarioCad = document.getElementById("ipt_usuario").value;
    var emailCad = document.getElementById("ipt_email").value;
    var senhaCad = document.getElementById("ipt_senha").value;


    sessionStorage.setItem("usuarioMesmo", usuarioCad);
    // alert(`${nomeIndex} armazenado no session storage`)
    usuario = sessionStorage.getItem("usuarioMesmo");

    sessionStorage.setItem("emailMesmo", emailCad);
    // alert(`${jafoiIndex} armazenado no session storage`)
    email = sessionStorage.getItem("emailMesmo");

    sessionStorage.setItem("senhaMesmo", senhaCad);
    // alert(`${senhaIndex} armazenado no session storage`)
    senha = sessionStorage.getItem("senhaMesmo");

    console.log(usuario)


    setTimeout(() => {
        window.location = "prefere.html";
        }, "2000");

}


function conhecer() {
    var eai1 = 'conhecer';
    sessionStorage.setItem("eaiMesmo", eai1);
    
    mensagem_erro.innerHTML =
        "Cadastro realizado com sucesso! Redirecionando para tela de Login..."

    setTimeout(() => {
        cadastrar();
    }, 3000);

}

function partipar() {
    var eai2 = 'participar';
    sessionStorage.setItem("eaiMesmo", eai2);
    
    mensagem_erro.innerHTML =
        "Cadastro realizado com sucesso! Redirecionando para tela de Login..."
        
    setTimeout(() => {
        cadastrar();
    }, 3000);

}


function cadastrar() {

        if (jafoi == 'sim') {
            fkPergunta1 = sessionStorage.getItem("fkPergunta1Mesmo");
            fkPergunta2 = sessionStorage.getItem("fkPergunta2Mesmo");
            fkPergunta3 = sessionStorage.getItem("fkPergunta3Mesmo");
        }else{
            fkPergunta1 = sessionStorage.getItem("fkPergunta4Mesmo");
            fkPergunta2 = sessionStorage.getItem("fkPergunta5Mesmo");
            fkPergunta3 = sessionStorage.getItem("fkPergunta6Mesmo");
        } 

        eai = sessionStorage.getItem("eaiMesmo");

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
            fkPergunta1Server: fkPergunta1,
            fkPergunta2Server: fkPergunta2,
            fkPergunta3Server: fkPergunta3,
            usuarioServer: usuario,
            condicaoServer: eai
            // senhaConfirmadaServer: confirmacaoSenha

        }),
    }).then(function (resposta){
        if (resposta.ok) {
            
            setTimeout(() => {
            window.location = "login.html";
            }, "2000");
        }else{
            alert(`Usuário ou email já cadastrados`)
        }
    })
    // .catch(function (resposta) {
    //     console.log(`#ERRO: ${resposta}`);
    //     alert(`#ERRO: ${resposta}, Usuário ou email já cadastrados`)
    //   });

   console.log({
    nomeServer: nome,
    emailServer: email,
    senhaServer: senha,
    jafoiServer: jafoi,
    pergunta1Server: pergunta1,
    pergunta2Server: pergunta2,
    pergunta3Server: pergunta3,
    fkPergunta1Server: fkPergunta1,
    fkPergunta2Server: fkPergunta2,
    fkPergunta3Server: fkPergunta3,
    usuarioServer: usuario,
    condicaoServer: eai
    });
    




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


function carregarPerguntas(){

    jafoi = sessionStorage.getItem("jafoiMesmo");

    if (jafoi == 'sim') {
        div_sim.style.display = "flex";
    }else{
        div_nao.style.display = "flex";
    }
}


function guardarPerguntas() {

        
        if (div_sim.style.display == "flex") {
            
            var fkPergunta1Index = 1;
            sessionStorage.setItem("fkPergunta1Mesmo", fkPergunta1Index);
            // fkPergunta1 = sessionStorage.getItem("fkPergunta1Mesmo");
            
            var fkPergunta2Index = 2;
            sessionStorage.setItem("fkPergunta2Mesmo", fkPergunta2Index);
            // fkPergunta2 = sessionStorage.getItem("fkPergunta2Mesmo");
            
            var fkPergunta3Index = 3;
            sessionStorage.setItem("fkPergunta3Mesmo", fkPergunta3Index);
            // fkPergunta3 = sessionStorage.getItem("fkPergunta3Mesmo");

            var Pergunta1Index = document.getElementById("ipt_pergunta1").value;
        var Pergunta2Index = document.getElementById("slc_respostas").value;
        var Pergunta3Index = document.getElementById("ipt_pergunta3").value;

        sessionStorage.setItem("Pergunta1Mesmo", Pergunta1Index);
        sessionStorage.setItem("Pergunta2Mesmo", Pergunta2Index);
        sessionStorage.setItem("Pergunta3Mesmo", Pergunta3Index);

        setTimeout(() => {
            window.location = "cadastro.html";
            }, "2000");
        

        
    }else{
        
        var fkPergunta4Index = 4;
        sessionStorage.setItem("fkPergunta4Mesmo", fkPergunta4Index);
        
        var fkPergunta5Index = 5;
        sessionStorage.setItem("fkPergunta5Mesmo", fkPergunta5Index);
        
        var fkPergunta6Index = 6;
        sessionStorage.setItem("fkPergunta6Mesmo", fkPergunta6Index);
        
        
        var Pergunta4Index = document.getElementById("slc_respostas4").value;
        var Pergunta5Index = document.getElementById("slc_respostas5").value;
        var Pergunta6Index = document.getElementById("slc_respostas6").value;
        
        sessionStorage.setItem("Pergunta1Mesmo", Pergunta4Index);
        pergunta1 = sessionStorage.getItem("Pergunta1Mesmo");
        
        sessionStorage.setItem("Pergunta2Mesmo", Pergunta5Index);
        pergunta2 = sessionStorage.getItem("Pergunta2Mesmo");

        sessionStorage.setItem("Pergunta3Mesmo", Pergunta6Index);
        pergunta3 = sessionStorage.getItem("Pergunta3Mesmo");

        setTimeout(() => {
            window.location = "cadastro.html";
            }, "2000");
        
    }
    
}




