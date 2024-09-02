// Function to find index in array.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let target = 5

function findIndex(array, num){
    let check = array.indexOf(num)
    let indexMessage = 'Target index not found.'
    if (check != -1){
        indexMessage = 'Index of '+num+' is '+check;
    }
    return indexMessage;
};

console.log(findIndex(numbers, target));


// Addition Function.

let a = 10
let b = 5 

function addition(num1, num2){
    return num1+num2
}

console.log(a+'+'+b+'='+addition(a, b));

// Addition function as arrow function.

const addNumbersArrowFn = (num1, num2) => {
    return num1+num2
};

console.log(a+'+'+b+'='+addNumbersArrowFn(a, b)+' (arrow func)');

// Addition shorthand arrow function.

const additionShort = (num1, num2) => num1+num2;

console.log(a+'+'+b+'='+additionShort(a, b)+' (shorthand func)')

// Nested Addition.

function addNumbersNested(num1){
    return function (num2){
        return num1+num2
    }
}

console.log(addNumbersNested(3)(4));

// Nested Addition Arrow Function.

const addNumbersNestedAF = (num1) => (num2) => {return num1+num2}

console.log(addNumbersNestedAF(3)(4));