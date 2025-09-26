document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');

    // Initialize admin credentials if not exists
    initializeAdminCredentials();

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        if (authenticateAdmin(username, password)) {
            // Create session
            sessionStorage.setItem('adminLoggedIn', 'true');
            sessionStorage.setItem('loginTime', new Date().getTime());
            
            // Redirect to admin panel
            window.location.href = 'admin.html';
        } else {
            errorMessage.style.display = 'block';
            setTimeout(() => {
                errorMessage.style.display = 'none';
            }, 3000);
        }
    });

    function initializeAdminCredentials() {
        if (!localStorage.getItem('adminCredentials')) {
            const defaultCredentials = {
                username: 'admin',
                password: 'admin123'
            };
            localStorage.setItem('adminCredentials', JSON.stringify(defaultCredentials));
        }
    }

    function authenticateAdmin(username, password) {
        const storedCredentials = JSON.parse(localStorage.getItem('adminCredentials'));
        return storedCredentials.username === username && storedCredentials.password === password;
    }
});