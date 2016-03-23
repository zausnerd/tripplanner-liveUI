function coordinateFinder(name, database) {
	for (var i = 0; i < database.length; i++) {
		if (name === database[i].name) {
			return database[i].place.location;
		}
	}
}



$('.itinerary-item').on('click', '.remove', function() {
	$(this).prev('span').remove();
	$(this).remove();
	// console.log($(this).prev(['span']).val());
});

$('#hotel-button').on('click',function() {
	$('#hotel-item').append("<span class='title'>" + $('#hotel-select').val() +"</span>" );
	$('#hotel-item').append('<button class="btn btn-xs btn-danger remove btn-circle">x</button>');
	drawLocation(coordinateFinder($('#hotel-select').val(), hotels), { icon: '/images/lodging_0star.png' });
});


$('#restaurant-button').on('click',function() {
	$('#restaurant-item').append("<span class='title'>" + $('#restaurant-select').val() +"</span>" );
	$('#restaurant-item').append('<button class="btn btn-xs btn-danger remove btn-circle">x</button>');
	drawLocation(coordinateFinder($('#restaurant-select').val(), restaurants), { icon: '/images/restaurant.png' });
});


$('#activity-button').on('click',function() {
	$('#activity-item').append("<span class='title'>" + $('#activity-select').val() +"</span>" );
	$('#activity-item').append('<button class="btn btn-xs btn-danger remove btn-circle">x</button>');
	drawLocation(coordinateFinder($('#activity-select').val(), activities), { icon: '/images/star-3.png' });
});

