
/*
Questão 21: Como você pode verificar se um objeto contém uma determinada 
*/
let meuObjeto = {
    nome: "João",
    idade: 30
};

if ('nome' in meuObjeto) {
    console.log("O objeto contém a propriedade 'nome'.");
} else {
    console.log("O objeto não contém a propriedade 'nome'.");
}
