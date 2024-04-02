document.addEventListener('DOMContentLoaded', function() {
    const images = [
        './docs/image/logo.png',
        './docs/image/welPage.png',
        './docs/image/calPage.png',
        './docs/image/habitPage.png',
        './docs/image/reportPage.png'
    ];

    const carouselContainer = document.querySelector('.carousel-items');

    images.forEach((imageSrc) => {
        const imgElement = document.createElement('img');
        imgElement.src = imageSrc;
        const carouselItem = document.createElement('div');
        carouselItem.className = 'carousel-item';
        carouselItem.appendChild(imgElement);
        carouselContainer.appendChild(carouselItem);
    });

    let index = 0;
    const items = document.querySelectorAll('.carousel-item');
    const total = items.length;

    function switchItem() {
        index = (index + 1) % total;
        const offset = -index * 100 + '%';
        document.querySelector('.carousel-items').style.transform = 'translateX(' + offset + ')';
    }


    setInterval(switchItem, 2000);
});

document.addEventListener('DOMContentLoaded', (event) => {
    // Get the menu and the menu toggle button
    const menu = document.querySelector('.menu');
    const menuToggle = document.querySelector('.menu-toggle');

    // Add an event listener to the toggle button
    menuToggle.addEventListener('click', function() {
        // Toggle a class that moves the menu in and out
        menu.classList.toggle('is-active');
    });
});

window.addEventListener('load', function() {
    var iframe = document.getElementById('yourIframeId');
    iframe.style.height = iframe.contentWindow.document.documentElement.scrollHeight + 'px';
});
