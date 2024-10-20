
document.querySelectorAll('.btn1').forEach((btn, index) => {
    btn.onclick = () => openModal(index);
});

let currentIndex = 0;

function openModal(index) {
    const modal = document.getElementById('imageModal');
    modal.style.display = "block";
    currentIndex = index;
    const imageSrc = document.querySelectorAll('.card img')[index].src;
    document.getElementById('modalImage').src = imageSrc;
    const captionText = document.querySelectorAll('.card .card-text')[index].textContent;
    document.getElementById('caption').textContent = captionText;
}

function closeModal() {
    document.getElementById('imageModal').style.display = "none";
}

function changeImage(step) {
    currentIndex += step;
    const images = document.querySelectorAll('.card img');
    if (currentIndex >= images.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = images.length - 1;
    document.getElementById('modalImage').src = images[currentIndex].src;
    document.getElementById('caption').textContent = document.querySelectorAll('.card .card-text')[currentIndex].textContent;
}

// Close modal if outside click
window.onclick = function(event) {
    if (event.target == document.getElementById('imageModal')) {
        closeModal();
    }
}
