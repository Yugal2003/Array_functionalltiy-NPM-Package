# Array Utility Functions

## Description
This module provides several utility functions for manipulating arrays in JavaScript.

## Installation
You can install this library via npm:
```bash
npm i array_functionalltiy
```

## Usage
### `sum(arr)`

Calculates the sum of all elements in the array.

### `removeDuplicates(arr)`

Removes duplicate elements from the array.

### `max(arr)`

Finds the maximum value in the array.

### `min(arr)`

Finds the minimum value in the array.

### `reverse(arr)`

Reverses the order of elements in the array.

### `average(arr)`

Calculates the average of all elements in the array.

### `reverseWords(arr)`

Reverses each word in the array.

### `sumOfEvenNumbers(arr)`

Calculates the sum of all even numbers in the array.

### `removeElementsByIndexRange(arr, start, end)`

Removes elements from the array within the specified index range.

### `sumOfSquares(arr)`

Calculates the sum of squares of all elements in the array.

## Example

```javascript
const arrUtils = require('./arrUtils');

const arr = [1, 2, 3, 4, 5];

console.log(arrUtils.sum(arr)); // Output: 15
console.log(arrUtils.removeDuplicates(arr)); // Output: [1, 2, 3, 4, 5]
console.log(arrUtils.max(arr)); // Output: 5
console.log(arrUtils.min(arr)); // Output: 1
console.log(arrUtils.reverse(arr)); // Output: [5, 4, 3, 2, 1]
console.log(arrUtils.average(arr)); // Output: 3
console.log(arrUtils.reverseWords(['hello', 'world'])); // Output: ['olleh', 'dlrow']
console.log(arrUtils.sumOfEvenNumbers(arr)); // Output: 6
console.log(arrUtils.removeElementsByIndexRange(arr, 1, 3)); // Output: [1, 5]
console.log(arrUtils.sumOfSquares(arr)); // Output: 55

## License
This library is licensed under the [ISC License](https://opensource.org/licenses/ISC).

## Author
Created by Yugal.