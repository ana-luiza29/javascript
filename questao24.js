/*
Questão 24: Como você pode adicionar um evento de clique a um elemento 
HTML em JavaScript? 
*/
let meuElemento = document.getElementById("meuElemento");

meuElemento.addEventListener("click", function() {
    console.log("O botão foi clicado!");
});
