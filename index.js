const sliderImages = document.querySelectorAll('.img__meme');
const sliderLine = document.querySelector('.slider-container');
const sliderDots = document.querySelectorAll('.pagination__dot');
const sliderTitle = document.querySelectorAll('.title');
const sliderDescription = document.querySelector('.description');

let sliderCount = 0;
let sliderWidth;

window.addEventListener('resize', showSlide);

function showSlide() {
    sliderWidth = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = sliderWidth * sliderImages.length + 'px';
    sliderImages.forEach(item => item.style.width = sliderWidth + 'px')
}

showSlide();

function nextSlide() {
    sliderCount++;
    if(sliderCount >=sliderImages.length) sliderCount = 0;
    rollSlider();
    thisSlide(sliderCount);
}

function prevSlide() {
    sliderCount--;
    if (sliderCount < 0) sliderCount = sliderImages.length - 1;
    rollSlider();
    thisSlide(sliderCount);
}

function rollSlider () {
    sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}

function thisSlide(i) {
    sliderDots.forEach(item => item.classList.remove('active__dot'));
    sliderDots[i].classList.add('.active__dot');
}

function newDescription() {
    const currentCard = sliderImages[i];
    sliderTitle.textContent = currentCard.getAttribute('data-text');
}

sliderDots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        sliderCount = i;
        rollSlider();
        thisSlide(sliderCount);
    })
})