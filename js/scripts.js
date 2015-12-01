// toggle visibility for css3 animations 
$(document).ready(function() {
	$('header').addClass('visibility');
	$('.carousel-iphone').addClass('visibility');
	$('.payoff h1').addClass('visibility');
	$('.features .col-md-4').addClass('visibility');
	$('.social .col-md-12').addClass('visibility');
});

//phone carousel animation
$(window).load(function () {
	$('header').addClass("animated fadeIn");
	$('.carousel-phone').addClass("animated fadeInLeft");
});

// Fixed navbar
$(window).scroll(function () {
	var scrollTop = $(window).scrollTop();

	$('.navbar-default').css('display', 'block');
	if (scrollTop > 300) {
		$('.navbar-default').addClass('fixed-to-top');
		$('.navbar-default').css('background', 'rgba(0,0,0,0.8)');
		$('.navbar-default').css('padding', '0');
	} else if (scrollTop == 0)   {
		$('.navbar-default').css('background', 'rgba(0,0,0,0)');
	// $('.navbar-default').removeClass('fixed-to-top');
	$('.navbar-default').css('padding', '10px 0');
	}


	//animations	
	$('.payoff h1').each(function(){
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();

		if (imagePos < topOfWindow+650) {
			$(this).addClass("animated fadeInLeft");
		}
	});

	$('.features .col-md-4').each(function(){
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();

		if (imagePos < topOfWindow+650) {
			$(this).addClass("animated flipInX");
		}
	});

	$('.social .col-md-12').each(function(){
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();

		if (imagePos < topOfWindow+550) {
			$(this).addClass("animated fadeInLeft");
		}
	});

	$('.get-it button.app-store').each(function(){
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();

		if (imagePos < topOfWindow+850) {
			$(this).addClass("animated pulse");
		}
	});
});


// Parallax Content
function parallax() {
	// Turn parallax scrolling off for iOS devices
	var iOS = false,
	p = navigator.platform;

	if (p === 'iPad' || p === 'iPhone' || p === 'iPod') {
		iOS = true;
	}

	var scaleBg = -$(window).scrollTop() / 3;

	if (iOS === false) {
		$('.payoff').css('background-position-y', scaleBg - 150);
		$('.social').css('background-position-y', scaleBg + 200);
	}
}

function navbar() {
	if ($(window).scrollTop() > 1) {
		$('#navigation').addClass('show-nav');
	} else {
		$('#navigation').removeClass('show-nav');
	}
}

$(document).ready(function () {
	var browserWidth = $(window).width();

	if (browserWidth > 560){ 

		$(window).scroll(function() {
			parallax();
			navbar();
		});

	}

	$( 'body' ).scrollspy();
	$('[data-toggle="tooltip"]').tooltip();

	// $('video').each(function(){
	//     if ($(this).is(":in-viewport")) {
	//         $(this)[0].play();
	//     } else {
	//         $(this)[0].pause();
	//     }
	// });
});	


$(window).resize(function () {
	var browserWidth = $(window).width();

	if (browserWidth > 560){ 

		$(window).scroll(function() {
			parallax();
			navbar();
		});

	}
});	

$('.progress-nav a').click(function(e) {
	e.preventDefault();
});

$('.detail .skill').click(function(e) {
	$('.detail .skill').removeClass('active');
	$(e.currentTarget).addClass('active');
	if ($(e.currentTarget).prop('id') == 'beginner') {
		$('#fix-beginner').removeClass('hidden');
		$('#fix-expert').addClass('hidden');
	} else if ($(e.currentTarget).prop('id') == 'expert') {
		$('#fix-beginner').addClass('hidden');
		$('#fix-expert').removeClass('hidden');
	}
});