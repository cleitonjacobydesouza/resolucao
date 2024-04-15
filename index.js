    //   Exercicio1

        
    const prompt = require("prompt-sync")()
    const frutas = [];

    for(let i = 0; i < 3; i++){
    frutas.push(prompt("Digite o nome da fruta: "))
    } 
    

    console.log(frutas[1]);
    

