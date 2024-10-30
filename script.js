const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');
const usernameInput = document.getElementById('username-input');


const user = localStorage.getItem('username');
if (user) displayUser(user);

loginBtn.addEventListener('click', () => {
  const username = usernameInput.value;
  if (username) {
    localStorage.setItem('username', username);
    displayUser(username);
  }
});

logoutBtn.addEventListener('click', () => {
  localStorage.removeItem('username');
  location.reload();
});

function displayUser(username) {
  usernameInput.style.display = 'none';
  loginBtn.style.display = 'none';
  logoutBtn.style.display = 'block';
  alert(`Welcome, ${username}!`);
}


const themeSwitch = document.getElementById('theme-switch');
themeSwitch.addEventListener('change', () => {
    document.body.dataset.theme = themeSwitch.checked ? 'dark' : '';
    localStorage.setItem('theme', themeSwitch.checked ? 'dark' : '');
});

// Load theme from localStorage
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.dataset.theme = 'dark';
        themeSwitch.checked = true;
    }
});
