const sistemaMenu = document.getElementById('sistemas');
const pessoasMenu = document.getElementById('pessoas');
const resultadoMenu = document.getElementById('resultado');
const telefoniaMenu = document.getElementById('telefonia');
const vmMenu = document.getElementById('vm');
const buttonSection = document.querySelector('.button-section')

//* Adicionar evento de click e testar printando na tela

function click(){
   sistemaMenu.addEventListener('click', function(){
      console.log('Clicou em sistemas')
   })
}

click();
//**Adicionar botoes */

//**Um tela para cada botão clicado */
