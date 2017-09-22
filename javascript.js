

	var possibleAnswers = ["DOG", "CAT", "HUMAN", "GIRRAFFE", "ZEBRA", "OWL", "TIGER", "LION", "ELEPHANT"]
	var userAnswer;
	var answer;
	var answerKey;
	var answerArr;
	var badLetters;
	var error;
	var wins = 0;
	var losses = 0;

	function gameStart(){
		///set/reset variables
		error = 0;
		badLetters =[];
		answerKey = [];
		answerArr = [];

		//select word
		answer = possibleAnswers[Math.floor(Math.random()*possibleAnswers.length)];
		//create answerKey
		for (var i = 0; i < answer.length; i++) {
			answerKey.push ("_");
			answerArr.push(answer[i]);
		}

		//push answer key to HTML
		document.getElementById("correct").innerHTML = answerKey;
		document.getElementById("winLoss").innerHTML = "Wins: " + wins + " Losses: " + losses;
		document.getElementById("wrong").innerHTML = badLetters;
	}

	//initialize game
	gameStart();
	
	
	//on key press execute the below function
	document.onkeypress = function (event) {
		//assign key press to userAnswer and convert to upper case
		userAnswer=event.key.toUpperCase();

		//if the letter guessed isn't in the answer and hasn't already been selected increment the value of
		//error and add the wrong letter guessed to the bad letter array
		if (answer.indexOf(userAnswer)===-1){
			if(badLetters.indexOf(userAnswer)!== -1){
				return;
			};
			error++;
			badLetters.push(userAnswer);
			document.getElementById("wrong").innerHTML = badLetters;


		};

		//loop through the word and check to see if the userAnswer
		//matches the indexed letter of the answer
		for (var i = 0; i < answer.length; i++) {

			//if userAnswer matches the indexed letter, then add it to the answerKey
			//array at the indexed position
			if (userAnswer === answer[i]) {
				answerKey[i] = userAnswer;
			}; 

		};
		document.getElementById("correct").innerHTML = answerKey;

		//evaluate if answer = answerKey, if true alert "you win", increment wins, reset game
		//evaluate if error >= 6, if true alert "you lose", increment losses, reset game
		if (answerKey.toString()===answerArr.toString()) {
					alert("you win");
					wins++;
					gameStart();
				} else if (error >= 6) {
					alert("you lose")
					losses++;
					gameStart();
				};


		switch (error) {
			case 1:
				document.getElementById("dynamic").src="hangmanimgs/head.png";
	 			document.getElementById("static-1").style.opacity=1.0;
 				break;
			case 2:
				document.getElementById("dynamic").src="hangmanimgs/body.png";
		 		document.getElementById("static-2").style.opacity=1.0;
		 		break;
	 		case 3:
	 			document.getElementById("dynamic").src="hangmanimgs/ArmL.png";
		 		document.getElementById("static-3").style.opacity=1.0;
		 		break;
	 		case 4:
	 			document.getElementById("dynamic").src="hangmanimgs/ArmR.png";
		 		document.getElementById("static-4").style.opacity=1.0;
		 		break;
	 		case 5:
	 			document.getElementById("dynamic").src="hangmanimgs/LegL.png";
		 		document.getElementById("static-5").style.opacity=1.0;
		 		break;
	 		case 6:
	 			break;
		}
	}; 
