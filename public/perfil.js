document.addEventListener('DOMContentLoaded', function(){
    function perfil(){
        fetch('/perfil')
            .then(response => response.json())
            .then(data => {
                const nome = data.usuario.nome;
                const email = data.usuario.email;
                const senha = data.usuario.senha;
               
                console.log(data)

                document.getElementById('nome').textContent =  `${nome}`;
                document.getElementById('email').textContent = `${email}`;

    })
    }
    perfil();
});

function sair() {
    fetch('/sair', { method: 'GET' })
        .then(response => {
            if (response.ok) {
                // Redireciona ou limpa o estado do usuário
                window.location.href = "index.html";

            } else {
                console.error('Erro ao sair');
            }
        })
        .catch(error => console.error('Erro na requisição de logout:', error));
}
