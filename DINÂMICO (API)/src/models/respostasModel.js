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

function buscarGeneroMaior() {

  var instrucaoSql = `
SELECT 
	respostas.resposta as Resposta,
	COUNT(resposta) as 'Respostas' FROM respostas
    JOIN pergunta as p
    ON p.idPergunta = respostas.fkPergunta
    WHERE pergunta = 'QUAL SEU GÊNERO FAVORITO?'
	GROUP BY resposta
	ORDER BY respostas desc
    LIMIT 1;
    `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarGeneroMenor() {

  var instrucaoSql = `
SELECT 
	respostas.resposta as Resposta,
	COUNT(resposta) as 'Respostas' FROM respostas
    JOIN pergunta as p
    ON p.idPergunta = respostas.fkPergunta
    WHERE pergunta = 'QUAL SEU GÊNERO FAVORITO?'
	GROUP BY resposta
	ORDER BY respostas 
    LIMIT 1;
    `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


function buscar_de_0_a_7() {

  var instrucaoSql = `
SELECT 
    COUNT(respostas.resposta) AS 'Respostas'
FROM respostas
JOIN pergunta AS p ON p.idPergunta = respostas.fkPergunta
WHERE p.pergunta = 'QUANTOS ANOS TINHA QUANDO ASSISTIU PELA PRIMEIRA VEZ?' 
  AND respostas.resposta <= 7;
    `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscar_de_7_a_14() {

  var instrucaoSql = `
    SELECT 
    COUNT(respostas.resposta) AS 'Respostas'
FROM respostas
JOIN pergunta AS p ON p.idPergunta = respostas.fkPergunta
WHERE p.pergunta = 'QUANTOS ANOS TINHA QUANDO ASSISTIU PELA PRIMEIRA VEZ?' 
	AND respostas.resposta > 7 and respostas.resposta <= 14;
    `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscar_de_14_a_21() {

  var instrucaoSql = `
SELECT 
    COUNT(respostas.resposta) AS 'Respostas'
FROM respostas
JOIN pergunta AS p ON p.idPergunta = respostas.fkPergunta
WHERE p.pergunta = 'QUANTOS ANOS TINHA QUANDO ASSISTIU PELA PRIMEIRA VEZ?' 
	AND respostas.resposta > 14 and respostas.resposta <= 21;
    `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscar_de_21_a_28() {

  var instrucaoSql = `
SELECT 
    COUNT(respostas.resposta) AS 'Respostas'
FROM respostas
JOIN pergunta AS p ON p.idPergunta = respostas.fkPergunta
WHERE p.pergunta = 'QUANTOS ANOS TINHA QUANDO ASSISTIU PELA PRIMEIRA VEZ?' 
	AND respostas.resposta > 21 and respostas.resposta <= 28;
    `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscar_de_28_a_35() {

  var instrucaoSql = `
SELECT 
    COUNT(respostas.resposta) AS 'Respostas'
FROM respostas
JOIN pergunta AS p ON p.idPergunta = respostas.fkPergunta
WHERE p.pergunta = 'QUANTOS ANOS TINHA QUANDO ASSISTIU PELA PRIMEIRA VEZ?' 
	AND respostas.resposta > 28 and respostas.resposta <= 35;
    `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscar_mais_de_35() {

  var instrucaoSql = `
SELECT 
    COUNT(respostas.resposta) AS 'Respostas'
FROM respostas
JOIN pergunta AS p ON p.idPergunta = respostas.fkPergunta
WHERE p.pergunta = 'QUANTOS ANOS TINHA QUANDO ASSISTIU PELA PRIMEIRA VEZ?' 
  AND respostas.resposta > 35;
    `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}



function buscar_localMais() {

  var instrucaoSql = `
SELECT 
	respostas.resposta as Resposta,
	COUNT(resposta) as 'Respostas' FROM respostas
    JOIN pergunta as p
    ON p.idPergunta = respostas.fkPergunta
    WHERE pergunta = 'QUAL TIPO DE EVENTO CULTURAL MAIS DE INTERESSA?'
	GROUP BY resposta
	ORDER BY respostas desc
    LIMIT 1;
    `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


function buscar_localMenos() {

  var instrucaoSql = `
SELECT 
	respostas.resposta as Resposta,
	COUNT(resposta) as 'Respostas' FROM respostas
    JOIN pergunta as p
    ON p.idPergunta = respostas.fkPergunta
    WHERE pergunta = 'QUAL TIPO DE EVENTO CULTURAL MAIS DE INTERESSA?'
	GROUP BY resposta
	ORDER BY respostas 
    LIMIT 1;
    `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscar_conhecer() {

  var instrucaoSql = `
 SELECT 
	oque_procura as 'O que procura?',
	COUNT(oque_procura) as 'Respostas' FROM cadastro
    WHERE oque_procura = 'conhecer';
    `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscar_participar() {

  var instrucaoSql = `
 SELECT 
	oque_procura as 'O que procura?',
	COUNT(oque_procura) as 'Respostas' FROM cadastro
    WHERE oque_procura = 'participar';
    `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscar_motivo() {

  var instrucaoSql = `
SELECT 
	respostas.resposta as Resposta,
	COUNT(resposta) as 'Respostas' FROM respostas
    JOIN pergunta as p
    ON p.idPergunta = respostas.fkPergunta
    WHERE pergunta = 'QUAL MOTIVO PARA VOCÊ NUNCA TER IDO?'
	GROUP BY resposta
	ORDER BY respostas desc
    LIMIT 2;
    `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  buscarEstadoMaior,
  buscarEstadoMenor,
  buscarGeneroMenor,
  buscarGeneroMaior,
  buscar_de_0_a_7,
  buscar_de_7_a_14,
  buscar_de_14_a_21,
  buscar_de_21_a_28,
  buscar_de_28_a_35,
  buscar_mais_de_35,
  buscar_localMais,
  buscar_localMenos,
  buscar_conhecer,
  buscar_participar,
  buscar_motivo
}