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
