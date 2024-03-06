'use strict';

const modulosExemplos = require('./modulos-cjs/exemplos.js');

// Chamando a função existente no módulo a partir de uma refeência/constante
modulosExemplos.minhaFuncao();

// Acessando ao array de clientes declarado como módulo
console.log(modulosExemplos.clientes);