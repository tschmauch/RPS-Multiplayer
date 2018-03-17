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
	var player1 = '';
	var player1bool = false;
	var player2 = '';
	var player2bool = false;
	

	// Players sign-in
	$('#submit').on('click', function() {
		if (player1bool == false) {
			$('#player-1-name').text($('#username').val());
			database.ref().set({
				user1: $('#username').val()
			});
			$('#username').val('');
			player1bool = true;
		}
		else if (player1bool == true && player2bool == false){
			$('#player-2-name').text($('#username').val());
			database.ref().set({
				user2: $('#username').val()
			});
			$('#username').val('');
			player2bool = true;
		}
		else {
			alert('Lobby is full.');
		}
	})