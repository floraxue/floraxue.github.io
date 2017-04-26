$(document).ready(function(){

	$('#projects').hover(function() {								   // 1st JS function
		$('#projects').css({'border-bottom' : '#6FD6FF dotted 2px'});  // 2nd JS function
	});
	$('#projects').mouseout(function() {
		$('#projects').css({'border-bottom' : 'none'});
	});
	$('#travel').hover(function() {
		$('#travel').css({'border-bottom' : '#6FD6FF dotted 2px'});
	});
	$('#travel').mouseout(function() {
		$('#travel').css({'border-bottom' : 'none'});
	});
	$('#resume').hover(function() {
		$('#resume').css({'border-bottom' : '#6FD6FF dotted 2px'});
	});
	$('#resume').mouseout(function() {
		$('#resume').css({'border-bottom' : 'none'});
	});

});