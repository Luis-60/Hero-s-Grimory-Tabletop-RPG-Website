const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const db = require('./server.js');

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

app.use(express.static('public'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/login.html', (req, res) => {
    res.sendFile(__dirname + '/login.html'); 
});

app.get('/cadastro.html', (req, res) => {
    res.sendFile(__dirname + '/cadastro.html'); 
});

app.get('/index.html', (req, res) => {
    res.sendFile(__dirname + '/index.html'); 
}); 
app.get('/raca.html', (req, res) => {
    res.sendFile(__dirname + '/raca.html'); 
}); 
app.get('/ficha.html', (req, res) => {
    res.sendFile(__dirname + '/ficha.html'); 
}); 
app.get('/usuario.html', (req, res) => {
    res.sendFile(__dirname + '/usuario.html'); 
}); 

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