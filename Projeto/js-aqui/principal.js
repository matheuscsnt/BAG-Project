var botaoSubmit = document.querySelector("#submit");
botaoSubmit.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var ganhos = form.ganhos.value;
    var gastos = form.gastos.value;
    var tempoOnline = form.tempoOnline.value;
    var viagens = form.viagens.value;

    console.log(ganhos);
    console.log(gastos);
    console.log(tempoOnline);
    console.log(viagens);

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