const sistemaMenu = document.getElementById('sistemas');
const pessoasMenu = document.getElementById('pessoas');
const resultadoMenu = document.getElementById('resultados');
const telefoniaMenu = document.getElementById('telefonia');
const vmMenu = document.getElementById('vm');
const digitalMenu = document.getElementById('digital');
const buttonSection = document.querySelector('.button-section')

//**Adicionar botoes */

//**Um tela para cada botão clicado */








/************************************* */
//* Adicionar evento de click e testar  na tela

function click(){
   sistemaMenu.addEventListener('click', function(){
      console.log('Clicou em sistemas')
   });
   pessoasMenu.addEventListener('click', function(){
      console.log('Agora está em Pessoas')
   });
   resultadoMenu.addEventListener('click', function(){
      console.log('Agora está em Resultados');
   });
   telefoniaMenu.addEventListener('click', function(){
      console.log('Agora está em Telefonia');
   });
   vmMenu.addEventListener('click', function(){
      console.log('Agora está em Visual Merchansing');
   });
   digitalMenu.addEventListener('click', function(){
      console.log('Agora está em Visual digital');
   });
}

click();

