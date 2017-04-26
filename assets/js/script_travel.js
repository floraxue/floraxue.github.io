$(document).ready(function(){

	$('#projects').hover(function() {								   // 1st JS function
		$('#projects').css({'border-bottom' : '#6FD6FF dotted 2px'});  // 2nd JS function
	});
	$('#projects').mouseout(function() {
		$('#projects').css({'border-bottom' : 'none'});
	});
	$('#home').hover(function() {
		$('#home').css({'border-bottom' : '#6FD6FF dotted 2px'});
	});
	$('#home').mouseout(function() {
		$('#home').css({'border-bottom' : 'none'});
	});
	$('#resume').hover(function() {
		$('#resume').css({'border-bottom' : '#6FD6FF dotted 2px'});
	});
	$('#resume').mouseout(function() {
		$('#resume').css({'border-bottom' : 'none'});
	});

	$('.single-image-container').click(function() {
		if ($(this).hasClass("zoomed-in")) {
			$(this).removeClass('zoomed-in');
			if ($(this).hasClass("alaska")) {
				$('#seattle-section').css({'top': '0px', 'position':'relative'});
			}
			$('.page').css('height', '1600px');
			$('.footer').css('top', '1600px');
		} else {
			$(this).addClass('zoomed-in');
			if ($(this).hasClass("alaska")) {
				$('#seattle-section').css({'top': '200px', 'position':'relative'});
			}
			$('.page').css('height', '1900px');
			$('.footer').css('top', '1900px');

		}
	});

	$('.back-to-top').click(function() {
		$('body').scrollTop(0);						// 6th JS function
	});

});