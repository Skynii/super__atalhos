

const sistemaMenu = document.getElementById('sistemas');
const pessoasMenu = document.getElementById('pessoas');
const resultadoMenu = document.getElementById('resultados');
const telefoniaMenu = document.getElementById('telefonia');
const vmMenu = document.getElementById('vm');
const digitalMenu = document.getElementById('digital');
let buttonSe = document.querySelector('.button');
let selectionSistemas = document.querySelector('.sistemas');






/************************************* */
//* Adicionar evento de click e testar  na tela

function click(){
   sistemaMenu.addEventListener('click', function(){
      let selectionSistemas = document.querySelector('.pessoas.resultados').style.display = 'none';



      console.log("seleficonou ")

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

