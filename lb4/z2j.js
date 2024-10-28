let text = "abcdefghijklmnopqrstuvwxyz".substring(0, 20); //берем первые 20 символов

let positions = [3, 4, 9, 12, 14, 17]; 

let result = "";
for (let i = 0; i < positions.length; i++) {
    result += text[positions[i] - 1]; 
    }

document.getElementById("result").innerHTML = result;