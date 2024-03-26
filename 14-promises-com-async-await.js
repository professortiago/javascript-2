'use strict';

/* Recursos/Resources/Endpoints */
const API_URL = `https://jsonplaceholder.typicode.com/users/1`;

async function acessaAPI(){
    try {
        const resposta = await fetch(API_URL);
        if(!resposta.ok){
            throw new Error(
                `Erro na requisição: ${resposta.status} - ${resposta.statusText}`
            )
        }
        const dados = await resposta.json();
        console.log(dados);
    } catch (error) {
        console.error(`Erro: ${error.message}`)
    }
}

acessaAPI();
