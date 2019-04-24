//Initialize firebase
var config = {
   apiKey: "AIzaSyBL9AV2Q2EnEpjm4lOge9lUjmmi0NNZPvI",
   authDomain: "traintime3-842d8.firebaseapp.com",
   databaseURL: "https://traintime3-842d8.firebaseio.com",
   projectId: "traintime3-842d8",
   storageBucket: "traintime3-842d8.appspot.com",
   messagingSenderId: "647516214157"
 };

firebase.initializeApp(config);

var database = firebase.database();

//initial values

var name = "";
var destination = "";
var firstTime = "";
var frequency = "";

//When a user submits a new train-

$("#submit").on("click", function(event) {
    event.preventDefault();
    // Get the input values
    var name = $("#train-name").val().trim();
    var destination = $("#destination").val().trim();
    var firstTime = $("#firstTime").val().trim();
    var frequency = $("#frequency").val().trim();
  
    // Log the new train data
    console.log(name);
    console.log(destination);
    console.log(firstTime);
    console.log(frequency);



database.ref().push({
   name: name,
   destination: destination,
   firstTime: firstTime,
   frequency: frequency,
   dateAdded: firebase.database.ServerValue.TIMESTAMP
 });

});

 database.ref().on("child_added", function(snapshot) {
   // storing the snapshot.val() in a variable for convenience
   var sv = snapshot.val();

   // Console.loging the last user's data
   console.log(sv.name);
   console.log(sv.destination);
   console.log(sv.firstTime);
   console.log(sv.frequency);

   // Change the HTML to reflect
   $("#train-name").text(sv.name);
   $("#destination").text(sv.destination);
   $("firstTime").text(sv.firstTime);
   $("#frequency").text(sv.frequency);

   // Handle the errors
 }, function(errorObject) {
   console.log("Errors handled: " + errorObject.code);
 });



