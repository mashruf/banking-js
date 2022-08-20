document.getElementById('login-submit').addEventListener('click', function () {
    const userEmail = document.getElementById('user-email');
    const userPassword = document.getElementById('user-password');

    if (userEmail.value == 'rohon@gmail.com' && userPassword.value == 'password') {
        window.location.href = 'banking.html';
    }
})