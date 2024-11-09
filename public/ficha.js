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
