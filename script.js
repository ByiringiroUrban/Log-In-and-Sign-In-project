function toggleForm() {
    const loginForm = document.querySelector('.login');
    const signupForm = document.querySelector('.signup');

    loginForm.classList.toggle('active');
    signupForm.classList.toggle('active');
}
