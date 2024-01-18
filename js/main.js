// $(document).ready(function () {
//   $(".owl-carousel").owlCarousel({

//   });
// });

const owl = $(".owl-carousel");
owl.owlCarousel({
  // mergeFit: false,
  center: true,
  loop: true,
  margin: 20,
  startPosition: 1,
  // autoWidth: true,
  items: 1,

  responsive: {
    450: {
      // autoWidth: true,
      items: 2,
    },
    800: {
      // autoWidth: true,
      items: 2,
    },
    1000: {
      // autoWidth: true,
      items: 3,
      margin: 30,
    },
  },
  // stagePadding: 35,
  // autoplay: true,
});

// Go to the previous item
$(".slider__btn--prev").click(function () {
  // With optional speed parameter
  // Parameters has to be in square bracket '[]'
  owl.trigger("prev.owl.carousel");
});

// Go to the next item
$(".slider__btn--next").click(function () {
  owl.trigger("next.owl.carousel");
});

/* Menu icon */
const navBtn = document.querySelector(".nav__toggle");
const nav = document.querySelector(".nav");
const menuIcon = document.querySelector(".menu-icon");

navBtn.onclick = function () {
  nav.classList.toggle("nav--mobile");
  menuIcon.classList.toggle("menu-icon-active");
  document.body.classList.toggle("no-scroll");
};
