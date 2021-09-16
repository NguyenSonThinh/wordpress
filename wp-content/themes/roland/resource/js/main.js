(function($) {
    "use strict";
     $(document).on('ready', function() {	
	 
		/*====================================
			Search JS
		======================================*/ 	
		$('.social-icon a').on( "click", function(){
			$('.social-header').toggleClass('active');
		});
		
		/*====================================
			Menu Click JS
		======================================*/ 	
		$('.menu-click,.close-menu button').on('click', function(){
			$('.menu-inner').toggleClass('active');
			
		});
		
		$(".ex-close-menu").focusout(function(){
			$(".ex-btn-toggle").focus();
			$(".ex-btn-toggle").addClass('active');

		});

		/*================================
			Hero Slider JS
		==================================*/ 
		$('.hero-slider').owlCarousel({
			items:1,
			autoplay:true,
			loop:false,
			autoplayTimeout:4000,
			autoplayHoverPause:true,
			smartSpeed: 700,
			merge:true,
			nav:true,
			navText: ['<i class="icofont-long-arrow-left" aria-hidden="true"></i>', '<i class="icofont-long-arrow-right" aria-hidden="true"></i>'],
			dots:true,
			responsive:{
				300: {
					nav:false,
				},
				480: {
					nav:true,
				},
				768: {
					nav:true,
					
				},
				1170: {
					nav:true,
					
				},
			}
		});	
		
		/*================================
			Blog Slider JS
		==================================*/ 
		$('.blog-slider').owlCarousel({
			items:2,
			autoplay:true,
			loop:true,
			margin:20,
			autoplayTimeout:3500,
			autoplayHoverPause:true,
			smartSpeed: 600,
			merge:true,
			nav:true,
			navText: ['<i class="icofont-long-arrow-left" aria-hidden="true"></i>', '<i class="icofont-long-arrow-right" aria-hidden="true"></i>'],
			dots:false,
			responsive:{
				300: {
					items:1,
				},
				480: {
					items:1,
				},
				768: {
					items:2,
				},
				1170: {
					items:2,
				},
			}
		});	
	
	});
	
		/*================================
			Preeloader JS
		==================================*/
		$(window).on('load', function () {
			"use strict";
			$(".preeloader").fadeOut(1000);
		});	
	  
})(jQuery);