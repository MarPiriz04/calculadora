
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
// document.addEventListener("DOMContentLoaded", function() {
//     const display = document.getElementById('display');
//     const buttons = document.querySelectorAll('#calculator button');

//     let currentInput = '';
//     let previousInput = '';
//     let operator = '';

//     const numbersArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

//     buttons.forEach(button => {
//         button.addEventListener('click', function() {
//             const buttonValue = this.id;

//             if (numbersArray.includes(buttonValue)) {
//                 handleNumberInput(buttonValue);
//             } else if (buttonValue === 'ac') {
//                 clearAll();
//             } else if (buttonValue === 'de') {
//                 deleteLastCharacter();
//             } else if (buttonValue === '=') {
//                 performCalculation();
//             } else if (['+', '-', '*', '/'].includes(buttonValue)) {
//                 setOperator(buttonValue);
//             }
//         });
//     });
//     function handleNumberInput(value) {
//         if (value === '.' && currentInput.includes('.')) return;
//         currentInput += value;
//         display.value = currentInput;
//     }
//     function clearAll() {
//         currentInput = '';
//         previousInput = '';
//         operator = '';
//         display.value = '';
//     }
//     function deleteLastCharacter() {
//         currentInput = currentInput.slice(0, -1);
//         display.value = currentInput;
//     }
//     function performCalculation() {
//         if (previousInput && currentInput && operator) {
//             const result = calculate(parseFloat(previousInput), parseFloat(currentInput), operator);
//             display.value = result;
//             currentInput = result.toString();
//             previousInput = '';
//             operator = '';
//         }
//     }
//     function setOperator(value) {
//         if (currentInput) {
//             if (previousInput) {
//                 previousInput = calculate(parseFloat(previousInput), parseFloat(currentInput), operator).toString();
//             } else {
//                 previousInput = currentInput;
//             }
//             currentInput = '';
//             operator = value;
//         }
//     }
//     function calculate(num1, num2, op) {
//         switch (op) {
//             case '+':
//                 return num1 + num2;
//             case '-':
//                 return num1 - num2;
//             case '*':
//                 return num1 * num2;
//             case '/':
//                 return num1 / num2;
//             default:
//                 return 'Error';
//         }
//     }
// });
document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.button');
    let currentInput = '';
    let previousInput = '';
    let operator = '';
    const numbersArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
    buttons.forEach(button => {
        button.addEventListener('click', function () {
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
            } else if (buttonValue === 'save') {
                saveToStorage();
            } else if (buttonValue === 'load') {
                loadFromStorage();
            }
        });
    });
