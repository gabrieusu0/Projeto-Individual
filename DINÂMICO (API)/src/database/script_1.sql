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
    
SELECT
    cadastro.nome AS 'Nome Cliente',
    cadastro.ja_foi AS 'Já foi ao teatro?',
    pergunta.pergunta AS 'Pergunta',
    respostas.resposta AS 'Resposta'
FROM cadastro
JOIN respostas ON cadastro.idCadastro = respostas.fkCadastro
JOIN pergunta ON respostas.fkPergunta = pergunta.idPergunta
WHERE cadastro.ja_foi = 'nao';

SELECT * FROM cadastro;

SELECT nome, email FROM cadastro WHERE email = 'ana@example.com' AND senha = '123456';

-- EXEMPLO DE JOIN
SELECT 
	cadastro.nome as 'Nome',
    cadastro.ja_foi as 'Já foi ao teatro?',
	p.pergunta as 'Pergunta',
    r.resposta as 'Resposta'
		FROM pergunta as p
        JOIN respostas as r
			ON p.idPergunta = r.fkPergunta
		LEFT JOIN cadastro
			ON cadastro.idCadastro = r.fkCadastro;
	
SELECT * FROM pergunta join respostas on pergunta.idPergunta = respostas.fkPergunta;

SELECT COUNT(resposta) AS Resposta, nome 
FROM cadastro JOIN respostas
ON cadastro.idCadastro = respostas.fkCadastro
JOIN pergunta
ON pergunta.idPergunta = respostas.fkPergunta
GROUP BY pergunta;

SELECT * FROM respostas;

SELECT COUNT(DISTINCT(resposta)) as 'Respostas Distintas' FROM respostas;


-- KPI 1 - Gênero favorito 
SELECT 
	respostas.resposta as Resposta,
	COUNT(resposta) as 'Respostas' FROM respostas
    JOIN pergunta as p
    ON p.idPergunta = respostas.fkPergunta
    WHERE pergunta = 'QUAL SEU GÊNERO FAVORITO?'
	GROUP BY resposta
	ORDER BY respostas desc;
    
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
	ORDER BY respostas desc;
    
    
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