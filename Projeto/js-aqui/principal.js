var botaoSubmit = document.querySelector("#submit");
botaoSubmit.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
// Extraindo informações do form
    var dia = obtemInfosDoForm(form);

    console.log(dia);

    var dadosTr = document.createElement("tr");

    var ganhosTd = document.createElement("td");
    var gastosTd = document.createElement("td");
    var tempoOnlineTd = document.createElement("td");
    var viagensTd = document.createElement("td");

    ganhosTd.textContent = ganhos;
    gastosTd.textContent = gastos;
    tempoOnlineTd.textContent = tempoOnline;
    viagensTd.textContent = viagens;

    dadosTr.appendChild(ganhosTd);
    dadosTr.appendChild(gastosTd);   
    dadosTr.appendChild(tempoOnlineTd);
    dadosTr.appendChild(viagensTd);

    var tabela = document.querySelector("#dados-colhidos");
    tabela.appendChild(dadosTr);
});

function obtemInfosDoForm(form){
    var dia = {
        ganhos: form.ganhos.value,
        gastos: form.gastos.value,
        tempoOnline: form.tempoOnline.value,
        viagens: form.viagens.value
    }
    return dia;
}

function validaDia(dia){
    if(dia.ganhos >= 0){
        return true;
    }else{
        return false;
    }

    if(dia.gastos >= 0){
        return true;
    }else{
        return false;
    }

    if(dia.tempoOnline >= 0){
        return true;
    }else{
        return false;
    }

    if(dia.viagens >= 0){
        return true;
    }else{
        return false;
    }
}