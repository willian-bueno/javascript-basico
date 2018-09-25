var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(montaTr(obtemPaciente(form)));


});

/**
 * Cria um Objeto que representa um paciente com base nos dados do formulario
 * @param {form} form 
 */
function obtemPaciente(form){
    return {
        nome : form.nome.value,
        peso : form.peso.value,
        altura : form.altura.value,
        gordura : form.gordura.value,
        imc : calculaImc(form.peso.value, form.altura.value)
    }
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");

    pacienteTr.classList.add("paciente");

    var tds = [];

    tds.push(montaTd(paciente.nome, "info-nome"));
    tds.push(montaTd(paciente.peso, "info-peso"));
    tds.push(montaTd(paciente.altura, "info-altura"));
    tds.push(montaTd(paciente.gordura, "info-gordura"));
    tds.push(montaTd(paciente.imc, "info-imc"));

    for (var x = 0 ; x < tds.length ; x++){
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