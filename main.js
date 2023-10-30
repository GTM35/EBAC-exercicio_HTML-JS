const btn = document.getElementById("btn");
const inputA = document.getElementById("input-a");
const inputB = document.getElementById("input-b");
const message = document.querySelector(".message-container p");
let formValidado = false;

btn.addEventListener("click", (e) => {
  e.preventDefault();
  validaFormulario();
  showMessage();
});

function validaFormulario() {
  if (inputA.value < inputB.value) {
    formValidado = true;
  } else {
    formValidado = false;
  }
}

function showMessage() {
  if (formValidado) {
    message.classList.remove("error");
    message.classList.add("success");
    message.textContent = "Formulário validado!";
  } else {
    message.classList.remove("success");
    message.classList.add("error");
    message.textContent = "Erro ao validar o formulário!";
  }
}
