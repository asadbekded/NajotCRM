$(function () {
	$('.comment__list').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 500,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
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
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
					arrows: false,
				},
			},
		],
	});
});
