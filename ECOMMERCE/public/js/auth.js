class Auth {
  constructor() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.setupLoginForm();
    this.checkAuth();
  }

  async login(email, password) {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();
      
      if (data.success) {
        this.user = data.user;
        localStorage.setItem('user', JSON.stringify(this.user));
        window.location.href = '/';
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed');
    }
  }

  logout() {
    this.user = null;
    localStorage.removeItem('user');
    window.location.href = '/login.html';
  }

  setupLoginForm() {
    const form = document.getElementById('loginForm');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        this.login(email, password);
      });
    }
  }

  checkAuth() {
    if (!this.user && window.location.pathname !== '/login.html') {
      window.location.href = '/login.html';
    }
  }
}

const auth = new Auth();