'use strict';

import cursos from "./modulos-esm/cursos.js";

/* map (mapear, mapeia - transformar em outra coisa)
Passa por elementos de um array e realiza operações em cada um deles através de uma função (callback), gerando um novo array. */

// Exemplo 1
const numeros = [10, 20, 5, 12, 66, 50];
console.log(numeros);

const numerosDobrados = numeros.map(numero => numero * 2);
console.log(numerosDobrados);

console.log("-------------------");

console.log(cursos);

console.log("-------------------");

// Exemplo 2: gerar um novo array contendo somente os titulos
const titulos = cursos.map( curso => curso.titulo );
console.log(titulos);

/* Exercício:
Use o map para gerar um novo array contendo SOMENTE os preços
dos cursos calculados com um desconto de 10%. 

- Opção 1: valor * 0.9
- Opção 2: valor - valor * 0.1 */
const precosComDesconto = cursos.map(curso => curso.preco - curso.preco * 0.1);
console.log(precosComDesconto);

console.log("----------");

// Exemplo 3: gerar um novo array completo mas com os preços atualizados com o desconto
const cursosComDesconto = cursos.map( curso => 
    ({ ...curso, preco: curso.preco - curso.preco * 0.1 })
);

console.log(cursosComDesconto);

console.log("------------");

// Exemplo 4: gerar uma nova lista contendo titulos e categorias
const cursosComTituloCategoria = cursos.map(curso => (
    { titulo: curso.titulo, categoria: curso.categoria }
));

console.log("Versão original");
console.log(cursosComTituloCategoria);

console.log("-------------------");

// Exemplo 5: gerar uma nova lista contendo titulos e categorias (usando desestruturação)
const cursosComTituloCategoriaVersao2 = cursos.map(({titulo, categoria}) => (
    { titulo, categoria }
));

console.log("Versão com desestruturação");
console.log(cursosComTituloCategoriaVersao2);