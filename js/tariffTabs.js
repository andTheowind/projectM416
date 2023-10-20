
document.addEventListener('DOMContentLoaded', function () {
    // Получить все элементы с классами "modal-standart-btn", "modal-optimum-btn" и "modal-maximum-btn"
    var tariffButtons = document.querySelectorAll(".modal-standart-btn, .modal-optimum-btn, .modal-maximum-btn");

    // Получить модальное окно
    var modal = document.getElementById("tariffModal");

    // Получить элемент <span>, который закрывает модальное окно
    var closeButtons = document.querySelectorAll(".close");

    // Получить элемент <input> для заполнения значения
    var modalTariffInput = document.getElementById("modalTariff");

    // Функция для определения класса и установки значения
    function setTariffValue(button) {
        var buttonClasses = button.classList;

        if (buttonClasses.contains("modal-standart-btn")) {
            modalTariffInput.value = "Standart (390$/мес.)";
        } else if (buttonClasses.contains("modal-optimum-btn")) {
            modalTariffInput.value = "Optimum (590$/мес.)";
        } else if (buttonClasses.contains("modal-maximum-btn")) {
            modalTariffInput.value = "Maximum (790$/мес.)";
        }
    }

    // Функция для открытия модального окна и установки значения
    function openModal(event) {
        setTariffValue(event.target);
        modal.style.display = "block";
    }

    // Функция для закрытия модального окна
    function closeModal() {
        modal.style.display = "none";
    }

    // Назначить обработчик события для каждой кнопки с классами "modal-standart-btn", "modal-optimum-btn" и "modal-maximum-btn"
    Array.from(tariffButtons).forEach(function (button) {
        button.addEventListener('click', openModal);
    });

    // Назначить обработчик события для каждой кнопки закрытия с классом "close"
    Array.from(closeButtons).forEach(function (closeButton) {
        closeButton.addEventListener('click', closeModal);
    });

    // Назначить обработчик события для закрытия модального окна при клике за его пределами
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });
});
