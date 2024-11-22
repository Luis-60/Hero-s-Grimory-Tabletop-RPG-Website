document.addEventListener('DOMContentLoaded', function () {
    const generatePDFButton = document.getElementById('generatePDF');
    
    generatePDFButton.addEventListener('click', function () {
        // Seleciona o conteúdo do elemento <main>
        const element = document.getElementById('container');
        
        // Configurações do pdf
        const options = {
            margin:       0,  // Define margens zero
            filename:     'Ficha_de_Personagem.pdf',
            image:        { type: 'jpeg', quality: 0.70 },
            html2canvas:  { scale: 2 },  // Alta qualidade (2x para clareza)
            jsPDF:        { unit: 'px', format: [595, 842], orientation: 'portrait' } // Exato tamanho A4
        };
        // Gera o PDF
        html2pdf().set(options).from(element).save();
    });
});

document.addEventListener('DOMContentLoaded', function gerarFicha(){
            // Recuperando os dados do localStorage
            const raca = localStorage.getItem('raca');
            const subraca = localStorage.getItem('subraca');
            const nome = localStorage.getItem('nome');
            const forca = localStorage.getItem('forca');
            const constituicao = localStorage.getItem('constituicao');
            const destreza = localStorage.getItem('destreza');
            const inteligencia = localStorage.getItem('inteligencia');
            const sabedoria = localStorage.getItem('sabedoria');
            const carisma = localStorage.getItem('carisma');
            const acrobacia = localStorage.getItem('acrobacia');
            const animais = localStorage.getItem('animais');
            const arcanismo = localStorage.getItem('arcanismo');
            const atletismo = localStorage.getItem('atletismo');
            const enganacao = localStorage.getItem('enganacao');
            const furtividade = localStorage.getItem('furtividade');
            const historia = localStorage.getItem('historia');
            const intimidacao = localStorage.getItem('intimidacao');
            const intuicao = localStorage.getItem('intuicao');
            const investigacao = localStorage.getItem('investigacao');
            const medicina = localStorage.getItem('medicina');
            const natureza = localStorage.getItem('natureza');
            const percepcao = localStorage.getItem('percepcao');
            const performance = localStorage.getItem('performance');
            const persuasao = localStorage.getItem('persuasao');
            const prestidigitacao = localStorage.getItem('prestidigitacao');
            const religiao = localStorage.getItem('religiao');
            const sobrevivencia = localStorage.getItem('sobrevivencia');

            // Atribuindo os dados aos elementos HTML com o id correspondente
            document.getElementById('raca').textContent = `${raca}`;
            document.getElementById('nome').textContent = `${nome}`;
            document.getElementById('forca').textContent = `${forca}`;
            document.getElementById('constituicao').textContent = `${constituicao}`;
            document.getElementById('destreza').textContent = `${destreza}`;
            document.getElementById('inteligencia').textContent = `${inteligencia}`;
            document.getElementById('sabedoria').textContent = `${sabedoria}`;
            document.getElementById('carisma').textContent = `${carisma}`;
            document.getElementById('acrobacia').textContent = `${acrobacia}`;
            document.getElementById('animais').textContent = `${animais}`;
            document.getElementById('arcanismo').textContent = `${arcanismo}`;
            document.getElementById('atletismo').textContent = `${atletismo}`;
            document.getElementById('enganacao').textContent = `${enganacao}`;
            document.getElementById('furtividade').textContent = `${furtividade}`;
            document.getElementById('historia').textContent = `${historia}`;
            document.getElementById('intimidacao').textContent = `${intimidacao}`;
            document.getElementById('intuicao').textContent = `${intuicao}`;
            document.getElementById('investigacao').textContent = `${investigacao}`;
            document.getElementById('medicina').textContent = `${medicina}`;
            document.getElementById('natureza').textContent = `${natureza}`;
            document.getElementById('percepcao').textContent = `${percepcao}`;
            document.getElementById('performance').textContent = `${performance}`;
            document.getElementById('persuasao').textContent = `${persuasao}`;
            document.getElementById('prestidigitacao').textContent = `${prestidigitacao}`;
            document.getElementById('religiao').textContent = `${religiao}`;
            document.getElementById('sobrevivencia').textContent = `${sobrevivencia}`;

        });

