var fibArray = [1,2];			// Declare array of all values created via fib. sequence.
var counter = 2; // Declare variable for each single value in the fibArray; each value in the array is fibArray[counter].
var fibArrayEvens = [];

while (fibArray[counter-1] + fibArray[counter-2] < 4000000) {
	fibArray.push(fibArray[counter-1] + fibArray[counter-2]);
	counter++; 
} 

for (i = 0; i < fibArray.length; i++) {
	if (fibArray[i] % 2 == 0) {
		fibArrayEvens.push(fibArray[i]);
	}
}

function fibEvensSum(total, currentValue) {
	return total + currentValue;
}

console.log(fibArrayEvens.reduce(fibEvensSum));

/* Got the answer rigt at 5/12/2016 @ 8:06 AM; Congratulations, the answer you gave to problem 2 is correct.
You are the 457532nd person to have solved this problem.
Return to Problems page.

/* Numbers that should be adding up are: 2+8+34+144+610+2584+10946+46368+196418+832040+3524578, for an answer of 4,613,732 */