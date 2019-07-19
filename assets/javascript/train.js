

var config = {
    apiKey: "AIzaSyBG5yq90YwpP8JB8IOC-vw_VXibv85y5vw",
    authDomain: "trainsch-38078.firebaseapp.com",
    databaseURL: "https://trainsch-38078.firebaseio.com/",
    projectId: "trainsch-38078",
    storageBucket: "trainsch-38078.appspot.com",
    messagingSenderId: "865454381026",
    appId: "1:865454381026:web:2c29872bbec6cd23"
  };


  firebase.initializeApp(config);

  var dataRef = firebase.database();

  // Initial Values
  var trainName = "";
  var destination = "";
  var firstTrainTime = 0;
  var frequency = 0;



//  Create on click 

$("#submit-info").on("click", function(event){
    event.preventDefault();

    trainName = $("#train-input").val().trim();
    destination = $("#destination-input").val().trim();
    firstTrainTime = $("#trainTime-input").val().trim();
    frequency = $("#frequency-input").val().trim();

    dataRef.ref().push({

        trainName: trainName,
        destination: destination,
        firstTrainTime: firstTrainTime,
        frequency: frequency,
        // ???????????
        // dateAdded: firebase.database.ServerValue.TIMESTAMP

    });

});

dataRef.ref().on("child_added", function(childSnapshot){

      console.log(childSnapshot.val().trainName);
      console.log(childSnapshot.val().destination);
      console.log(childSnapshot.val().firstTrainTime);
      console.log(childSnapshot.val().frequency);

})