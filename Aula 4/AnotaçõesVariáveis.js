/*
VARÍAVEIS -- 

(var)
Imagine que você está criando um loop que conta o número de vezes que uma página foi carregada.

function contarVisitas() {
    for (var i = 1; i <= 5; i++) {
        console.log("Visitante número " + i);
    }
    console.log("O último valor de i fora do loop é " + i); // i ainda está acessível aqui
}

contarVisitas();

SAÍDA: 
Visitante número 1
Visitante número 2
Visitante número 3
Visitante número 4
Visitante número 5
O último valor de i fora do loop é 6

Explicação: 'var i' é declarado dentro do loop, mas porque 'var' tem escopo de função (ou global), 'i' ainda existe fora do loop e retém seu último valor.
-----------------------------------------------------------------------------------------------------------------------------------------------------------------

(let)

Agora, vamos fazer um loop onde 'let' é usado. Isso é útil se você quiser garantir que a variável usada dentro do loop não esteja acessível fora dele.

function contarVisitasComLet() {
    for (let i = 1; i <= 5; i++) {
        console.log("Visitante número " + i);
    }
    // console.log("O último valor de i fora do loop é " + i); // Isso causaria um erro
}

contarVisitasComLet();

SAÍDA: 
Visitante número 1
Visitante número 2
Visitante número 3
Visitante número 4
Visitante número 5

Explicação: 'let i' só existe dentro do loop. Tentar acessar 'i' fora do loop resulta em um erro porque 'let' tem escopo de bloco.
-----------------------------------------------------------------------------------------------------------------------------------------------------------------

(const)

Vamos imaginar que você tem uma configuração de aplicativo onde alguns valores não devem mudar, como uma chave de API ou um URL base.

const API_URL = "https://api.exemplo.com/v1/";
const MAX_TENTATIVAS = 3;

function fazerRequisicao() {
    for (let tentativa = 1; tentativa <= MAX_TENTATIVAS; tentativa++) {
        console.log("Tentativa " + tentativa + " de conexão com " + API_URL);
    }
}

fazerRequisicao();

SAÍDA: 
Tentativa 1 de conexão com https://api.exemplo.com/v1/
Tentativa 2 de conexão com https://api.exemplo.com/v1/
Tentativa 3 de conexão com https://api.exemplo.com/v1/

Explicação: 'const API_URL' e 'const MAX_TENTATIVAS' são valores fixos que não devem mudar durante a execução do programa. 'const' assegura que esses valores não sejam acidentalmente reatribuídos.
Dentro do loop, usamos 'let'  para a variável 'tentativa' pois seu valor muda a cada iteração, mas fora do loop ela não existe.

*/