var dayCount = 3;
var prevDay;
var curDay = 2;

function coordinateFinder(name, database) {
	for (var i = 0; i < database.length; i++) {
		if (name === database[i].name) {
			return database[i].place.location;
		}
	}
}

function markerFinder(name) {
	for (var i = 0; i < markers.length; i++) {
		if (name == markers[i].name) {
			return markers.splice(i, 1)[0].marker;
		}
	}
}


//hide map items
$('.itinerary-item').on('click', '.remove', function() {
	markerFinder($(this).prev('span').text()).setMap(null);
	$(this).prev('span').remove();
	$(this).remove();	
});

$('#hotel-button').on('click',function() {
	$('#hotel-item').append("<span class='title day" + $('.current-day').text() + "'>" + $('#hotel-select').val() +"</span>" );
	$('#hotel-item').append("<button class='btn btn-xs btn-danger remove btn-circle day" + $('.current-day').text() + "'>x</button>");
	drawLocation(coordinateFinder($('#hotel-select').val(), hotels), { icon: '/images/lodging_0star.png' },$('#hotel-select').val(), $('.current-day').text());
});


$('#restaurant-button').on('click',function() {
	$('#restaurant-item').append("<span class='title day" + $('.current-day').text() + "'>" + $('#restaurant-select').val() +"</span>" );
	$('#restaurant-item').append("<button class='btn btn-xs btn-danger remove btn-circle day" + $('.current-day').text() + "'>x</button>");
	drawLocation(coordinateFinder($('#restaurant-select').val(), restaurants), { icon: '/images/restaurant.png'},$('#restaurant-select').val(), $('.current-day').text());
});


$('#activity-button').on('click',function() {
	$('#activity-item').append("<span class='title day" + $('.current-day').text() + "'>" + $('#activity-select').val() +"</span>" );
	$('#activity-item').append("<button class='btn btn-xs btn-danger remove btn-circle day" + $('.current-day').text() + "'>x</button>");
	drawLocation(coordinateFinder($('#activity-select').val(), activities), { icon: '/images/star-3.png' }, $('#activity-select').val(), $('.current-day').text());
});


$('#add-day').on('click',function() {
	console.log($('.day-buttons:nth-last-child(2)').val());
	$('<button class="btn btn-circle day-btn">' + (++dayCount) + '</button>').insertBefore('#add-day');
});

$('.day-buttons').on('click', '.day-btn', function() {
	if ($(this).text() !== '+') {
		$('.current-day').removeClass('current-day');
		$(this).addClass('current-day');
		prevDay = curDay;
		curDay = $(this).text();
		// console.log("previous day:", prevDay, "current day:", curDay);
		hideAndShow(prevDay, curDay);
		$('.title-text').text('Day ' + curDay);
	}
});

function hideAndShow (prev, cur) {
	$('.day' + prev).toggle();
	$('.day' + cur).toggle();
	markers.forEach(function(elem) {
		if (elem.day == prev) {
			elem.marker.setMap(null);
		}
		if (elem.day == cur) {
			elem.marker.setMap(map);
		}
	});
}

function clearMarkers () {
	markers = [];
}
//remove page
$('#day-remover').on('click', function() {
	var removalCounter = dayCount;
	var removedDate = $('.current-day').text();
	$('.day' + removedDate).remove();
	$('.btn.current-day').remove();
	dayCount--;
	while (removalCounter > removedDate) {
		$('.day' + removalCounter).addClass('day' + (removalCounter - 1)).removeClass('day' + removalCounter);
		removalCounter--;
	}
	$('.day-btn:first').addClass('current-day');
	// console.log($('.day-btn:first').text(),'****');
	$('.title-text').text('Day ' + $('.btn.btn-circle.day-btn.current-day').text());
	hideAndShow(removedDate, 1);
});

// on click of red button
// var removalCounter = dayCount;
// elem.hasClass(day we're on).remove();
// while (removalCounter > (day we're on) {
// 	if (elem.hasClass('day' + removalCounter) {
	// addClass('day' + (removalCounter - 1));
	// removeClass('day' + removalCounter);
	// removalCounter--;
// })
// })
// 
// if elem.hasClass('day' + (num > num we just removed)) {
	// removeClass('day' + num);
	// addClass('day' + (num-1));
// }
