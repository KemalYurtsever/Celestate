const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const loginMessage = document.getElementById("loginMessage");
const roleInput = document.getElementById("roleInput");
const rememberInput = document.getElementById("rememberInput");
const roleTabs = document.querySelectorAll(".role-tab");
const forgotPasswordButton = document.getElementById("forgotPasswordButton");
const createAccountButton = document.getElementById("createAccountButton");
const googleButton = document.getElementById("googleButton");

const demoUsers = [
  {
    email: "customer@celestate.com",
    password: "123456",
    name: "Customer User",
    role: "customer"
  },
  {
    email: "agent@celestate.com",
    password: "123456",
    name: "Agent User",
    role: "agent"
  },
  {
    email: "admin@celestate.com",
    password: "123456",
    name: "Admin User",
    role: "admin"
  },
  {
    email: "demo@celestate.com",
    password: "123456",
    name: "Demo User",
    role: "customer"
  }
];

function showMessage(message, type = "error") {
  loginMessage.textContent = message;
  loginMessage.className = "form-message";

  if (type === "success") {
    loginMessage.classList.add("success");
  }
}

roleTabs.forEach(function(tab) {
  tab.addEventListener("click", function() {
    roleTabs.forEach(function(button) {
      button.classList.remove("active");
    });

    tab.classList.add("active");
    roleInput.value = tab.dataset.role;
    showMessage("");
  });
});

loginForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const email = emailInput.value.trim().toLowerCase();
  const password = passwordInput.value;
  const selectedRole = roleInput.value;

  showMessage("");

  if (email === "" || password === "") {
    showMessage("Please enter both email and password.");
    return;
  }

  if (password.length < 6) {
    showMessage("Password must be at least 6 characters.");
    return;
  }

  const matchedUser = demoUsers.find(function(user) {
    return user.email === email && user.password === password;
  });

  if (!matchedUser) {
    showMessage("Invalid email or password.");
    return;
  }

  if (matchedUser.role !== selectedRole) {
    showMessage("Please select the correct role for this account.");
    return;
  }

  localStorage.setItem("loggedInUser", JSON.stringify({
    email: matchedUser.email,
    name: matchedUser.name,
    role: matchedUser.role,
    rememberMe: rememberInput.checked
  }));

  showMessage("Login successful. Redirecting...", "success");

  setTimeout(function() {
    window.location.href = "index.html";
  }, 800);
});

forgotPasswordButton.addEventListener("click", function() {
  showMessage("Password recovery is disabled in this front-end demo. Use one of the demo accounts.");
});

createAccountButton.addEventListener("click", function() {
  showMessage("Account registration is disabled in this front-end demo. Use one of the demo accounts.");
});

googleButton.addEventListener("click", function() {
  showMessage("Google login is a visual demo button only. Use email and password login.");
});
