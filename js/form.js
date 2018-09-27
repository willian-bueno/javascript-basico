var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPaciente(form);

    if (isPacienteValido(paciente)) {
        var tabela = document.querySelector("#tabela-pacientes");
        tabela.appendChild(montaTr(paciente));
    }


});

function isPacienteValido(paciente) {
    limpaMensagemError()
    var erros = [];

    erros.push(
        validaNome(paciente.nome),
        validaPeso(paciente.peso),
        validaAltura(paciente.altura),
        validaGordura(paciente.gordura)
    );

    erros.forEach(erro => {
        if(erro){
            document.querySelector(erro).textContent = erro.substring(String(erro).indexOf('-')+1)+" Invalido";
        }
    });
    return !erros.some(erro => erro);
}

function validaNome(nome) {
    if (nome.length <= 0)
        return "#erro-nome";
}

function validaPeso(peso) {
    if (peso <= 0)
        return "#erro-peso";
}

function validaAltura(altura) {
    if (altura <= 0)
        return "#erro-altura";
}

function validaGordura(gordura) {
    if (gordura <= 0)
        return "#erro-gordura";

}

function limpaMensagemError() {
    console.log(document.querySelectorAll("form span"));
    document.querySelectorAll("span").forEach(span => {
        span.textContent = "";
    });
}


/**
 * Cria um Objeto que representa um paciente com base nos dados do formulario
 * @param {form} form
 */
function obtemPaciente(form) {
    return {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");

    pacienteTr.classList.add("paciente");

    var tds = [];

    tds.push(montaTd(paciente.nome, "info-nome"));
    tds.push(montaTd(paciente.peso, "info-peso"));
    tds.push(montaTd(paciente.altura, "info-altura"));
    tds.push(montaTd(paciente.gordura, "info-gordura"));
    tds.push(montaTd(paciente.imc, "info-imc"));

    for (var x = 0; x < tds.length; x++) {
        pacienteTr.appendChild(tds[x]);
    }

    return pacienteTr;
}

function montaTd(dado, clazz) {
    var td = document.createElement("td");
    td.classList.add(clazz);
    td.textContent = dado;
    return td;
}