"use strict"; // habilitando o modo estrito

let idade = 18;
let mensagem;
const aluno = "Neil Peart";

if(idade >= 18){
    mensagem = "adulto";
} else {
    mensagem = "menor de idade";
}

// Template String/Literal
console.log(`${aluno} possui ${idade} anos e é ${mensagem}`);

// Concatenação
console.log(aluno + " possui "+idade+ " anos e é "+ mensagem);

console.log("---------");

let nomeDaVariavel = 10;
console.log(nomeDaVariavel);

let publica = "qualquer coisa";
console.log(publica);

