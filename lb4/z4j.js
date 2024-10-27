function checkString() {
    const str = document.getElementById("inputString").value;
    const k = parseInt(document.getElementById("inputK").value) - 1; // Преобразуем номер в индекс
    
    // Проверка наличия символа на позиции k
    if (k < 0 || k >= str.length) {
        document.getElementById("output").innerText = "Номер k выходит за пределы строки.";
        return;
    }
    
    const charAtK = str[k];
    const isLetter = /[a-zA-Z]/.test(charAtK); // Проверка, является ли символ буквой
    
    // Суммируем все цифры в строке
    const sumOfDigits = str.split('')
                            .filter(char => /\d/.test(char)) // Оставляем только цифры
                            .map(Number)                     // Преобразуем в числа
                            .reduce((sum, num) => sum + num, 0); // Суммируем
    
    const isSumEven = sumOfDigits % 2 === 0;
    
    // Формирование результата
    let result = `Символ на позиции k (${k+1}) — ${charAtK}, `;
    result += isLetter ? "он является буквой. " : "он не является буквой. ";
    result += `Сумма цифр строки: ${sumOfDigits}, `;
    result += isSumEven ? "она четная." : "она нечетная.";

    document.getElementById("output").innerText = result;
}