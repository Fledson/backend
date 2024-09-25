// importando
const { Client } = require("pg");

// cria o objeto de conexão
const client = new Client({
    host: "localhost",
    port: 5432,
    user: "root",
    password: "root",
    database: "mycontacts"
});

// iniciando conexão
client.connect();

// criando e exportando função para execução de comandos
exports.query = async(query, values) => {
    const { rows } = await client.query(query, values);
    return rows;
};
