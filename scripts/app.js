$('.customer-list').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  prevArrow: `<button type="button" class="slick-prev"><img src="./image/arrow-left.svg"></img></button>`,
  nextArrow: `<button type="button" class="slick-next"><img src="./image/arrow-right.svg"></img></button>`,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
});

const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const activeClass = "is-show";
toggle .addEventListener("click", function(){
  menu.classList.add(activeClass);
})

window.addEventListener("click", function(e){
  if(!menu.contains(e.target) && !e.target.matches(".menu-toggle")){
    menu.classList.remove(activeClass);
  }
})