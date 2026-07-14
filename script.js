// Welcome message
console.log("Welcome to David Okonkwo's Portfolio!");

// Display current year automatically
const footer = document.querySelector("footer p");

if (footer) {
    footer.innerHTML = `© ${new Date().getFullYear()} David Okonkwo`;
}
