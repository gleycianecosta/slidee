var slides = document.querySelectorAll('.conteudo div');
    
var currentSlide = 0;

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 5) % slides.length;
    slides[currentSlide].classList.add('active');
}

var slides1 = document.querySelectorAll('.conteudo1 div');
var currentSlide1 = 0;
function nextSlide1() {
    slides1[currentSlide].classList.remove('active');
    currentSlide1 = (currentSlide + 5) % slides1.length;
    slides1[currentSlide1].classList.add('active');
}
var slides2 = document.querySelectorAll('.conteudo2 div');
var currentSlide2 = 0;
function nextSlide2() {
    slides2[currentSlide].classList.remove('active');
    currentSlide2 = (currentSlide + 5) % slides2.length;
    slides2[currentSlide2].classList.add('active');
}
var slides3 = document.querySelectorAll('.conteudo3 div');
var currentSlide3 = 0;
function nextSlide3() {
    slides3[currentSlide].classList.remove('active');
    currentSlide3 = (currentSlide + 5) % slides3.length;
    slides3[currentSlide3].classList.add('active');
}
 var slides4 = document.querySelectorAll('.conteudo4 div');
var currentSlide4 = 0;
function nextSlide4() {

    slides4[currentSlide].classList.remove('active');
    currentSlide4 = (currentSlide + 5) % slides4.length;
    slides4[currentSlide3].classList.add('active');
}
var slides4 = document.querySelectorAll('.conteudo4 div');

var currentSlide = 0;

function nextSlide4() {
    slides4[currentSlide].classList.remove('active');
    currentSlide4 = (currentSlide + 5) % slides4.length;
    slides4[currentSlide4].classList.add('active');
}
 var slides5 = document.querySelectorAll('.conteudo5 div');

var currentSlide = 0;

function nextSlide5() {
    slides5[currentSlide].classList.remove('active');
    currentSlide5 = (currentSlide + 5) % slides4.length;
    slides5[currentSlide5].classList.add('active');
}
var slides6 = document.querySelectorAll('.conteudo6 div');
var currentSlide6 = 0;
function nextSlide6() {

    slides6[currentSlide].classList.remove('active');
    currentSlide6 = (currentSlide + 5) % slides6.length;
    slides6[currentSlide6].classList.add('active');
}
 var slides7 = document.querySelectorAll('.conteudo7 div');
var currentSlide7 = 0;
function nextSlide67() {

    slides7[currentSlide].classList.remove('active');
    currentSlide7 = (currentSlide + 5) % slides7.length;
    slides7[currentSlide6].classList.add('active');
}
setInterval(nextSlide4, 1000);
setInterval(nextSlide5, 1000);
setInterval(nextSlide6, 1000);
setInterval(nextSlide7, 1000);
setInterval(nextSlide, 3000); // Altera a imagem a cada 3 segundos
setInterval(nextSlide1, 3000);
setInterval(nextSlide2, 3000);
setInterval(nextSlide3, 3000);