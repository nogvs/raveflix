
// Owl Carousel

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:2,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

// Função que muda cor do background do <header> durante scroll do usuário

$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar-fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });


// Função toggle do ícone do usuário

const dropBtn = document.querySelector('.dropdown-btn');
const dropDown = document.querySelector('.dropdown');
let dropActive = false;

dropBtn.addEventListener('click', () =>{
    if(!dropActive) {
        dropDown.classList.add('toggle');
        dropActive = true;
    } else {
        dropDown.classList.remove('toggle');
        dropActive = false;
    }
});