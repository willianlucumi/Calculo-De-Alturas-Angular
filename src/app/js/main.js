(function ($) {
    "use strict";
    
    // Initiate the wowjs
    new WOW().init();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 90) {
            $('.nav-bar').addClass('nav-sticky');
            $('.carousel, .page-header').css("margin-top", "73px");
        } else {
            $('.nav-bar').removeClass('nav-sticky');
            $('.carousel, .page-header').css("margin-top", "0");
        }
    });
    
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // jQuery counterUp
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });
    
    
    // Calculadora de Altura
        document.getElementById('calculate-btn').addEventListener('click', function() {
            const distance = parseFloat(document.getElementById('distance').value);
            const angle = parseFloat(document.getElementById('angle').value);
            
            if (isNaN(distance) || isNaN(angle)) {
                alert('Por favor ingresa valores válidos');
                return;
            }
            
            const angleRad = angle * (Math.PI / 180);
            const height = distance * Math.tan(angleRad);
            
            document.getElementById('result-height').textContent = height.toFixed(2);
        });

        // Calculadora de Presupuesto
        document.getElementById('calculate-budget-btn').addEventListener('click', function() {
            const projectType = document.getElementById('project-type').value;
            const area = parseFloat(document.getElementById('area').value);
            const quality = document.getElementById('quality').value;
            
            if (isNaN(area) || area <= 0) {
                alert('Por favor ingresa un área válida');
                return;
            }
            
            // Costos base por m² (ejemplo)
            const costosBase = {
                nueva_casa: { basico: 800, medio: 1200, premium: 2000 },
                remodelacion: { basico: 600, medio: 900, premium: 1500 },
                obra_civil: { basico: 500, medio: 800, premium: 1300 }
            };
            
            const costoPorM2 = costosBase[projectType][quality];
            const costoTotal = area * costoPorM2;
            
            document.getElementById('budget-result').textContent = '$' + costoTotal.toLocaleString('es-CO');
            document.getElementById('save-quote-btn').classList.remove('hidden');
        });

        // Guardar Cotización
        document.getElementById('save-quote-btn').addEventListener('click', function() {
            alert('Funcionalidad de guardar cotización - Por implementar');
        });


    // Testimonial Slider
    $('.testimonial-slider').slick({
        infinite: true,
        autoplay: true,
        arrows: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.testimonial-slider-nav'
    });
    $('.testimonial-slider-nav').slick({
        arrows: false,
        dots: false,
        focusOnSelect: true,
        centerMode: true,
        centerPadding: '22px',
        slidesToShow: 3,
        asNavFor: '.testimonial-slider'
    });
    $('.testimonial .slider-nav').css({"position": "relative", "height": "160px"});
    
    
    // Blogs carousel
    $(".related-slider").owlCarousel({
        autoplay: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            }
        }
    });
    
    
    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);

