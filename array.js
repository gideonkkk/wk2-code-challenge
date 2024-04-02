function generateArrayBetween(num1, num2) {
    let start = Math.min(num1, num2);
    let end = Math.max(num1, num2);
    let result = [];
    
    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    
    return result;
}

// console the function
console.log(generateArrayBetween(4, 7));  // Output: [4, 5, 6, 7]
console.log(generateArrayBetween(-4, 7)); // Output: [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]
