'use strict';

// -------------------------------------------------------------------------------------------------------
//  Challenge 01:
//  Required:
//
//  Write a function that takes an array and returns the maximum value in the provided array
//  without using build-in functions.
//  
// Input: [12, 32, 22, 45, 78, 12, 50]
// Output: 78
//  

const findMax = (arr) => {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i]
        }
    }
    return max;
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
//  Challenge 02:
//  Required:
//
//  Write a function that takes an arrays and returns the Sum of the numeric values
//  inside the array (there could be strings inside), without using built-in functions
//  
// Input: [20, '234', 'car', 41, 20, 'chair']
// Output: 81
//  

const sumNums = (arr) => {
    let sum = 0;

    for (let i = 0; i < arr.length; i++)
        if (arr.filter(item => typeof item === 'number')){
            item.push(arr);
            sum += arr[i];}
    return sum;
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
//  Challenge 03:
//  Required:
//
//  Write a function that takes an array and returns the array reversed
//  without using built-in functions
//  
// Input: ['C#', 'JS', 'Ruby','Python'] 
// Output: ['Python','Ruby','JS','C#']

const reverseArray = (arr) => {
    // for(let i= arr.length-1 ; i >= 0; i--)
    // {
    //     console.log (arr[i]);
    // }
    let front =0;
    let back = arr.length-1;
    let buffer;
    if (front< back){
        buffer= arr[front]
        arr[front]=arr[back]
        arr[back]=buffer
    }
}
// -------------------------------------------------------------------------------------------------------

module.exports = { findMax, sumNums, reverseArray };