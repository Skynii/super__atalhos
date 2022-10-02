

const sistemaMenu = document.getElementById('sistemas');
const pessoasMenu = document.getElementById('pessoas');
const resultadoMenu = document.getElementById('resultados');
const telefoniaMenu = document.getElementById('telefonia');
const vmMenu = document.getElementById('vm');
const digitalMenu = document.getElementById('digital');
let buttonSe = document.getElementsByClassName('button');



let selectionSistemas = document.querySelectorAll('.sistemas');
let seleResultados = document.querySelectorAll('.resultados');
let selectionTelefonia = document.querySelector('.telefonia');


function sistemas(){
   sistemaMenu.addEventListener('click', function(){
      for(let i = 0; i < seleResultados.length; i++) {
         seleResultados.item(i).style.display ="none"
      }
      
   })
};

sistemas();

/*function click(){
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
*/

