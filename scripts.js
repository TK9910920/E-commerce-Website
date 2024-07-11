document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    
    registerForm.addEventListener('submit', (event) => {
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm_password').value;
        
        if (password !== confirmPassword) {
            event.preventDefault();
            alert('Passwords do not match.');
            return;
        }
        
        if (!isValidPassword(password)) {
            event.preventDefault();
            alert('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.');
            return;
        }
    });
    
    function isValidPassword(password) {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        return regex.test(password);
    }
});
