//Verificar Palíndromo
//solução 1
/*function verificarPalindromo(string) {
    if(!string) return "string inexistente"; //não existe, nulo
    
    return string.split("").reverse().join("") === string;
}
/*
console.log(verificarPalindromo("ama")); */

//solução 2

function verificarPalindromo2(string) {
    if (!string) return;
    if (!string.lenght) return;

    for (var i = 0; i < string.lenght / 2; i++) {
        if (string[i] !== string[string.lenght - 1 - i]) {
            return console.log(false);
        }
    }
    
    return console.log(true);
}

verificarPalindromo2("gato");