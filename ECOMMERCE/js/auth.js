// Auth state management
let currentUser = null;

function toggleForms() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    
    loginForm.classList.toggle('hidden');
    signupForm.classList.toggle('hidden');
}

function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Mock authentication - In production, this would call your backend
    if (email && password) {
        currentUser = { email };
        showResumeUpload();
    }

    return false;
}

function handleSignup(event) {
    event.preventDefault();
    
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return false;
    }

    // Mock signup - In production, this would call your backend
    if (email && password) {
        currentUser = { email };
        showResumeUpload();
    }

    return false;
}

function showResumeUpload() {
    document.getElementById('authContainer').classList.add('hidden');
    document.getElementById('resumeContainer').classList.remove('hidden');
}