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
		console.log(answer);
		//create answerKey
		for (var i = 0; i < answer.length; i++) {
			answerKey.push ("_");
			answerArr.push(answer[i]);
		}

		//push answer key to HTML
		document.getElementById("correct").innerHTML = answerKey;
		// document.getElementById("winLoss").innerHTML = "Wins: " + wins + " Losses: " + losses;
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
			console.log("error" , error);
			badLetters.push(userAnswer);
			// console.log("badLetters" , badLetters);
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

		// console.log("answer " , answer);
		console.log("answerKey ", answerKey);
		console.log("answerArr ", answerArr);

		//evaluate if answer = answerKey, if true alert "you win", increment wins, reset game
		//evaluate if error >= 6, if true alert "you lose", increment losses, reset game

		
	}; 

	if (answerKey===answerArr) {
			alert("you win");
			wins++;
			gameStart()
		} else if (error >= 6) {
			alert("you lose")
			losses++;
			gameStart()
		};




	
//document.getElementById("imageid").src="../template/save.png";

//initialiaze randWord
//var randWord = ["DOG", "CAT", "HUMAN", "GIRRAFFE", "ZEBRA", "OWL", "TIGER", "LION", "ELEPHANT"];



// // computer picks random word
// // var selectedWord = randWord[Math.floor(Math.rand * randWord.length)];

// // console.log(selectedWord);
// // set blank spaces in HTML

// // function startGame() {
// // 	for (i = 0; i < randWord.length; i++) {
// // 		answerArr[i] = "_";
// // 	}

// // 	s = answerArr.join(" ");
// // 	document.getElementById("correct").innerHTML = s;
// // }


// //initial word array
// var word = ["H", "A", "N", "G", "M", "A", "N"];
// var userAnswer;
// var answerKey = ["", "", "", "", "", "", ""];

// //initial error set to 0
// var error = 0;

// //get value of text area
// document.onkeypress = function(event) {
// 	userAnswer = event.key.toUpperCase();
// 	// console.log(userAnswer);
// 	//compare to aray (index of x)
// 	validAnswer = word.indexOf(userAnswer);
// 	// console.log(validAnswer);
// 	//if return -1 advance error
// 	if (validAnswer === -1) {
// 		error = error + 1;
// 		// write incorrect letters to wrong p tag 
// 		document.getElementById("wrong").innerHTML = document.getElementById("wrong").innerHTML + userAnswer;
// 		// console.log(error);
// 	} else if (validAnswer === 0) {
// 		document.getElementById("correct0").innerHTML = word[validAnswer];
// 		answerKey[0] = "H"
// 	} else if (validAnswer === 1) {
// 		document.getElementById("correct1").innerHTML = word[validAnswer];
// 		document.getElementById("correct5").innerHTML = word[validAnswer];
// 		answerKey[1] = "A"
// 		answerKey[5] = "A"
// 	} else if (validAnswer === 2) {
// 		document.getElementById("correct2").innerHTML = word[validAnswer];
// 		document.getElementById("correct6").innerHTML = word[validAnswer];
// 		answerKey[2] = "N"
// 		answerKey[6] = "N"
// 	} else if (validAnswer === 3) {
// 		document.getElementById("correct3").innerHTML = word[validAnswer];
// 		answerKey[3] = "G"
// 	} else if (validAnswer === 4) {
// 		document.getElementById("correct4").innerHTML = word[validAnswer];
// 		answerKey[4] = "M"
// 	}

// if (answerKey.toString() === word.toString()) {
// 	alert("you win, lets play again")
// 	error = 0;
// 	answerKey = [0, 0, 0, 0, 0, 0, 0];
// 	document.getElementById("wrong").innerHTML = "";
// 	document.getElementById("correct0").innerHTML = "";
// 	document.getElementById("correct1").innerHTML = "";
// 	document.getElementById("correct2").innerHTML = "";
// 	document.getElementById("correct3").innerHTML = "";
// 	document.getElementById("correct4").innerHTML = "";
// 	document.getElementById("correct5").innerHTML = "";
// 	document.getElementById("correct6").innerHTML = "";
// 	document.getElementById("dynamic").src="hangmanimgs/base.png";
// 	document.getElementById("static-1").style.opacity=0.0;
// 	document.getElementById("static-2").style.opacity=0.0;
// 	document.getElementById("static-3").style.opacity=0.0;
// 	document.getElementById("static-4").style.opacity=0.0;
// 	document.getElementById("static-5").style.opacity=0.0;
// 	document.getElementById("static-6").style.opacity=0.0;
// }
// // console.log(answerKey);



// 	if (error === 1) {
// 		document.getElementById("dynamic").src="hangmanimgs/head.png";
// 		document.getElementById("static-1").style.opacity=1.0;
// 	} else if (error === 2) {
// 		document.getElementById("dynamic").src="hangmanimgs/body.png";
// 		document.getElementById("static-2").style.opacity=1.0;
// 	} else if (error === 3) {
// 		document.getElementById("dynamic").src="hangmanimgs/ArmL.png";
// 		document.getElementById("static-3").style.opacity=1.0;
// 	} else if (error === 4) {
// 		document.getElementById("dynamic").src="hangmanimgs/ArmR.png";
// 		document.getElementById("static-4").style.opacity=1.0;
// 	} else if (error === 5) {
// 		document.getElementById("dynamic").src="hangmanimgs/LegL.png";
// 		document.getElementById("static-5").style.opacity=1.0;
// 	} else if (error === 6) {
// 		document.getElementById("dynamic").src="hangmanimgs/LegR.png";
// 		document.getElementById("static-6").style.opacity=1.0;
// 	} else if (error >= 6) {
// 		var tryAgain = confirm("You lose would you like to play again?")
// 		 if (!tryAgain ) {
// 			alert("Like you have a choice.")
// 		}
// 		error = 0;
// 		answerKey = [0, 0, 0, 0, 0, 0, 0];
// 		document.getElementById("wrong").innerHTML = "";
// 		document.getElementById("correct0").innerHTML = "";
// 		document.getElementById("correct1").innerHTML = "";
// 		document.getElementById("correct2").innerHTML = "";
// 		document.getElementById("correct3").innerHTML = "";
// 		document.getElementById("correct4").innerHTML = "";
// 		document.getElementById("correct5").innerHTML = "";
// 		document.getElementById("correct6").innerHTML = "";
// 		document.getElementById("dynamic").src="hangmanimgs/base.png";
// 		document.getElementById("static-1").style.opacity=0.0;
// 		document.getElementById("static-2").style.opacity=0.0;
// 		document.getElementById("static-3").style.opacity=0.0;
// 		document.getElementById("static-4").style.opacity=0.0;
// 		document.getElementById("static-5").style.opacity=0.0;
// 		document.getElementById("static-6").style.opacity=0.0;
// 	}
// console.log(tryAgain);

//};