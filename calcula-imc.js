
var titulo = document.querySelector(".titulo");

titulo.textContent = "Aparecida Nutricionista";


var pacientes = document.querySelectorAll(".paciente");

//Inicio do loop para acessar todos os pacientes e informações da tabela

for (var i = 0; i < pacientes.length; i++){
   
    var paciente = pacientes[i];
   
    var tdpeso = paciente.querySelector(".info-peso");
    peso = tdpeso.textContent;


    var tdaltura = paciente.querySelector(".info-altura");
    var altura = tdaltura.textContent;

    var tdimc = paciente.querySelector(".info-imc");

    var alturaEhvalida = validaAltura(altura);
    var pesoEhvalido = validaPeso(peso);

        //testes lógicos... de validação do código

        if(!pesoEhvalido){
            pesoEhvalido = false;
            tdimc.textContent = "Peso inválido!!"
            paciente.classList.add("paciente-invalido");
        }

        if (!alturaEhvalida){
            alturaEhvalida = false;
            tdimc.textContent = "Altura Inválida!!"
            paciente.classList.add("paciente-invalido");
        }

        if (pesoEhvalido && alturaEhvalida){
            //calculo do imc 
            var imc = calculaimc(peso,altura);
            tdimc.textContent = imc;
        }

}

//validando as informações 

function validaPeso(peso){
    if(peso < 700 && peso >0){
        return true;
    }else{
        return false;
    }
}
function validaAltura(altura){
    if(altura < 3 && altura > 0){
        return true;
    }else{
        return false;
    }
}

//extraindo funcionalidade... utilizado quendo queremos reutilizar um rtecho do código em outros lugares.//
function calculaimc(peso,altura){
    var imc = 0;

    imc = peso /(altura*altura);

    return imc.toFixed(2);
}
