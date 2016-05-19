 max = 4000000
  a = 1
  b = 1
  nextFib = a+b
  sum = 0
  while (nextFib < max)
    sum += nextFib
    a = nextFib + b
    b = a + nextFib
    nextFib = a+b
  end
  puts "Sum=#{sum}"