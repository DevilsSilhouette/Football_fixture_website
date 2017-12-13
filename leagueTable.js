// Just testing some stuff right now. This file calls a specific league
// and lists all of its teams.

var authToken = "09af676d84d5430a8e4702bfc3e99835";

$.ajax({
	type: 'GET',
	url: 'http://api.football-data.org/v1/competitions',
	headers: {"X-Auth-Token": authToken}, 
	success: function(data) {
		$.each(data, function(i, league) {
			let name = league.caption;
			let row = $('<tr>').text(name);
			console.log(row);
			$(row).appendTo('.leagues');
		});
	},
	error: function(err) {
		console.log("Error: ", err);
	}
})