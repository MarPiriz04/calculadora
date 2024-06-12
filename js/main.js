
// document.addEventListener("DOMContentLoaded", function() {
//     const display = document.getElementById('display');
//     const buttons = document.querySelectorAll('#calculator button');

//     let currentInput = '';
//     let previousInput = '';
//     let operator = '';

//     buttons.forEach(button => {
//         button.addEventListener('click', function() {
//             const buttonValue = this.id;

//             if (buttonValue === 'ac') {
//                 // Clear everything
//                 currentInput = '';
//                 previousInput = '';
//                 operator = '';
//                 display.value = '';
//             } else if (buttonValue === 'de') {
//                 // Delete last character
//                 currentInput = currentInput.slice(0, -1);
//                 display.value = currentInput;
//             } else if (buttonValue === '=') {
//                 // Perform calculation
//                 if (previousInput && currentInput && operator) {
//                     const result = calculate(parseFloat(previousInput), parseFloat(currentInput), operator);
//                     display.value = result;
//                     currentInput = result.toString();
//                     previousInput = '';
//                     operator = '';
//                 }
//             } else if (['+', '-', '*', '/'].includes(buttonValue)) {
//                 // Set operator
//                 if (currentInput) {
//                     if (previousInput) {
//                         previousInput = calculate(parseFloat(previousInput), parseFloat(currentInput), operator).toString();
//                     } else {
//                         previousInput = currentInput;
//                     }
//                     currentInput = '';
//                     operator = buttonValue;
//                 }
//             } else {
//                 // Handle number and dot input
//                 if (buttonValue === '.' && currentInput.includes('.')) return;
//                 currentInput += buttonValue;
//                 display.value = currentInput;
//             }
//         });
//     });

//     function calculate(a, b, operator) {
//         switch(operator) {
//             case '+':
//                 return a + b;
//             case '-':
//                 return a - b;
//             case '*':
//                 return a * b;
//             case '/':
//                 return b === 0 ? 'Error' : a / b;
//             default:
//                 return null;
//         }
//     }
// });
document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('#calculator button');
    
    let currentInput = '';
    let previousInput = '';
    let operator = '';

    const numbersArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonValue = this.id;
            
            if (numbersArray.includes(buttonValue)) {
                handleNumberInput(buttonValue);
            } else if (buttonValue === 'ac') {
                clearAll();
            } else if (buttonValue === 'de') {
                deleteLastCharacter();
            } else if (buttonValue === '=') {
                performCalculation();
            } else if (['+', '-', '*', '/'].includes(buttonValue)) {
                setOperator(buttonValue);
            }
        });
    });
    function handleNumberInput(value) {
        if (value === '.' && currentInput.includes('.')) return;
        currentInput += value;
        display.value = currentInput;
    }
    function clearAll() {
        currentInput = '';
        previousInput = '';
        operator = '';
        display.value = '';
    }
    function deleteLastCharacter() {
        currentInput = currentInput.slice(0, -1);
        display.value = currentInput;
    }
    function performCalculation() {
        if (previousInput && currentInput && operator) {
            const result = calculate(parseFloat(previousInput), parseFloat(currentInput), operator);
            display.value = result;
            currentInput = result.toString();
            previousInput = '';
            operator = '';
        }
    }
    function setOperator(value) {
        if (currentInput) {
            if (previousInput) {
                previousInput = calculate(parseFloat(previousInput), parseFloat(currentInput), operator).toString();
            } else {
                previousInput = currentInput;
            }
            currentInput = '';
            operator = value;
        }
    }
    function calculate(num1, num2, op) {
        switch (op) {
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '*':
                return num1 * num2;
            case '/':
                return num1 / num2;
            default:
                return 'Error';
        }
    }
});