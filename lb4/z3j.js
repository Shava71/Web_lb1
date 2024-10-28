function findMax() {
    let numbers = [];
    for (let i = 1; i <= 8; i++) {
        numbers.push(parseFloat(document.getElementById("input" + i).value));
    }

    // Находим максимальное значение
    let maxValue = Math.max(...numbers);

    // Выводим результат
    document.getElementById("output").innerHTML = "Максимальное значение: " + maxValue;
}