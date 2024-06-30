document.getElementById('loginForm').addEventListener('submit', function(event) {
    let valid = true;

    // Name validation
    let name = document.getElementById('name').value;
    let nameError = document.getElementById('nameError');
    if (name.trim() === '') {
        nameError.textContent = 'Name is required.';
        valid = false;
    } else {
        nameError.textContent = '';
    }

    // Email validation
    let email = document.getElementById('email').value;
    let emailError = document.getElementById('emailError');
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = 'Please enter a valid email address.';
        valid = false;
    } else {
        emailError.textContent = '';
    }

    // Password validation
    let password = document.getElementById('password').value;
    let passwordError = document.getElementById('passwordError');
    if (password.trim() === '') {
        passwordError.textContent = 'Password is required.';
        valid = false;
    } else {
        passwordError.textContent = '';
    }

    if (!valid) {
        event.preventDefault();
    }
});