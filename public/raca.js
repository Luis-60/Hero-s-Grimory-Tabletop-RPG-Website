const maxWidth = 15; // Valor que define o máximo de valor total dos atributos das raças
const maxWidthRaca = 4; // Valor que define o máximo de valor total dos atributos predefinidos das raças

// Atributo que o usuário vai alocar 
let forcaWidth = 0;
let constituicaoWidth = 0;
let destrezaWidth = 0;
let inteligenciaWidth = 0;
let sabedoriaWidth = 0;
let carismaWidth = 0;

// Atributos Predefinidos (Starta com o do Anão)
let forca = 0;
let constituicao = 2;
let destreza = 0;
let inteligencia = 0;
let sabedoria = 0;
let carisma = 0;

let valorPonto = 27; // 27 pontos para distribuir no método de compra de pontos
const ponto = document.getElementById('value-cb1'); 
ponto.innerText = valorPonto; // Atualiza o texto do elemento

function resetarHabilidade(){
    forcaWidth = 0
    constituicaoWidth = 0
    destrezaWidth = 0
    inteligenciaWidth = 0
    sabedoriaWidth = 0
    carismaWidth = 0
}
// Função que vai atualizar o data-width do span do progress-bar 
function atualizarBarras() {
    const habilidades = document.querySelectorAll('.habilidades h4');
    const spans = document.querySelectorAll('.progress-bar span');

    habilidades.forEach((habilidadeElement, index) => {
        let habilidade = habilidadeElement.innerText.toLowerCase();
        let span = spans[index]; // Associa o span correspondente pelo índice
        
        switch(habilidade) {
            case 'for':
                span.setAttribute('data-width', forcaWidth);
                span.style.width = (forcaWidth / maxWidth * 100) + '%';
                span.innerText = forcaWidth;
                break;
            case 'con':
                span.setAttribute('data-width', constituicaoWidth);
                span.style.width = (constituicaoWidth / maxWidth * 100) + '%';
                span.innerText = constituicaoWidth;
                break;
            case 'des':
                span.setAttribute('data-width', destrezaWidth);
                span.style.width = (destrezaWidth / maxWidth * 100) + '%';
                span.innerText = destrezaWidth;
                break;
            case 'int':
                span.setAttribute('data-width', inteligenciaWidth);
                span.style.width = (inteligenciaWidth / maxWidth * 100) + '%';
                span.innerText = inteligenciaWidth;
                break;
            case 'sab':
                span.setAttribute('data-width', sabedoriaWidth);
                span.style.width = (sabedoriaWidth / maxWidth * 100) + '%';
                span.innerText = sabedoriaWidth;
                break;
            case 'car':
                span.setAttribute('data-width', carismaWidth);
                span.style.width = (carismaWidth / maxWidth * 100) + '%';
                span.innerText = carismaWidth;
                break;
        }
    });
}

// Função que atualiza o data-width do progress-bar-raca
function atualizarBarrasRaca() {
    const habilidades = document.querySelectorAll('.habilidades h4');
    const spans = document.querySelectorAll('.progress-bar-raca span');

    habilidades.forEach((habilidadeElement, index) => {
        let habilidade = habilidadeElement.innerText.toLowerCase();
        let span = spans[index]; // Associa o span correspondente pelo índice
        
        switch(habilidade) {
            case 'for':
                span.setAttribute('data-width', forca);
                span.style.width = (forca / maxWidthRaca * 100) + '%';
                span.innerText = forca;
                break;
            case 'con':
                span.setAttribute('data-width', constituicao);
                span.style.width = (constituicao / maxWidthRaca * 100) + '%';
                span.innerText = constituicao;
                break;
            case 'des':
                span.setAttribute('data-width', destreza);
                span.style.width = (destreza / maxWidthRaca * 100) + '%';
                span.innerText = destreza;
                break;
            case 'int':
                span.setAttribute('data-width', inteligencia);
                span.style.width = (inteligencia / maxWidthRaca * 100) + '%';
                span.innerText = inteligencia;
                break;
            case 'sab':
                span.setAttribute('data-width', sabedoria);
                span.style.width = (sabedoria / maxWidthRaca * 100) + '%';
                span.innerText = sabedoria;
                break;
            case 'car':
                span.setAttribute('data-width', carisma);
                span.style.width = (carisma / maxWidthRaca * 100) + '%';
                span.innerText = carisma;
                break;
        }
    });
}

