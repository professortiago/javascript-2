'use strict';

/* Recursos/Resources/Endpoints */
const API_URL = `https://jsonplaceholder.typicode.com/users/1`;

function acessaAPI(){
    /* Etapa 1
    Processo de acessar/conectar À API */
    fetch(API_URL)

    /* Etapa 2
    Capturar a resposta do acesso à API */
    .then( resposta => {
        console.log(resposta);

        /* Se a resposta da requisição à API NÃO FOR BEM SUCEDIDA (exemplo: se 
        não houver registro, ou se o servidor da API estiver com algum erro etc) */
        if(!resposta.ok){
            throw new Error(
                `Erro na requisição: ${resposta.status} - ${resposta.statusText}`
            )
        }

        return resposta.json();
    })

    /* Etapa 3
    Capturar os dados vindos à partir da resposta da API */
    .then( dados => console.log(dados) )

    /* Etapa 4 
    Captura de possíveis erros diversos */
    .catch( error => console.error(`Erro: ${error.message}`) )
}

acessaAPI();