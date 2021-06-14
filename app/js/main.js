$(function () {



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















