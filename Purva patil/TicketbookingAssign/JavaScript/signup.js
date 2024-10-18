document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the username and password
    const username = document.getElementById('newUsername').value;
    const password = document.getElementById('newPassword').value;

    // Basic validation
    if (username && password) {
        document.getElementById('signupMessage').textContent = 'Signup successful!';
        document.getElementById('signupMessage').style.color = 'green';
        
        // Optionally, you can store the credentials in local storage
        localStorage.setItem(username, password);
    } else {
        document.getElementById('signupMessage').textContent = 'Please fill out all fields.';
    }
});
