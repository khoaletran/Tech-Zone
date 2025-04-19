function formatCurrency(num) {
    return num.toLocaleString('vi-VN') + 'đ';
}

function renderCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cartItems');
    const totalDiv = document.getElementById('cartTotal');
    cartContainer.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
        cartContainer.innerHTML = `<p class="text-center">🛒 Giỏ hàng của bạn đang trống.</p>`;
        totalDiv.textContent = '';
        return;
    }

    cart.forEach((item, index) => {
        const price = parseInt(item.price.replace(/\D/g, ''));
        total += price * item.quantity;

        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="item-details">
                <h5>${item.name}</h5>
                <p>Giá: ${item.price}</p>
                <div class="quantity-control">
                    <label>Số lượng: </label>
                    <input type="number" min="1" value="${item.quantity}" data-index="${index}" class="quantity-input">
                    <button class="btn btn-sm btn-danger remove-btn" data-index="${index}">Xóa</button>
                </div>
            </div>
        `;
        cartContainer.appendChild(div);
    });

    totalDiv.innerHTML = `Tổng cộng: ${formatCurrency(total)}`;

    document.querySelectorAll('.quantity-input').forEach(input => {
        input.addEventListener('change', (e) => {
            const index = e.target.dataset.index;
            const value = parseInt(e.target.value);
            if (value > 0) {
                cart[index].quantity = value;
                localStorage.setItem('cart', JSON.stringify(cart));
                renderCart();
            }
        });
    });

    document.querySelectorAll('.remove-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = e.target.dataset.index;
            cart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            renderCart();
        });
    });
}

window.onload = renderCart;
