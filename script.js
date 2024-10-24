// @ts-nocheck
const slider = document.querySelector('.slider-images');
const prevArrow = document.getElementById('prev');
const nextArrow = document.getElementById('next');
const dots = document.querySelectorAll('.dot');
const slides = Array.from(document.querySelectorAll('.slide'));
const slideCount = slides.length;
let slideIndex = 0;

prevArrow.addEventListener('click', showPreviousSlide);
nextArrow.addEventListener('click', showNextSlide);

//делаем кнопку назад

function showPreviousSlide() {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    updateSlider();
}

//делаем кнопку в перёд

function showNextSlide () {
    slideIndex = (slideIndex + 1 ) % slideCount;
    updateSlider();
}

//функция для обновления слайда

function updateSlider () {
    slides.forEach((slide, index)=>{
        if(index === slideIndex){
            slide.style.display = 'flex';
        } else{
            slide.style.display = 'none';
        }
    }
   
)};

//код для работы переключения по точкам

dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        slideIndex = parseInt(e.target.dataset.index);
        updateSlider(slideIndex);
    });
});

//вызов функции
updateSlider();