var campoFiltra = document.querySelector("#filtra-paciente");

campoFiltra.addEventListener("input", function(){
    var pacientes = document.querySelectorAll(".paciente");
    var digitado = this.value;
    if (digitado.length > 0){
        
        pacientes.forEach(function(paciente){
            var tdNome = paciente.querySelector(".info-nome");
                var nome = tdNome.textContent;
                var expressao = new RegExp(digitado,"i");
                //expressão regular deve conter o que vc quer q ela utilize para buscar  como ela deve buscar(letras grande ou pequena)...
             if(!expressao.test(nome)){
                 //uso da expressão regular com operador not...
                paciente.classList.add("invisivel");
                
             }else{
                paciente.classList.remove("invisivel");
            }
        });
        
    }else{
        pacientes.forEach(function(paciente){
            paciente.classList.remove("invisivel");
        });
    }
    
    
});



//console.log(campoFiltra.value);
//utilizando forEach:
//pacientes.forEach(function(paciente){
//    var tdNome = paciente.querySelector(".info-nome");
//        var nome = tdNome.textContent;
//});