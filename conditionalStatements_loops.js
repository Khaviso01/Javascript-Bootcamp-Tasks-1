// Conditional Statements & Loops




//Exercise 1: Temperature check

//1

let temperature1 = 50;

if (temperature1 < 0) {
    console.log("It's freezing");
} else if (temperature1 >= 0 && temperature1 <= 15) {
    console.log("It's cold");
} else if (temperature1 >= 16 && temperature1 <= 25) {
    console.log("It's mild");
} else {
    console.log("It's warm");
};

//2
let temperature2 = 18;

switch (true) {
    case (temperature2 < 0):
        console.log("It's freezing");
        break;
    case (temperature2 >= 0 && temperature2 <= 15):
        console.log("It's cold");
        break;
    case (temperature2 >= 16 && temperature2 <= 25):
        console.log("It's mild");
        break;
    default:
        console.log("It's warm");
}





//Execrcise 2: Divisibility Check

let number1 = parseInt(prompt("Enter a number: "));

//if else
if (number1 % 2 === 0 && number1 % 3 === 0) {
    console.log("Divisible by both");
} else if (number1 % 2 === 0) {
    console.log("Divisible by 2");
} else if (number1 % 3 === 0) {
    console.log("Divisible by 3");
} else {
    console.log("Divisible by neither");
};

//switch case
let number2 = parseInt(prompt("Enter a number: "))
switch (true) {
    case (number2 % 2 === 0 && number2 % 3 === 0):
        console.log("Divisible by both");
        break;
    case (number2 % 2 === 0):
        console.log("Divisible by 2");
        break;
    case (number2 % 3 === 0):
        console.log("Divisible by 3");
        break;
    default:
        console.log("Divisible by neither");
}





// Exercise 3: For loops

//1
for (let i = 1; i <=10; i++ ){
    console.log(i);
};

//2
for (let c = 2; c <=20; c+= 2 ){
    console.log(c);
};

//3
let sum_of_numbers = 0
for (let z = 1; z <= 100; z++){
    sum_of_numbers += z;
};

console.log(sum_of_numbers);

//4
const number = [1, 2, 3, 4, 5];

for (let q = 0; q < number.length; q++){
    console.log(number[q]);
};

//5 
const numbers = [3, 7, 5, 10, 6];

let largest = numbers[0];

for (let d = 1; d < numbers.length; d++){
    if (numbers[d] > largest) {
        largest = numbers[d];
    }
}

console.log(largest + " is the largest number");





//Exercise 4: While loops

//1
let o = 1;
while (o <= 10){
    console.log(o);
    o++;
};

//2
let l = 2;
while (1 <= 20){
    console.log(l);
    l += 2;
};

//3
let sum = 0;
let k = 1;

while (k <= 100){
    sum += k;
    k++;
}

console.log("sum of numbers is " + sum);

//4
let m = 5
while (m < 50){
    console.log(m);
    m += 5;
};






//Exercise 5

//1
let a = 1;
do {
    console.log(a);
    a++;
} while (a <= 10);



//2
let total = 0;
let b = 1;

do {
    total += b;
    b++;
} while (b <= 100);

console.log("Sum of 1 to 100 numbers is: " + total);



//3
let num;
do {
    num = parseInt(prompt("Enter number greater than 10: "));
} while (num <= 10);

console.log("You entered: " + num);

//4
const secretNum = Math.floor(Math.random() * 10) + 1;
let guess;

do {
    guess = parseInt(prompt("Guess a number that is 1 to 10: "));
} while (guess !== secretNum);

console.log("Your secret number was: " + secretNum);