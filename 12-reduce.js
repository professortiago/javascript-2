'use strict';

import cursos from "./modulos-esm/cursos.js";

/* reduce (reduzir, redução)
Passa por elementos de um array (usando função callback com parâmetros, e um parâmetro com valor inicial [acumulador]) e retorna um único valor/resultado. */

// Exemplo 1
const valores = [10, 5, 50, 200, 1000];
const total = valores.reduce( (acumulador, valor) => { 
    return acumulador + valor
}, 0);

console.log(total);

console.log("----------------");

// Exemplo 2: realizar soma dos preços de todos os cursos
const totalPrecos = cursos.reduce( (acumulador, curso) => acumulador + curso.preco, 0 );

console.log(`Total dos preços dos cursos: ${totalPrecos}`);

console.log("------------");

// Exemplo 3: média dos preços
const mediaPrecos = cursos.reduce( 
    (acumulador, curso) => acumulador + curso.preco / cursos.length, 0
);

console.log(`Média dos preços dos cursos: ${mediaPrecos.toFixed(2)}`);

console.log("--------------");

/* Desafio: calcular o preço total dos cursos de Front-End */
const precoTotalFrontEnd = cursos
                            .filter(curso => curso.categoria === "Front-End")
                            .reduce( (acumulador, curso) => acumulador + curso.preco, 0);
console.log(precoTotalFrontEnd);                            

console.log("---------");

// Exemplo 4: agrupado de cursos por categoria
const cursosPorCategoria = cursos.reduce((acumulador, curso) => {
    /* Acessando a propriedade categoria do objeto curso atual e usando-a
    como chave do objeto acumulador. Se existir categoria, permanece está. Senão, fica como array vazio. */
    acumulador[curso.categoria] = acumulador[curso.categoria]  || [];

    /* Adicionando o curso atual ao array correspondente à sua categoria dentro
    do objeto acumulador */
    acumulador[curso.categoria].push(curso);

    /* Retornamos o objeto (acumulador) já completo */
    return acumulador;
}, {} );

console.log(cursosPorCategoria);