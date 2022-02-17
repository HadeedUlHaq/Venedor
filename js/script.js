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

// for countdown
var yourDateToGo = new Date();
    yourDateToGo.setDate(yourDateToGo.getDate() + 1);

    var timing = setInterval(
      function () {

        var currentDate = new Date().getTime();
        var timeLeft = yourDateToGo - currentDate; 

        var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        if (days < 10) days="0"+days;
        var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        if (hours < 10) hours="0"+hours;
        var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        if (minutes < 10) minutes="0"+minutes;
        var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        if (seconds < 10) seconds="0"+seconds;

        document.getElementById("countdownd").innerHTML = days;
        document.getElementById("countdownh").innerHTML = hours;
        document.getElementById("countdownm").innerHTML = minutes;
        document.getElementById("countdowns").innerHTML = seconds;
        if (timeLeft <= 0) {
          clearInterval(timing);
          document.getElementById("countdown").innerHTML = "It's over"; 
        }
      }, 1000);