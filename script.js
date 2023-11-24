function calculate() {
    const num1 = parseFloat(document.getElementById('firstNumber').value);
    const operator = document.getElementById('operatorBox').value;
    const num2 = parseFloat(document.getElementById('secondNumber').value);

    let result;
  // Generate a random number between 0 and 1
    const randomValue = Math.random();
      
    // Apply the faulty behavior 10% of the time
    if (randomValue <= 0.1) {
        switch (operator) {
            case '+':
                result = num1 - num2;
                break;
            case '-':
                result = num1 / num2;
                break;
            case '*':
                result = num1 + num2;
                break;
            case '/':
                result = num1 ** num2;
                break;
            default:
                result = 'Invalid operator';
        }
    } else {
        // Normal behavior
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
            default:
                result = 'Invalid operator';
        }
    }

    document.getElementById('result').innerText = `Result: ${result}`;
}