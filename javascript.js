
//document.getElementById("imageid").src="../template/save.png";

//initial word array
var word = ["H", "A", "N", "G", "M", "A", "N"];
var userAnswer;

//initial error set to 0
var error = 0;

//get value of text area
document.getElementById("submit").addEventListener("click", function() {
	userAnswer = document.getElementById("submit-text").value.toUpperCase();
	// console.log(userAnswer);
//compare to aray (index of x)
validAnswer = word.indexOf(userAnswer);
	// console.log(validAnswer);
//if return -1 advance error
if (validAnswer === -1) {
	error = error + 1;
	// console.log(error);
	}

 
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
	document.getElementById("static-6").style.opacity=1.0;
} else if (error === 6) {
	document.getElementById("dynamic").src="hangmanimgs/LegR.png";
	document.getElementById("static-6").style.opacity=1.0;
}


});