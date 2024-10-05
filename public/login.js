document.addEventListener('DOMContentLoaded', function() {
    // Captura o formulário pelo ID
    const form = document.getElementById('loginForm');

    // Verifica se o formulário foi encontrado
    if (form) {
        console.log('Formulário encontrado!');
    } else {
        console.log('Formulário NÃO encontrado!');
    }

    // Adiciona um listener para o evento de submissão do formulário
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Previne o envio padrão do formulário

        console.log('Formulário enviado!'); // Testando se o evento está sendo capturado

        // Captura os valores dos campos
        const nome = document.getElementById('nome').value;
        const senha = document.getElementById('senha').value;

        const dados = {
            nome: nome,
            senha: senha
        };

        // Envia os dados ao servidor com uma requisição POST
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Especifica que os dados são enviados como JSON
            },
            body: JSON.stringify(dados) // Converte os dados para o formato JSON
        })
        .then(response => response.json()) // Converte a resposta do servidor em JSON
        .then(data => {
            // Verifica se o login foi bem-sucedido
            if (data.message === 'Login realizado com sucesso') {
                alert(`Bem vindo aventureiro ${nome}`);
                // Redireciona para a página index.html
                window.location.href = 'index.html';
            } else {
                alert(data.message); // Exibe a mensagem de erro, caso o login falhe
            }
        })
        .catch(error => {
            console.error('Erro:', error); // Mostra erros no console
            alert('Erro ao realizar o login'); // Exibe um alerta em caso de erro
        });
    });
});
