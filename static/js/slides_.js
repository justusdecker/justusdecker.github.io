let slideIndex = 1;
const slides = document.getElementsByClassName("slide");
const dots = document.getElementsByClassName("dot");
console.log(slides)
console.log(dots)
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;
    // reset the slides
    for (i = 0; i < slides.length; i++) slides[i].style.display = "none";
    // reset the dots
    for (i = 0; i < dots.length; i++) dots[i].className = dots[i].className.replace(" active", "");
    // sets the selected image as active
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}