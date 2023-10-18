function type() {
    let i = 0;
    let placeholder = "";
    const txt = "Ваше имя";
    const speed = 130;

    function doType() {
        placeholder += txt.charAt(i);
        document.getElementById("ticketClientName").setAttribute("placeholder", placeholder);
        i++;
        if (i < txt.length) {
            setTimeout(doType, speed);
        } else {
            setTimeout(startOver, 6300);
        }
    }

    doType();
}

function startOver() {
    document.getElementById("ticketClientName").setAttribute("placeholder", ""); // Сбрасываем плейсхолдер
    setTimeout(type, 0); // Запускаем анимацию заново с задержкой 0
}

type();  // Запускаем анимацию в первый раз