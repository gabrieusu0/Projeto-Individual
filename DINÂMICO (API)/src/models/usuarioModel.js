var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
        SELECT nome, email FROM cadastro WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, email, senha, usuario, jafoi, pergunta1, pergunta2, pergunta3, fkPergunta1, fkPergunta2, fkPergunta3, condicao) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.2
    var instrucaoSql = `
        INSERT INTO cadastro (nome, email, senha, usuario, ja_foi, oque_procura) VALUES ('${nome}', '${email}', '${senha}', '${usuario}', '${jafoi}', '${condicao}');
        INSERT INTO respostas (resposta, fkPergunta, fkCadastro) VALUES ('${pergunta1}', ${fkPergunta1}, LAST_INSERT_ID()), ('${pergunta2}', ${fkPergunta2}, LAST_INSERT_ID()), ('${pergunta3}', ${fkPergunta3}, LAST_INSERT_ID()); 

    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar
};