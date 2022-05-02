var valores = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]; 

function buscaBinaria(num){
    var inicio = 0;
    var fim = valores.length - 1;
    while( inicio < fim ){
        var meio = parseInt((inicio + fim) / 2);
        if(num == valores[meio]){
            return `encontrei ${num} na posição ${meio}`;
        } else {
            if( num > meio) {
                inicio = meio + 1;
            } else {
                fim = meio - 1;
            }
        }
    }
    return `o número ${num} não existe no array valores`;
}

console.log(buscaBinaria(9));
console.log(buscaBinaria(11));