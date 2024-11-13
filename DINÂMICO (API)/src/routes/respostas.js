var express = require("express");
var router = express.Router();

var respostasController = require("../controllers/respostasController");

//Recebendo os dados do html e direcionando para a função cadastrar de respostasController.js

router.get("/estadoMaior", function (req, res) {
    respostasController.buscarEstadoMaior(req, res);
});

router.get("/estadoMenor", function (req, res) {
    respostasController.buscarEstadoMenor(req, res);
});

module.exports = router;