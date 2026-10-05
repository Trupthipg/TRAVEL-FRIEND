
// Welcome message
console.log("Welcome to WanderNest! 🌍");

// Get the Explore Destinations button
const exploreButton = document.querySelector("#home a");

// When the button is clicked
exploreButton.addEventListener("click", function () {
    console.log("Exploring destinations...");
});


// Show a message when the Contact button is clicked
const contactButton = document.querySelector("#contact a");

contactButton.addEventListener("click", function () {
    alert("Thanks for visiting WanderNest! ✈️");
});
function showGoa() {
    const goaDetails = document.querySelector("#goa-details");

    goaDetails.style.display = "block";

    goaDetails.classList.remove("goa-opening");

    // Restart animation
    void goaDetails.offsetWidth;

    goaDetails.classList.add("goa-opening");

    goaDetails.scrollIntoView({
        behavior: "smooth"
    });
}
function showKerala() {
    const keralaDetails = document.querySelector("#kerala-details");

    keralaDetails.style.display = "block";

    keralaDetails.classList.remove("goa-opening");

    void keralaDetails.offsetWidth;

    keralaDetails.classList.add("goa-opening");

    keralaDetails.scrollIntoView({
        behavior: "smooth"
    });
}
