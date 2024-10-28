function submitForm() {
    //const birthPlace = document.getElementById("birthPlace").value;
    //const nationality = document.getElementById("nationality").value;
    //const education = document.getElementById("education").value;
    //const birthDate = document.getElementById("birthDate").value;
    const maritalStatus = document.getElementById("maritalStatus").value;
    const gender = document.getElementById("gender").value;
    const position = document.getElementById("position").value;

   
    // const output = `
    //     <p><strong>Место рождения:</strong> ${birthPlace}</p>
    //     <p><strong>Национальность:</strong> ${nationality}</p>
    //     <p><strong>Образование:</strong> ${education}</p>
    //     <p><strong>Дата рождения:</strong> ${birthDate}</p>
    //     <p><strong>Семейное положение:</strong> ${maritalStatus}</p>
    //     <p><strong>Пол:</strong> ${gender}</p>
    //     <p><strong>Должность:</strong> ${position}</p>
    // `;

    const output = `
        <p><strong>Семейное положение:</strong> ${maritalStatus}</p>
        <p><strong>Пол:</strong> ${gender}</p>
        <p><strong>Должность:</strong> ${position}</p>
    `;

    document.getElementById("output").innerHTML = output;
}