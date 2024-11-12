var database = require("../database/config");

function buscarUltimasMedidas() {

    var instrucaoSql = `SELECT 
	respostas.resposta as Resposta,
	COUNT(resposta) as 'Respostas' FROM respostas
    JOIN pergunta as p
    ON p.idPergunta = respostas.fkPergunta
    WHERE pergunta = 'QUAL SEU ESTADO?'
	GROUP BY resposta
	ORDER BY respostas desc
    LIMIT 1;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idAquario) {

    var instrucaoSql = `SELECT 
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
                        fk_aquario 
                        FROM medida WHERE fk_aquario = ${idAquario} 
                    ORDER BY id DESC LIMIT 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
