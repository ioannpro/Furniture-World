var slider = document.querySelector('.product__img__inner');
var images = slider.querySelectorAll('img.product__img__item');
var dots = slider.querySelectorAll('span.product__img__dot__item');
var currentImage = 0;

function changeSlide(n) {
    images[currentImage].style.opacity = 0;
    dots[currentImage].classList.remove('product__img__dot__item__active');
    if (currentImage == 0 && n == -1) {
        currentImage = images.length - 1;
    } else {
        currentImage = (currentImage + n) % images.length;
    }
    // console.log(currentImage)
    dots[currentImage].classList.add('product__img__dot__item__active');
    images[currentImage].style.opacity = 1;
}

function changeSlideDot(n) {
    images[currentImage].style.opacity = 0;
    dots[currentImage].classList.remove('product__img__dot__item__active');
    currentImage = n;
    // console.log(currentImage)
    dots[currentImage].classList.add('product__img__dot__item__active');
    images[currentImage].style.opacity = 1;
}
