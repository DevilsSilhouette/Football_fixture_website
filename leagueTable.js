// Just testing some stuff right now. This file calls a specific league
// and lists all of its teams.

var authToken = "09af676d84d5430a8e4702bfc3e99835";

$.ajax({
	type: 'GET',
	url: 'http://api.football-data.org/v1/competitions/445/leagueTable',
	headers: {"X-Auth-Token": authToken}, 
	success: function(data) {
		$('.leagueName').text(data.leagueCaption + " Standings");
		$.each(data.standing, function(i, team) {
			let name = team.teamName;
			let className = convertToClassName(name);
			let row = $('<tr>').addClass(className);

			if (team.position == 1) {
				$(row).addClass("table-success");
			} else if ([18, 19, 20].indexOf(team.position) != -1) {
				$(row).addClass("table-danger");
			}

			$('<th>').text(team.position).appendTo(row);
			$('<td>').text(name).appendTo(row);
			$('<td>').text(team.playedGames).appendTo(row);
			$('<td>').text(team.wins).appendTo(row);
			$('<td>').text(team.draws).appendTo(row);
			$('<td>').text(team.losses).appendTo(row);
			$('<td>').text(team.points).appendTo(row);
			$('<td>').text(team.goals).appendTo(row);
			$('<td>').text(team.goalsAgainst).appendTo(row);
			$('<td>').text(team.goalDifference).appendTo(row);
			$(row).appendTo('.table-body');
		});
	},
	error: function(err) {
		console.log("Error: ", err);
	}
})

let convertToClassName = function(name) {
	return name.toLowerCase().replace(/ /g, "-");
}
