const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const db = require('./server.js');

const crypto = require('crypto')
const DADOS_CRIPTOGRAFAR = {
    algoritmo: 'aes-256-cbc', // Usando aes-256-cbc, que requer um IV
    segredo: 'chavesseguracom32caracteres!', // Uma chave de 32 bytes para aes-256
    tipo: 'hex'
};

const app = express();
const port = 3000;

const pool = new Pool ({
    user: 'postgres',
    host: '127.0.0.1',
    database:'Hero-Grimory',
    password: '31201013',
    port: 5432,
});

app.use(bodyParser.json());

app.post('/submit', async (req, res) => {
    const { nome, email, senha} = req.body;
    const iv = crypto.randomBytes(16);
    
    // Garantir que a chave tenha 32 bytes (256 bits) usando createHash
    const key = crypto.createHash('sha256').update(DADOS_CRIPTOGRAFAR.segredo).digest();

    // Crie o objeto Cipher com o algoritmo, chave e IV
    const cipher = crypto.createCipheriv(DADOS_CRIPTOGRAFAR.algoritmo, key, iv);
    let senhaCriptografada = cipher.update(senha, 'utf8', DADOS_CRIPTOGRAFAR.tipo);
    senhaCriptografada += cipher.final(DADOS_CRIPTOGRAFAR.tipo);

    // Combine o IV com a senha criptografada
    const senhaComIV = iv.toString(DADOS_CRIPTOGRAFAR.tipo) + ':' + senhaCriptografada;
    try{
        const result = await pool.query(
            'INSERT INTO Usuarios(Nome, Email, Senha) VALUES ($1, $2, $3)',
            [nome, email, senhaComIV]
        );
        res.status(200).send('Dados inseridos com sucesso');
    } catch(err){
        console.error('Erro ao inserir dados', err);
        res.status(500).send('Erro ao inserir dados');
    }
});
app.post('/login', async (req, res) => {
    const { nome, senha } = req.body;
    const iv = crypto.randomBytes(16);

    // Garantir que a chave tenha 32 bytes (256 bits) usando createHash
    const key = crypto.createHash('sha256').update(DADOS_CRIPTOGRAFAR.segredo).digest();

    // Crie o objeto Cipher com o algoritmo, chave e IV
    const cipher = crypto.createCipheriv(DADOS_CRIPTOGRAFAR.algoritmo, key, iv);
    let senhaCriptografada = cipher.update(senha, 'utf8', DADOS_CRIPTOGRAFAR.tipo);
    senhaCriptografada += cipher.final(DADOS_CRIPTOGRAFAR.tipo);

    // Combine o IV com a senha criptografada
    const senhaComIV = iv.toString(DADOS_CRIPTOGRAFAR.tipo) + ':' + senhaCriptografada;
 try{
const result = await pool.query(
    'SELECT * FROM Usuarios WHERE nome = $1 AND senha = $2',
    [nome, senhaComIV]
);
if (result.rows.length > 0) {
    const usuario = result.rows[0];

    if (usuario.senha === senha) {
        res.status(200).json({ message: 'Login realizado com sucesso'});
    } else {
        res.status(401).json({ message: 'Senha incorreta!'})
    }   
} else {
    res.status(404).json({ message: 'Usuário não encontrado!'});
}
 } catch (err) {
    console.error('Erro ao realizar login', err);
    res.status(500).send('Erro ao realizar login');
 } 
});
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
