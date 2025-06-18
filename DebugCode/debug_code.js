function performOperation() {
    //Obtener la entrada del usuario de los campos de entrada
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);

    //Comprobar si las entradas son números válidos
    if(!isNaN(num1)& !isNaN(num2)) {
    //Realizar la operación

    let result = multiply(num1, num2);

    //Mostrar el resultado
    displayResult(result);

    }else{
        displayResult('Por favor ingresa numeros validos');

    }
}

function multiply(a,b) {
    // Introduzca una declaración de depuración para pausar la ejecución
    debugger;

    //Multiplica los numeros

    return a * b;
}

function displayResult(result) {
    // Mostrar el resultado en el elemento de párrafo
    const resultElement = document.getElementById('result');
    resultElement.textContent = `The result is: ${result}`;
}

