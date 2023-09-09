document.getElementById("convertBtn").addEventListener("click", function () {
    const inputTemp = parseFloat(document.getElementById("inputTemp").value);
    const inputUnit = document.getElementById("inputUnit").value;
    const resultDiv = document.getElementById("result");

    if (inputUnit === "celsius") {
        const convertedTemp = (inputTemp * 9/5) + 32;
        resultDiv.textContent = `${inputTemp}°C is ${convertedTemp.toFixed(2)}°F`;
    } else if (inputUnit === "fahrenheit") {
        const convertedTemp = (inputTemp - 32) * 5/9;
        resultDiv.textContent = `${inputTemp}°F is ${convertedTemp.toFixed(2)}°C`;
    }
});
