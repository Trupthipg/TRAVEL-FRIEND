
// Welcome message
console.log("Welcome to Travel Friend! 🌍");

// Get the Explore Destinations button
const exploreButton = document.querySelector("#home a");

// When the button is clicked
exploreButton.addEventListener("click", function () {
    console.log("Exploring destinations...");
});


// Show a message when the Contact button is clicked
const contactButton = document.querySelector("#contact a");

contactButton.addEventListener("click", function () {
    alert("Thanks for visiting Travel Friend! ✈️");
});
function hideAllDetails() {
    document.getElementById("goa-details").style.display = "none";
    document.getElementById("kerala-details").style.display = "none";
    document.getElementById("karnataka-details").style.display = "none";
}

function showGoa() {
    hideAllDetails();

    const goa = document.getElementById("goa-details");
    goa.style.display = "block";

    goa.scrollIntoView({
        behavior: "smooth"
    });
}

function showKerala() {
    hideAllDetails();

    const kerala = document.getElementById("kerala-details");
    kerala.style.display = "block";

    kerala.scrollIntoView({
        behavior: "smooth"
    });
}

function showKarnataka() {
    hideAllDetails();

    const karnataka = document.getElementById("karnataka-details");
    karnataka.style.display = "block";

    karnataka.scrollIntoView({
        behavior: "smooth"
    });
}
function addFavourite(button) {

    const card = button.parentElement;
    const name = card.getAttribute("data-name");
    const favouriteList = document.getElementById("favourite-list");

    if (button.classList.contains("favourite")) {

        button.classList.remove("favourite");
        button.innerHTML = "♡ Add to Favourites";

        const item = document.getElementById("fav-" + name);
        item.remove();

    } else {

        button.classList.add("favourite");
        button.innerHTML = "❤️ Favourited";

        const item = document.createElement("p");
        item.id = "fav-" + name;
        item.innerHTML = "📍 " + name;

        favouriteList.appendChild(item);

    }
}

