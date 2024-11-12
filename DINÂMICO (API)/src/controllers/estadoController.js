var estadoModel = require("../models/estadoModel");

function estado() {


    estadoModel.estado()
            .then(
                function (estadoAutenticar) {
                    console.log(`\nResultados encontrados: ${estadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(estadoAutenticar)}`); // transforma JSON em String

                    if (estadoAutenticar.length == 1) {
                        console.log(estadoAutenticar);
                    } else if (estadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
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
        estado
    }
