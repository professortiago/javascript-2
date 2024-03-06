'use strict';

// Módulo CJS
function minhaFuncao(){
    console.log("Olá! Função chamada via módulo!");
}

const clientes = ["Bernardo", "Michele", "Pandora"];

module.exports = { minhaFuncao, clientes }