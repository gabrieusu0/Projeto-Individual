var express = require("express");
var router = express.Router();

var prefereController = require("../controllers/prefereController");

router.put("/conhecer", function (req, res) {
    prefereController.inserirConhecer(req, res);
});

router.put("/participar", function (req, res) {
    prefereController.inserirParticipar(req, res);
});

module.exports = router;