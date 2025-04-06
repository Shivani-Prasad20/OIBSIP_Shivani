const convert = () => {
    let fromUnit = document.getElementById('fromUnit').value;
    let toUnit = document.getElementById('toUnit').value;
    let temp = parseFloat(document.getElementById('temp').value);
    let convertedValue;
    
    if (isNaN(temp)) {
        document.getElementById('result').value = "Please enter a valid number";
        return;
    }

    switch (fromUnit) {
        case 'C':
            if (toUnit === 'F') {
                convertedValue = (temp * 9/5) + 32;
            } else if (toUnit === 'K') {
                convertedValue = temp + 273.15;
            } else {
                convertedValue = temp;
            }
            break;
        case 'F':
            if (toUnit === 'C') {
                convertedValue = (temp - 32) * 5/9;
            } else if (toUnit === 'K') {
                convertedValue = (temp - 32) * 5/9 + 273.15;
            } else {
                convertedValue = temp;
            }
            break;
        case 'K':
            if (toUnit === 'C') {
                convertedValue = temp - 273.15;
            } else if (toUnit === 'F') {
                convertedValue = (temp - 273.15) * 9/5 + 32;
            } else {
                convertedValue = temp;
            }
            break;
        default:
            document.getElementById('result').value = "Invalid conversion";
            return;
    }
    
    document.getElementById('result').value = convertedValue.toFixed(2) + ' ' + toUnit;
};

// Add event listener for responsiveness
document.getElementById('convertBtn').addEventListener('click', convert);

document.getElementById('temp').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        convert();
    }
});