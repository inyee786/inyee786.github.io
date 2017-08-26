var slideIndex = 0;


function showSlides() {
    var i;
    var slides = document.getElementsByClassName("carousel");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex> slides.length) {
        slideIndex = 1;
    }    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
//    console.log(slides, slideIndex)
    slides[slideIndex-1].style.display = "flex";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 4000); // Change image every 2 seconds
}

 window.onload = function(){
     showSlides()
 }