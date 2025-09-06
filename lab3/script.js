const login = document.getElementById('login')
const email = document.getElementById('email')
const password = document.getElementById('password')
const checkbox = document.getElementById("save");
const form = document.getElementById("form");
const welcomeMsg = document.getElementById("welcomeMsg");
const clearBtn = document.getElementById("clearBtn");
window.addEventListener("DOMContentLoaded", () => {
  const savedEmail = localStorage.getItem("email");
  if (savedEmail) {
    email.value = savedEmail;
    checkbox.checked = true;
    welcomeMsg.textContent = `Welcome back, ${savedEmail}!`;
  }
});

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const emailValue = email.value;       
  const passwordValue = password.value;

 if (checkbox.checked) {
    localStorage.setItem("email", emailValue);
    welcomeMsg.textContent = `Welcome back, ${emailValue}!`;
  } else {
    localStorage.removeItem("email");
    welcomeMsg.textContent = "";
  }


  console.log("Email:", emailValue);
  console.log("Password:", passwordValue);
});

clearBtn.addEventListener("click", () => {
  localStorage.removeItem("email");
  email.value = "";
  password.value = ""
  checkbox.checked = false;
  welcomeMsg.textContent = "";
});