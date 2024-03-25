/*
Questão 20: Como você pode chamar uma função de retorno de chamada em 
JavaScript? 
*/
function minhaFuncao(callback) {
    console.log("Executando alguma operação...");
    // Chamando a função de retorno de chamada
    callback();
}

function minhaCallback() {
    console.log("Esta é uma função de retorno de chamada.");
}

// Chamando minhaFuncao e passando minhaCallback como argumento
minhaFuncao(minhaCallback);
