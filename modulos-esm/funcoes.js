'use strict';

const converterMaiusculas = (texto) => {
    return texto.toUpperCase();
}

const converterMinusculas = (texto) => {
    return texto.toLowerCase();
}

const formatarMoeda = (valor) => {
    return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(valor)
}

export { converterMaiusculas, converterMinusculas, formatarMoeda };