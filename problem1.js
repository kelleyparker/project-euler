var number = 0;

for (i = 0; i < 1000; i++) {
	if (i % 3 == 0 || i % 5 == 0) {
		number = number + i;	
	}
}

console.log(number);