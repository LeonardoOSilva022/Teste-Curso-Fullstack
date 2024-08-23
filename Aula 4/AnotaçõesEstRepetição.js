/* 
(while)

O 'while' repete um bloco de código enquanto uma condição for verdadeira. A condição é verificada antes de executar o bloco de código.

while (congelamento == false) {
    if (contador == 10) {
        congelamento = true;
    }
    console.log(contador);
    contador++;
}

Aqui, enquanto 'congelamento' for 'false', o loop continuará. Dentro do loop, 'contador' é incrementado a cada ciclo, e se atingir 10, a variável 'congelamento' se torna 'true', fazendo o loop parar.
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

(do .... while)

O 'do...while' é parecido com o 'while', mas a diferença principal é que o código dentro do bloco é executado pelo menos uma vez, independentemente da condição, porque a condição é verificada depois que o código é executado.

do {
    if (contador == 5) {
        condicional = false;
    }
    contador = contador + 1;
    console.log("Contador: ", contador);
} while (condicional == true);

O bloco de código dentro do 'do' é executado e, depois disso, a condição é verificada. Se condicional for 'true', o loop continua; caso contrário, ele para.
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

(for)

O 'for' é utilizado quando você sabe de antemão quantas vezes deseja repetir um bloco de código. Ele geralmente possui três partes: inicialização, condição e incremento.

for (i = 0; i <= 10; i++) {
    console.log(i);
}

Este loop começa com 'i = 0' e continua até 'i ser maior que 10', incrementando 'i em 1' a cada ciclo. Cada valor de 'i' é exibido no console.
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

(for each)

O 'forEach' é usado para iterar sobre os elementos de um array (lista). Ele executa um bloco de código para cada elemento no array.

list.forEach(element => {
    console.log(element);
});

Para cada elemento da lista 'list', o 'forEach' executa a função que exibe o elemento no console.

*/