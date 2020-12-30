$(function(){
    var trigger = document.getElementById('.burger');
    var box = document.getElementById('menu');
    toggle.addEventListener('click', function() {
  box.classList.toggle('active');
});

$('.design__down').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  arrows:false,
  dotsClass: "design-dots",
  vertical: true,
});

let bg = document.querySelector('.work__parallax-mouse');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    bg.style.transform = 'translate(-' + x * 60 + 'px, -' + y * 60 + 'px)';
});

$('.project__inner').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: true,
  arrows: false,
  dotsClass: "project-dots",
 
  responsive: [
    {
      breakpoint: 1140,
      settings: {
        slidesToShow:2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
       

      }
    },
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
       
      
       
      
      }
    },
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
       
      }
    }
   
  ]
  
});


$('.team__down').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: true,
  arrows: false,
  dotsClass: "team-dots",
  responsive: [
    {
      breakpoint: 715,
      settings: {
        slidesToShow:2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
       

      }
    },
    {
      breakpoint: 509,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
       
      
       
      
      }
    },
    {
      breakpoint: 100,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
       
      }
    }
   
  ]
  
  
});

$('.subscribe__bg').parallax({imageSrc: 'images/subscribe/bg.jpg'});


});