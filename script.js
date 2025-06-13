const btn = document.querySelector(".btn");
const input = document.querySelector("#input");
const alertContainer = document.querySelector(".alert-container");
const copyIcon = document.querySelector(".fa-copy");
// console.log(input.value);
// console.log(input.value.length);

btn.addEventListener("click", (e) => {
  const chars =
    "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-=";
  const passwordLength = 14;

  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    password += chars[randomNum];
  }
  console.log(password);
  input.value = password;
});

copyIcon.addEventListener("click", (e) => {
  // select input
  input.select();
  // select input for mobile
  input.setSelectionRange(0, 9999);
  //   copy the input value
  navigator.clipboard.writeText(input.value);

  if (input.value === "") {
    alert("No password to be copied! Please generate a password");
  } else {
    alertContainer.textContent = "Password Copied!";
    alertContainer.classList.add("active");
    setTimeout(() => {
      alertContainer.classList.remove("active");
    }, 5000);
  }
});
