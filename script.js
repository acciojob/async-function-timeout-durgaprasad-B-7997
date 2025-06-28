//your JS code here. If required.
// Function to simulate delay using a Promise
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Main async function triggered on button click
async function handleClick() {
    // Get values from the input fields
    const text = document.getElementById("text").value;
    const delayTime = parseInt(document.getElementById("delay").value, 10);
    const outputDiv = document.getElementById("output");

    // Optional: clear previous output
    outputDiv.textContent = "";

    // If delay is not a valid number or negative, skip
    if (isNaN(delayTime) || delayTime < 0) {
        outputDiv.textContent = "Please enter a valid non-negative delay.";
        return;
    }

    // Wait for the specified delay
    await delay(delayTime);

    // Display the message
    outputDiv.textContent = text;
}

// Add event listener after DOM content is loaded
document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("btn");
    button.addEventListener("click", handleClick);
});
