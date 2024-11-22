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

document.addEventListener('DOMContentLoaded', function gerarFicha(){
    fetch('/gerarFicha', {method: 'GET'})
        .then(response => response.json())
        .then(data => {
            const raca = data.ficha.raca;
            const subraca = data.ficha.subraca;
            const nome = data.ficha.nome;
            const forca = data.ficha.forca;
            const constituicao = data.ficha.constituicao;
            const destreza = data.ficha.destreza;
            const inteligencia = data.ficha.inteligencia;
            const sabedoria = data.ficha.sabedoria;
            const carisma = data.ficha.carisma;
            const acrobacia = data.ficha.acrobacia;
            const animais = data.ficha.animais;
            const arcanismo = data.ficha.arcanismo;
            const atletismo = data.ficha.atletismo;
            const enganacao = data.ficha.enganacao;
            const furtividade = data.ficha.furtividade;
            const historia = data.ficha.historia;
            const intimidacao = data.ficha.intimidacao;
            const intuicao = data.ficha.intuicao;
            const investigacao = data.ficha.investigacao;
            const medicina = data.ficha.medicina;
            const natureza = data.ficha.natureza;
            const percepcao = data.ficha.percepcao;
            const performance = data.ficha.performance;
            const persuasao = data.ficha.persuasao;
            const prestidigitacao = data.ficha.prestidigitacao;
            const religiao = data.ficha.religiao;
            const sobrevivencia = data.ficha.sobrevivencia;


            document.getElementById('nomeFicha').textContent = `${nome}`;
            document.getElementById('descricao'). textContent = `Olá, sou ${nome}, de raça ${raca} de sub-raça ${subraca} com orgulho`
           
            localStorage.setItem('raca', raca);
            localStorage.setItem('subraca', subraca);
            localStorage.setItem('nome', nome);
            localStorage.setItem('forca', forca);
            localStorage.setItem('constituicao', constituicao);
            localStorage.setItem('destreza', destreza);
            localStorage.setItem('inteligencia', inteligencia);
            localStorage.setItem('sabedoria', sabedoria);
            localStorage.setItem('carisma', carisma);
            localStorage.setItem('acrobacia', acrobacia);
            localStorage.setItem('animais', animais);
            localStorage.setItem('arcanismo', arcanismo);
            localStorage.setItem('atletismo', atletismo);
            localStorage.setItem('enganacao', enganacao);
            localStorage.setItem('furtividade', furtividade);
            localStorage.setItem('historia', historia);
            localStorage.setItem('intimidacao', intimidacao);
            localStorage.setItem('intuicao', intuicao);
            localStorage.setItem('investigacao', investigacao);
            localStorage.setItem('medicina', medicina);
            localStorage.setItem('natureza', natureza);
            localStorage.setItem('percepcao', percepcao);
            localStorage.setItem('performance', performance);
            localStorage.setItem('persuasao', persuasao);
            localStorage.setItem('prestidigitacao', prestidigitacao);
            localStorage.setItem('religiao', religiao);
            localStorage.setItem('sobrevivencia', sobrevivencia);
            
        })
    })


function editAboutMe() {
    // Obter os elementos
    const aboutMeText = document.getElementById('aboutMeText');
    const aboutMeInput = document.getElementById('aboutMeInput');
    const editButton = document.getElementById('editButton');
    const saveButton = document.getElementById('saveButton');

    // Transferir o texto para o campo de entrada
    aboutMeInput.value = aboutMeText.textContent;

    // Alternar visibilidade
    aboutMeText.style.display = 'none';
    aboutMeInput.style.display = 'block';
    editButton.style.display = 'none';
    saveButton.style.display = 'block';
}

function saveAboutMe() {
    // Obter os elementos
    const aboutMeText = document.getElementById('aboutMeText');
    const aboutMeInput = document.getElementById('aboutMeInput');
    const editButton = document.getElementById('editButton');
    const saveButton = document.getElementById('saveButton');

    // Salvar o texto editado
    aboutMeText.textContent = aboutMeInput.value;

    // Alternar visibilidade
    aboutMeText.style.display = 'block';
    aboutMeInput.style.display = 'none';
    editButton.style.display = 'block';
    saveButton.style.display = 'none';
}


function updateAvatar(event) {
    const avatarImage = document.getElementById('avatarImage');
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();

        // Atualizar a imagem assim que o arquivo for carregado
        reader.onload = function(e) {
            avatarImage.src = e.target.result;
        };

        reader.readAsDataURL(file);
    }
}