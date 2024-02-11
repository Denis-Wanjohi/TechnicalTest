// Question 2: Fibonacci Sequence
// Write a program to generate the Fibonacci sequence up to 100.

//initialize the first and the second value of the Sequence in an array
let sequence = [0,1];


//loop through the array elements as long as the last elemnt is less than 100
while(sequence[sequence.length -1] <  100 ){
    sequence[sequence.length] = sequence[sequence.length -1 ] + sequence[sequence.length -2];
    if(sequence[sequence.length-1] > 100){
            break;
    }
    console.log(sequence[sequence.length-1]);
}

