function showModal(name, image, specs, price) {
    document.getElementById('modalName').textContent = name;
    document.getElementById('modalImage').src = image;
    document.getElementById('modalSpecs').textContent = specs;
    document.getElementById('modalPrice').textContent = price;
    document.getElementById('productModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('productModal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('productModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


  