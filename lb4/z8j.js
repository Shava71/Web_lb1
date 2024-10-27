const k = 3; 
const m = 3; 


let array = [
    [1, "apple", 3],
    ["banana", 5, "cherry"],
    [7, "date", 9]
];

document.getElementById("output1").innerHTML = `
    ${array.map(row => `${row.join(', ')}`).join('<br>')}
`;

//Преобразуем числовые элементы массива в строки
for (let i = 0; i < k; i++) {
    for (let j = 0; j < m; j++) {
        if (typeof array[i][j] === 'number') {
            array[i][j] = array[i][j].toString();
        }
    }
}

for (let i = 0; i < k; i++) {
    array[i] = array[i].reverse();
}

// Обратный порядок строк
array = array.reverse();

// Выводим результат на страницу
document.getElementById("output2").innerHTML = `
    Двухмерный массив после преобразований:<br>
    ${array.map(row => `${row.join(', ')}`).join('<br>')}
`;