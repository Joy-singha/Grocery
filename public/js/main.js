//hero carousel
$('.hero-carousel').owlCarousel({
	items: 1,
	loop: true,
	margin:370,
  stagePadding: 400,
	nav: true,
	dots: false,
	autoplay: true,
	autoplayTimeout: 6000,
	autoplayHoverPause: true,
	autoplaySpeed: 1000,

    responsive:{
      0:{
          margin: 0,
          stagePadding: 0,
      },
      600:{
        margin: 50,
        stagePadding: 50,
      },
      1000:{
        margin: 200,
        stagePadding: 200,
      },
      1280:{
        margin: 370,
        stagePadding: 400,
      },
  }

});

//Categories

$('.categories-carousel').owlCarousel({
	items: 8,
	loop: true,
	margin:10,
	nav: true,
	dots: false,
	autoplay: true,
	autoplayTimeout: 2500,
	autoplayHoverPause: true,
	autoplaySpeed: 700,

  responsive:{
    0:{
        items:1
    },

    400:{
        items: 2
    },

    550:{
      items: 3
    },

    740:{
        items:4
    },

    1000:{
        items:5
    },

    1360:{
      items:8
    },
}

});

