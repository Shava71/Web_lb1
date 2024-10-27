let R = ['k'];
        
// Добавляем 4 числовых элемента в начало массива
const numbersToAdd = [1, 2, 3, 4]; // Пример значений
R = numbersToAdd.concat(R); // Добавляем числа в начало

// Добавляем 2 текстовых элемента в конец массива
const textsToAdd = ['m', 's'];
R = R.concat(textsToAdd); // Добавляем текст в конец

// Выводим результат
document.getElementById("output").innerHTML = `Массив R: [${R.join(', ')}]`;