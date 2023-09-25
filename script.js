javascript
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
const message = document.getElementById("message");

password2.addEventListener("input", function() {
  if (password2.value !== password1.value) {
    message.textContent = "Parola de verificare nu corespunde.";
  } else {
    message.textContent = "";
  }
});