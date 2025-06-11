$(".ow1").owlCarousel({
  loop: true,
  margin: 50,
  nav: true,
  autoplay: false,
  autoplayTimeout: 3000,
  dots: false,
  autoplayHoverPause: true,
  navText: [
    '<i class="fa fa-angle-left" aria-hidden="true"></i>',
    '<i class="fa fa-angle-right" aria-hidden="true"></i>',
  ],
  navContainer: ".cn1",
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 3,
    },
    800: {
      items: 3,
    },
    1000: {
      items: 3,
    },
    1200: {
      items: 4,
    },
    1400: {
      items: 5,
    },
    1600: {
      items: 5,
    },
  },
});
