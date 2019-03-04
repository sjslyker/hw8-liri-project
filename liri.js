require("dotenv").config();
var keys = require("./keys.js");
var axios = require("axios");
var Spotify = require('node-spotify-api');
// var moment = require('')

// Store all of the arguments in an array
var term = process.argv[2];
var nodeArgs = process.argv.slice(3).join(" ");

var spotify = new Spotify({
  id: keys.spotify.id,
  secret: keys.spotify.secret
});

if (term === "movie") {
  if (nodeArgs == "") {
    nodeArgs = "Shrek";
}
  // Then run a request with axios to the OMDB API with the movie specified
  var queryUrl = "http://www.omdbapi.com/?t=" + nodeArgs + "&y=&plot=short&apikey=trilogy";

  // This line is just to help us debug against the actual URL.
  console.log(queryUrl);

  axios.get(queryUrl).then(
      function(response) {
          console.log("Movie Title: " + response.data.Title);
          console.log("Release Year: " + response.data.Year);
          console.log("IMDB Rating: " + response.data.imdbRating);
          console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
          console.log("Country Produced: " + response.data.Country);
          console.log("Movie Language: " + response.data.Language);
          console.log("Movie Plot: " + response.data.Plot);
          console.log("Movie Actors: " + response.data.Actors);
      }
    );
} else if (term === "song") {
  var Spotify = require('node-spotify-api');

  if (nodeArgs == "") {
    nodeArgs = "tubthumping";
}
   
  spotify.search({ type: 'track', query: nodeArgs, limit: 1 }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
  console.log("Artist: " + data.tracks.items[0].album.artists[0].name) 
  console.log("Song : " + data.tracks.items[0].name) 
  console.log("Song URL: " + data.tracks.items[0].preview_url) 
  console.log("Album: " + data.tracks.items[0].album.name) 
  });
} else if (term === "band") {
  var queryUrlBands = "http://www.omdbapi.com/?t=" + nodeArgs + "&y=&plot=short&apikey=trilogy";

  axios.get(queryUrlBands).then(
    function(response) {
      console.log(response)
    }
  );
}