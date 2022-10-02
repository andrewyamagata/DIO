function comparaNumero(num1, num2) {
    if(!num1 || !num2) return `Defina dois números`
    const primeiraFrase = criaPrimeiraFrase(num1, num2);
    const segundaFrase = criaSegundaFrase (num1, num2);

    return `${primeiraFrase} ${segundaFrase}`
}

function criaPrimeiraFrase(num1, num2) {
    let saoIguais = '';

    if(num1 !== num2) {
        saoIguais = 'não ';
    }

    return `Os múmeros ${num1} e ${num2} ${saoIguais}são iguais.`
};

function criaSegundaFrase(num1, num2) {
    const soma = num1 + num2;

//   let resultado10 = 'menor que';
//   let resultado20 = 'menor que';

//    const compara10 = soma > 10;
//    const compara20 = soma > 20;

    if(soma == 10) {
        resultado10 = 'igual a';
    } else if (soma > 10){
        resultado10 = 'maior que';
    } else {
        resultado10 = 'menor que'
    }

    if(soma == 20) {
        resultado20 = 'igual a';
    } else if (soma > 20) {
        resultado20 = 'maior que';
    } else {
        resultado20 = 'menor que'
    }

    return `Sua soma é ${soma}, que é ${resultado10} 10 e ${resultado20} 20.`
};

console.log(comparaNumero(8,2));