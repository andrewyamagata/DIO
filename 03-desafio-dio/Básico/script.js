alert("Tudo certo jovem!");

/*tipos primitivos - abrir o console

//boolean
var vOuF = false;
console.log(typeof(vOuF));

//number
var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

//string
var nome = 'diana';
console.log(typeof(nome));

//function
var funcao = function() {}
console.log(typeof(funcao)); */


/*como declarar

//var - ele muda
var variavel = 'diana';
variavel = 'martine';
console.log(variavel);

//let - ele muda
let variavel2 = 'helena';
variavel2 = 'samanta';
console.log(variavel2);

//const - ele não muda - dará erro neste caso
const constante1 = 'joyce';
constante1 = 'lorena';
console.log(constante1); */


/*
//dessa forma não funciona
function escopoLocal () {
    let escopoLocalInterno = 'local';
}
console.log(escopoLocalInterno); */

//dessa forma funciona
function escopoLocal () {
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno);
}

escopoLocal();

//como declarar um array
/*let array = ['string', 1, true];
console.log(array);*/

//pode guardar vários tipode de dados
let array = ['string', 1, true, ['array1'], ['array2'], 'array3'];
/*console.log(array); - retorna todo o array 
console.log(array[0]); - retorna o valor na posição 0 */
/*
//forEach - item do array
array.forEach(function(item, index){console.log(item, index)});
//
//push - inserir item no final do array
array.push(['string4']);
console.log(array);

//pop - remover item no final do array
array.pop();
console.log(array);

//shift - remover item no início do array
array.shift();
console.log(array);

//inshift - inserir item no início do array
array.unshift('novo item');
console.log(array);

//indexOf - índice de um valor
console.log(array.indexOf(true));

//splice - remove ou substitui um item pelo índice
array.splice(0, 3);
console.log(array);

//slice - retorna uma parte de um array já existente
let novoArray = array.slice(0, 2)
console.log(novoArray);
*/

let object = { string: 'string', number: 1, boolean: true, array: ["arrayaya"], objectInterno:{ objectInterno : "objeto interno"}};
console.log(object);
console.log(object.objectInterno);

var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno);

var { string, boolean, objectInterno} = object;
console.log(string, boolean, objectInterno);
