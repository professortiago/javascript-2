'use strict';

const separador = () => console.log("--------------------");

// Chamada ANTES da declaração da função (OK!)
exemplo1();

/* Sintaxe tradicional de funções */
function exemplo1(){
    console.log("Função nomeada");
}

// Chamada APÓS da declaração da função (OK!)
exemplo1();

separador();

// Chamada ANTES (NÃO FUNCIONA, É NECESSÁRIO INICIALIZAR)
// exemplo2();

/* Sintaxe anônima (PRECISA SER INICIALIZADA) */
const exemplo2 = function(){
    console.log("Função anônima");
};

// Chamada APÓS (OK!)
exemplo2();

/* 1) Crie uma função (qualquer sintaxe) que receba dois valores
numéricos como parâmetros, calcule a diferença entre estes valores
e retorne o resultado calculado. */
function exercicio1(valor1, valor2){
    // Variável local (escopo existente somente aqui na função)
    let diferenca = Math.abs(valor1 - valor2);

    // Retornando o resultado/valor da variável para FORA da função
    return diferenca;
}

/* 2) Chame esta função pelo menos duas vezes passando valores
diferentes e guardando os resultados em variáveis de escopo global. */
let resultado1 = exercicio1(10, 5);
let resultado2 = exercicio1(500, 300);
let resultado3 = exercicio1(100, 500);

console.log(`Resultado 1: ${resultado1}`);
console.log(`Resultado 2: ${resultado2}`);
console.log(`Resultado 3: ${resultado3}`);


separador();

/* Exemplo 3: Sintaxe Arrow Function (Função Flecha/Seta) */
const exemplo3 = () => {
    console.log("Arrow Function");
};

exemplo3();

separador();

// Exemplo 4
const saudacao = nome => console.log(`Olá ${nome}`);

saudacao("Neil");
saudacao("Alex");
saudacao("Geddy");

separador();

// Exemplo 5 (arrow function com retorno implícito)
const calculaMetade = valor => valor / 2;

console.log(calculaMetade(100));
console.log(calculaMetade(666));


separador();

/* Exercício de Refatoração
Pegar o exercício feito anteriormente e refatorá-lo usando
a sintaxe Arrow Function. */
const exercicio2 = (valor1, valor2) => Math.abs(valor1 - valor2);

console.log(exercicio2(1000, 250));
console.log(exercicio2(365, 123));

separador();

/* Exemplo 6: avaliar um valor e indicar se ele é negativo ou positivo */
const verificaNegativo = valor => `O valor é ${ valor < 0 ? 'negativo' : 'positivo' }`;

console.log(verificaNegativo(100));
console.log(verificaNegativo(-100));
console.log(verificaNegativo(0));
console.log(verificaNegativo(254.77));

separador();

// Exemplo 7: funções com objetos
const pessoa = {
    nome: "Jon Oliva",
    idade: 20,
    exbirNome: () => `O nome da pessoa é ${pessoa.nome}`
    
}

console.log(pessoa.exbirNome());  // método/comportamento


