class Validate {
  constructor() {
    this.inputUser = document.getElementById("username");
    this.inputPassword = document.getElementById("new-password");
    this.inputRepeatPassword = document.getElementById("repeat-password");
    this.inputAddress = document.getElementById("address");
    this.inputEmail = document.getElementById("email");
    this.btn = document.querySelector(".btn");
    this.textSucess = document.querySelector(".sucess");
    this.textError = document.querySelector(".error");
    this.inputCheckbox = document.getElementById("term");
    this.inputs = [
      this.inputUser,
      this.inputPassword,
      this.inputRepeatPassword,
      this.inputEmail,
      this.inputAddress,
      this.inputCheckbox,
      this.btn,
    ];
    this.verificate();
  }
  verificate() {
    document.addEventListener("click", (e) => {
      const el = e.target;
      if (el.classList.contains("btn")) {
        this.eventPrevenDefault(e);
        if (this.verificateInputUser() === false) {
          return;
        }
        if (this.verificateInputPassword() === false) {
          return;
        }
        if (this.verificateInputRepeatPassword() === false) {
          return;
        }

        if (this.verificateInputEmail() === false) {
          return;
        }
        if (this.verificateInputAddress() === false) {
          return;
        }
        if (this.verificateInputChecked() === false) {
          return;
        }
        this.FormSucess();
      }
    });
  }

  eventPrevenDefault(e) {
    e.preventDefault();
  }
  createSpan() {
    const span = document.createElement("span");
    return span;
  }
  removeSpan(input) {
    if (
      input.nextElementSibling.classList.contains("error") ||
      input.nextElementSibling.classList.contains("sucess")
    ) {
      input.nextElementSibling.remove();
    }
  }
  verificateInputUser() {
    const regexNumbers = /^[0-9]/;
    this.removeSpan(this.inputs[0]);

    if (this.inputUser.value === "") {
      const span = this.createSpan();
      span.innerText = "o input não pode estar vázio";
      span.classList.add("error");
      this.inputUser.insertAdjacentElement("afterend", span);
      return false;
    }

    if (regexNumbers.test(this.inputUser.value)) {
      const span = this.createSpan();
      span.innerText = "Não utilize números no usuário";
      span.classList.add("error");
      this.inputUser.insertAdjacentElement("afterend", span);
      return false;
    }
    if (this.inputUser.value.length < 5) {
      const span = this.createSpan();
      span.innerText = "o usuário precisa de no mínimo 5 caracteres";
      span.classList.add("error");
      this.inputUser.insertAdjacentElement("afterend", span);
      return false;
    }
    return true;
  }
  verificateInputPassword() {
    this.removeSpan(this.inputs[1]);
    if (this.inputPassword.value === "") {
      const span = this.createSpan();
      span.innerText = "o input não pode estar vázio";
      span.classList.add("error");
      this.inputPassword.insertAdjacentElement("afterend", span);
      return false;
    }
    if (this.inputPassword.value.length < 8) {
      const span = this.createSpan();
      span.innerText = "a senha precisa de no mínimo 8 caracteres";
      span.classList.add("error");
      this.inputPassword.insertAdjacentElement("afterend", span);
      return false;
    }
  }
  verificateInputRepeatPassword() {
    this.removeSpan(this.inputs[2]);
    if (this.inputRepeatPassword.value !== this.inputPassword.value) {
      const span = this.createSpan();
      span.innerText = "As Senhas devem ser iguais :)";
      span.classList.add("error");
      this.inputRepeatPassword.insertAdjacentElement("afterend", span);
      return false;
    }
  }
  verificateInputEmail() {
    this.removeSpan(this.inputs[3]);
    const email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (this.inputEmail.value === "") {
      const span = this.createSpan();
      span.innerText = "o input não pode estar vázio";
      span.classList.add("error");
      this.inputEmail.insertAdjacentElement("afterend", span);
      return false;
    }
    if (!email.test(this.inputEmail.value)) {
      const span = this.createSpan();
      span.innerText = "Email Inválido";
      span.classList.add("error");
      this.inputEmail.insertAdjacentElement("afterend", span);
      return false;
    }
  }
  verificateInputAddress() {
    const span = document.querySelector(".msgErrorAddress");
    if (!this.inputAddress.value) {
      span.innerText = "o input não pode estar vázio";
      return false;
    } else {
      span.innerText = "";
    }
  }

  verificateInputChecked() {
    const textInputCheckbox = document.querySelector(".textInputCheckbox");

    if (this.inputCheckbox.checked === false) {
      textInputCheckbox.innerText = "Necessário confirmar os termos";
      return false;
    } else {
      textInputCheckbox.innerText = "";
    }
  }
  FormSucess() {
    const div = document.querySelector(".btn-wrapper");
    const span = this.createSpan();
    span.innerText = "Cadastro realizado com sucesso";
    span.classList.add("success");
    div.insertAdjacentElement("afterend", span);
    setTimeout(() => {
      window.open("http://localhost:3000/", self);
    }, 1000);
  }
}

const validate = new Validate();
