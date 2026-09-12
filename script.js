// Get saved count from localStorage
let count = Number(localStorage.getItem("count")) || 0;

// Select HTML elements
const countElement = document.getElementById("count");
const addBtn = document.getElementById("addBtn");
const resetBtn = document.getElementById("resetBtn");

// Show count
countElement.textContent = count;


// Add 1
addBtn.addEventListener("click", function () {
    count++;

    // Update screen
    countElement.textContent = count;

    // Save count
    localStorage.setItem("count", count);
});


//Rest
resetBtn.addEventListener("click", function () {
    count = 0;

    // Update screen
    countElement.textContent = count;

    // Save 0
    localStorage.setItem("count", count);
});