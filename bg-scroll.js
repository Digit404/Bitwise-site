// Set the scroll speed of the background
var scrollSpeed = 0.5;
// Set the initial position of the background
var bgPosition = 0;
// Set the width of the background image
// Create a new Image object
var bgimg = new Image();

// Set the "src" attribute of the Image object to the relative URL of the background image
bgimg.src = "https://www.bitwise.live/res/numbers.png";

// Get the width of the background image
var bgWidth = bgimg.width;

// Function to move the background image
function moveBackground() {
    // Get the current scroll position of the page
    var scrollTop = window.pageYOffset;
    // Set the parallax factor for the background image
    var parallaxFactor = 0.5;
    // Increment the background position by the scroll speed
    bgPosition -= scrollSpeed;
    // If the background position is less than or equal to the negative width of the background, reset the position to 0
    if (bgPosition <= -bgWidth) {
        bgPosition = 0;
    }
    // Set the background position using the CSS "left" property and the current scroll position and parallax factor
    document.getElementsByClassName("bg")[0].style.left = bgPosition + "px";
    document.getElementsByClassName("bg")[0].style.top = (scrollTop * parallaxFactor) + "px";
}
// Set the interval for moving the background image
setInterval(moveBackground, 10);