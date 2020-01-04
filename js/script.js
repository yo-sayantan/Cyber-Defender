
//  1. preloader
//  2. easeScroll
//  3. navbar or menu
//  4. client testimonial
//  5. hero background slider
//  6. customers slider
//  7. magnify popup video
//  8. ytplayer for hero background video
//  9. typed
// 10. back to top

jQuery(function ($) {

    'use strict';

    //  1. preloader
    $(window).ready(function() {
        $('#status').fadeOut();
        $('#preloader').delay(200).fadeOut('slow');

    });

    //  2. easeScroll
    $("html").easeScroll();


    //  3. navbar or menu
    $(window).scroll(function() {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    });


    // logo-change
    
    // $(function () { 
    //     $(window).scroll(function () {
    //         if ($(this).scrollTop() > 50) { 
    //             $('.navbar .navbar-brand img').attr('src','images/logo1.png' );
    //             $(".blue-logo").css({"display": "none"});
    //             $(".white-logo").css({"display": "block"});
    //         }
    //         if ($(this).scrollTop() < 50) { 
    //             $('.navbar .navbar-brand img').attr('src','images/logo1.png' );
    //             $(".white-logo").css({"display": "none"});
    //             $(".blue-logo").css({"display": "block"});
    //         }
    //     })
    // });

    // $(function(){
    //     $(window).scroll(function(){
    //         if($(this).scrollTop()>50){
    //             $(".navbar .navbar-brand img").attr("src","images/logo-white.png");
    //         }
    
    //         else{
    //             $(".navbar .navbar-brand img").attr("src","images/logo.png");
    //         }
    //     })
    // })
   






    //jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function() {
        $(document).on('click', 'a.page-scroll', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 900, 'easeInOutExpo');
            event.preventDefault();
        });
    });
    // closes the responsive menu on menu item click
    $(".navbar-nav li a").on("click", function(event) {
        if (!$(this).parent().hasClass('dropdown'))
            $(".navbar-collapse").collapse('hide');
    });

    //nav menu active color
    $('.header-nav li').on("click", function(e){
        $(this).addClass('active').siblings().removeClass('active');
    });


    //  4. client testimonial
    $('.testimonial-slider').owlCarousel({
        responsiveClass:true,
        margin:30,
        dots: true,
        nav: true,
        autoWidth:false,
        autoplay:true,
        autoplayTimeout: 3000,
        autoplayStopOnLast: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            800:{
                items:2
            },
            1200:{
                items:3
            }

        }

    });

    //  5. hero background slider
    $('.hero-background-slider').owlCarousel({
        loop: true,
        items: 1,
        autoplay: true,
        dots: true,
        nav: false,
        autoplayTimeout:3400,

    });

    // 6. customers slider
    $('.customers-slider').owlCarousel({
        responsiveClass:true,
        loop: true,
        margin:10,
        dots: false,
        autoplay: true,
        autoplayTimeout:3400,
        autoplayStopOnLast: false,
        autoWidth:false,
        nav:false,
        responsive:{
            0:{
                items:2,
            },
            600:{
                items:3,
            },
            800:{
                items:4,
            },
            1300:{
                items:1,
            }

        }

    });

   
    $('.owl-carousel').owlCarousel({
        loop:true,
        nav:false,
        dots:false,
        autoplay:true,
        items:1,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })


    //counter
    var bar = new ProgressBar.Circle(progress, {
        color: '#aaa',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 4,
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 3000,
        text: {
          autoStyleContainer: false
        },
        from: { color: '#aaa', width: 2 },
        to: { color: '#71b0ff', width: 3 },
        
        // Set default step function for all animate calls
        step: function(state, circle) {
          circle.path.setAttribute('stroke', state.color);
          circle.path.setAttribute('stroke-width', state.width);
      
          var value = Math.round(circle.value() * 100);
          if (value === 0) {
            circle.setText('');
          } else {
            circle.setText(value);
          }
      
        }
      });
      bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
      bar.text.style.fontSize = '2rem';
      bar.text.style.color='#71b0ff';
      
      bar.animate(0.9);

    //counter-2
    var bar = new ProgressBar.Circle(progress2, {
        color: '#aaa',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 4,
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 3000,
        text: {
          autoStyleContainer: false
        },
        from: { color: '#aaa', width: 2 },
        to: { color: '#71ff96', width: 3 },
        
        // Set default step function for all animate calls
        step: function(state, circle) {
          circle.path.setAttribute('stroke', state.color);
          circle.path.setAttribute('stroke-width', state.width);
      
          var value = Math.round(circle.value() * 100);
          if (value === 0) {
            circle.setText('');
          } else {
            circle.setText(value);
          }
      
        }
      });
      bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
      bar.text.style.fontSize = '2rem';
      bar.text.style.color='#71ff96';
      
      bar.animate(0.6);


 //counter-3
    var bar = new ProgressBar.Circle(progress3, {
        color: '#aaa',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 4,
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 3000,
        text: {
          autoStyleContainer: false
        },
        from: { color: '#aaa', width: 2 },
        to: { color: '#ffe60d', width: 3 },
        
        // Set default step function for all animate calls
        step: function(state, circle) {
          circle.path.setAttribute('stroke', state.color);
          circle.path.setAttribute('stroke-width', state.width);
      
          var value = Math.round(circle.value() * 100);
          if (value === 0) {
            circle.setText('');
          } else {
            circle.setText(value);
          }
      
        }
      });
      bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
      bar.text.style.fontSize = '2rem';
      bar.text.style.color='#ffe60d';
      
      bar.animate(0.8);


     //counter-4
    var bar = new ProgressBar.Circle(progress4, {
        color: '#aaa',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 4,
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 3000,
        text: {
          autoStyleContainer: false
        },
        from: { color: '#aaa', width: 2 },
        to: { color: '#ff382e', width: 3 },
        
        // Set default step function for all animate calls
        step: function(state, circle) {
          circle.path.setAttribute('stroke', state.color);
          circle.path.setAttribute('stroke-width', state.width);
      
          var value = Math.round(circle.value() * 100);
          if (value === 0) {
            circle.setText('');
          } else {
            circle.setText(value);
          }
      
        }
      });
      bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
      bar.text.style.fontSize = '2rem';
      bar.text.style.color='#ff382e';
      
      bar.animate(0.7);









    



    // 7. magnify popup video
    // $('.video').magnificPopup({
    //     type: 'iframe'
    // });

    //  8. ytplayer for hero background video
    // $(".player").mb_YTPlayer();

    //  9. typed
    var typed = $(".typed");
    $(function() {
        typed.typed({
            strings: ["Software Solution.", "ERP Software Solution.", "App Development.", "Web Development"],
            typeSpeed: 130,
            loop: true
        });
    });

    // 10. back to top
    (function(){

        $('body').append('<div id="toTop"><span><i class="fa fa-angle-down"></i></span></div>');

        $(window).on("scroll", function (e) {
            if ($(this).scrollTop() != 0) {
                $('#toTop').fadeIn();
            } else {
                $('#toTop').fadeOut();
            }
        });

        $('#toTop').on('click',function(){
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });

    }());

}); // JQuery end



//----animations js

$('[data-aos]').parent().addClass('hideOverflowOnMobile');