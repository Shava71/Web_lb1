function submitForm() {
    const trainNumber = document.getElementById("trainNumber").value;
    const trainCategory = document.querySelector('input[name="trainCategory"]:checked').value;
    const direction = document.getElementById("direction").value;
    const trainName = document.getElementById("trainName").value;
    const ticketCount = document.getElementById("ticketCount").value;
    const wagonClass = document.getElementById("wagonClass").value;

    const orderSummary = `
        <p><strong>Номер поезда:</strong> ${trainNumber}</p>
        <p><strong>Категория:</strong> ${trainCategory}</p>
        <p><strong>Направление:</strong> ${direction}</p>
        <p><strong>Название поезда:</strong> ${trainName}</p>
        <p><strong>Количество билетов:</strong> ${ticketCount}</p>
        <p><strong>Класс вагона:</strong> ${wagonClass}</p>
    `;

    alert("Форма успешно отправлена!");
    document.getElementById("orderSummary").innerHTML = orderSummary;
}

function populateTrainNames() {
    const trainDirection = document.getElementById("direction").value;
    const trainNameSelect = document.getElementById("trainName");

    trainNameSelect.innerHTML = "";

    let trainOptions;
    if (trainDirection === "Могилев-Минск") {
        trainOptions = ["Красная стрела", "Ночной экспресс"];
    } else if (trainDirection === "Могилев-Орша") {
        trainOptions = ["Дневной экспресс", "Звезда"];
    }

    trainOptions.forEach(name => {
        const option = new Option(name, name);
        trainNameSelect.add(option);
    });
}