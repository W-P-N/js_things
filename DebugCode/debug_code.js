function performOperation() {
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    
    if(!isNaN(num1) && !isNaN(num2)) {
        let resultMul = multiply(num1, num2);
        let resultAdd = add(num1, num2);
        let resultSub = subtract(num1, num2);
        let resultDiv = division(num1, num2);

        displayResult(resultMul, resultAdd, resultSub, resultDiv);
    } else {
        displayResult('Please enter valid numbers');
    };
};

function multiply(a, b) {
    debugger;
    return a * b;
};

function add(a, b) {
    debugger;
    return a + b;
};

function subtract(a, b) {
    debugger;
    if(a > b) {
        return a - b;
    } else {
        return b - a;
    }
};

function division(a, b) {
    debugger;
    return a / b;
};

function displayResult(resultMul, resultAdd, resultSub, resultDiv) {
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Multiplication: ${resultMul}, Addition: ${resultAdd}, Subtraction: ${resultSub}, Division: ${resultDiv}`;
};
