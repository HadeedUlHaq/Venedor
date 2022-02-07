$(".slideshow").slick({
  dots: true,
  pauseOnHover: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 1500,
  slidesToShow: 1,
  adaptiveHeight: false,
  prevArrow:
    '<button class="slide-arrow prev-arrow"><i class="bi bi-arrow-left"></i></button>',
  nextArrow:
    '<button class="slide-arrow next-arrow"><i class="bi bi-arrow-right"></i></button>',
});
$(".mulitproslide").slick({
  dots: false,
  pauseOnHover: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 500,
  slidesToShow: 1,
  prevArrow:
    '<button class="slide-arrow prev-arrow"><i class="bi bi-arrow-left-short"></i></button>',
  nextArrow:
    '<button class="slide-arrow next-arrow"><i class="bi bi-arrow-right-short"></i></button>',
});
$(".twoslide").slick({
  dots: false,
  pauseOnHover: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 500,
  slidesToShow: 2,
  prevArrow:
    '<button class="slide-arrow prev-arrow"><i class="bi bi-arrow-left-short"></i></button>',
  nextArrow:
    '<button class="slide-arrow next-arrow"><i class="bi bi-arrow-right-short"></i></button>',
});
$(".brandslide").slick({
  dots: false,
  pauseOnHover: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2500,
  speed: 500,
  slidesToShow: 1,
  prevArrow:
    '<button class="slide-arrow prev-arrow"><i class="bi bi-arrow-left-short"></i></button>',
  nextArrow:
    '<button class="slide-arrow next-arrow"><i class="bi bi-arrow-right-short"></i></button>',
});
