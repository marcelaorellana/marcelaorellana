$(document).ready(function(){
  $(".button-collapse").sideNav();
	var scroll_start = 0;
	var startchange = $('nav');
	var offset = startchange.offset();
	$('.slider').slider({
    height: 600,
    indicators: false
    });
  
  $('.aboutme-p').css('opacity', 0);
  $(".aboutme-p").waypoint(function() {
    $('.aboutme-p').addClass('fadeInRight');
  }, { offset: '90%'});



  $('.skills-big').css('opacity', 0);
  $('.skills-big').waypoint(function() {
    $('.skills-big').addClass('rotateIn');
  }, { offset: '90%'});

  $('.skills-small').css('opacity', 0);
  $('.skills-small').waypoint(function() {
    $('.skills-small').addClass('fadeInUp');
  }, { offset: '80%'});

  //hover portfolio
  $( ".hove" )
  .mouseenter(function() {
    $( ".btn-hover" ).addClass( "fadeInUp");
    $( ".titulo-port" ).addClass( "fadeInDown");
  })
  .mouseleave(function() {
    $( ".btn-hover" ).removeClass("fadeInUp" );
    $( ".titulo-port" ).removeClass( "fadeInDown");
  
  });

  //cambia color de nav al scroll
  $(document).ready(function(){
    $(window).on("scroll",function(){
      var wn = $(window).scrollTop();
      if(wn > 120){
        $('nav').css('background-color', 'white');
          $('.nav-wrapper ul li a').css('color', 'gray');
          $('nav .brand-logo').css('color', 'gray');
          $('.nav-wrapper ul li a.btn').css('color', 'white');
      }
      else{
        $('nav').css('background-color', 'transparent');
          $('.nav-wrapper ul li a').css('color', 'white');
          $('nav .brand-logo').css('color', 'white');
      }
    });
  });

      //typewriter
   var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };

    // smooth scroll
$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 800, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { 
            return false;
          } else {
            $target.attr('tabindex','-1'); 
            $target.focus(); 
          };
        });
      }
    }
  });
});
