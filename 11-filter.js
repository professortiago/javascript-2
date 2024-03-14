'use strict';

import cursos from "./modulos-esm/cursos.js";

/* filter (filtrar)
Passa por elementos de um array (usando função callback) e retorna valores de 
acordo com uma ou condições, gerando um novo array. */

// Exemplo 1
const vendas = [1500, 3000, 1000, 500, 750, 5000, 2000];
const meta = 1000;

const vendasAcimaDaMeta = vendas.filter( venda => venda >= meta );
console.log(vendasAcimaDaMeta);

console.log("-----------");

// Exemplo 2:
const servicos = [
    { codigo: 1, tipo: "Limpeza", status: "Concluído" },
    { codigo: 2, tipo: "Manutenção", status: "Pendente" },
    { codigo: 3, tipo: "Reparo", status: "Concluído" },
    { codigo: 4, tipo: "Consultoria", status: "Concluído" },
    { codigo: 5, tipo: "Instalação", status: "Concluído" },
];

const servicosPendentes = servicos.filter( servico => servico.status === "Pendente" );
console.log(servicosPendentes);

console.log("---------------------");

// Exemplo 3
const clientes = ["bob", "Jon", "Floor", "Simone", "David", "Glenn", "Bruce", "Ronnie", "Blaze", "Robert", "Joey"];

console.log(clientes.length);

const clientesFiltrados = clientes.filter(
    cliente => cliente.toLowerCase().startsWith("b") && cliente.toLowerCase().endsWith("b")
);

console.log(clientesFiltrados);


console.log("-------------------------------");

// Exemplo 4
const cursosDesign = cursos.filter(curso => curso.categoria === "Design");
console.log(cursosDesign);

console.log("-------------------------------");

// Exemplo 5
const cursosMenosDesign = cursos.filter(curso => curso.categoria !== "Design");
console.log(cursosMenosDesign);

console.log("-------------------------------");

/* Exercício
Gere um novo array com os cursos que atendam os seguintes critérios:
- Categorias Front-End ou Mobile
- Preços acima de 600 */
const exercicioFiltro = cursos.filter(
    curso => 
        (curso.categoria === "Front-End" || curso.categoria === "Mobile") 
        && curso.preco > 600
);

console.log(exercicioFiltro);

const exercicioFiltroV2 = cursos.filter(
    curso => curso.preco > 600 
    && curso.categoria === "Front-End" || curso.categoria === "Mobile"
);

console.log(exercicioFiltroV2);

console.log("----------------");

// Exemplo 6
const cursosReact = cursos.filter(curso => curso.titulo.includes("React"));
console.log(cursosReact);

console.log("----------------");

// Exemplo 7
const cursosSemReact = cursos.filter(curso => !curso.titulo.includes("React"));
console.log(cursosSemReact);

console.log("----------------");

/* DESAFIO! 
Gerar um novo array somente com os títulos dos cursos da categoria Mobile. */
const desafio = cursos
                    .filter(curso => curso.categoria === "Mobile")
                    .map(curso => curso.titulo);

console.log(desafio);

console.log("----------------");

/* DESAFIO TURBINADO!
Gerar um novo array com os cursos da categoria Mobile COM preço atualizado
com desconto de 10%. */
const desafioTurbinado = cursos
                            .filter(curso => curso.categoria === "Mobile")
                            .map(curso => ({
                                ...curso,
                                preco: curso.preco - curso.preco * 0.1
                            }));
console.log(desafioTurbinado);                            