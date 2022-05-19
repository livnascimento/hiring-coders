console.log('tô aqui');

function validando(){

    document.getElementById('success').style.display = 'none';
    document.getElementById('fail').style.display = 'none';

    var cpf = document.getElementById('inputCpf').value;

    var resultadoValidacao = validaCPF(cpf);

    if (resultadoValidacao === true){
        document.getElementById('success').style.display = 'block';
        regiao(cpf);
    } else {
        document.getElementById('fail').style.display = 'block';
    }

}

function validaCPF(cpf) {
    if(cpf.length != 11){
        return false;
    } else {
        var numeros = cpf.substring(0, 9);
        var digitos = cpf.substring(9);

        var soma = 0;
        for (var i = 10; i > 1; i--){
            soma += numeros.charAt(10 - i) * i;
        }

        var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

        if(resultado != digitos.charAt(0)) {
            return false;
        } 

        soma = 0;
        
        numeros = cpf.substring(0, 10);

        for (var j = 11; j > 1; j--){
            soma += numeros.charAt(11 - j) * j;
        }

        resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
        console.log(resultado);

        if(resultado != digitos.charAt(1)) {
            return false;
        } 

        return true;
    }
}

function regiao(cpf){
    var cpfString = cpf.toString();
    var cpfArray = cpfString.split('');

    switch (cpfArray[8]){
        case '0':
            document.getElementById('success').innerHTML = 'Seu CPF é válido! A região é Rio Grande do Sul'
            break;
        case '1':
            document.getElementById('success').innerHTML = 'Seu CPF é válido! A região é Distrito Federal, Goiás, Mato Grosso do Sul e Tocantins'
            break;
        case '2':
            document.getElementById('success').innerHTML = 'Seu CPF é válido! A região é Pará, Amazonas, Acre, Amapá, Rondônia e Roraima'
            break;
        case '3':
            document.getElementById('success').innerHTML = 'Seu CPF é válido! A região é Ceará, Maranhão e Piauí'
            break;
        case '4':
            document.getElementById('success').innerHTML = 'Seu CPF é válido! A região é Pernambuco, Rio Grande do Norte, Paraíba e Alagoas'
            break;
        case '5':
            document.getElementById('success').innerHTML = 'Seu CPF é válido! A região é Bahia e Sergipe'
            break;
        case '6':
            document.getElementById('success').innerHTML = 'Seu CPF é válido! A região é Minas Gerais'
            break;
        case '7':
            document.getElementById('success').innerHTML = 'Seu CPF é válido! A região é Rio de Janeiro e Espírito Santo'
            break;
        case '8':
            document.getElementById('success').innerHTML = 'Seu CPF é válido! A região é São Paulo'
            break;
        case '9':
            document.getElementById('success').innerHTML = 'Seu CPF é válido! A região é Paraná e Santa Catarina'
            break;
    }

}
