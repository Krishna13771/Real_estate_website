// Function to validate the signup form
function validateSignupForm(event) {
    event.preventDefault(); // Prevent the form from submitting immediately

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Check if all fields are filled
    if (!name || !email || !password || !confirmPassword) {
        alert("All fields are required.");
        return;
    }

    // Validate email format
    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Validate password length
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // If all validations pass
    alert("Signup successful! Welcome, " + name + "!");
    document.getElementById('signup-form').reset(); // Reset the form
}

// Simple email validation function
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}

// Add event listener for form submission
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signup-form');
    form.addEventListener('submit', validateSignupForm);
});

