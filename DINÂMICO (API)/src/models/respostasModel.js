var database = require("../database/config");

function buscarEstadoMaior() {

    var instrucaoSql = `
    SELECT 
	respostas.resposta as Resposta,
	COUNT(resposta) as 'Respostas' FROM respostas
    JOIN pergunta as p
    ON p.idPergunta = respostas.fkPergunta
    WHERE pergunta = 'QUAL SEU ESTADO?'
	GROUP BY resposta
	ORDER BY respostas desc
    LIMIT 1;
    `;
  
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
  }

  function buscarEstadoMenor() {

    var instrucaoSql = `
    SELECT 
	respostas.resposta as Resposta,
	COUNT(resposta) as 'Respostas' FROM respostas
    JOIN pergunta as p
    ON p.idPergunta = respostas.fkPergunta
    WHERE pergunta = 'QUAL SEU ESTADO?'
	GROUP BY resposta
	ORDER BY respostas
    LIMIT 1;
    `;
  
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
  }

  module.exports = {
    buscarEstadoMaior,
    buscarEstadoMenor
  }