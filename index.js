// sum of an array
const sum = (arr) =>{
    return arr.reduce((acc,cur) => acc + cur, 0);
}

// remove duplicates from an array
const  removeDuplicates = (arr) => {
    return [...new Set(arr)];
}

// maximum value in array
const  max = (arr) =>{
    return Math.max(...arr);
}

// minimum value in array
const  min = (arr) =>{
    return Math.min(...arr);
}

// reverse an element in array
const reverse = (arr) =>{
    return arr.reverse();
}

// calculate average of array
const average = (arr) =>{
    return arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
}

// reverse each word in array
const reverseWords = (arr) =>{
    return arr.map(word => word.split('').reverse().join(''));
}


// sum of even numbers
const sumOfEvenNumbers = (arr) =>{
    return arr.filter(num => num % 2 === 0).reduce((acc, curr) => acc + curr, 0);
}

// remove element by index range
const removeElementsByIndexRange = (arr, start, end) =>{
    arr.splice(start, end - start + 1);
    return arr;
}

// find sum of squares of element

const sumOfSquares = (arr) =>{
    return arr.reduce((acc, curr) => acc + curr ** 2, 0);
}

// console.log(sumOfSquares([5,3,7,8,2,4]));

const Allarr = {
    sum,
    removeDuplicates,
    max,
    min,
    reverse,
    average,
    reverseWords,
    sumOfEvenNumbers,
    removeElementsByIndexRange,
    sumOfSquares
}

module.exports = Allarr;