// Função que tem a funcionalidade de poder alterar as raças
function TrocarRaca(element) {
    const valorSelecionado = element.value;
    console.log("Elemento recebido:", element);
    console.log("Valor selecionado:", element.value)
    // Atualiza o nome da raça no elemento com id="raca"
    document.getElementById('raca').innerHTML = `<strong>${valorSelecionado.charAt(0)}</strong>${valorSelecionado.slice(1)}`;
    
// Definindo valores de acordo com a raça selecionada
    switch (valorSelecionado) {
        case 'ANÃO':
            document.getElementById('texto-raca').innerText = "Personagens robustos e resistentes, mestres na mineração e forja, conhecidos por sua lealdade ao clã.";
            document.getElementById('subraca-1').innerText = "Anão da Colina";
            document.getElementById('texto-subraca-1').innerText = "Como um anão da colina, você tem sentidos aguçados, maior intuição e notável resiliência. Os anões dourados de Faerûn, que vivem em seu poderoso reino ao sul do continente, são anões da colina, assim como os exilados Neidar e os depreciáveis Klar de Krynn, no cenário de Dragonlance.";
            document.getElementById('subraca-2').innerText = "Anão da Montanha";
            document.getElementById('texto-subraca-2').innerText = "Como um anão da montanha, você é forte e resistente, acostumados a uma vida difícil em terrenos difíceis. Você, provavelmente tem a descendência daqueles mais altos (para um anão) e tende a possuir uma coloração mais clara. Os anões do escudo do norte de Faerûn, bem como o clã governante Hylar e os clãs nobres Daewar de Dragonlance, são anões da montanha.";
            document.body.style.backgroundImage = "url('images/backgroundanao.png')";
            document.getElementById('subraca-radio').style.display = "block";
            document.getElementById('subraca-radio2').style.display = "block";
            forca = 0;
            constituicao = 2;
            destreza = 0;
            inteligencia = 0;
            sabedoria = 0;
            carisma = 0;
            break;

        case 'ELFO':
            document.getElementById('texto-raca').innerText = "Seres místicos e humanóides, geralmente belos e ágeis, conhecidos por sua longevidade e habilidades mágicas.";
            document.getElementById('subraca-1').innerText = "Alto Elfo";
            document.getElementById('texto-subraca-1').innerText = "Treinamento Élfico com Armas: Você possui proficiência com espadas longas, espadas curtas, arcos longos e arcos curtos. Truque: Você conhece um truque, à sua escolha, da lista de truques do mago. Inteligência é a habilidade usada para conjurar este truque. Idioma Adicional: Você pode falar, ler e escrever um idioma adicional à sua escolha.";
            document.getElementById('subraca-2').innerText = "Elfo da Floresta";
            document.getElementById('texto-subraca-2').innerText = "Treinamento Élfico com Armas: Você possui proficiência com espadas longas, espadas curtas, arcos longos e arcos curtos. Pés Ligeiros: Seu deslocamento base de caminhada aumenta para 10,5 metros. Máscara da Natureza: Você pode tentar se esconder mesmo quando você está apenas levemente obscurecido por folhagem, chuva forte, neve caindo, névoa ou outro fenômeno natural.";
            document.body.style.backgroundImage = "url('images/backgroundelfo.png')";
            document.getElementById('subraca-radio').style.display = "block";
            document.getElementById('subraca-radio2').style.display = "block";
            forca = 0;
            constituicao = 0;
            destreza = 2;
            inteligencia = 0;
            sabedoria = 0;
            carisma = 0;
            break;

        case 'HUMANO':

            document.getElementById('subraca').innerText = "";
            document.getElementById('texto-raca').innerText = "São versáteis, adaptáveis e ambiciosos, capazes de se destacar em qualquer classe ou alinhamento.";
            document.getElementById('texto-subraca-2').innerText = "";
            document.getElementById('subraca-1').innerText = "";
            document.getElementById('texto-subraca-1').innerText = "";
            document.getElementById('subraca-2').innerText = "";
            document.getElementById('subraca-radio').style.display = "none";
            document.getElementById('subraca-radio2').style.display = "none";
            document.body.style.backgroundImage = "url('images/backgroundhumano.png')"; 
            forca = 1;
            constituicao = 1;
            destreza = 1;
            inteligencia = 1;
            sabedoria = 1;
            carisma = 1;
            break;
    }
    atualizarBarrasRaca(); // Atualiza as barras de raça com os valores definidos
}

