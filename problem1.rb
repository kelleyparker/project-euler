array_of_numbers = []

for i in 0..999
	if i%3 == 0 or i%5 == 0
		array_of_numbers << i
	end
end

print array_of_numbers.reduce(:+)
