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
	$('#resume').mouseover(function() {
		$('#resume').css({'border-bottom' : '#6FD6FF dotted 2px'});
	});
	$('#resume').mouseout(function() {
		$('#resume').css({'border-bottom' : 'none'});
	});

	$('.back-to-top').click(function() {
		$('body').scrollTop(0);						// 6th JS function
	});

	$('#amazon-box').mouseover(function() {
		$('#amazon-overlay').show();
		// $('#amazon-overlay').addClass('.animation');
	});
	$('#amazon-box').mouseout(function() {
		// $('#amazon-overlay').removeClass('.animation');
		$('#amazon-overlay').hide();
	});

	$('#bt-box').mouseover(function() {
		// $('#bt-overlay').addClass('.animation');
		$('#bt-overlay').show();
	});
	$('#bt-box').mouseout(function() {
		// $('#bt-overlay').removeClass('.animation');
		$('#bt-overlay').hide();
	});

	$('#bids-box').mouseover(function() {
		// $('#bids-overlay').addClass('.animation');
		$('#bids-overlay').show();
	});
	$('#bids-box').mouseout(function() {
		// $('#bids-overlay').removeClass('.animation');
		$('#bids-overlay').hide();
	});

	$('#bookselves-box').mouseover(function() {
		// $('#bookselves-overlay').addClass('.animation');
		$('#bookselves-overlay').show();
	});
	$('#bookselves-box').mouseout(function() {
		// $('#bookselves-overlay').removeClass('.animation');
		$('#bookselves-overlay').hide();
	});

});