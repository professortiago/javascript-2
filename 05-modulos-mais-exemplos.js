'use strict';

// Importação de recurso padrão (default)
import alunos from "./modulos-esm/alunos.js";

// Importação de múltiplos recursos (como uma lista de objetos)
/* Obs.: uso do as para definir um apelido para o recurso, evitando conflitos de nome */
import { pessoa, livro, alunos as alunosVips } from "./modulos-esm/dados.js";

/* import { 
    converterMaiusculas, 
    converterMinusculas, 
    formatarMoeda 
} from "./modulos-esm/funcoes.js"; */

/* Importação de módulos através do operador * (tudo/todos) e de um apelido */
import * as minhasFuncoes from "./modulos-esm/funcoes.js";

console.log(alunos); // array alunos existente em alunos.js
console.log(pessoa);
console.log(livro);
console.log(alunosVips); // array alunos existente em dados.js


/* Exercícios

1) Crie um arquivo "funcoes.js" dentro da pasta "modulos-esm" 
2) Dentro deste arquivo programe 3 funções: converter caracteres para maiúsculo, converter caracteres para minúsculo e formatação para moeda brasileira. 
3) Exporte-as como módulos
4) No arquivo 05, importe e utilize estas funções passando textos e valores para testes. */
console.log(minhasFuncoes.converterMaiusculas("javascript"));
console.log(minhasFuncoes.converterMinusculas("TIAGO"));
console.log(minhasFuncoes.formatarMoeda(2112));

