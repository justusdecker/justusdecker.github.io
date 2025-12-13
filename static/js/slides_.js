let slideIndex = 1;
const slides = document.getElementsByClassName("slide");
const dots = document.getElementsByClassName("dot");

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


let projectIndex = 1;
const projects = document.getElementsByClassName("project");
const pdots = document.getElementsByClassName("pdot");

showProjects(projectIndex);

function currentProject(n) {
    showProjects(projectIndex = n);
}

function plusProjects(n) {
    showProjects(projectIndex += n);
}

function showProjects(n) {
    let i;
    
    if (n > projects.length) projectIndex = 1;
    if (n < 1) projectIndex = projects.length;
    // reset the slides
    for (i = 0; i < projects.length; i++) projects[i].style.display = "none";
    // reset the dots
    for (i = 0; i < pdots.length; i++) pdots[i].className = pdots[i].className.replace(" active", "");
    // sets the selected image as active
    projects[projectIndex-1].style.display = "block";
    pdots[projectIndex-1].className += " active";
}

setInterval(function () {
    plusSlides(1)
}, 10000)
