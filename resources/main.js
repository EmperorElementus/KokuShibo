const firstRow = 'Slow and steady wins the race';
const secondRow = 'You can say that again';

function countLetters(str, letter) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i).toLowerCase() === letter.toLowerCase()) {
            count++;
        }
    }
    return count;
}

function getRow(firstRow, secondRow) {
    const countAInFirstRow = countLetters(firstRow, 'a');
    const countAInSecondRow = countLetters(secondRow, 'a');
    
    return countAInFirstRow > countAInSecondRow ? firstRow : secondRow;
}

document.getElementById('countLetters').addEventListener('click', () => {
    const userInput = prompt("Введіть букву для підрахунку:");
    if (userInput && userInput.length === 1) {
        alert(`Рядок з більшою кількістю літер '${userInput}': ${getRow(firstRow, secondRow)}`);
    } else {
        alert("Будь ласка, введіть лише одну букву.");
    }
});

function formattedPhone(phone) {
    const formats = [
        /^\+38\s\((\d{3})\)\s(\d{3})-(\d{2})-(\d{2})$/,
        /^80(\d{2})(\d{3})(\d{2})(\d{2})$/,
        /^(\d{3})(\d{7})$/,
        /^(\+38)(\d{10})$/
    ];

    for (const format of formats) {
        const match = phone.match(format);
        if (match) {
            if (format === formats[0]) {
                return phone;
            } else if (format === formats[1]) {
                return `+38 (${match[1]}) ${match[2]}-${match[3]}-${match[4]}`;
            } else if (format === formats[2]) {
                return `+38 (${match[1]}) ${match[2].slice(0, 3)}-${match[2].slice(3, 5)}-${match[2].slice(5)}`;
            } else if (format === formats[3]) {
                const operatorCode = match[2].slice(0, 3);
                const number = match[2].slice(3);
                return `+38 (${operatorCode}) ${number.slice(0, 3)}-${number.slice(3, 5)}-${number.slice(5)}`;
            }
        }
    }

    return "Формат телефону неправильний!";
}

document.getElementById('formatPhone').addEventListener('click', () => {
    const phoneInput = prompt("Введіть номер телефону:");
    const formatted = formattedPhone(phoneInput);
    alert(`Відформатований номер: ${formatted}`);
});