//TERRY B GILL CSC102 //
// ASSIGNMENT 3.2 6 DEC 24 //
function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase for comparison
    const cleanedStr = Array.from(str).filter(char => /[a-zA-Z0-9]/.test(char)).join('').toLowerCase();
    // Check if the cleaned string reads the same forwards and backwards//
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

function checkPalindrome() {
    // Get the input value from the text field
    const input = document.getElementById('inputString').value;
    // Get the result display element //
    const result = document.getElementById('result');
    
    // Validates if the input is empty or only contains spaces
    if (input.trim() === "") {
        result.textContent = "Please enter a valid string."; //Display the input prompt//
        return; // Stops//
    }

    // Check if the input is a palindrome and display the result
    if (isPalindrome(input)) {
        result.textContent = `Yes, '${input}' is a palindrome!`; 
    } else {
        result.textContent = `No, '${input}' is not a palindrome.`; 
    }
}
