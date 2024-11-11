// let board = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
let board = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 16, 11, 13, 14, 15, 12];
const size = 4;
let selectedTile = null;//выбранная клетка

// function shuffleBoard() {
//     for (let i = board.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [board[i], board[j]] = [board[j], board[i]];
//     }
// }

function createBoard() {
    const gameDiv = document.getElementById("game");
    gameDiv.innerHTML = '';

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const tile = document.createElement("div");
            const number = board[i * size + j];
            tile.textContent = number !== 16 ? number : "";
            tile.style.width = "50px";
            tile.style.height = "50px";
            tile.style.display = "inline-block";
            tile.style.textAlign = "center";
            tile.style.verticalAlign = "top";
            tile.style.border = selectedTile === i * size + j ? "2px solid yellow" : "1px solid black";
            tile.style.fontSize = "24px";
            tile.style.cursor = "pointer";
            tile.dataset.index = i * size + j;//сохранение индекса плитки
            tile.addEventListener("click", () => selectTile(i, j));
            gameDiv.appendChild(tile);
        }
        gameDiv.appendChild(document.createElement("br"));
    }
}

//клик по плитке
function selectTile(i, j) {
    const index = i * size + j;

    if (selectedTile === null) {
        selectedTile = index;
    } else {
        //если плитка выбрана, проверяем является ли вторая плитка пустой
        if (board[index] === 16 && isAdjacent(selectedTile, index)) {
            [board[selectedTile], board[index]] = [board[index], board[selectedTile]];
            selectedTile = null;
        } else {
            selectedTile = index;  //перевыбираем кликнутую плитку
        }
    }
    createBoard();
    checkWin();
}

//нахождение плитки рядом с пустой клеткой
function isAdjacent(index1, index2) {
    const row1 = Math.floor(index1 / size);
    const col1 = index1 % size;
    const row2 = Math.floor(index2 / size);
    const col2 = index2 % size;

    return (Math.abs(row1 - row2) === 1 && col1 === col2) ||
           (Math.abs(col1 - col2) === 1 && row1 === row2);
}


function checkWin() {
    const isSorted = board.every((val, idx) => val === idx + 1);
    if (isSorted) {
        alert("Поздравляем! Вы выиграли!");
    }
}

// shuffleBoard();
createBoard();