const maxWidth = 15;

let forcaWidth = 0;
let constituicaoWidth = 0;
let destrezaWidth = 0;
let inteligenciaWidth = 0;
let sabedoriaWidth = 0;
let carismaWidth = 0;
let valorPonto = 27; // Inicializa valorPonto com 27
const ponto = document.getElementById('value-cb1');
ponto.innerText = valorPonto; // Atualiza o texto do elemento

// Função para atualizar as barras de progresso
function atualizarBarras() {
    document.querySelectorAll('.progress-bar span').forEach(function(span) {
        let habilidade = span.closest('.progress-container').querySelector('h4').innerText.toLowerCase();
        
        switch(habilidade) {
            case 'força':
                span.setAttribute('data-width', forcaWidth);
                span.style.width = (forcaWidth / maxWidth * 100) + '%';
                span.innerText = forcaWidth;
                break;
            case 'constituição':
                span.setAttribute('data-width', constituicaoWidth);
                span.style.width = (constituicaoWidth / maxWidth * 100) + '%';
                span.innerText = constituicaoWidth;
                break;
            case 'destreza':
                span.setAttribute('data-width', destrezaWidth);
                span.style.width = (destrezaWidth / maxWidth * 100) + '%';
                span.innerText = destrezaWidth;
                break;
            case 'inteligência':
                span.setAttribute('data-width', inteligenciaWidth);
                span.style.width = (inteligenciaWidth / maxWidth * 100) + '%';
                span.innerText = inteligenciaWidth;
                break;
            case 'sabedoria':
                span.setAttribute('data-width', sabedoriaWidth);
                span.style.width = (sabedoriaWidth / maxWidth * 100) + '%';
                span.innerText = sabedoriaWidth;
                break;
            case 'carisma':
                span.setAttribute('data-width', carismaWidth);
                span.style.width = (carismaWidth / maxWidth * 100) + '%';
                span.innerText = carismaWidth;
                break;
        }
    });
}

// Função para trocar a raça
function TrocarRaca() {
    const racaSelecionada = document.querySelector('input[name="raca"]:checked');
    
    if (racaSelecionada) {
        document.getElementById('raca').innerText = racaSelecionada.value;
    
        // Definindo valores de acordo com a raça selecionada
        switch (racaSelecionada.value) {
            case 'Anão':
                forcaWidth = 0;
                constituicaoWidth = 2; 
                destrezaWidth = 0;
                inteligenciaWidth = 0;
                sabedoriaWidth = 0;
                carismaWidth = 0;
                break;
            case 'Elfo':
                forcaWidth = 0;
                constituicaoWidth = 0;
                destrezaWidth = 2;
                inteligenciaWidth = 0;
                sabedoriaWidth = 0;
                carismaWidth = 0;
                break;
            case 'Halfling':
                forcaWidth = 0;
                constituicaoWidth = 0;
                destrezaWidth = 2;
                inteligenciaWidth = 0;
                sabedoriaWidth = 0;
                carismaWidth = 0;
                break;
            case 'Humano':
                forcaWidth = 1;
                constituicaoWidth = 1;
                destrezaWidth = 1;
                inteligenciaWidth = 1;
                sabedoriaWidth = 1;
                carismaWidth = 1;
                break;
            case 'Draconato':
                forcaWidth = 2;
                constituicaoWidth = 0;
                destrezaWidth = 1;
                inteligenciaWidth = 0;
                sabedoriaWidth = 0;
                carismaWidth = 0;
                break;
            case 'Gnomo':
                forcaWidth = 0;
                constituicaoWidth = 0;
                destrezaWidth = 0;
                inteligenciaWidth = 2;
                sabedoriaWidth = 0;
                carismaWidth = 0;
                break;
            case 'Meio-Elfo':
                forcaWidth = 0;
                constituicaoWidth = 0;
                destrezaWidth = 0;
                inteligenciaWidth = 0;
                sabedoriaWidth = 0;
                carismaWidth = 2;
                break;
            case 'Meio-Orc':
                forcaWidth = 1;
                constituicaoWidth = 0;
                destrezaWidth = 0;
                inteligenciaWidth = 0;
                sabedoriaWidth = 0;
                carismaWidth = 0;
                break;
            case 'Tiefling':
                forcaWidth = 0;
                constituicaoWidth = 0;
                destrezaWidth = 0;
                inteligenciaWidth = 0;
                sabedoriaWidth = 0;
                carismaWidth = 0;
                break;
        }
        
        // Atualizar as barras de progresso
        atualizarBarras();
    }
}

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    atualizarBarras(); // Atualiza as barras inicialmente
    document.getElementById('hab').selectedIndex = -1; // Define a combobox como nula

    // Configurar os botões de adicionar e subtrair para cada barra de progresso
    document.querySelectorAll('.progress-container').forEach(function(container) {
        const span = container.querySelector('.progress-bar span');
        const addButton = container.querySelector('.add');
        const subButton = container.querySelector('.sub');

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
        });

        // Quando o botão de subtrair for clicado
        subButton.addEventListener('click', function() {
            if (parseInt(span.getAttribute('data-width')) > 0) { // Verifica se o valor atual é maior que 0
                updateProgressBar(span, -1); // Diminui em 1
                atualizarHabilidade(span, -1); // Atualiza a variável da habilidade correspondente
                valorPonto++; // Aumenta valorPonto ao subtrair
                ponto.innerText = valorPonto; // Atualiza a interface
            }
        });
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

// Função para atualizar as variáveis de habilidade
function atualizarHabilidade(span, increment) {
    let habilidade = span.closest('.progress-container').querySelector('h4').innerText.toLowerCase();
    
    switch (habilidade) {
        case 'força':
            forcaWidth += increment;
            break;
        case 'constituição':
            constituicaoWidth += increment;
            break;
        case 'destreza':
            destrezaWidth += increment;
            break;
        case 'inteligência':
            inteligenciaWidth += increment;
            break;
        case 'sabedoria':
            sabedoriaWidth += increment;
            break;
        case 'carisma':
            carismaWidth += increment;
            break;
    }
}

// Configurar o evento do combobox
document.getElementById('hab').addEventListener('change', function() {
    const select = this;

    switch (select.value) {
        case '1':
            valorPonto = 27; // Converte '27' de string para número
            ponto.innerText = valorPonto; // Atualiza o texto do elemento
            break;
        // Adicione outros casos se necessário
    }
});