document.querySelectorAll('.raca').forEach(img => {
    img.addEventListener('click', function() {
        TrocarRaca(this);
    });
});


// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    atualizarBarras(); // Atualiza as barras inicialmente
    atualizarBarrasRaca(); // Atualiza as barras da raça inicialmente
    updateValue();

    document.getElementById('hab').selectedIndex = -1; // Define a combobox como nula
});
    // Configurar os botões de adicionar e subtrair para cada barra de progresso
    document.querySelectorAll('.progress-container').forEach(function(container) {
        const span = container.querySelector('.progress-bar span');
    
        // Seleciona os botões 'add' e 'sub' fora do contêiner usando o índice
        const addButton = container.querySelector('.add'); // Busca o botão mais próximo
        const subButton = container.querySelector('.sub'); // Busca o botão mais próximo
    
        // Inicializar a barra de progresso com o valor de data-width
        let initialWidth = parseInt(span.getAttribute('data-width'));
        span.style.width = initialWidth * (100 / maxWidth) + '%'; // Ajusta a largura inicial da barra proporcional ao maxWidth
    
        // Quando o botão de adicionar for clicado
        addButton.addEventListener('click', function() {
            if (valorPonto > 0) {
                updateProgressBar(span, 1); // Aumenta em 1
                atualizarHabilidade(span, 1); // Atualiza a variável da habilidade correspondente
                valorPonto--;
                ponto.innerText = valorPonto; // Atualiza o texto do elemento
            }
            updateValue();
        });
    
        // Quando o botão de subtrair for clicado
        subButton.addEventListener('click', function() {
            if (parseInt(span.getAttribute('data-width')) > 0) { // Verifica se o valor atual é maior que 0
                updateProgressBar(span, -1); // Diminui em 1
                atualizarHabilidade(span, -1); // Atualiza a variável da habilidade correspondente
                valorPonto++; // Aumenta valorPonto ao subtrair
                ponto.innerText = valorPonto; // Atualiza a interface
            }
            updateValue();
        });
    });
    


// Função para atualizar a barra de progresso
function updateProgressBar(span, increment) {
    let width = parseInt(span.getAttribute('data-width')); // Obtém o número inteiro
    width += increment; // Aumenta ou diminui o valor

    // Limitar o valor ao tamanho máximo e mínimo
    if (width > maxWidth) {
        width = maxWidth;
    } else if (width < 0) {
        width = 0;
    }

    // Atualizar o valor de data-width, a largura da barra e o texto
    span.setAttribute('data-width', width);
    span.style.width = width * (100 / maxWidth) + '%'; // Ajusta a largura da barra proporcional ao maxWidth
    span.innerText = width; // Atualiza o texto exibido
}

// Função para atualizar a barra de progresso de raça
function updateProgressBarRaca(span, increment) {
    let width = parseInt(span.getAttribute('data-width')) + increment;
    
    // Limitar o valor ao tamanho máximo
    if (width > maxWidthRaca) {
        width = maxWidthRaca;
    } else if (width < 0) {
        width = 0;
    }

    // Atualizar o valor de data-width, a largura da barra e o texto
    span.setAttribute('data-width', width);
    span.style.width = (width / maxWidthRaca * 100) + '%';
    span.innerText = width;
}

