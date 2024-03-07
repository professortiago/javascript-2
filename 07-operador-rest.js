'use strict';

import { classificar } from "./modulos-esm/funcoes.js";

/* Conceito
Usamos o operador REST ...
para mesclar uma lista de parâmetros/argumentos
para uma função. */

function somar(...valores){
    // Variável local acumuladora de resultados
    let total = 0;

    // Iteração e cálculo dos valores usando loop for
    for(const valor of valores){
        total += valor;
    }

    // Retornamos para fora da função o total já processado
    return total;
}

let resultado1 = somar(20, 1000);
let resultado2 = somar(590, 150);
let resultado3 = somar(590, 150, 100, 50);
let resultado4 = somar(10, 20, 100, 200, 333, 1, 5, 10, 8);

console.log(resultado1);
console.log(resultado2);
console.log(resultado3);
console.log(resultado4);

console.log("--------------------");



console.log( classificar("Moving Pictures", "Hemispheres") );
console.log( classificar("Rush", "Clockwork Angels", "Snakes & Arrows", "Presto") );






