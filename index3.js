const frutas = [];
const prompt = require("prompt-sync")();

// Exercício3
const numeros = [];

for(let i = 0; i < 5; i++){ 
    numeros.push (parseInt(prompt(`Digite o ${i+1}º número: `)))
}
for(let i = 0; i < 5; i++){
    console.log(`O ${i+1}º número é: ${numeros[i]}`);
}


// Exercício4
const soma = numeros.reduce((acumulador, numeroAtual) =>{
    return  acumulador + numeroAtual
},0);

console.log(`A soma dos numeros é: ${soma}`);


// Exercício5
numerosOrdenados = [...numeros];

numerosOrdenados.sort((numero1, numero2) =>numero1 - numero2 );
console.log(`A ordem dos numeros é: ${numerosOrdenados.join(" ")}`);


// Exercício6
const pares = numeros.filter(numeroAtual => {
    if(numeroAtual % 2 == 0){
        return true
    }
})

console.log(`A lista dos números pares é: ${pares.join(" ")}`);

// Exercício7

const quadrados = numeros.map(numeroAtual => numeroAtual * numeroAtual);
console.log(`O qudrado dos números é: ${quadrados}`);

