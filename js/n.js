document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('errorMessage');

    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match!";
    } else {
        errorMessage.textContent = "";
        alert('Registration Successful!');
       
    }
});
