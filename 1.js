// Function to generate a random number, either 1 or 2
function getRandomNumber() {
    return Math.floor(Math.random() * 2) + 1; // Generates either 1 or 2
}

// Variables to count occurrences
let count1 = 0;
let count2 = 0;

// Loop to repeat the process 100 times
for (let i = 1; i <= 100; i++) {
    const randomNumber = getRandomNumber();
    if (randomNumber === 1) {
        count1++;
        console.log(`Attempt ${i}: Random Number: ${randomNumber} - Iran`);
    } else {
        count2++;
        console.log(`Attempt ${i}: Random Number: ${randomNumber} - Alman`);
    }
}

// Output the counts
console.log(`Total occurrences of 1 (Iran): ${count1}`);
console.log(`Total occurrences of 2 (Alman): ${count2}`);
