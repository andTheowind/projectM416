document.addEventListener('DOMContentLoaded', function() {
    var htmlMainElement = document.querySelector('html');
    var header = document.querySelector('.header');
    var headerMenu = document.querySelector('.header-menu');
    var headerBurger = document.querySelector('.header-burger');
    var headerLogoCol = document.querySelector('.header-logo-col');

    // Начальное значение z-index для логотипа
    var initialLogoZIndex = 0;

    function closeMenuAndNavigate(anchor) {

        headerMenu.classList.remove('mobile_menu_active');
        headerBurger.classList.remove('active');
        htmlMainElement.style.overflowY = 'visible';

        // После завершения анимации
        setTimeout(function() {
            // Вернуть z-index логотипа к изначальному значению
            headerLogoCol.style.zIndex = initialLogoZIndex.toString();

            var targetElement = document.querySelector(anchor);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
            header.classList.remove('header-full-height');
        }, 800); 
    }

    headerBurger.addEventListener('click', function() {
        
        headerBurger.classList.toggle('active');
        htmlMainElement.style.overflowY = 'hidden';
        
        if (headerMenu.classList.contains('mobile_menu_active')) {

            headerMenu.classList.remove('mobile_menu_active');
            htmlMainElement.style.overflowY = 'visible';

            setTimeout(function() {
                header.classList.remove('header-full-height')
            }, 500);

        } else {

            headerMenu.classList.add('mobile_menu_active');
            header.classList.add('header-full-height');

        }
        // После завершения анимации
        setTimeout(function() {
            if (headerMenu.classList.contains('mobile_menu_active')) {
                // Установить z-index логотипа после анимации
                headerLogoCol.style.transition = 'z-index 0.65s, opacity 0.65s';
                headerLogoCol.style.zIndex = '9988789';
                // Плавное появление логотипа
                setTimeout(function() {
                    headerLogoCol.style.opacity = '1';
                }, 550); // Небольшая задержка для плавного эффекта
            } else {
                // Скрыть логотип и вернуть z-index к изначальному значению
                setTimeout(function() {
                    headerLogoCol.style.zIndex = initialLogoZIndex.toString();
                }, 0); // 500 миллисекунд - это время анимации в CSS (0.5 секунды)
            }
        }, 800); // 500 миллисекунд - это время анимации в CSS (0.5 секунды)
    });

    // Добавить обработчик клика для каждого элемента меню
    var menuItems = document.querySelectorAll('.top-menu-item a');
    menuItems.forEach(function(item) {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            var targetAnchor = item.getAttribute('href');
            closeMenuAndNavigate(targetAnchor);
        });
    });
});