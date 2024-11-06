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
);

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

-- Inserindo usuários
INSERT INTO cadastro (ja_foi, nome, usuario, email, senha, oque_procura) VALUES
    ('sim', 'Ana Silva', 'ana.s', 'ana@example.com', '123456', 'participar'),
    ('nao', 'Bruno Costa', 'bruno.c', 'bruno@example.com', 'abcdef', 'conhecer'),
    ('sim', 'Carla Dias', 'carla.d', 'carla@example.com', 'senha789', 'conhecer'),
    ('nao', 'Diego Santos', 'diego.s', 'diego@example.com', 'senha123', 'participar');
    
SELECT * FROM cadastro;

-- Inserindo perguntas com base em 'ja_foi' ao teatro
INSERT INTO pergunta (pergunta, isTeatro) VALUES
    ('Qual foi a sua experiência mais memorável no teatro?', 'sim'),
    ('Quantas peças de teatro você assistiu?', 'sim'),
    ('Quais tipos de peças você prefere assistir?', 'sim'),
    ('O que desperta seu interesse em conhecer o teatro?', 'nao'),
    ('Você já assistiu alguma peça teatral em vídeo?', 'nao'),
    ('Qual tipo de evento cultural mais te atrai?', 'nao');

-- Inserindo respostas para os usuários
INSERT INTO respostas (fkPergunta, fkCadastro, resposta) VALUES
    (1, 1, 'A peça "Hamlet" foi incrível!'),
    (2, 1, 'Assisti umas 5 peças'),
    (3, 1, 'Prefiro dramas e comédias'),
    (4, 2, 'Conhecer o teatro pela sua riqueza cultural'),
    (5, 2, 'Sim, assisti algumas peças online'),
    (6, 2, 'Gosto muito de shows e exposições de arte'),
    (1, 3, 'A peça "O Auto da Compadecida" foi memorável'),
    (2, 3, 'Acho que umas 10 vezes'),
    (3, 3, 'Gosto de peças clássicas'),
    (4, 4, 'Tenho interesse em participar de peças teatrais'),
    (6, 4, 'Aprecio exposições culturais e concertos de música clássica');
    
SELECT
    cadastro.nome AS 'Nome Cliente',
    cadastro.ja_foi AS 'Já foi ao teatro?',
    pergunta.pergunta AS 'Pergunta',
    respostas.resposta AS 'Resposta'
FROM cadastro
JOIN respostas ON cadastro.idCadastro = respostas.fkCadastro
JOIN pergunta ON respostas.fkPergunta = pergunta.idPergunta
WHERE cadastro.ja_foi = 'nao';




