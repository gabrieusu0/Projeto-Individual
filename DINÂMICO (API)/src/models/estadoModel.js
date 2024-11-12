var database = require("../database/config")

function estado() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
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