CREATE DATABASE elbi;
USE elbi;

CREATE TABLE cadastro (
    idCadastro INT AUTO_INCREMENT PRIMARY KEY,
    ja_foi VARCHAR(45),
    nome VARCHAR(45),
    usuario VARCHAR(45),
    email VARCHAR(45),
    senha VARCHAR(45),
    oque_procura VARCHAR(45),
    CHECK (ja_foi IN ('sim', 'nao')),
    CHECK (oque_procura IN ('conhecer', 'participar'))
);SELECT COUNT(idCadastro) FROM cadastro;

ALTER TABLE cadastro 
MODIFY COLUMN usuario VARCHAR(45) UNIQUE;

ALTER TABLE cadastro 
MODIFY COLUMN email VARCHAR(45) UNIQUE;

CREATE TABLE pergunta (
    idPergunta INT AUTO_INCREMENT PRIMARY KEY,
    pergunta VARCHAR(300),
    isTeatro VARCHAR(45),
    CHECK (isTeatro IN ('sim', 'nao'))
);

CREATE TABLE respostas (
	idResposta INT AUTO_INCREMENT,
    fkPergunta INT,
    fkCadastro INT, 
	CONSTRAINT pkComposta PRIMARY KEY (idResposta, fkPergunta, fkCadastro),
    resposta VARCHAR(300),
    CONSTRAINT chkCliente FOREIGN KEY (fkPergunta)REFERENCES pergunta(idPergunta),
	CONSTRAINT chkPessoa FOREIGN KEY (fkCadastro)REFERENCES cadastro(idCadastro)
); 

-- Inserindo perguntas com base em 'ja_foi' ao teatro
INSERT INTO pergunta (pergunta, isTeatro) VALUES
    ('QUANTOS ANOS TINHA QUANDO ASSISTIU PELA PRIMEIRA VEZ?', 'sim'),
    ('QUAL SEU GÊNERO FAVORITO?', 'sim'),
    ('QUANTAS VEZES FOI?', 'sim'),
    ('QUAL SEU ESTADO?', 'nao'),
    ('QUAL TIPO DE EVENTO CULTURAL MAIS DE INTERESSA?', 'nao'),
    ('QUAL MOTIVO PARA VOCÊ NUNCA TER IDO?', 'nao');
    
 SELECT * FROM cadastro;
 
 -- UPDATE cadastro SET oque_procura = '${conhecer}' WHERE idCadastro = LAST_INSERT_ID();
 
 
 -- KPI QUEM MAIS VAI
 SELECT 
	respostas.resposta as Anos,
	COUNT(resposta) as 'Respostas' FROM respostas
    JOIN pergunta as p
    ON p.idPergunta = respostas.fkPergunta
    WHERE pergunta = 'QUANTAS VEZES FOI?'
	GROUP BY resposta
	ORDER BY respostas desc
    LIMIT 1;
 
    
-- KPI 1 - IDADE DE QUEM FOI A PRIMEIRA VEZ 0 até 7
SELECT 
	respostas.resposta as Anos,
	COUNT(resposta) as 'Respostas' FROM respostas
    JOIN pergunta as p
    ON p.idPergunta = respostas.fkPergunta
    WHERE pergunta = 'QUANTOS ANOS TINHA QUANDO ASSISTIU PELA PRIMEIRA VEZ?' AND respostas.resposta <= 7
	GROUP BY resposta
	ORDER BY respostas desc;
    
SELECT 
    COUNT(respostas.resposta) AS 'Total de Respostas'
FROM respostas
JOIN pergunta AS p ON p.idPergunta = respostas.fkPergunta
WHERE p.pergunta = 'QUANTOS ANOS TINHA QUANDO ASSISTIU PELA PRIMEIRA VEZ?' 
  AND respostas.resposta <= 7;
    
