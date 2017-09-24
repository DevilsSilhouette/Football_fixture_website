//    npm init -y 
//    npm install request --save
//

var request = require('request')

// This function is being declared to issue a HTTP GET to the given API.
// The function will "return" the found users ONLY when the response is 
// received by calling the callback function: foundUsers
function getUsers(foundUsers) {

  var query = "http://api.football-data.org/v1/competitions/445/teams"

  request.get(query, function(error, response, body) {
    if (error) {
      return error;
    }

    if (response.statusCode === 200) {
      var fullData = JSON.parse(body);
      if (fullData.data) {
        //console.log("Data: ", fullData.data[0].last_name);
      }
      foundUsers(fullData.teams);
    }

  });
 }

 getUsers(function(allUsers) {
  for (var i = 0; i < allUsers.length; i++) {
  	console.log(allUsers[i].name);
  }
 })

console.log("I'm done with everything!!!")