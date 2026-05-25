const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const loginMessage = document.getElementById("loginMessage");

const demoUser = {
  email: "demo@celestate.com",
  password: "123456",
  name: "Demo User"
};

loginForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const email = emailInput.value.trim().toLowerCase();
  const password = passwordInput.value;

  loginMessage.textContent = "";
  loginMessage.className = "form-message";

  if (email === "" || password === "") {
    loginMessage.textContent = "Please enter both email and password.";
    return;
  }

  if (password.length < 6) {
    loginMessage.textContent = "Password must be at least 6 characters.";
    return;
  }

  const isCorrectEmail = email === demoUser.email;
  const isCorrectPassword = password === demoUser.password;

  if (!isCorrectEmail || !isCorrectPassword) {
    loginMessage.textContent = "Invalid email or password.";
    return;
  }

  localStorage.setItem("loggedInUser", JSON.stringify({
    email: demoUser.email,
    name: demoUser.name
  }));

  loginMessage.textContent = "Login successful. Redirecting...";
  loginMessage.classList.add("success");

  setTimeout(function() {
    window.location.href = "index.html";
  }, 1000);
});