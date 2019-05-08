//não esquecer que esta função está atrelada ao evento de click do botão//
var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    console.log("buscando pacientes...");
    var xhr = new XMLHttpRequest;

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function(){
        var erroAjax = document.querySelector("#erros-ajax");
       
        if (xhr.status == 200) {
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);

            pacientes.forEach(function(paciente) {
                adicionaPacientes(paciente);
            });
        } else {
            erroAjax.classList.remove("invisivel");
        }
   
    });
    xhr.send();

});

    