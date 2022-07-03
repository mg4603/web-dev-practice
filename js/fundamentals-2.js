// Exercise 1
function troubleshooting() {
	const a = 1;
	const b = 1;

	let result;

	// Edit between these lines
	// =================================
	result = a+b;

	// =================================

	return result;
}

const resultExercise1 = troubleshooting();

if(resultExercise1 === 2) {
	console.log("Congrats! You got the correct answer");
} else if(typeof resultExercise1 === 'number') {
	console.log(`You returned the number ${resultExercise1}, the result should be the number 2`);
} else {
	console.log(`You returned string "${resultExercise1}", the result should be the number 2`);
}

// Exercise 2
let numberExercise2 = Number(prompt("enter a number"));

function numberChecker() {
	if(numberExercise2 >= 10) {
		return true;
	} else {
		return false;
	}
}
