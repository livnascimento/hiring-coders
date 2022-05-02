var valores = [10, 25, 39, 42, 60, 70];

function buscar(num){
    for(i = 0 ; (i < valores.length) ; i++){
        if(num == valores[i]){
            return `O número está na posição ${i}`;
        } 
    };
    return "esse número não existe no array";
}

console.log(buscar(42));
console.log(buscar(90));