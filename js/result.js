addEventListener("DOMContentLoaded", () => {
  const saveTel = localStorage.getItem("tel");
  document.querySelector(".result-son-tel").innerHTML = saveTel;

  const saveCPF = localStorage.getItem("cpf");
  document.querySelector(".result-son-cpf").innerHTML = saveCPF;

  const savePass = localStorage.getItem("pass");
  document.querySelector(".result-son-pass").innerHTML = savePass;

  const saveName = localStorage.getItem("nome");
  document.querySelector(".result-son-nome").innerHTML = saveName;

  const saveEmail = localStorage.getItem("email");
  document.querySelector(".result-son-email").innerHTML = saveEmail;
});
