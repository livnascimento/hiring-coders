var values = [40, 30, 50, 20, 60, 80, 100, 200, 0];
var size = values.length - 1;
var helper;

function bubbleSort(){
    for (h = 0; h < size ; h++){
        for(i = 0; i < size ; i++){
            if (values[i] > values[i + 1]){
                helper = values[i];
                values[i] = values[i + 1];
                values[i + 1] = helper;
            }
        }
    }
    return values;
}

console.log(bubbleSort());
