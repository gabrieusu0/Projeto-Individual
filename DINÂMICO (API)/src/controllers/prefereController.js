var usuarioModel = require("../models/prefereModel");

function inserirConhecer(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var conhecer = req.body.conhecerServer;

    console.log(req.body)


    // Faça as validações dos valores
    if (conhecer == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.inserirConhecer(conhecer)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


function inserirParticipar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var participar = req.body.participarServer;

    console.log(req.body)


    // Faça as validações dos valores
    if (participar == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.inserirParticipar(participar)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


module.exports = {
    inserirParticipar,
    inserirConhecer
}