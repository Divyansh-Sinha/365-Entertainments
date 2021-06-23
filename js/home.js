let menu = document.querySelector('.links');
const mediaQuery = window.matchMedia('(max-width: 960px)')
const ham = document.querySelector('.container');
if(mediaQuery.matches)
{
  menu.style.width = '0vw';
  
}


window.addEventListener('resize',()=>{
  const mediaQuery = window.matchMedia('(max-width: 960px)')
  if(mediaQuery.matches){
    
    menu.style.width = '0vw';
    
 }
 else{
  menu.style.width = '30vw';
  ham.classList.remove("change");
  
 }
 
})



function aFunction(x) {
    
    console.log(x);
    x.classList.toggle("change");
  
       
    
    if(menu.style.width === '0vw' )
      menu.style.width = '30vw';
    else{
      menu.style.width = '0vw';
    }


  }



  // carousel

  var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  // var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  // for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  // }
  slides[slideIndex-1].style.display = "block";
  // dots[slideIndex-1].className += " active";
}
 