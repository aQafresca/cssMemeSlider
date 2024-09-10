const sliderImages = document.querySelectorAll('.img__meme');
const sliderContainer = document.querySelector('.slider-container');
const sliderDots = document.querySelectorAll('.pagination__dot');
const sliderTitle = document.querySelectorAll('.title');
const sliderDescription = document.querySelector('.description-container');

let sliderCount = 0;
let sliderWidth;
let titleCount = 0;
let titleWidth;




function showSlide() {
    sliderWidth = document.querySelector('.slider').offsetWidth;
    sliderContainer.style.width = sliderWidth * sliderImages.length + 'px';
    sliderImages.forEach(item => item.style.width = sliderWidth + 'px');
    rollSlider();
}

window.addEventListener('resize', showSlide);
showSlide();


function showTitle() {
    sliderWidth = document.querySelector('.slider').offsetWidth;
    sliderDescription.style.width = sliderWidth * sliderTitle.length + 'px';
    sliderTitle.forEach(title => title.style.width = sliderWidth + 'px');
    rollSlider();
}

window.addEventListener('resize', showTitle);
showTitle();

function nextSlide() {
    sliderCount++;
    if(sliderCount >=sliderImages.length) sliderCount = 0;
    if(sliderCount >=sliderTitle.length) titleCount = 0;
    rollSlider();
    thisSlide(sliderCount);
    thisTitle(titleCount);
}

function prevSlide() {
    sliderCount--;
    if (sliderCount < 0) sliderCount = sliderImages.length - 1;
    if (sliderCount < 0) sliderCount = sliderTitle.length - 1;
    rollSlider();
    thisSlide(sliderCount);
    thisTitle(titleCount);
}

function rollSlider () {
    sliderContainer.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
    sliderDescription.style.transform = `translateX(${-titleCount * sliderWidth}px)`;
}


function thisSlide(i) {
    sliderDots.forEach(item => item.classList.remove('active__dot'));
    sliderDots[i].classList.add('active__dot');
}

function thisTitle(i) {
    sliderTitle.forEach(text => text.classList.remove('active__txt'));
    sliderTitle[i].classList.add('active__txt');
}

sliderDots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        sliderCount = i;
        titleCount = i;
        rollSlider();
        thisTitle(titleCount);
        thisSlide(sliderCount);
    })
});
