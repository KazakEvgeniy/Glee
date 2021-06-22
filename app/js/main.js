$(function () {

	$('.footer-top__item--one ').on('click', function () {
		$('.footer-top__list--one').slideToggle();
	});
	$('.footer-top__item--too ').on('click', function () {
		$('.footer-top__list--too').slideToggle();
	});




	$('.header__button').on('click', function () {
		$('.menu__list').toggleClass('menu__list--active');
	});




	$('.product-details__thumb-item').slick({
		asNavFor: '.product-details__big-item',
		focusOnSelect: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		vertical: true,
		draggable: false
	})

	$('.product-details__big-item').slick({
		asNavFor: '.product-details__thumb-item',
		draggable: false,
		arrows: false,
		fade: true
	})


	$('.product-slider').slick({
		dots: false,
		arrows: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<button type="button" class="slick-prev">	<img src="images/icons/arrow-right1.svg" alt=""></button>',
		nextArrow: '<button type="button" class="slick-next">	<img src="images/icons/arrow-left1.svg" alt=""></button>',


		// autoplay: true,
		// autoplaySpeed: 1000
	})




	$('.product__btn-list').on('click', function () {
		$('.product__btn-list').removeClass('product__btn-list--active');
		$(this).addClass('product__btn-list--active');


	});


	// $('.product-list__user').on('click', function () {
	// 	$('.product-list__user').addClass('product-list__wallet--active');
	// });


	// $('.product__btn-list').on('click', function () {
	// 	$('.product-list__user').removeClass('product-list__wallet--active');
	// });


	$('.product-content__num').styler();







	$('.product-tabs__btn').on('click', function (e) {

		e.preventDefault();
		$('.product-tabs__btn').removeClass('product-tabs__btn--active');
		$(this).addClass('product-tabs__btn--active')


		$('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
		$($(this).attr('href')).addClass('product-tabs__content-item--active');



	});






	$(".filter-price__input").ionRangeSlider({
		type: "double",
		prefix: "$",
		step: 0.01,




		onStart: function (data) {
			$('.filter-price__from').text(data.from);
			$('.filter-price__to').text(data.to);

		},


		onChange: function (data) {

			$('.filter-price__from').text(data.from);
			$('.filter-price__to').text(data.to);

		},



	});



	$(".star").rateYo({
		starWidth: "12px",
		normalFill: "#d6d6d6",
		ratedFill: "#ffcc00",
		// readOnly: true,
	});







	$('.top-slider__inner').slick({
		dots: true,
		arrows: false,
		// fade: true,
		// autoplay: true,
		// autoplaySpeed: 1000
	})



	var mixer = mixitup('.product-filter__items');
	var mixer = mixitup('.design__items');


});