-- KPI 1 - IDADE DE QUEM FOI A PRIMEIRA VEZ 7 até 14
SELECT 
	respostas.resposta as Anos,
	COUNT(resposta) as 'Respostas' FROM respostas
    JOIN pergunta as p
    ON p.idPergunta = respostas.fkPergunta
    WHERE pergunta = 'QUANTOS ANOS TINHA QUANDO ASSISTIU PELA PRIMEIRA VEZ?' AND respostas.resposta > 7 and respostas.resposta <= 14
	GROUP BY resposta
	ORDER BY respostas desc;
    
    SELECT 
    COUNT(respostas.resposta) AS 'Total de Respostas'
FROM respostas
JOIN pergunta AS p ON p.idPergunta = respostas.fkPergunta
WHERE p.pergunta = 'QUANTOS ANOS TINHA QUANDO ASSISTIU PELA PRIMEIRA VEZ?' 
	AND respostas.resposta > 7 and respostas.resposta <= 14;
    
-- KPI 1 - IDADE DE QUEM FOI A PRIMEIRA VEZ 14 até 21
SELECT 
	respostas.resposta as Anos,
	COUNT(resposta) as 'Respostas' FROM respostas
    JOIN pergunta as p
    ON p.idPergunta = respostas.fkPergunta
    WHERE pergunta = 'QUANTOS ANOS TINHA QUANDO ASSISTIU PELA PRIMEIRA VEZ?' AND respostas.resposta > 14 and respostas.resposta <= 21
	GROUP BY resposta
	ORDER BY respostas desc;
    
SELECT 
    COUNT(respostas.resposta) AS 'Total de Respostas'
FROM respostas
JOIN pergunta AS p ON p.idPergunta = respostas.fkPergunta
WHERE p.pergunta = 'QUANTOS ANOS TINHA QUANDO ASSISTIU PELA PRIMEIRA VEZ?' 
	AND respostas.resposta > 14 and respostas.resposta <= 21;
    
-- KPI 1 - IDADE DE QUEM FOI A PRIMEIRA VEZ 21 até 28
SELECT 
	respostas.resposta as Anos,
	COUNT(resposta) as 'Respostas' FROM respostas
    JOIN pergunta as p
    ON p.idPergunta = respostas.fkPergunta
    WHERE pergunta = 'QUANTOS ANOS TINHA QUANDO ASSISTIU PELA PRIMEIRA VEZ?' AND respostas.resposta > 21 and respostas.resposta <= 28
	GROUP BY resposta
	ORDER BY respostas desc;
    
SELECT 
    COUNT(respostas.resposta) AS 'Total de Respostas'
FROM respostas
JOIN pergunta AS p ON p.idPergunta = respostas.fkPergunta
WHERE p.pergunta = 'QUANTOS ANOS TINHA QUANDO ASSISTIU PELA PRIMEIRA VEZ?' 
	AND respostas.resposta > 21 and respostas.resposta <= 28;
    
-- KPI 1 - IDADE DE QUEM FOI A PRIMEIRA VEZ 28 até 35
SELECT 
	respostas.resposta as Anos,
	COUNT(resposta) as 'Respostas' FROM respostas
    JOIN pergunta as p
    ON p.idPergunta = respostas.fkPergunta
    WHERE pergunta = 'QUANTOS ANOS TINHA QUANDO ASSISTIU PELA PRIMEIRA VEZ?' AND respostas.resposta > 28 and respostas.resposta <= 35
	GROUP BY resposta
	ORDER BY respostas desc;
    
SELECT 
    COUNT(respostas.resposta) AS 'Total de Respostas'
FROM respostas
JOIN pergunta AS p ON p.idPergunta = respostas.fkPergunta
WHERE p.pergunta = 'QUANTOS ANOS TINHA QUANDO ASSISTIU PELA PRIMEIRA VEZ?' 
  AND respostas.resposta > 28 and respostas.resposta <= 35;
  
    
-- KPI 1 - IDADE DE QUEM FOI A PRIMEIRA VEZ 28 até 35
SELECT 
	respostas.resposta as Anos,
	COUNT(resposta) as 'Respostas' FROM respostas
    JOIN pergunta as p
    ON p.idPergunta = respostas.fkPergunta
    WHERE pergunta = 'QUANTOS ANOS TINHA QUANDO ASSISTIU PELA PRIMEIRA VEZ?' AND respostas.resposta > 35
	GROUP BY resposta
	ORDER BY respostas desc;

