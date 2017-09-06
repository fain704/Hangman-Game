
//document.getElementById("imageid").src="../template/save.png";

//initial word array
var word = ["H", "A", "N", "G", "M", "A", "N"];
var userAnswer;
var answerKey = ["", "", "", "", "", "", ""];

//initial error set to 0
var error = 0;

//get value of text area
document.onkeypress = function(event) {
	userAnswer = event.key.toUpperCase();
	// console.log(userAnswer);
	//compare to aray (index of x)
validAnswer = word.indexOf(userAnswer);
	// console.log(validAnswer);
	//if return -1 advance error
if (validAnswer === -1) {
	error = error + 1;
	// write incorrect letters to wrong p tag 
	document.getElementById("wrong").innerHTML = document.getElementById("wrong").innerHTML + userAnswer;
	// console.log(error);
	} else if (validAnswer === 0) {
		document.getElementById("correct0").innerHTML = word[validAnswer];
		answerKey[0] = "H"
	} else if (validAnswer === 1) {
		document.getElementById("correct1").innerHTML = word[validAnswer];
		document.getElementById("correct5").innerHTML = word[validAnswer];
		answerKey[1] = "A"
		answerKey[5] = "A"
	} else if (validAnswer === 2) {
		document.getElementById("correct2").innerHTML = word[validAnswer];
		document.getElementById("correct6").innerHTML = word[validAnswer];
		answerKey[2] = "N"
		answerKey[6] = "N"
	} else if (validAnswer === 3) {
		document.getElementById("correct3").innerHTML = word[validAnswer];
		answerKey[3] = "G"
	} else if (validAnswer === 4) {
		document.getElementById("correct4").innerHTML = word[validAnswer];
		answerKey[4] = "M"
	}

if (answerKey.toString() === word.toString()) {
	alert("you win, lets play again")
	error = 0;
	answerKey = [0, 0, 0, 0, 0, 0, 0];
	document.getElementById("wrong").innerHTML = "";
	document.getElementById("correct0").innerHTML = "";
	document.getElementById("correct1").innerHTML = "";
	document.getElementById("correct2").innerHTML = "";
	document.getElementById("correct3").innerHTML = "";
	document.getElementById("correct4").innerHTML = "";
	document.getElementById("correct5").innerHTML = "";
	document.getElementById("correct6").innerHTML = "";
	document.getElementById("dynamic").src="hangmanimgs/base.png";
	document.getElementById("static-1").style.opacity=0.0;
	document.getElementById("static-2").style.opacity=0.0;
	document.getElementById("static-3").style.opacity=0.0;
	document.getElementById("static-4").style.opacity=0.0;
	document.getElementById("static-5").style.opacity=0.0;
	document.getElementById("static-6").style.opacity=0.0;
}
// console.log(answerKey);



if (error === 1) {
	document.getElementById("dynamic").src="hangmanimgs/head.png";
	document.getElementById("static-1").style.opacity=1.0;
} else if (error === 2) {
	document.getElementById("dynamic").src="hangmanimgs/body.png";
	document.getElementById("static-2").style.opacity=1.0;
} else if (error === 3) {
	document.getElementById("dynamic").src="hangmanimgs/ArmL.png";
	document.getElementById("static-3").style.opacity=1.0;
} else if (error === 4) {
	document.getElementById("dynamic").src="hangmanimgs/ArmR.png";
	document.getElementById("static-4").style.opacity=1.0;
} else if (error === 5) {
	document.getElementById("dynamic").src="hangmanimgs/LegL.png";
	document.getElementById("static-5").style.opacity=1.0;
} else if (error === 6) {
	document.getElementById("dynamic").src="hangmanimgs/LegR.png";
	document.getElementById("static-6").style.opacity=1.0;
} else if (error >= 6) {
	var tryAgain = confirm("You lose would you like to play again?")
		if (tryAgain === true) {
	error = 0;
	answerKey = [0, 0, 0, 0, 0, 0, 0];
	document.getElementById("wrong").innerHTML = "";
	document.getElementById("correct0").innerHTML = "";
	document.getElementById("correct1").innerHTML = "";
	document.getElementById("correct2").innerHTML = "";
	document.getElementById("correct3").innerHTML = "";
	document.getElementById("correct4").innerHTML = "";
	document.getElementById("correct5").innerHTML = "";
	document.getElementById("correct6").innerHTML = "";
	document.getElementById("dynamic").src="hangmanimgs/base.png";
	document.getElementById("static-1").style.opacity=0.0;
	document.getElementById("static-2").style.opacity=0.0;
	document.getElementById("static-3").style.opacity=0.0;
	document.getElementById("static-4").style.opacity=0.0;
	document.getElementById("static-5").style.opacity=0.0;
	document.getElementById("static-6").style.opacity=0.0;
		} else if (tryAgain === false) {
			alert("Like you have a choice.")
	error = 0;
	answerKey = [0, 0, 0, 0, 0, 0, 0];
	document.getElementById("wrong").innerHTML = "";
	document.getElementById("correct0").innerHTML = "";
	document.getElementById("correct1").innerHTML = "";
	document.getElementById("correct2").innerHTML = "";
	document.getElementById("correct3").innerHTML = "";
	document.getElementById("correct4").innerHTML = "";
	document.getElementById("correct5").innerHTML = "";
	document.getElementById("correct6").innerHTML = "";
	document.getElementById("dynamic").src="hangmanimgs/base.png";
	document.getElementById("static-1").style.opacity=0.0;
	document.getElementById("static-2").style.opacity=0.0;
	document.getElementById("static-3").style.opacity=0.0;
	document.getElementById("static-4").style.opacity=0.0;
	document.getElementById("static-5").style.opacity=0.0;
	document.getElementById("static-6").style.opacity=0.0;
		}
}
// console.log(tryAgain);

};