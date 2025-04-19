function showModal(name, image, price) {
    document.getElementById('modalName').textContent = name;
    document.getElementById('modalImage').src = image;
    document.getElementById('modalPrice').textContent = price;
    document.getElementById('productModal').style.display = 'block';
}


async function fetchProductById(productId) {
    try {
        const response = await fetch('sanpham.txt');
        const data = await response.text();
        const products = JSON.parse(data);
        return products.find(product => product.id === productId); 
    } catch (error) {
        console.error('Error fetching product:', error);
        return null;
    }
}

// Hàm hiển thị modal dựa trên id
async function showModal(productId) {
    const product = await fetchProductById(productId);
    if (!product) {
        console.error('Product not found for ID:', productId);
        return;
    }

    document.getElementById('modalName').textContent = product.name;
    document.getElementById('modalPrice').textContent = product.price;
    document.getElementById('modalOriginalPrice').textContent = product.originalPrice || '';
    document.getElementById('modalDiscount').textContent = product.discount || '';
    document.getElementById('modalImage').src = product.image;


    const policyList = document.getElementById('modalPolicies');
    policyList.innerHTML = '';
    (product.policies || []).forEach(policy => {
        const li = document.createElement('li');
        li.textContent = policy;
        policyList.appendChild(li);
    });


    const giftList = document.getElementById('modalGift');
    giftList.innerHTML = '';
    (product.gift || []).forEach(giftItem => {
        const li = document.createElement('li');
        li.textContent = giftItem;
        giftList.appendChild(li);
    });

    document.getElementById('productModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('productModal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('productModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};

const productSwiper = new Swiper('.productSwiper', {
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: { slidesPerView: 2 },
      992: { slidesPerView: 3 },
      1200: { slidesPerView: 4 }
    }
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal', 
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },
    });
});

// Tập trung và cuộn lên danh mục
function focusMenu() {
    const menubtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.menu');

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    menu.classList.add('highlight');
    overlay.style.display = 'block';

    setTimeout(() => {
        overlay.style.display = 'none';
        menu.classList.remove('highlight');
    }, 1000);
}

// Khi load trang, cuộn lên đầu trang
window.onload = function() {
    window.scrollTo(0, 0);
};



  