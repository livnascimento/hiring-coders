var pilha = [];
var posicao = 0;
var MAX = 10;

function push(num) {
    if (posicao == pilha.length && posicao + 1 <= MAX){
        pilha[posicao] = num;
        posicao++;
        console.log(pilha);
    } else {
        console.log("não temos mais espaço :/");
    }

}

function pop() {
    if(posicao <= 0){
        console.log("a pilha já está vazia");
    } else {
        pilha.pop();
        posicao--;
        console.log(pilha);
    }
}

push(12);
pop();
pop();
