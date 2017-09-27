// Just testing some stuff right now. This file calls a specific league
// and lists all of its teams.

var request = require('request');

function getLeagueTable(foundUsers) {

  var query = "http://api.football-data.org/v1/competitions/445/leagueTable";

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
 }

 getLeagueTable(function(allUsers) {
  for (var i = 0; i < allUsers.length; i++) {
  	var currentPosition = allUsers[i];
  	console.log("In position " + currentPosition.position + ": " + currentPosition.teamName + ", with " +
                currentPosition.points + " points.");
  }
 });
