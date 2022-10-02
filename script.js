

const sistemaMenu = document.getElementById('sistemas');
const pessoasMenu = document.getElementById('pessoas');
const resultadoMenu = document.getElementById('resultados');
const telefoniaMenu = document.getElementById('telefonia');
const vmMenu = document.getElementById('vm');
const digitalMenu = document.getElementById('digital');
let buttonSe = document.getElementsByClassName('button');



let selectionSistemas = document.querySelector('.sistemas');
let seleResultados = document.querySelector('.resultados');
let selectionTelefonia = document.querySelector('.telefonia');



function click(){
   sistemaMenu.addEventListener('click', function(){
      
   });
   pessoasMenu.addEventListener('click', function(){
      
      
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


