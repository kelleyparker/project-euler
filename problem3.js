
var numOfInterest = 600851475143;
var divisor = 2;


while (divisor != numOfInterest) {
if ( numOfInterest % divisor == 0) {
	numOfInterest = numOfInterest / divisor;
	divisor = 2;
}
else if ( numOfInterest % divisor!= 0) {
	divisor++;
}
}

console.log(numOfInterest);
console.log(divisor);
console.log("If these two numbers above equal one another, then that is the answer.")