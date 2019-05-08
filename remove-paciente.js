
var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function(){
        event.target.parentNode.remove();
    }, 700);

    
});

//tabela.addEventListener("dblclick", function(event) {
//  var alvoEvento = event.target;
    //var paiDoAlvo = alvoEvento.parentNode; // TR = paciente = remover 
    //paiDoAlvo.remove();
//});


//var pacientes = document.querySelectorAll(".pacientes");
//pacientes.forEach(function("table"){
//   paciente.addEventListener("dblclick", function(){
//       this.remove();
//  });

//});
