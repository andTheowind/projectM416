document.addEventListener('DOMContentLoaded', function() {
    const toggleBtns = document.querySelectorAll('.toggle-btn');

    toggleBtns.forEach(toggleBtn => {
        toggleBtn.addEventListener('click', function(e) {
            e.preventDefault(); // Чтобы предотвратить переход по ссылке

            const parentUl = this.closest('ul'); // Находим ближайший родительский элемент ul
            const hideItems = parentUl.querySelectorAll('.tariff-list-hide-item');

            hideItems.forEach(item => {
                item.classList.toggle('visible');
            });

            this.classList.toggle('active');
        });
    });
});