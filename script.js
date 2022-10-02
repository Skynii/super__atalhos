

const sistemaMenu = document.getElementById('sistemas');
const pessoasMenu = document.getElementById('pessoas');
const resultadoMenu = document.getElementById('resultados');
const telefoniaMenu = document.getElementById('telefonia');
const vmMenu = document.getElementById('vm');
const digitalMenu = document.getElementById('digital');
let buttonSe = document.getElementsByClassName('button');

function sistemas(){ 
   let selectionSistemas = document.querySelectorAll('.sistemas');  
   for(let i = 0; i < selectionSistemas.length; i++) {
      selectionSistemas.item(i).style.display ="none";
   }
};
//Funções que removem a classe
function pessoas(){
   let selePessoas = document.querySelectorAll('.pessoas');   
   for(let i = 0; i < selePessoas.length; i++) {
      selePessoas.item(i).style.display ="none";
   }
};

function telefonia(){ 
   let selectionTelefonia = document.querySelectorAll('.telefonia');  
   for(let i = 0; i < selectionTelefonia.length; i++) {
      selectionTelefonia.item(i).style.display ="none";
   }
};

function resultados(){
   let seleResultados = document.querySelectorAll('.resultados');
   for(let i = 0; i < seleResultados.length; i++) {
         seleResultados.item(i).style.display ="none";
      }
};

function vm(){
   let seleVM = document.querySelectorAll('.vm');
   for(let i = 0; i < seleVM.length; i++) {
      seleVM.item(i).style.display ="none";
      }
};
function digital(){
   let seleDigital = document.querySelectorAll('.digital');
   for(let i = 0; i < seleDigital.length; i++) {
      seleDigital.item(i).style.display ="none";
      }
};


//Função que remove ao clicar 
function click(){
   sistemaMenu.addEventListener('click', function(){
      resultados();
      pessoas();
      telefonia();
      vm();
      digital();
   });
   pessoasMenu.addEventListener('click', function(){
      resultados();
      sistemas();
      telefonia();
      vm();
      digital();
      
   });
   resultadoMenu.addEventListener('click', function(){
      pessoas();
      sistemas();
      telefonia();
      vm();
      digital();
   });
   telefoniaMenu.addEventListener('click', function(){
      pessoas();
      sistemas();
      resultados();
      vm();
      digital();
   });
   vmMenu.addEventListener('click', function(){
      pessoas();
      sistemas();
      resultados();
      telefonia();
      digital();
   });
   digitalMenu.addEventListener('click', function(){
      pessoas();
      sistemas();
      resultados();
      telefonia();
      vm();
   });
}

click();

