function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

function checkPrime() {
    const number = parseInt(document.getElementById("numberInput").value);
    const resultElement = document.getElementById("result");

    if (isPrime(number)) {
        resultElement.textContent = `${number} является простым числом.`;
    } else {
        resultElement.textContent = `${number} не является простым числом.`;
    }
}