SELECT 
    COUNT(respostas.resposta) AS 'Total de Respostas'
FROM respostas
JOIN pergunta AS p ON p.idPergunta = respostas.fkPergunta
WHERE p.pergunta = 'QUANTOS ANOS TINHA QUANDO ASSISTIU PELA PRIMEIRA VEZ?' 
  AND respostas.resposta > 35;
    

    

-- KPI 1 - Gênero favorito 
SELECT 
	respostas.resposta as Resposta,
	COUNT(resposta) as 'Respostas' FROM respostas
    JOIN pergunta as p
    ON p.idPergunta = respostas.fkPergunta
    WHERE pergunta = 'QUAL SEU GÊNERO FAVORITO?'
	GROUP BY resposta
	ORDER BY respostas desc
    LIMIT 1;
    
-- KPI 2 - MOTIVO DE QUEM NÃO VAI 
SELECT 
	respostas.resposta as Resposta,
	COUNT(resposta) as 'Respostas' FROM respostas
    JOIN pergunta as p
    ON p.idPergunta = respostas.fkPergunta
    WHERE pergunta = 'QUAL MOTIVO PARA VOCÊ NUNCA TER IDO?'
	GROUP BY resposta
	ORDER BY respostas desc;
    
-- KPI 2 - QUAL TIPO DE EVENTO CULTURAL MAIS DE INTERESSA
SELECT 
	respostas.resposta as Resposta,
	COUNT(resposta) as 'Respostas' FROM respostas
    JOIN pergunta as p
    ON p.idPergunta = respostas.fkPergunta
    WHERE pergunta = 'QUAL TIPO DE EVENTO CULTURAL MAIS DE INTERESSA?'
	GROUP BY resposta
	ORDER BY respostas desc
    LIMIT 1;
    
SELECT 
	respostas.resposta as Resposta,
	COUNT(resposta) as 'Respostas' FROM respostas
    JOIN pergunta as p
    ON p.idPergunta = respostas.fkPergunta
    WHERE pergunta = 'QUAL TIPO DE EVENTO CULTURAL MAIS DE INTERESSA?'
	GROUP BY resposta
	ORDER BY respostas 
    LIMIT 1;
    
    
-- KPI 3 - QUANTOS JÁ FORAM OU NÃO AO TEATRO 
SELECT 
	cadastro.ja_foi as 'Já foi?',
	COUNT(ja_foi) as 'Contador' FROM cadastro
	GROUP BY ja_foi;


-- pessoas totais = 111
-- foram: 32
-- n foram: 79

SELECT 
	(COUNT(ja_foi)) as 'Contador' FROM cadastro;
    
-- KPI 4 - Estado que mais frequenta
SELECT 
	respostas.resposta as Resposta,
	COUNT(resposta) as 'Respostas' FROM respostas
    JOIN pergunta as p
    ON p.idPergunta = respostas.fkPergunta
    WHERE pergunta = 'QUAL SEU ESTADO?'
	GROUP BY resposta
	ORDER BY respostas desc;
    
-- ESTADO QUE MAIS FREQUENTA
    
SELECT 
	respostas.resposta as Resposta,
	COUNT(resposta) as 'Respostas' FROM respostas
    JOIN pergunta as p
    ON p.idPergunta = respostas.fkPergunta
    WHERE pergunta = 'QUAL SEU ESTADO?'
	GROUP BY resposta
	ORDER BY respostas desc
    LIMIT 1;
    
-- ESTADO QUE MENOS FREQUENTA
    
SELECT 
	respostas.resposta as Resposta,
	COUNT(resposta) as 'Respostas' FROM respostas
    JOIN pergunta as p
    ON p.idPergunta = respostas.fkPergunta
    WHERE pergunta = 'QUAL SEU ESTADO?'
	GROUP BY resposta
	ORDER BY respostas
    LIMIT 1;