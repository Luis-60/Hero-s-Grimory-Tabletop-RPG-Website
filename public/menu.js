function sair() {
    fetch('/sair')
        .then(response => {
            if (response.ok) {
                // Redireciona ou limpa o estado do usuário
                window.location.href = "../login.html";
            } else {
                console.error('Erro ao sair');
            }
        })
        .catch(error => console.error('Erro na requisição de logout:', error));
}

document.addEventListener('DOMContentLoaded', function() {
    // Função para verificar se há um usuário logado
    function verificarSessao() {
        fetch('/verificar-sessao')
            .then(response => response.json())
            .then(data => {
                if (data.logado) {
                    document.getElementById('cadastrar').textContent = `${data.nome}`;
                    document.getElementById('cadastrar').href = "../usuario.html"
                    document.getElementById('entrar').textContent = "";
                    document.getElementById('entrar').href = "../index.html"
                    entrar.addEventListener('click', (event) => {
                        event.preventDefault(); // Impede comportamento padrão
                        sair(); // Chama a função de logout
                    });
                } else {
                    document.getElementById('cadastrar').textContent = "Cadastre-se";
                    document.getElementById('entrar').textContent = "Entrar";
                }
            })
            .catch(error => {
                console.error('Erro ao verificar a sessão:', error);
            });
    }

    // Chama a função ao carregar a página
    verificarSessao();
});

