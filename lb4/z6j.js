const now = new Date();
        
   
        const formattedDate = `${now.getFullYear()}, месяц: ${now.getMonth() + 1}, день: ${now.getDate()}, час: ${now.getHours()}, минут: ${now.getMinutes()}, секунд: ${now.getSeconds()}`;
        
        //количество миллисекунд с 01.01.1970
        const millisecondsSinceEpoch = Date.parse(now);
        
        //количество секунд с 01.01.1970
        const secondsSinceEpoch = Math.floor(now.getTime() / 1000);
        
        //Номер и название дня недели
        const daysOfWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
        const dayOfWeekNumber = now.getDay();
        const dayOfWeekName = daysOfWeek[dayOfWeekNumber];

        document.getElementById("output").innerHTML = `
            Форматированная дата: ${formattedDate}<br>
            Миллисекунды с 01.01.1970: ${millisecondsSinceEpoch}<br>
            Секунды с 01.01.1970: ${secondsSinceEpoch}<br>
            День недели: ${dayOfWeekNumber} (${dayOfWeekName})
        `;