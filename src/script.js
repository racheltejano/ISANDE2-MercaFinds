// DOMContentLoaded ensures that the script runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {

    // Sign-In Page
    if (document.title.includes("Sign Up")) {
        const signUpForm = document.querySelector("form");
        signUpForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const name = signUpForm.querySelector('input[placeholder="Name"]').value;
            const email = signUpForm.querySelector('input[placeholder="Email or Phone Number"]').value;
            const password = signUpForm.querySelector('input[placeholder="Password"]').value;

            if (name && email && password) {
                alert(`Account created successfully!\nName: ${name}\nEmail/Phone: ${email}`);
                signUpForm.reset();
            } else {
                alert("Please fill out all fields to sign up.");
            }
        });
    }

    // Log-In Page
    if (document.title.includes("Log In")) {
        const loginForm = document.querySelector("form");
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const email = loginForm.querySelector('input[placeholder="Email or Phone Number"]').value;
            const password = loginForm.querySelector('input[placeholder="Password"]').value;

            if (email && password) {
                alert("Login successful!");
                // Redirect or additional actions can be added here
            } else {
                alert("Please enter your email/phone and password.");
            }
        });

        const forgotPasswordLink = document.querySelector(".forgot-password a");
        forgotPasswordLink.addEventListener("click", () => {
            alert("Password recovery is under construction. Please try again later.");
        });
    }

    // Home Page
    if (document.title === "Merca Finds") {
        const shopNowButton = document.querySelector(".hero button");
        shopNowButton.addEventListener("click", () => {
            alert("Redirecting to shop...");
            // Add redirection logic here if needed
        });

        const viewAllButtons = document.querySelectorAll(".view-all");
        viewAllButtons.forEach((button) => {
            button.addEventListener("click", () => {
                alert("Viewing all products...");
                // Add redirection logic here if needed
            });
        });

        const sidebarItems = document.querySelectorAll(".sidebar li");
        sidebarItems.forEach((item) => {
            item.addEventListener("click", () => {
                alert(`Browsing category: ${item.textContent}`);
                // Add category filtering logic here
            });
        });
    }
});
