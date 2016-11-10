$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });


//sliders nextButton: $this.find(".button-next")[0],
	        // prevButton:  $this.find(".button-prev")[0]
	
	// var mySwiper1 = new Swiper('.nepal-slider', {
	// 	autoplay: 5000,
	//     speed: 800,
	//     loop: true,
	//     pagination: '.swiper-pagination',
 //        paginationClickable: true,
 //        nextButton: '.button-next',
 //        prevButton: '.button-prev',
	// });
	// var mySwiper2 = new Swiper('.altay-slider', {
	// 	autoplay: 5000,
	//     speed: 800,
	//     loop: true,
	//     pagination: '.swiper-pagination',
 //        paginationClickable: true,
 //        nextButton: '.button-next',
 //        prevButton: '.button-prev',
	// });
	// var mySwiper3 = new Swiper('.dakar-slider', {
	// 	autoplay: 5000,
	//     speed: 800,
	//     loop: true,
	//     pagination: '.swiper-pagination',
 //        paginationClickable: true,
 //        nextButton: '.button-next',
 //        prevButton: '.button-prev',
	// });
	// var mySwiper4 = new Swiper('.free-maps-slider', {
	// 	autoplay: 5000,
	//     speed: 800,
	//     loop: true,
	//     pagination: '.swiper-pagination',
 //        paginationClickable: true,
 //        nextButton: '.button-next',
 //        prevButton: '.button-prev',
	// });
	// var mySwiper5 = new Swiper('.example-slider', {
	// 	autoplay: 5000,
	//     speed: 800,
	//     loop: true,
 //        nextButton: '.button-next',
 //        prevButton: '.button-prev',
 //        effect: 'fade'
	// });
	//button height
	 var parentHeight = $('.slider-item').height();
       $('div[data-height]').css('height', parentHeight);
	
	  $(".swiper-container").each(function(index, element){
       var $this = $(this);
       $this.addClass("instance-" + index);
       $this.find(".button-prev").addClass("btn-prev-" + index);
        $this.find(".button-next").addClass("btn-next-" + index);
   		$this.find(".swiper-pagination").addClass("pagina" + index);
       var swiper = new Swiper(".instance-" + index, {
        nextButton: $this.find(".button-next")[0],
        prevButton: $this.find(".button-prev")[0],
		pagination: $this.find(".swiper-pagination")[0],
        paginationClickable: true,
        autoplay: 5000,
	    speed: 800,
	    loop: true
	    });
       
    });
	var mySwiper = new Swiper('.example-slider', {
		nextButton: '.button-next',
		prevButton: '.button-prev',
	   	effect: 'fade',
	    speed: 800,
	    loop: true
	   });

    

// scroll to top button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 500) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
//mobile menu
	$('.nav-mobile').on('click', function(){
		$('.nav-menu').toggle();
	});
//gallery
	$('.set-gallery-one .set-layers').magnificPopup({
		type:'image',
		gallery: {
			enabled:true,
			tCounter: '<span class="mfp-counter">%curr% из %total%</span>'
		}
	});
	$('.set-gallery-two .set-layers').magnificPopup({
		type:'image',
		gallery: {
			enabled:true,
			tCounter: '<span class="mfp-counter">%curr% из %total%</span>'
		}
	});
});
