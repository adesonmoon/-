// Загрузка товаров
const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get('category');
fetch(`data/${category}.json`)
    .then(response => response.json())
    .then(data => renderProducts(data));

function renderProducts(products) {
    const container = document.getElementById('products-container');
    products.forEach(product => {
        container.innerHTML += `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.price} ₽</p>
                <button class="btn">В корзину</button>
            </div>
        `;
    });
}