function myFunc(a, b) {
  if (a === undefined || b === undefined) {
    return 0; // Handle undefined arguments
  }
  return a + b;
}

console.log(myFunc(1, 2)); // Output: 3
console.log(myFunc(1));    // Output: 0
console.log(myFunc());     // Output: 0