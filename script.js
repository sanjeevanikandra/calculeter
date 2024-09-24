let display = document.getElementById('result');
let buttons = document.querySelectorAll('button');

// Function to append value to display
function appendToDisplay(value) {
    display.value += value;
}

// Clear the display
function clearDisplay() {
    display.value = '';
}

// Delete last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate the result
function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

// Event listeners for buttons
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let value = e.target.innerText;

        if (value === 'AC') {
            clearDisplay();
        } else if (value === 'C') {
            deleteLast();
        } else if (value === '=') {
            calculateResult();
        } else {
            appendToDisplay(value);
        }
    });
});

// Event listener for keypress
document.addEventListener('keydown', function (event) {
    let key = event.key;

    if ((key >= '0' && key <= '9') || key === '.' || key === '+' || key === '-' || key === '*' || key === '/') {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Backspace') {
        deleteLast();
    } else if (key === 'Escape') {
        clearDisplay();
    }
});
