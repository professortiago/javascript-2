'use strict';

import { classificar } from "./modulos-esm/funcoes.js";

/* Conceito
Operador "spread" ...
Serve para copiar/mesclar elementos/dados de 
arrays e objetos. */

// Spread em arrays
const bandas = ['Pink Floyd', "Rush", "Yes"];
const maisBandas = ["Slayer", "Nightwish", ...bandas];

console.log(bandas);
console.log(maisBandas);

// console.log(maisBandas[2][0]);
console.log(maisBandas[2]);

// Spread para "espalhar" dados/parâmetros para a função
console.log(classificar(...maisBandas));

console.log("----------------------");

// Spread em objetos
const cliente = {
    nome: "David Gilmour",
    cidade: "Belo Horizonte",
    idade: 78
};

const compra = {
    ...cliente, // copie as propriedades de cliente
    codigoPedido: "123xyz",
    produtos: ["TV", "Notebook", "Geladeira"],
    total: 7812.53,
    idade: 80
};

console.log(cliente);
console.log(compra);

console.log(`${compra.nome} fez uma compra no valor total de ${compra.total}`);