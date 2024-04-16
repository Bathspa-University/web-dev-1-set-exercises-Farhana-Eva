// Define an array with three elements representing button indices
var arr = [0, 1, 2];

// Generate random RGB values for the color to guess
var r = Math.floor((Math.random()) * 256);
var g = Math.floor((Math.random()) * 256);
var b = Math.floor((Math.random()) * 256);

// Set the RGB value to be guessed in the colorName paragraph
document.getElementById("colorName").innerHTML = "( " + r + " , " + g + " , " + b + " )";

// Randomly choose one index from the array to set the correct color
var index = Math.floor((Math.random()) * 3);
document.getElementById(index).style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";

// Remove the chosen index from the array to avoid repetition
arr.splice(index, 1);

// Generate random RGB values for the other two buttons
var r1 = Math.floor((Math.random()) * 256);
var g1 = Math.floor((Math.random()) * 256);
var b1 = Math.floor((Math.random()) * 256);
document.getElementById(arr[0]).style.backgroundColor = "rgb(" + r1 + "," + g1 + "," + b1 + ")";

var r2 = Math.floor((Math.random()) * 256);
var g2 = Math.floor((Math.random()) * 256);
var b2 = Math.floor((Math.random()) * 256);
document.getElementById(arr[1]).style.backgroundColor = "rgb(" + r2 + "," + g2 + "," + b2 + ")";

// Function to handle button clicks for guessing the color
function guess() {
    // Check if the clicked button's id matches the correct index
    if (document.activeElement.id == index) {
        // If correct, display "CORRECT !!" in green
        document.getElementById("colorName").innerHTML = "CORRECT !!";
        document.getElementById("colorName").style.color = "darkgreen";
    } else {
        // If wrong, display "WRONG !!" in red
        document.getElementById("colorName").innerHTML = "WRONG !!";
        document.getElementById("colorName").style.color = "red";
    }

    // Disable button clicks after one guess
    document.getElementsByClassName("btn")[0].removeAttribute("onclick");
    document.getElementsByClassName("btn")[1].removeAttribute("onclick");
    document.getElementsByClassName("btn")[2].removeAttribute("onclick");
}

// Function to reload the page for replaying the game
function replay() {
    window.location.reload(); // Reload the page
}
