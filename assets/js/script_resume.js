$(document).ready(function(){
	
	$('#home').mouseover(function() {
		$('#home').css({'border-bottom' : '#6FD6FF dotted 2px'});
	});
	$('#home').mouseout(function() {
		$('#home').css({'border-bottom' : 'none'});
	});
	$('#travel').mouseover(function() {
		$('#travel').css({'border-bottom' : '#6FD6FF dotted 2px'});
	});
	$('#travel').mouseout(function() {
		$('#travel').css({'border-bottom' : 'none'});
	});
	$('#projects').mouseover(function() {
		$('#projects').css({'border-bottom' : '#6FD6FF dotted 2px'});
	});
	$('#projects').mouseout(function() {
		$('#projects').css({'border-bottom' : 'none'});
	});

});