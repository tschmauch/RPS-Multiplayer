  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDhrsJIdMfy4auW52KOACElOlopbBMZaAk",
    authDomain: "rock-paper-scissors-5de74.firebaseapp.com",
    databaseURL: "https://rock-paper-scissors-5de74.firebaseio.com",
    projectId: "rock-paper-scissors-5de74",
    storageBucket: "",
    messagingSenderId: "403215903152"
  };
	firebase.initializeApp(config);
	
	var database = firebase.database();

	var wins1 = 0;
	var wins2 = 0;
	var player1;
	var player2;
	var 