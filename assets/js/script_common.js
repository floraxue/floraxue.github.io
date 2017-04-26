$(document).ready(function(){

	$('#email-icon').click(function() {   // 3rd JS function
		// console.log("fadeIn");
		$('.pop-up-box-container').fadeIn();   // 4th JS function
	});
	$('#email-exit').click(function() {
		$('.pop-up-box-container').fadeOut();   // 5th JS function
	});
	$('.pop-up-box-overlay').click(function() {
		$('.pop-up-box-container').fadeOut();
	});

	// $('#email-link').mouseover(function() {
	// 	$('#email-link').addClass('animation');
	// });

});
	