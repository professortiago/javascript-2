'use strict';

/* Desestruturação de Arrays */
const clientes = ["Jon Oliva", "Geddy Lee", "David Gilmour"];

const [cliente1, cliente2, cliente3] = clientes;

console.log(cliente1);
console.log(cliente2);
console.log(cliente3);

console.log("---------------");

const capitais = ["João Pessoa", "Manaus", "Curitiba", "Salvador", "Belo Horizonte"];
const [paraiba, amazonas, , bahia] = capitais;

console.log(paraiba);
console.log(amazonas);
console.log(bahia);

console.log("---------------");

const linguagens = [
    ["HTML", "CSS", "JS"],
    ["PHP", "Node.js", "SQL", "Python"]
];

const [frontEnd, backEnd] = linguagens;
console.log(frontEnd[0]);
console.log(backEnd[2]);

// Desestruturação aninhada
const [ [html, css, js], [php, nodejs, sql, python] ] = linguagens;

console.log("-- Front-End --");
console.log(html);
console.log(css);
console.log(js);

console.log("-- Back-End --");
console.log(php);
console.log(nodejs);
console.log(sql);
console.log(python);

console.log("---------------");

const diversos = [
    "JavaScript - Trilha 2",
    ["Nodejs", "Módulos", "Arrows Functions"],
    2112,
    texto => texto.toUpperCase()
];

console.log(diversos[0]);
console.log(diversos[1][2]);
console.log(diversos[2]);
console.log(diversos[3]("olá"));

console.log("------");

const [js2, [node, modulos, arrowFunctions], valor, converteTexto ] = diversos;
console.log(js2);
console.log(arrowFunctions);
console.log(valor);
console.log(converteTexto("texto qualquer"));

console.log("-----------------------------");

// Desestruturando objetos

const musico = {
    nome: "David Gilmour",
    instrumento: "Guitarra",
    idade: 77,
    banda: "Pink Floyd"
};

const { nome, instrumento, idade, banda } = musico;
console.log(nome);
console.log(instrumento);
console.log(idade);
console.log(banda);

const aluno = {
    nome: "Ozzy Osbourne",
    cidade: "São Paulo",
    estado: "SP"
};

// Alias/apelido 
const { nome: nomeDoAluno, cidade, estado } = aluno;
console.log(nomeDoAluno);
console.log(cidade);
console.log(estado);

console.log("----------------");

const cliente = {
    nome: "David Coverdale",
    idade: 75,
    contatos: ["david@whitesnake.com", "21-93333-4444"],
    valor: 1275.43,
    endereco: {
        rua: "ABCD",
        numero: "25A",
        bairro: "Centro"
    },
    atendimento: function(){
    // atendimento: () => {
    // atendimento(){
        return cliente.idade >= 60 ? "prioritário" : "normal"
    }
};

console.log(cliente.nome);
console.log(cliente.contatos[0]);
console.log(cliente.endereco.rua);
console.log(cliente.atendimento());

// Desestruturando o objeto cliente
const { 
    nome: nomeCliente, 
    idade: idadeCliente, 
    contatos: [email, telefone],
    valor: valorDoPedido,
    endereco: { rua, numero, bairro },
    atendimento
} = cliente;

console.log("--- Após desestruturação: ---");
console.log(nomeCliente);
console.log(idadeCliente);
console.log(email);
console.log(telefone);
console.log(valorDoPedido);
console.log(rua);
console.log(numero);
console.log(bairro);
console.log(atendimento());


console.log("-------");

// Desestruturando parâmetros de função
function exibirDados({titulo, ano}){
    console.log(`Filme: ${titulo} (${ano})`);
}

const filme1 = {
    titulo: "O Hobbit",
    ano: 2012
};

const filme2 = {
    titulo: "O Senhor dos Anéis",
    ano: 2001
};

exibirDados(filme1);
exibirDados(filme2);






