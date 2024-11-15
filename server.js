const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const db = require('./server.js');
const session = require("express-session")
// const flash = require("connect-flash")

const app = express();
const port = 3000;

const pool = new Pool ({
    user: 'postgres',
    host: '127.0.0.1',
    database:'postgres', // Hero-Grimory
    password: '123',    // 31201013
    port: 5432,
});

// Sessao
app.use(session({
    secret: "Hero-Grimory",
    resave: true,
    saveUninitialized: true,
    cookie: {secure: false},
}));

app.get("/", function(req, res){
    req.session.name = "Hero"
    return res.send("Session-Set")
});

app.get("/session", function(req, res) {
    var name = req.session.name
    return res.send(name)

    });

app.use(bodyParser.json());

app.post('/submit', async (req, res) => {
    const { nome, email, senha} = req.body;
    try{
        const result = await pool.query(
            'INSERT INTO Usuarios(Nome, Email, Senha) VALUES ($1, $2, $3)',
            [nome, email, senha]

        );
        res.status(200).send('Dados inseridos com sucesso');
    } catch(err){
        console.error('Erro ao inserir dados', err);
        res.status(500).send('Erro ao inserir dados');
    }
});
app.post('/login', async (req, res) => {
 const { nome, senha } = req.body;
 try{
const result = await pool.query(
    'SELECT * FROM Usuarios WHERE nome = $1 AND senha = $2',
    [nome, senha]
);
if (result.rows.length > 0) {
    const usuario = result.rows[0];
    var confirmacao = false;

    if (usuario.senha === senha) {
        res.status(200).json({ message: 'Login realizado com sucesso'});
        confirmacao = true;
        module.exports = confirmacao
    } else {
        res.status(401).json({ message: 'Senha incorreta!'})
        confirmacao = false;
        module.exports = confirmacao
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
