document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.formulario');

    form.addEventListener('submit', function(event){
        event.preventDefault();

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;
        const confirmarSenha = document.getElementById('confirmar_senha').value;

        if (senha !== confirmarSenha){
            alert('As senhas não coincidem!');
            return;
        }
        if (senha === confirmarSenha){
            alert('Cadastro feito com Sucesso, Bem Vindo!');
        }
        
        
        const dados = {
            nome: nome,
            email: email,
            senha: senha,
        };
        fetch ('/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Sucesso:', data);
        })
        .catch((error) => {
            console.log('Erro:', error);
        });
        
    });
});

