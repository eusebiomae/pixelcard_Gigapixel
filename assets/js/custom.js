/*-------------------------------------
Template Name: Karl
Author: Xpertgallery
Description: Personal Portfolio Template
Version: 1.0.0
Tags: personal portfolio, blog, business, creative, cv theme, online resume, personal, portfolio, professional cv, responsive portfolio, resume, resume theme
-------------------------------------*/

/*-------------------------------------
  Table of Content
---------------------------------------

  # Splitting Text
  # Wow Animation
  # Preloader
  # Isotope
  # Mobile Menu Icon
  # Button Animation
  # Parallax
  # Skill Progress bar
  # Fade Slideshow
  # Menu scrollspy
  # Smooth Scroll
  # Fancy Box
  # Portfolio Slider
  # Experience Slider
  # Education Slider
  # Animated Cursor

-------------------------------------*/

(function($) {
    'use strict'

    /* --------- window when loading --------- */
    $(window).on("load", function () {

        /* --------- # Splitting Text ---------*/
        Splitting();


        /* --------- # Wow Animation ---------*/
        var wow = new WOW({
            animateClass: 'animated',
            offset: 0
        });
        wow.init();

        /* --------- # Preloader ---------*/
        function preloader() {
            $(".xg-preloader").delay().fadeOut();
        }
        preloader();


        /* --------- # Isotope ---------*/
        function portfolio() {

            var portfolioItems = $('.xg-portfolio-items');
            var portfolioFilter = $('.xg-portfolio-filter');

            portfolioItems.isotope({
                itemSelector: '.xg-portfolio-item'
            });

            var portItems = portfolioItems.isotope();

            portfolioFilter.on('click', 'span', function () {
                var filterValue = $(this).attr('data-filter');
                portItems.isotope({filter: filterValue});
            });

            portfolioFilter.on('click', 'span', function () {
                $(this).addClass('active').siblings().removeClass('active');
            });
        }

        function xg_portfolio_title() {

            $('.xg-portfolio-item').each(function() {
                $(this).on('mouseenter', function() {
                    var portfolioTitle = $('.xg-portfolio-title');
                    if ($(this).data('title')) {
                        portfolioTitle.html($(this).data('title') + '<span class="xg-portfolio-cat">' + $(this).data('category') + '</span>');
                        portfolioTitle.addClass('visible');
                    }

                    $(document).on('mousemove', function(e) {
                        $('.xg-portfolio-title').css({
                            left: e.clientX - 10,
                            top: e.clientY + 25
                        });
                    });
                }).on('mouseleave', function() {
                    $('.xg-portfolio-title').removeClass('visible');
                });
            });
        }
        if ($('.xg-portfolio-items').length > 0) {
            xg_portfolio_title();
            portfolio();
        }
    });


    $(document).ready(function() {

        /* --------- # Mobile Menu Icon ---------*/
        $(".xg-nav-toggle-btn").on("click", function () {
            if ($("body").hasClass("xg-menu-opened")) {
                $("body").removeClass("xg-menu-opened").addClass("xg-menu-close");
            } else {
                $("body").addClass("xg-menu-opened").removeClass("xg-menu-close");
            }
        });

        /* --------- # Button Animation ---------*/
        function buttonHover() {
            var btnHover = $('.btn');
            btnHover.append('<span class="btn-animate"></span>');

            btnHover.on('mouseenter', function(e) {
                var parentOffset = $(this).offset(),
                    relX = e.pageX - parentOffset.left,
                    relY = e.pageY - parentOffset.top;
                $(this).find('span.btn-animate').css({top:relY, left:relX});
            }).on('mouseout', function(e) {
                var parentOffset = $(this).offset(),
                    relX = e.pageX - parentOffset.left,
                    relY = e.pageY - parentOffset.top;
                $(this).find('span.btn-animate').css({top:relY, left:relX})
            });
        }
        buttonHover();

        /* --------- # Parallax ---------*/
        if ($(".parallaxie").length > 0) {
            $('.parallaxie').parallaxie({
                speed: 0.3,
                size: "cover"
            });
        }

    });


    /* --------- window when scrolling --------- */
    $(window).on("scroll", function () {

        /* --------- # Skill Progress bar --------- */
        $(".progress-item .progress-bar").each(function () {
            var bottom_object = $(this).offset().top + $(this).outerHeight();
            var bottom_window = $(window).scrollTop() + $(window).height();
            var progressWidth = $(this).attr('aria-valuenow') + '%';
            if(bottom_window > bottom_object) {
                $(this).css({
                    width : progressWidth
                });
            }
        });

        /* --------- # Fade Slideshow --------- */
        var scrolled = $(this).scrollTop();
        $('.parallax-fade-txt ').css({
            'transform': 'translate3d(0, ' + -(scrolled * 0.20) + 'px, 0)',
            'opacity': 1 - scrolled / 600
        });
    });


    /* --------- # Menu scrollspy ---------*/
    $('body').scrollspy({ target: '.xg-header nav' });


    /* --------- # Smooth Scroll ---------*/
    $(".page-scroll").on('click', function (event) {

        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function(){

                window.location.hash = hash;
            });
        }
    });


    /* --------- # Fancy Box ---------*/
    if ($('[data-fancybox]').length > 0) {
        $('[data-fancybox]').fancybox({
            protect: true,
            animationEffect: "fade",
            hash: null,
            youtube : {
                autoplay : 0
            },
            vimeo : {
                color : 'f00'
            }
        });
    }

    /* --------- # Portfolio Slider ---------*/
    var swiper = new Swiper('.xg-portfolio-slider', {
        speed:800,
        effect: 'fade',
        loop: true,
        pagination: {
            el: '.xg-portfolio-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.xg-portfolio-next',
            prevEl: '.xg-portfolio-prev',
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
    });

    /* --------- # Experience Slider ---------*/
    var swiper = new Swiper('.xg-experience-slider', {
        grabCursor: true,
        speed:1000,
        navigation: {
            nextEl: '.xg-experience-next',
            prevEl: '.xg-experience-prev',
        },
    });

    /* --------- # Education Slider ---------*/
    var swiper = new Swiper('.xg-education-slider', {
        grabCursor: true,
        speed:1000,
        navigation: {
            nextEl: '.xg-education-next',
            prevEl: '.xg-education-prev',
        },
    });

    /* --------- # Animated Cursor ---------*/
    if ($(window).width() > 991) {
        animatedCursor();
    }
    function animatedCursor() {

        if ($("#aimated-cursor").length) {

            var e = {x: 0, y: 0}, t = {x: 0, y: 0}, n = .25, o = !1, a =    document.getElementById("cursor"),
                i = document.getElementById("cursor-loader");
            TweenLite.set(a, {xPercent: -50, yPercent: -50}), document.addEventListener("mousemove", function (t) {
                var n = window.pageYOffset || document.documentElement.scrollTop;
                e.x = t.pageX, e.y = t.pageY - n
            }), TweenLite.ticker.addEventListener("tick", function () {
                o || (t.x += (e.x - t.x) * n, t.y += (e.y - t.y) * n, TweenLite.set(a, {x: t.x, y: t.y}))
            }),
                $(".animated-wrap").mouseenter(function (e) {
                    TweenMax.to(this, .3, {scale: 1.5}), TweenMax.to(a, .3, {
                        scale: 2,
                        borderWidth: "1px",
                        opacity: .2
                    }), TweenMax.to(i, .3, {
                        scale: 2,
                        borderWidth: "1px",
                        top: 1,
                        left: 1
                    }), TweenMax.to($(this).children(), .3, {scale: .7}), o = !0
                }),
                $(".animated-wrap").mouseleave(function (e) {
                    TweenMax.to(this, .3, {scale: 1}), TweenMax.to(a, .3, {
                        scale: 1,
                        borderWidth: "2px",
                        opacity: 1
                    }), TweenMax.to(i, .3, {
                        scale: 1,
                        borderWidth: "2px",
                        top: 0,
                        left: 0
                    }), TweenMax.to($(this).children(), .3, {scale: 1, x: 0, y: 0}), o = !1
                }),
                $(".animated-wrap").mousemove(function (e) {
                    var n, o, i, l, r, d, c, s, p, h, x, u, w, f, m;
                    n = e, o = 2, i = this.getBoundingClientRect(), l = n.pageX - i.left, r = n.pageY - i.top, d = window.pageYOffset || document.documentElement.scrollTop, t.x = i.left + i.width / 2 + (l - i.width / 2) / o, t.y = i.top + i.height / 2 + (r - i.height / 2 - d) / o, TweenMax.to(a, .3, {
                        x: t.x,
                        y: t.y
                    }), s = e, p = c = this, h = c.querySelector(".animated-element"), x = 20, u = p.getBoundingClientRect(), w = s.pageX - u.left, f = s.pageY - u.top, m = window.pageYOffset || document.documentElement.scrollTop, TweenMax.to(h, .3, {
                        x: (w - u.width / 2) / u.width * x,
                        y: (f - u.height / 2 - m) / u.height * x,
                        ease: Power2.easeOut
                    })
                }),
                $(".hide-cursor,.btn").mouseenter(function (e) {
                    TweenMax.to("#cursor", .2, {borderWidth: "1px", scale: 2, opacity: 0})
                }),
                $(".hide-cursor,.btn").mouseleave(function (e) {
                    TweenMax.to("#cursor", .3, {borderWidth: "2px", scale: 1, opacity: 1})
                }),
                $("#pp-nav li,.xg-vertical-menu li a,.cursor-hover").mouseenter(function (e) {
                    TweenMax.to("#cursor", .2, {
                        borderWidth: "0px",
                        scale: 2.5,
                        backgroundColor: "rgba(255,50,77,0.4)",
                        opacity: .15
                    })
                }),
                $("#pp-nav li,.xg-vertical-menu li a,.cursor-hover").mouseleave(function (e) {
                    TweenMax.to("#cursor", .3, {
                        borderWidth: "2px",
                        scale: 1,
                        backgroundColor: "rgba(208, 5, 32, 0)",
                        opacity: 1
                    })
                })
        }
    }

})($);
