$(function () {
	$('comment__list').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 500,
		prevArrow: '',
		nextArrow: '',
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					arrows: false,
				},
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 2,
					arrows: false,
				},
			},
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 1,
					arrows: false,
				},
			},
		],
	});
});
