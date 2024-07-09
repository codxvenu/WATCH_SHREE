document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;
    const items = document.querySelectorAll('.carousel-item');
    const boxes = document.querySelectorAll('.box');
    const backgroundImages = [
        "assests/TW0TG7604.png",
        "assests/gold2k.png",
        'assests/guess_women01.png',
        'assests/TW052HG04.png',
        // Add more image URLs as needed
    ];
    const container = document.getElementById('main-bg'); // Update this selector to your main container
    let interval;

    function showItem(index) {
        items.forEach((item, i) => {
            item.style.display = i === index ? 'grid' : 'none';
        });
        boxes.forEach((box, i) => {
            box.classList.toggle('active', i === index);
        });
        updateBackgroundImage(index);
    }

    function updateBackgroundImage(index) {
        if (backgroundImages[index]) {
            container.src = backgroundImages[index];
        }
    }

    function startRotation() {
        interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % items.length;
            showItem(currentIndex);
        }, 3000); // Change item every 3 seconds
    }

    function stopRotation() {
        clearInterval(interval);
    }

    boxes.forEach((box, i) => {
        box.addEventListener('click', () => {
            stopRotation(); // Stop automatic rotation on manual click
            currentIndex = i;
            showItem(currentIndex);
            // startRotation(); // Restart automatic rotation
        });
    });

    showItem(currentIndex);
    // startRotation(); // Start automatic rotation on load
});
