document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the username and password
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Basic validation (you can enhance this as needed)
    if (username === 'user' && password === 'pass') {
        document.getElementById('message').textContent = 'Login successful!';
        document.getElementById('message').style.color = 'green';
    } else {
        document.getElementById('message').textContent = 'Invalid username or password.';
    }
});
