let text = "abcdefghijklmnopqrstuvwxyz".substring(0, 20); //берем первые 20 символов

let positions = [3, 4, 9, 12, 14, 17];

let variant = 7;

let result = "";
for (let i = 0; i < positions.length; i++) {
    let char = text[positions[i] - 1]; 
    result += char + variant;
    if (i < positions.length - 1) {
        result += "-"; 
    }
}

alert(result);