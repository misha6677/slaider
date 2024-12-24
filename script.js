// @ts-nocheck
const slider = document.querySelector('.slider-images');
const prevArrow = document.getElementById('prev');
const nextArrow = document.getElementById('next');
const dots = document.querySelectorAll('.dot');
const slides = Array.from(document.querySelectorAll('.slide'));
const city = document.querySelectorAll('.main_city_pacciv');
const slideCount = slides.length;
let slideIndex = 0;

prevArrow.addEventListener('click', showPreviousSlide);
nextArrow.addEventListener('click', showNextSlide);

// кнопка назад

function showPreviousSlide() {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    updateSlider();
    ChangeSt()
}

// кнопка в перёд

function showNextSlide() {
    slideIndex = (slideIndex + 1) % slideCount;
    updateSlider();
    ChangeSt()
}

//функция для обновления слайда

function updateSlider() {
    slides.forEach((slide, index) => {
        if (index === slideIndex) {
            slide.style.display = 'flex';
        } else {
            slide.style.display = 'none';
        }
    }
    )
};

//код для работы переключения по точкам

dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        slideIndex = parseInt(e.target.dataset.index);
        ChangeSt();
        updateSlider(slideIndex);
    });
});

//Код для переключения стиля у dot

function ChangeSt() {
    dots.forEach((dot, index) => {
        if (index === slideIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');         
        }
    }
)
};

//код для работы переключения по городам

city.forEach(main_city_pacciv =>{
    main_city_pacciv.addEventListener('click',(e) =>{
        slideIndex = parseInt(e.target.dataset.index);
        updateSlider(slideIndex);
        ChangeSt();
    });
});

//вызов функции
updateSlider();