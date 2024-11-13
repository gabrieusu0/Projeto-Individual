var respostasModel = require("../models/respostasModel");

function buscarEstadoMaior(req, res) {

    respostasModel.buscarEstadoMaior()
    .then(
        function (resultado) {
            res.status(200).json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
    );
}

function buscarEstadoMenor(req, res) {

    respostasModel.buscarEstadoMenor()
    .then(
        function (resultado) {
            res.status(200).json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
    );
}

module.exports = {
    buscarEstadoMaior,
    buscarEstadoMenor
}