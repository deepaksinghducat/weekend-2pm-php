// function

// function palindrome(number) {
//     let temp = number;

//     let reverse = 0;

//     while(temp != 0) {
//         let rem = temp%10;

//         reverse = reverse * 10 + rem;

//         temp = parseInt(temp/10);
//     }

//     if(number === reverse) {
//         return true;
//     } 

//     return false;

// }

// console.log(palindrome(12321));


// anonymous function

// let array = [10,20,30,40,50,60];

// array.forEach( (value,index, arr) => {
//     console.log(value);
// })

// arrow function

// let palindrome = number => {
//     let temp = number;

//     let reverse = 0;

//     while(temp != 0) {
//         let rem = temp%10;

//         reverse = reverse * 10 + rem;

//         temp = parseInt(temp/10);
//     }

//     if(number === reverse) {
//         return true;
//     } 

//     return false;

// }

// console.log(palindrome(121));

// let sample = number => "fasdfasdf";

// console.log(sample());

// Callback function
// let areaOfsquare = side => side * side;

// let parOfSquare = side => 4 * side;

// let calculate = (side,logic) => {
//     return logic(side);
// } 

// console.log(calculate(4, parOfSquare));

// closure function


// function sample() {
//     let a = 10;
//     let b = 20;
//     console.log("sample called");
//     return () => {
//         console.log("inner function called");
//         return a+b;
//     }
// }

// let smpleCall  = sample();

// console.log(smpleCall());





















