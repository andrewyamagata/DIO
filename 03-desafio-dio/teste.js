/*var preco = 2;
var desconto = 0.2;
preco = preco - desconto

var desconto = 0.2;
const PRECO = 2; // constante coloca=se em maísculo para diferenciar, boas práticas
PRECO = PRECO - desconto // não pode ser feito, pois PRECO é uma constante
var total = PRECO - desconto; // no caso cria-se uma nova variável 



//função
function soma (a, b) {
    console.log(a + b); // usado mais para debugar
    return a + b;       // quando precisa manipular depois
}

soma(3, 5); //chamar a função, muito importante chamar */


//console
console.log("Hello world!"); // quando quiser falar com o console

function returnEvenValues(array) {
    let evenNums = [];
    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 === 0) {
            evenNums.push(array[i]);
        } else {
        console.log(`${array[i]} não é par!`);
        }
    }
    console.log('Os números pares são: ',evenNums);
}

let array = [1, 2, 4, 5, 7, 8];

returnEvenValues(array);