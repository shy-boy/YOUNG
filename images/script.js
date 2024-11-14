document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    
    let currentIndex = 0;
    const totalItems = items.length;

    // 更新轮播图位置
    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    // 下一张
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    }

    // 上一张
    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarousel();
    }

    // 添加按钮点击事件
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // 添加点击指示点事件
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
    });

    // 自动轮播
    let autoSlide = setInterval(nextSlide, 5000);

    // 鼠标悬停时暂停自动轮播
    carousel.addEventListener('mouseenter', () => {
        clearInterval(autoSlide);
    });

    // 鼠标离开时恢复自动轮播
    carousel.addEventListener('mouseleave', () => {
        autoSlide = setInterval(nextSlide, 5000);
    });
}); 