// Problem 1: Complete the secondLargest function which takes in an array of numbers in input and return the second biggest number in the array. (without using sort)?
function secondLargest(array) {
  // Write your code here
  if (array.length < 1) return null;
  let largest = array[0];
  let secondLargest = array[1];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
      secondLargest = largest;
      largest = array[i];
    } else if (array[i] > secondLargest && array[i] < largest) {
      secondLargest = array[i];
    }
  }
  return secondLargest;
}

console.log(secondLargest([2,12,33,21,21]))

// Problem 2: Complete the calculateFrequency function that takes lowercase string as input and returns frequency of all english alphabet. (using only array, no in-built function)
function calculateFrequency(string) {
  // Write your code here
}

// Problem 3: Complete the flatten function that takes a JS Object, returns a JS Object in flatten format (compressed)
function flatten(unflatObject) {
  // Write your code here
}

// Problem 4: Complete the unflatten function that takes a JS Object, returns a JS Object in unflatten format
function unflatten(flatObject) {
  // Write your code here
}
