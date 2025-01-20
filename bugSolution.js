function myFunc(a, b) {
  if (a === undefined || b === undefined) {
    throw new Error('Both arguments must be defined.');
  }
  return a + b;
}

// Improved error handling in calling function
try {
  console.log(myFunc(1, 2)); // Output: 3
  console.log(myFunc(1));    // Throws Error
  console.log(myFunc());     // Throws Error
} catch (error) {
  console.error("Error:", error.message);
}

//Alternative solution: Return null and check for null
function myFunc2(a, b) {
    if (a === undefined || b === undefined) {
        return null; 
    }
    return a + b;
}

let result = myFunc2(1,2);
console.log(result === null ? "Error:Undefined arguments" : result);
result = myFunc2(1);
console.log(result === null ? "Error:Undefined arguments" : result);
result = myFunc2();
console.log(result === null ? "Error:Undefined arguments" : result); 