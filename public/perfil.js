document.addEventListener('DOMContentLoaded', function(){
    function perfil(){
        fetch('/perfil')
            .then(response => response.json())
            .then(data => {
                
               const email = data.usuario.email;
               const senha = data.usuario.senha;

                document.getElementById('email').textContent = `${email}`;
                document.getElementById('senha').textContent = `${senha}`;
    })
    }
    perfil();
});