// Função para atualizar os dados de habilidade
function atualizarHabilidade(span, increment) {
    let habilidadeElement = span.closest('.container').querySelector('.habilidades h4');
    let habilidade = habilidadeElement ? habilidadeElement.innerText.toLowerCase() : '';
    
    switch (habilidade) {
        case 'for':
            forcaWidth += increment;
            break;
        case 'con':
            constituicaoWidth += increment;
            break;
        case 'des':
            destrezaWidth += increment;
            break;
        case 'int':
            inteligenciaWidth += increment;
            break;
        case 'sab':
            sabedoriaWidth += increment;
            break;
        case 'car':
            carismaWidth += increment;
            break;
    }
}

document.getElementById('hab').addEventListener('change', function() {
    const select = this;

    switch (select.value) {
        case '1':
            updateValue();
            resetarHabilidade();
            updateValue();
            valorPonto = 27; // Converte '27' de string para número
            ponto.innerText = valorPonto; // Atualiza o texto do elemento
            break;
        // Adicione outros casos se necessário
    }
    switch (select.value) {
        case '2':
            resetarHabilidade();
            updateValue();
            valorPonto = 0;
            ponto.innerText = valorPonto; 
            break;
        // Adicione outros casos se necessário
    }
    switch (select.value) {
        case '3':
            resetarHabilidade();
            updateValue();
            habilidades = [0, 0, 0, 0, 0, 0]
            valorPonto = 0;
            ponto.innerText = valorPonto; 
            rolarAtributos();
            break;
        // Adicione outros casos se necessário
    }
    atualizarBarras()
});

// Função de rolar atributos
function rolarAtributos(){
    // Definir a ordem das habilidades
    const habilidades = ['forca', 'constituicao', 'destreza', 'inteligencia', 'sabedoria', 'carisma'];
    
    habilidades.forEach(function(habilidade, index) {
        // Rolar 4d6 e descartar o menor
        let dados = [
            Math.floor(Math.random() * 6) + 1,
            Math.floor(Math.random() * 6) + 1,
            Math.floor(Math.random() * 6) + 1,
            Math.floor(Math.random() * 6) + 1
        ];
        let DMenor = Math.min(...dados);
        let DTotal = dados.reduce((a, b) => a + b, 0) - DMenor;

         // Limitar o valor máximo a 15
        DTotal = Math.min(DTotal, 15);
        console.log(`${habilidade}: ${DTotal}`);

        // Atualizar a iável correspondente
        switch (habilidade) {
            case 'forca':
                forcaWidth = DTotal;
                break;
            case 'constituicao':
                constituicaoWidth = DTotal;
                break;
            case 'destreza':
                destrezaWidth = DTotal;
                break;
            case 'inteligencia':
                inteligenciaWidth = DTotal;
                break;
            case 'sabedoria':
                sabedoriaWidth = DTotal;
                break;
            case 'carisma':
                carismaWidth = DTotal;
                break;
        }
    });
    // Atualizar as barras após rolar todos os atributos
    atualizarBarras();
    updateValue();
}

/*Abrir a modal*/
const modal = document.querySelector('.modal-container')

function openModal(){
    modal.classList.add('active')
}
function closeModal(){
    modal.classList.remove('active')
}

function updateValue(){
    const sabedoriaValue = document.querySelector('.raca-total-sabedoria')
    const forcaValue = document.querySelector('.raca-total-forca')
    const destrezaValue = document.querySelector('.raca-total-destreza')
    const carismaValue = document.querySelector('.raca-total-carisma')
    const inteligenciaValue = document.querySelector('.raca-total-inteligencia')
    const constituicaoValue = document.querySelector('.raca-total-constituicao')

    sabedoriaValue.textContent = sabedoria + sabedoriaWidth;
    forcaValue.textContent = forca + forcaWidth;
    destrezaValue.textContent = destreza + destrezaWidth;
    carismaValue.textContent = carisma + carismaWidth;
    inteligenciaValue.textContent = inteligencia + inteligenciaWidth;
    constituicaoValue.textContent = constituicao + constituicaoWidth;
}
