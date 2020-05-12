$(document).ready(function(){

	// navbar
	$('.navbar').waypoint(function() {
		$('.navbar').addClass('animate__animated animate__fadeInDown')
	},{
		offset: '50%'
	});

	// about
	$('.about').waypoint(function() {
		$('.about').addClass('animate__animated animate__fadeInUp')
	},{
		offset: '50%'
	});

});