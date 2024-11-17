const openButtons = document.querySelectorAll(".open-modal");
const closeButtons = document.querySelectorAll(".close-modal");

openButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modalId = button.getAttribute("data-modal");
    const modal = document.getElementById(modalId);
    modal.showModal();
  });
});

closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modalId = button.getAttribute("data-modal");
    const modal = document.getElementById(modalId);
    modal.close();
  });
});

function buttonHandleClick() {
  alert("Mensagem Enviada!");
}

function SetName() {
  const nome = document.querySelector("#name").value;
  localStorage.setItem("nome", nome);
}

function SetTel() {
  const tel = document.querySelector("#telefone").value;
  localStorage.setItem("tel", tel);
}

function SetPass() {
  const pass = document.querySelector("#password").value;
  localStorage.setItem("pass", pass);
}

function SetCpf() {
  const cpf = document.querySelector("#cpf").value;
  localStorage.setItem("cpf", cpf);
}

function SetEmail() {
  const email = document.querySelector("#email").value;
  localStorage.setItem("email", email);
}
