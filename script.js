const loginForm = document.getElementById('loginForm');
const loginMessage = document.getElementById('login-message');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Simulate authentication (replace with actual login logic)
  if (username === 'admin1' && password === 'aadmin123') {
    window.location.href = 'admin.html';
  } else {
    loginMessage.textContent = 'Invalid username or password.';
  }
});

// Functionality for admin page navigation and content loading would go here

// (Optional) Example: Load content based on navigation click
// document.querySelector('.navigation a').addEventListener('click', (event) => {
//   event.preventDefault();
//   const clickedLink = event.target;
//   const contentArea = document.getElementById('admin-content');
//   // Load specific content based on clicked link (e.g., member list, reports)
//   contentArea.textContent = 'Loading ' + clickedLink.textContent + '...';
// });
