document.body.onload = sistemaMenu;

const sistemaMenu = document.getElementById('sistemas');
const pessoasMenu = document.getElementById('pessoas');
const resultadoMenu = document.getElementById('resultados');
const telefoniaMenu = document.getElementById('telefonia');
const vmMenu = document.getElementById('vm');
const digitalMenu = document.getElementById('digital');
const buttonSection = document.querySelector('.button.section')
/*
let spanbutton =document.createElement('span');
let pButon = document.createElement('p');

//**Um tela para cada botão clicado 

//**Adicionar botoes
function buttonSistema(){
   spanbutton.appendChild(buttonSection);
   pButon.appendChild(spanbutton);
   pButon.innerHTML ='sdadasd'
   
}
*/





/************************************* */
//* Adicionar evento de click e testar  na tela

function click(){
   sistemaMenu.addEventListener('click', function(){
      var x = document.getElementsByClassName("sistemas");
      var x = document.getElementById("myDIV");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
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

