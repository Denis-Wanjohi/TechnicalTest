// Question 1: FizzBuzz
// Write a program that prints the numbers from 1 to 100. For multiples of 3, print "Fizz"; for
// multiples of 5, print "Buzz"; and for numbers that are multiples of both 3 and 5, print
// "FizzBuzz".

//initialize the starting point
let  num = 1;

//loop through 1 t0 100
while(num <= 100){
    //check if it is divisible by 5 and 3 first
    if(num % 5 == 0  && num % 3 == 0){
        console.log('FizzBuzz');
        num++;
        continue;
    }
    //check if it divisible by 3
    else if(num % 3 == 0){
        console.log('Fizz');
        num++;
        continue;
    }
    //check if it divisible by 5
    else if(num % 5 == 0){
        console.log('Buzz');
        num++;
        continue;
    }
    //if it fails on all the conditions
    console.log(num)
    num++
}