const request = require('supertest');
const app = require('./server');  // Importando o app, não o servidor
const http = require('http');

// Variáveis para controlar o servidor
let server;

beforeAll(async () => {
    // Inicia o servidor antes dos testes
    server = http.createServer(app);
    await new Promise(resolve => server.listen(3000, resolve)); // Aguarda o servidor começar a escutar na porta 3000
});

afterAll(async () => {
  // Encerra o servidor após os testes
  await new Promise(resolve => server.close(resolve));
});

// Testes para o endpoint POST /submit (Cadastro)
describe('POST /submit', () => {
  it('Deve responder com sucesso ao enviar dados válidos', async () => {
    const response = await request(app)
      .post('/submit')
      .send({
        nome: 'Teste',
        email: 'teste@exemplo.com',
        senha: 'senha123'
      })
      .set('Content-Type', 'application/json');

    expect(response.status).toBe(200);
    expect(response.text).toBe('Dados inseridos com sucesso');
  });
});

// Testes para o endpoint POST /login
describe('POST /login', () => {
  it('Deve fazer login com sucesso com credenciais corretas', async () => {
    const response = await request(app)
      .post('/login')
      .send({
        nome: 'Teste',
        senha: 'senha123'
      })
      .set('Content-Type', 'application/json');

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Login realizado com sucesso');
  });

  it('Deve retornar erro de senha incorreta', async () => {
    const response = await request(app)
      .post('/login')
      .send({
        nome: 'Teste',
        senha: 'senhaErrada'  // Senha incorreta
      })
      .set('Content-Type', 'application/json');

    expect(response.status).toBe(401);
    expect(response.body.message).toBe('Senha incorreta!');
  });

  it('Deve retornar erro se o usuário não for encontrado', async () => {
    const response = await request(app)
      .post('/login')
      .send({
        nome: 'UsuarioInexistente',
        senha: 'senha123'
      })
      .set('Content-Type', 'application/json');

    expect(response.status).toBe(404);
    expect(response.body.message).toBe('Usuário não encontrado!');
  });
});

// Teste para verificar o usuário logado
describe('GET /usuario-logado', () => {
  it('Deve retornar erro se o usuário não estiver logado', async () => {
    const response = await request(app).get('/usuario-logado');

    expect(response.status).toBe(401);
    expect(response.body.message).toBe('Usuário não está logado');
  });
});
