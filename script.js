
        function convertTemperature() {
            const inputTemperature = parseFloat(document.getElementById('inputTemperature').value);
            const fromUnit = document.getElementById('fromUnit').value;
            const toUnit = document.getElementById('toUnit').value;
            let result;

            if (fromUnit === 'celsius') {
                if (toUnit === 'fahrenheit') {
                    result = (inputTemperature * 9/5) + 32;
                } else if (toUnit === 'kelvin') {
                    result = inputTemperature + 273.15;
                } else {
                    result = inputTemperature;
                }
            } else if (fromUnit === 'fahrenheit') {
                if (toUnit === 'celsius') {
                    result = (inputTemperature - 32) * 5/9;
                } else if (toUnit === 'kelvin') {
                    result = (inputTemperature - 32) * 5/9 + 273.15;
                } else {
                    result = inputTemperature;
                }
            } else if (fromUnit === 'kelvin') {
                if (toUnit === 'celsius') {
                    result = inputTemperature - 273.15;
                } else if (toUnit === 'fahrenheit') {
                    result = (inputTemperature - 273.15) * 9/5 + 32;
                } else {
                    result = inputTemperature;
                }
            }

            document.getElementById('result').textContent = `${inputTemperature} ${fromUnit} is ${result.toFixed(2)} ${toUnit}`;
        }

        convertTemperature();
    