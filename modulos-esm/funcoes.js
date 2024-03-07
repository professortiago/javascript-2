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

// ...rest para obter uma lista de parâmetros independente de quantidade
function classificar(...textos){
    return textos.sort();
}

export { converterMaiusculas, converterMinusculas, formatarMoeda, classificar };