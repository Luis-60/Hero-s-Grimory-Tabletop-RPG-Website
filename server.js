const express = require('express');
const bodyParser = require('body-parser');
const session = require("express-session");
const { Pool } = require('pg');
const db = require('./server.js');

const app = express();
const port = 3000;

;//sessao
app.use(session({
    secret: "Hero-Grimory",
    resave: true,
    saveUninitialized: true,
    cookie: {secure: false},
}));

// conexão ao banco de dados
const pool = new Pool ({
    user: 'postgres',
    host: '127.0.0.1',
    database:'postgres',
    password: '123',
    port: 5432,
});

app.use(bodyParser.json());

// rotas
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
app.get('/middle.html', (req, res) =>{
    res.sendFile(__dirname + '/middle.html')
});
app.get('/dados.html', (req, res) =>{
    res.sendFile(__dirname + '/dados.html')
});

// inserção no banco de dados
app.post('/fichauser', async (req, res) => {
    const id_Usuario = req.session.login
    const {
        Raca,
        SubRaca,
        Nome,
        FORCA,
        CONSTITUICAO,
        DESTREZA,
        INTELIGENCIA,
        SABEDORIA,
        CARISMA,
        ACROBACIA,
        ANIMAIS,
        ARCANISMO,
        ATLETISMO,
        ENGANACAO,
        FURTIVIDADE,
        HISTORIA,
        INTIMIDACAO,
        INTUICAO,
        INVESTIGACAO,
        MEDICINA,
        NATUREZA,
        PERCEPCAO,
        PERFORMANCE,
        PERSUASAO,
        PRESTIDIGITACAO,
        RELIGIAO,
        SOBREVIVENCIA
    } = req.body;

    // Verifica se todos os campos obrigatórios estão preenchidos
    if (
        !id_Usuario || !Raca || !SubRaca || !Nome ||
        !FORCA || !CONSTITUICAO || !DESTREZA ||
        !INTELIGENCIA || !SABEDORIA || !CARISMA ||
        !ACROBACIA || !ANIMAIS || !ARCANISMO || !ATLETISMO ||
        !ENGANACAO || !FURTIVIDADE || !HISTORIA ||
        !INTIMIDACAO || !INTUICAO || !INVESTIGACAO ||
        !MEDICINA || !NATUREZA || !PERCEPCAO ||
        !PERFORMANCE || !PERSUASAO || !PRESTIDIGITACAO ||
        !RELIGIAO || !SOBREVIVENCIA
    ) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios!' });
    }

    try {
        // Insere a ficha na tabela
        const query = `
            INSERT INTO Fichas (
                id_Usuario, Raca, SubRaca, Nome,
                FORCA, CONSTITUICAO, DESTREZA, INTELIGENCIA,
                SABEDORIA, CARISMA, ACROBACIA, ANIMAIS,
                ARCANISMO, ATLETISMO, ENGANACAO, FURTIVIDADE,
                HISTORIA, INTIMIDACAO, INTUICAO, INVESTIGACAO,
                MEDICINA, NATUREZA, PERCEPCAO, PERFORMANCE,
                PERSUASAO, PRESTIDIGITACAO, RELIGIAO, SOBREVIVENCIA
            ) VALUES (
                $1, $2, $3, $4,
                $5, $6, $7, $8,
                $9, $10, $11, $12,
                $13, $14, $15, $16,
                $17, $18, $19, $20,
                $21, $22, $23, $24,
                $25, $26, $27, $28
            )
        `;
        const values = [
            id_Usuario, Raca, SubRaca, Nome,
            FORCA, CONSTITUICAO, DESTREZA, INTELIGENCIA,
            SABEDORIA, CARISMA, ACROBACIA, ANIMAIS,
            ARCANISMO, ATLETISMO, ENGANACAO, FURTIVIDADE,
            HISTORIA, INTIMIDACAO, INTUICAO, INVESTIGACAO,
            MEDICINA, NATUREZA, PERCEPCAO, PERFORMANCE,
            PERSUASAO, PRESTIDIGITACAO, RELIGIAO, SOBREVIVENCIA
        ];

        await pool.query(query, values);
        res.status(200).send('Ficha criada com sucesso!');
    } catch (err) {
        console.error('Erro ao criar ficha:', err);
        res.status(500).send('Erro ao criar ficha');
    }
});

// Validação de login
app.post('/login', async (req, res) => {
    const { nome, senha } = req.body;

    try {
        const result = await pool.query(
            'SELECT id_usuario, nome, senha FROM Usuarios WHERE nome = $1',
            [nome]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Usuário não encontrado!' });
        }

        const usuario = result.rows[0];

        if (usuario.senha !== senha) {
            return res.status(401).json({ message: 'Senha incorreta!' });
        }

        // Se a senha estiver correta
        req.session.login = usuario.id_usuario;
        req.session.nomeUsuario = usuario.nome
        
        res.status(200).json({
            status: "sucesso",
            message: 'Login realizado com sucesso',
            usuario: {
                nome: usuario.nome,
                id: usuario.id_usuario
            }
        });
    } catch (err) {
        console.error('Erro ao realizar login', err);
        res.status(500).send('Erro ao realizar login');
    }
});
app.get('/verificar-sessao', (req, res) => {
    if (req.session.login) {
        res.status(200).json({ logado: true, nome: req.session.nomeUsuario });
    } else {
        res.status(200).json({ logado: false });
    }
});


// conferência do usuario
app.get('/usuario-nome', (req, res) => {
    if (!req.session.login) {
        return res.status(401).json({ message: 'Usuário não está logado' });
    }

    const nomeUsuario = req.session.name; // Acessando o nome do usuário da sessão
    res.status(200).json({ nome: nomeUsuario });
});

app.get('/perfil', async (req, res) =>{
    const idUsuario = req.session.login;

    try {
        const result = await pool.query(
            'select nome, email, senha from usuarios Where id_usuario = $1',
            [idUsuario]
        );
        const usuario = result.rows[0];
        const nome = usuario.nome;
        const email = usuario.email; 
        const senha = usuario.senha;
        
        

        res.status(200).json({
            status: "sucesso",
            message: 'Login realizado com sucesso',
            usuario: {
                nome: nome,
                email: email,
                senha: senha
            }
        
        });
    } catch (err) {
        console.error('Erro ao consultar', err);
        res.status(500).send('Erro ao consultar dados');
    }
})
app.get('/sair', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.log('Errei fui moleque')
            return res.status(500).json({ status: "erro", mensagem: "Erro ao encerrar a sessão" });
        }
        console.log('Acertemos garai')
        res.status(200).json({ status: "sucesso" });
    });
});


// Adicionar Raças


app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

module.exports = app;