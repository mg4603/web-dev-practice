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


// Exercise 3
const exercise3A = 1 + 8;
const exercise3B = 22 * 3;
const exercise3C = 5 % 4;
const exercise3D = exercise3A - 17;
const exercise3E = exercise3A + exercise3B + exercise3C + exercise3D;


if(exercise3A === 9) {
	console.log("'a' is correct!")
} else {
	console.log(`'a' is incorrect, got ${exercise3A}, expected 9`)
}
console.log("\n");

if(exercise3B === 66) {
	console.log("'b' is correct!")
} else {
	console.log(`'b' is incorrect, got ${exercise3B}, expected 66`)
}
console.log("\n");

if(exercise3C === 1) {
	console.log("'c' is correct!")
} else {
	console.log(`'c' is incorrect, got ${exercise3C}, expected 1`)
}
console.log("\n");

if(exercise3D === -8) {
	console.log("'d' is correct!")
} else {
	console.log(`'d' is incorrect, got ${exercise3D}, expected -8`)
}
console.log("\n");

if(exercise3E === 68) {
	console.log("'e' is correct!")
	console.log("\n Congrats! You've solved them all, you may move onto the next lesson")
} else {
    console.log(`'e' is incorrect, got ${exercise3E}, expected 68`)
}