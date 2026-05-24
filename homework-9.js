// footer
const form_footer = document.querySelector(".footer__subscribe-form");
const emailInput = form_footer.querySelector("input[type='email']");

let user;

form_footer.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = emailInput.value;
  console.log("email:", email);
});

// modal registration
const registerBtn = document.getElementById("register-btn");
const modal = document.getElementById("modal");
const closeModalBtn = document.querySelector(".modal__close-btn");

registerBtn.addEventListener("click", () => {
  modal.classList.add("modal-showed");
});

closeModalBtn.addEventListener("click", () => {
  modal.classList.remove("modal-showed");
});

// check password
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");

confirmPasswordInput.addEventListener("input", () => {
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;
  if (password !== confirmPassword) {
    confirmPasswordInput.setCustomValidity("Пароли не совпадают");
  } else {
    confirmPasswordInput.setCustomValidity("");
  }
});

// form modal
const form_modal = document.querySelector(".modal__form");

form_modal.addEventListener("submit", (event) => {
  event.preventDefault();

  user = {
    username: form_modal.querySelector("#username").value,
    name: form_modal.querySelector("#name").value,
    surename: form_modal.querySelector("#surename").value,
    createdOn: new Date(),
    birth_date: form_modal.querySelector("#birth_date").value,
  };

  if (form_modal.checkValidity()) {
    console.log(`
user created:
username: ${user.username}
name: ${user.name}
surename: ${user.surename}
birth_date: ${user.birth_date}
createdOn: ${user.createdOn}`);

    modal.classList.remove("modal-showed");
  } else {
    form_modal.reportValidity();
  }
});
