var botaoSubmit = document.querySelector("#submit");
botaoSubmit.addEventListener("click", function(){

    var form = document.querySelector("#form-adiciona");

    var ganhos = form.ganhos.value;
    var gastos = form.gastos.value;
    var tempoOnline = form.tempoOnline.value;
    var viagens = form.viagens.value;

    console.log(ganhos);
    console.log(gastos);
    console.log(tempoOnline);
    console.log(viagens);

    

});