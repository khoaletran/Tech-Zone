
function updateCartIcon() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartIcon = document.querySelector('.cart');
    if (cart.length > 0) {
        cartIcon.classList.add('highlight'); 
    } else {
        cartIcon.classList.remove('highlight');
    }
}


window.addEventListener('load', updateCartIcon);

document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', function() {
        // Lấy thông tin sản phẩm từ modal
        const product = {
            id: document.getElementById('modalName').textContent,
            name: document.getElementById('modalName').textContent,
            image: document.getElementById('modalImage').src,
            price: document.getElementById('modalPrice').textContent,
            quantity: 1
        };

        // Kiểm tra và thêm sản phẩm vào giỏ hàng
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        const existingProduct = cart.find(p => p.id === product.id);
        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cart.push(product);
        }

        
        localStorage.setItem('cart', JSON.stringify(cart));
        alert("Đã thêm vào giỏ hàng!");
        closeModal();
        updateCartIcon();
    });
});

window.onload = function() {
    window.scrollTo(0, 0);
};

