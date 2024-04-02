function swapCase(inputString) {
    let swappedString = '';
    for (let i = 0; i < inputString.length; i++) {
        let char = inputString[i];
        if (char === char.toUpperCase()) {
            swappedString += char.toLowerCase();
        } else {
            swappedString += char.toUpperCase();
        }
    }
    return swappedString;
}

let inputString = 'The Big Fat Pig';
let outputString = swapCase(inputString);
console.log(outputString);  // Output: tHE bIG fAT pIG