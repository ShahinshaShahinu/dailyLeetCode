// samplerecur.js

function recursion(n) {
  if (n === 1) {
    return 1;
  }

  return n * recursion(n - 1);
} 

console.log(recursion(5));
console.log("adsfasdf"); // Ensure this line is not commented out or has syntax errors
