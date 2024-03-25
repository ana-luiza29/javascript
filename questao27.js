/*
Questão 27: Como você pode remover um elemento específico de um array 
em JavaScript? 
*/
let array = [1, 2, 3, 4, 5];
let elementoRemover = 3;

let indice = array.indexOf(elementoRemover);
if (indice !== -1) {
    array.splice(indice, 1);
}

console.log(array); // Saída: [1, 2, 4, 5]
