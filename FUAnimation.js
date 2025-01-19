const leftButton = document.querySelector('.left');
const rightButton = document.querySelector('.right');
const carousel = document.querySelector('.carousel');
const loginPopUp = document.getElementById('popup');
const login = document.getElementById('log__in');
const navbar = document.getElementById('navbar');
let carouselItem = document.querySelectorAll('.carousel__item');
let index = 0;
let itemWidth;
let mainIndex = 2
let start=0;
calculateWidth();
mainVideo();

function mainVideo() {
    carouselItem.forEach(item => {
        item.style.transform = 'scale(1)'; // Resetowanie do domyślnej skali
        item.style.opacity = '1';
        item.classList.remove('no__hover');
        item.classList.add('item__style');
    });
    carouselItem.forEach((item, i) => {
        if (i===mainIndex) {
            carouselItem[mainIndex].style.transform = 'scale(1)';
        }
        else {
            carouselItem[i].style.transform = 'scale(0.65)';
            carouselItem[i].style.opacity = '0.6';
            carouselItem[i].classList.add('no__hover');
            carouselItem[i].classList.remove('item__style');
        }
    })

}
window.addEventListener('load', () => {
    calculateWidth();  // Upewnij się, że szerokość jest obliczona dopiero po załadowaniu obrazów
              // Zaktualizuj karuzelę
});

window.addEventListener('resize', () => {
    calculateWidth();
    update();
});

window.addEventListener('scroll', () => {
    if (navbar.offsetTop > 40) {
        navbar.style.opacity = '1';
    }
    else {
        navbar.style.opacity = '0.6';
    }

})
function calculateWidth() {
    itemWidth = carouselItem[mainIndex].offsetWidth + 20;
}

leftButton.addEventListener('click', (e) => {
    if (index >= -1) {
        index -= 1;
        mainIndex -= 1;
        console.log(index);
        calculateWidth();
        update();
        mainVideo();
    }
});

rightButton.addEventListener('click', (e) => {
    if (index < carouselItem.length - 1 && mainIndex < 4) {
        index += 1;
        mainIndex += 1;
        console.log(mainIndex);
        calculateWidth();
        update();
        mainVideo();
    }
});

function update() {
    console.log(index)
    const offset = -index * itemWidth;
    carousel.style.transform = `translateX(${offset}px)`;
}

login.addEventListener('click', () => {
    loginPopUp.style.display = 'flex';
    loginPopUp.style.flexDirection = 'column';
})
