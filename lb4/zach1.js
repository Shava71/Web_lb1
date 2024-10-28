let str = 'abcde abcde abcde';

document.getElementById('beforeOutput').innerText = str;
        let words = str.split(' ');

        for (let i = 0; i < words.length; i++) {
            words[i] = '!' + words[i].substring(1);
        }

        let result = words.join(' '); 
        document.getElementById('output').innerText = result; 