// Evento: Clic en Botones Numerales y el Punto Decimal
//escripción: Cuando el usuario hace clic en un botón que representa un número (0–9) o el punto decimal.
//Función de Respuesta: `handleNumberInput(value)`
// Propósito:
//   - Agregar el valor numérico o el punto decimal al `currentInput`.
//   - Actualizar la pantalla de la calculadora con el nuevo `currentInput`.
function handleNumberInput(value) {
    if (value === '.' && currentInput.includes('.')) return;
    currentInput += value;
    updateDisplay(currentInput);
}
//Evento: Clic en el Botón de Limpiar (Clear)
// Descripción: Cuando el usuario hace clic en el botón "AC" para borrar toda la entrada.
// Función de Respuesta: `clearAll()`
//Propósito:
//    - Reiniciar `currentInput`, `previousInput` y `operator` a una cadena vacía.
//    - Limpiar la pantalla de la calculadora.
function clearAll() {
    currentInput = previousInput = operator = '';
    updateDisplay('');
}
// Evento: Clic en el Botón de Borrar Último Carácter (Delete)
//Descripción: Cuando el usuario hace clic en el botón "DE" para borrar el último carácter de la entrada actual.
//Función de Respuesta: `deleteLastCharacter()`
//Propósito:
//    - Eliminar el último carácter de `currentInput`.
//    - Actualizar la pantalla de la calculadora con el nuevo `currentInput`.
function deleteLastCharacter() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay(currentInput);
}
//Evento: Clic en el Botón de Igual (Equals)
//Descripción: Cuando el usuario hace clic en el botón "=" para realizar la operación matemática.
//Función de Respuesta: `performCalculation()`
//Propósito:
//    - Realizar la operación matemática con los valores en `previousInput`, `currentInput` y `operator`.
//    - Mostrar el resultado en la pantalla de la calculadora.
//    - Actualizar `currentInput` con el resultado y reiniciar `previousInput` y `operator`.
function performCalculation() {
    if (previousInput && currentInput && operator) {
        const result = calculate(parseFloat(previousInput), parseFloat(currentInput), operator);
        updateDisplay(result);
        currentInput = result.toString();
        previousInput = operator = '';
    }
}
//Evento: Clic en un Botón de Operador (+, -, *, /)
//Descripción: Cuando el usuario hace clic en un botón que representa una operación aritmética.
//Función de Respuesta: `setOperator(value)`
//Propósito:
//    - Si hay una entrada actual (`currentInput`), actualizar `previousInput` con el resultado de la operación actual (si ya se había ingresado una operación).
//    - Guardar `currentInput` en `previousInput` y limpiar `currentInput`.
//    - Configurar el nuevo `operator` seleccionado.
function setOperator(value) {
    if (currentInput) {
        if (previousInput) {
            currentInput = calculate(parseFloat(previousInput), parseFloat(currentInput), operator).toString();
        }
        previousInput = currentInput;
        currentInput = '';
        operator = value;
        updateDisplay(previousInput);
    }
}
//### Función de Cálculo
//Función Auxiliar: Calcular Operación**
//Descripción:** Lógica para realizar las operaciones matemáticas básicas.
//Función:** `calculate(num1, num2, op)`
//Propósito:**
//    - Realizar la operación aritmética basada en los operadores ingresados (`+`, `-`, `*`, `/`).
//    - Manejar el caso de dividir por cero.
function calculate(num1, num2, op) {
    switch (op) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num2 === 0 ? 'Error: Divide by 0' : (num1 / num2);
        default:
            return 'Error';
    }
}
//##Guardar el Estado:
//Función: `saveToStorage()`
//Propósito: Guarda el estado actual de la calculadora (entradas y operador) en `localStorage`.
//Detalles: Crea un objeto `calculatorState` que contiene el `currentInput`, `previousInput`, y `operator`, y lo almacena como una cadena JSON en `localStorage` bajo la clave `calculatorState`.
//##Cargar el Estado:
//Función: `loadFromStorage()`
//Propósito: Recupera el estado guardado de la calculadora desde `localStorage` y lo restaura en la aplicación.
//Detalles: Obtiene el elemento con la clave `calculatorState` de `localStorage`, lo convierte de JSON a un objeto, y asigna sus valores a `currentInput`, `previousInput`, y `operator`. Luego actualiza la pantalla con el valor correspondiente.
//##Consideraciones adicionales:
//Validación de Datos:
//Se verifica si hay datos guardados antes de intentar cargar el estado para evitar errores.
//Alertas de Usuario:
//Se utilizan `alert` para informar al usuario cuando el estado se guarda o carga correctamente.
//Implementando estas funcionalidades, la calculadora podrá guardar y recuperar su estado, proporcionando una experiencia de usuario más continua y conveniente.
function updateDisplay(value) {
    display.value = value;
}
function saveToStorage() {
    const calculatorState = {
        currentInput: currentInput,
        previousInput: previousInput,
        operator: operator
    };
    localStorage.setItem('calculatorState', JSON.stringify(calculatorState));
    alert('State saved!');
}
function loadFromStorage() {
    const loadedState = localStorage.getItem('calculatorState');
    if (loadedState) {
        const { currentInput: savedCurrentInput, previousInput: savedPreviousInput, operator: savedOperator } = JSON.parse(loadedState);
        currentInput = savedCurrentInput;
        previousInput = savedPreviousInput;
        operator = savedOperator;
        updateDisplay(currentInput || previousInput);
        alert('State loaded!');
    } else {
        alert('No saved state found!');
    }
}
});