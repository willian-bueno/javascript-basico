/**
 * @author Willian Fernandes
 * @description Estudo JavaScript Basico
 */

var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

//capturando as trs que possui a class css "paciente"
var pacientes = document.querySelectorAll(".paciente");

//percorrendo cada tr que possui class="paciente"
for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];
    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;
    var imc = paciente.querySelector(".info-imc");
    
    if (validaPeso(peso, apresentaMensagemError) & validaAltura(altura, apresentaMensagemError)) {
        imc.textContent = calculaImc(peso, altura);
    }
}

/**
 * Apresenta Mensagem na coluna IMC quando existir error nos dados utilizados no calculo do imc.
 * @param {string} msg 
 */
function apresentaMensagemError(msg) {
    if(imc.textContent != 0){    
        imc.textContent = imc.textContent + " / "+ msg;
    }else{
        imc.textContent = msg;
    }
    //adiciona css de error
    paciente.classList.add("paciente-invalido");
}

/**
 * Valida se Peso é maior que zero
 * @param {number} peso 
 */
function validaPeso(peso, funcao){
    if (peso <= 0) {
        funcao("Peso Invalido")
        return false;
    }
    return true;
}

/**
 * Valida se Altura é maior que zero
 * @param {number} altura 
 */
function validaAltura(altura, funcao){
    if (altura <= 0 || altura >= 3.00) {
        funcao("Altura Invalida")
        return false;
    }
    return true;
}

/**
 * Realiza o Calculo do IMC
 * @param {number} peso 
 * @param {number} altura 
 */
function calculaImc(peso, altura){
    return (peso / (altura * altura)).toFixed(2);
}
