let numeroRolagem
// Tipo de rolagem


// Tipo de 


function FazerLog() {
    
};

function Rolar() {
      // Atualizar o valor da opção selecionada toda vez que Rolar é chamado
      const BoxTipo = document.getElementById('combo-box');
      const opcaoRolagem = BoxTipo.value; // Obter valor atualizado da combo box
      let TipoRolagem = ""; // Declarar TipoRolagem como let para permitir reatribuição
    
    numeroRolagem = Math.floor(Math.random() * 20) + 1;
    document.getElementById('numero').innerText = numeroRolagem;
    if (opcaoRolagem === 'opcao1'){
        TipoRolagem = "Tentativa";
        document.getElementById('Log').innerText = `Log: Ele fez sua tentativa e rolou: ${numeroRolagem}`;
     }
     else if (opcaoRolagem === 'opcao2'){
        TipoRolagem = "Dano";
        document.getElementById('Log').innerText = `Log: Ele fez seu ataque e tirou: ${numeroRolagem}`;
     }
}




 

