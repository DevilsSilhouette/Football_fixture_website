// Just testing some stuff right now. This file calls a specific league
// and lists all of its teams.

var authToken = "09af676d84d5430a8e4702bfc3e99835";

var request = require('request');

var getTableURL = function(id) {
	return "http://api.football-data.org/v1/competitions/" + id + "/leagueTable"
};

//var query = "http://api.football-data.org/v1/competitions/445/leagueTable";

/*function getLeagueTable(foundUsers) {

	request.get(query, function(error, response, body) {
    	if (error) {
      		return error;
    	}

    	if (response.statusCode === 200) {
      		var fullData = JSON.parse(body);
      		if (fullData.data) {
        		//console.log("Data: ", fullData.data[0].last_name);
      		}
      		foundUsers(fullData.standing);
    	}

  	});
}*/

for (var i = 444; i <467; i++) {

	request({
				url : getTableURL(i),
				headers: {
					"X-Auth-Token": authToken
				}
			},
			function(error, response, body) {
				if (error) {
					return error;
				}
				if (response.statusCode === 200) {
					var fullData = JSON.parse(body);
					console.log(fullData.leagueCaption);
				}
			})



	/*getLeagueTable(function(allUsers) {

	console.log("League Table for ");

	for (var i = 0; i < allUsers.length; i++) {
  		var currentPosition = allUsers[i];
  		console.log("In position " + currentPosition.position + ": " + currentPosition.teamName + ", with " +
                	currentPosition.points + " points.");
  	}
	});*/
}

