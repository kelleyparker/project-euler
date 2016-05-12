
var fibArray = [1,2];			// Declare array of all values created via fib. sequence.
//var fibArrayEvens = [0];	// Declare an array for only even numbers from the fibArray.

var fibSums = fibArray[counter-1] + fibArray[counter-2];

console.log(fibArray[0]);
console.log(fibArray[1]);

while (fibArray[counter-1] + fibArray[counter-2] < 4000000) {
	var counter = 2; // Declare variable for each single value in the fibArray; each value in the array is fibArray[counter].
	var fibSums = fibArray[counter-1] + fibArray[counter-2];
	fibArray.push(fibArray[counter-1] + fibArray[counter-2]);
	console.log(fibArray[counter]);
	counter++;
}