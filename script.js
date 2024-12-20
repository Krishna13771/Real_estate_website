// Function to validate the login form
function validateLoginForm(event) {
    event.preventDefault(); // Prevent the form from submitting immediately

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if username and password are provided
    if (username === "" || password === "") {
        alert("Please fill out both fields.");
        return;
    }

    // Optionally, you can add more validation (e.g., email format check)
    if (!validateEmail(username)) {
        alert("Please enter a valid email address.");
        return;
    }

    // If everything is fine, you can submit the form or proceed with authentication
    alert("Login successful!"); // This is just a placeholder for real authentication logic
    document.getElementById('login-form').submit(); // Uncomment this to submit the form
}

// Simple email validation function
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}

// Add event listener for form submission
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('login-form');
    form.addEventListener('submit', validateLoginForm);
});
