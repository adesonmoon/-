// Открытие категории
function openCategory(category) {
    window.location.href = `catalog.html?category=${category}`;
}

// Мобильное меню
document.querySelector('.mobile-menu-btn').addEventListener('click', () => {
    document.querySelector('.nav').classList.toggle('active');
});