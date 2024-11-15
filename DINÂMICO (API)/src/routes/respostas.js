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

router.get("/generoMaior", function (req, res) {
    respostasController.buscarGeneroMaior(req, res);
});

router.get("/generoMenor", function (req, res) {
    respostasController.buscarGeneroMenor(req, res);
});

router.get("/de_0_a_7", function (req, res) {
    respostasController.buscar_de_0_a_7(req, res);
});

router.get("/de_7_a_14", function (req, res) {
    respostasController.buscar_de_7_a_14(req, res);
});

router.get("/de_14_a_21", function (req, res) {
    respostasController.buscar_de_14_a_21(req, res);
});

router.get("/de_21_a_28", function (req, res) {
    respostasController.buscar_de_21_a_28(req, res);
});

router.get("/de_28_a_35", function (req, res) {
    respostasController.buscar_de_28_a_35(req, res);
});


router.get("/mais_de_35", function (req, res) {
    respostasController.buscar_mais_de_35(req, res);
});




module.exports = router;