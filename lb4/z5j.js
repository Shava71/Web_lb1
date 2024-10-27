function analyzeDate() {
    // Получаем дату
    const dateInput = document.getElementById("inputDate").value;
    if (!dateInput) {
        document.getElementById("output").innerText = "Пожалуйста, введите дату.";
        return;
    }

    const date = new Date(dateInput);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Месяц начинается с 0, добавляем 1
    const year = date.getFullYear();

    // Определение времени года
    let season;
    if (month === 12 || month === 1 || month === 2) {
        season = "зима";
    } else if (month >= 3 && month <= 5) {
        season = "весна";
    } else if (month >= 6 && month <= 8) {
        season = "лето";
    } else if (month >= 9 && month <= 11) {
        season = "осень";
    }

    // Определение декады месяца
    let decade;
    if (day <= 10) {
        decade = "первая декада";
    } else if (day <= 20) {
        decade = "вторая декада";
    } else {
        decade = "третья декада";
    }

    // Название месяца
    const monthNames = [
        "январь", "февраль", "март", "апрель", "май", "июнь",
        "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"
    ];
    const monthName = monthNames[month - 1];

    // Определение високосного года
    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    const leapYearText = isLeapYear ? "високосный год" : "не високосный год";

    // Формирование результата
    const result = `
        Время года (ВГ): ${season}<br>
        Декада месяца (ДМ): ${decade}<br>
        Месяц (МГ): ${monthName}<br>
        Год (ВсГ): ${leapYearText}
    `;
    document.getElementById("output").innerHTML = result;
}