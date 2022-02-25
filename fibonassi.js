// Fibonassi Serise
function result(num) {
    let fibo = [0, 1];
    for (let i = 2; i < num; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];

    }
    return fibo;
}

console.log(result(20));

// Sum Zero compairing one array (two numbers)
let arr = [-5, -7, -4, -2, -0, 3, 4, 8, 6]

function sumTwoValue(arr1) {
    for (let num of arr1) {
        for (let i = 0; i < arr1.length; i++) {

            if (num + arr1[i] === 0) {
                return [num, arr1[i]];
            }
        }
    };

}
console.log(sumTwoValue(arr));


// Cube and Total
function cube(num) {
    let total = 0;
    for (let i = 1; i <= num; i++) {
        total += Math.pow(i, 3);
    }
    return total;
}
console.log(cube(12));


// Vawoels Count
let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

function countVawels(sentence) {
    let count = 0;
    let vowelText = "";
    for (let letter of sentence) {
        for (let vowel of vowels) {
            if (vowel === letter) {
                vowelText += vowel;
                count = vowelText.length;

            }
        }
    }
    // If you show vowels. uncomments line bellow....
    // return vowelText.split("");

    //Count Vawoels
    return count;
}
let results = countVawels("Hello, Programming Hero.")
    console.log(results);


/**
Get Duplicate Value
*/

let numbers = [2, 5, 4, 8, 7, 6, 4, 5, 7, 9, 11, 25, 2, 3];

function duplicateValue(arr) {
    let duplicate = [];
    arr.forEach((value, index) => {
        if (arr.indexOf(value) !== index) {
            duplicate.push(value)
        }
    });
    return duplicate;
}
// let result = duplicateValue(numbers);
console.log(duplicateValue(numbers));

/**
Get Unique Value
*/
let numbersTwo = [2, 5, 4, 8, 7, 6, 4, 5, 7, 9, 11, 25, 2, 3];

function uniqueValue(numbers) {
    let unique = [];
    numbers.forEach((value, index) => {
        if (numbers.indexOf(value) === index) {
            unique.push(value)
        }
    });
    return unique;
}

console.log(uniqueValue(numbersTwo));
// Get lowest price in object
let product = [{
        name: "samsung",
        price: 4000
    },
    {
        name: "oppo",
        price: 2000
    },
    {
        name: "nokia",
        price: 1500
    }
];

let smallestPrice = product[0];
for (let item of product) {
    if (item.price < smallestPrice.price) {
        smallestPrice = item
    }
}

console.log(smallestPrice)

// function demo() {
//     let value = [];
//     for (let i = 0; i < 10; i++) {
//         console.log(i);
//     }

// }
// demo();
/**
 * Stop loop an Array when found the nagetive value of an element
 */
let numberArr = [1, 2, 5, 4, 6, -5, 7, 9, 12, 17];

function breakLoop(number) {
    let positiveValue = [];
    for (let item of number) {
        if (item < 0) {
            break;
        }
        positiveValue.push(item)
    }
    return positiveValue;
}
console.log(breakLoop(numberArr));

/*
 * Print odd numbers including 7 to 19 with while loop
 */
let number = 7;
while (number <= 19) {
    console.log(number);
    number += 2;
}

// More case are praiority
let text = "BangLADESH";
let countLower = 0;
let countUpper = 0;

for (let i = 0; i < text.length; i++) {
    
    if (text[i] == text[i].toLowerCase()) {
        countLower++
    }
    if (text[i] == text[i].toUpperCase()) {
        countUpper++
    }
}
if (countLower > countUpper) {
    text = text.toLowerCase();
    console.log(text);
} else {
    text = text.toUpperCase();
    console.log(text);
}