console.log("JS is firing");
var authToken = "09af676d84d5430a8e4702bfc3e99835";

var getTableURL = function(id) {
	return "/table/" + id;
};

$.ajax({
	type: "GET",
	url: "http://api.football-data.org/v1/competitions",
	headers: {"X-Auth-Token": authToken},
	success: (data) => {
		$.each(data, (i, league) => {
			if (i % 2 == 0) {
				$('<p>').append($('<a>').attr("href", getTableURL(league.id)).text(league.caption)).appendTo('.col1');
			} else {
				$('<p>').append($('<a>').attr("href", getTableURL(league.id)).text(league.caption)).appendTo('.col2');
			}
		});		
	},
	error: (err) => {
		console.log("Error: ", err);
	}
})
.then( () => {	
	let height1 = $('.col1').height();
	let height2 = $('.col2').height();
	let maxHeight = Math.max(height1, height2);
	$('.card').height(maxHeight);
});
