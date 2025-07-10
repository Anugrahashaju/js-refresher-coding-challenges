//1. Greeting function 
export function greet(name)
{
    if(name===null||name===undefined||name==="")
    {
        return "The number is either empty or null";
    }
    else
    {
        return "Hello, "+name+"!";
    }
    
}


console.log("1.Greeting function");
greet("Alice");
greet();
console.log(" ");

//2.Odd or Even check

export function isEven(number)
{
    if(number%2===0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

console.log("2.Odd or Even")
isEven(4);
isEven(7);
console.log(" ");


//Adding up the arrays
function sumArray(numbers)
{
    let sum=0;
    numbers.forEach(element => {
        sum+=element;
    });
    console.log(sum);
}

console.log("Sum of Array");
sumArray([1,2]);
sumArray([1,2,3,4,5]);
console.log(" ");
//destructuring the array
let arr = [1,2,3,4,5];
let [first , second] = arr;

//Grabbing property from an object
function getProperty(obj,key)
{
    console.log(obj[key]);
}

console.log("Grabbing a Property")
getProperty({name:"Bob", age:30},"name");
console.log(" ");

//conver the celsius to Fahrenheit convertor

function celsiusToFahrenheit(celsius)
{
    let Fahrenheit;
    Fahrenheit = celsius *(9/5)+32;
    console.log("Fahrenheit temperature "+Fahrenheit);

}

console.log("celsius to Fahrenheit ")
celsiusToFahrenheit(0);
celsiusToFahrenheit(25);
console.log(" ");

//Finding the bigger number
function findLarger(num1, num2)
{
    if(num1>num2)
    {
        console.log(" Larger is "+ num1);
    }
    else
    {
        console.log("Larger is "+num2);
    }
}

console.log("Finding the large number");
findLarger(10,5);
console.log(" ");

//reverse a string 
function reverseString(str)
{
    console.log(str.split('').reverse().join(''));
}

console.log("reverse a string")
reverseString("hello");
console.log(" ");

//couting vowels
function countVowels(str)
{
    let vowel = "AEIOUaeiou"
    let count = 0;
    for(let char of str)
    {
        if(vowel.includes(char))
        {
            count++
        }
    }

    console.log(count);

}

console.log("Count the vowels in Programming");
countVowels("Programming");
console.log(" ");

function calculator(num1, num2, operator)
{
    let num3;
    switch (operator) {
        case "+":
            console.log(num1 + num2);
            break;
        
        case "-":
            console.log(num1-num2);
            break;
        
        case "*":
            console.log(num1*num2);
            break;

        case "/":
            console.log(num1/num2);
            break;
    
        default:
            console.log("No supported");
            break;
    }
}

console.log("Simple Calculator ");
calculator(10,2,"+");
calculator(10,2,"-");
calculator(10,2,"*");
calculator(10,2,"/");

//get first and last
function getFirstAndLast(arr) {
    if (arr.length === 0) {
      return []; // or you could return an error message
    } else if (arr.length === 1) {
      return [arr[0], arr[0]];
    } else {
      return [arr[0], arr[arr.length - 1]];
    }
  }
  

