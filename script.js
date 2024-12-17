// Add interactivity to navigation links
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").slice(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Adjust for header height
                behavior: "smooth"
            });
        }
    });
});

// Handle form submission
const contactForm = document.getElementById("contact-form");
const formFeedback = document.getElementById("form-feedback");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Display feedback message
    formFeedback.classList.remove("hidden");

    // Clear form fields
    contactForm.reset();

    // Hide feedback message after a few seconds
    setTimeout(() => {
        formFeedback.classList.add("hidden");
    }, 3000);
});
