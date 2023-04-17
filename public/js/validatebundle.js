/******/ (() => {
  // webpackBootstrap
  var __webpack_exports__ = {};
  /*!*************************!*\
  !*** ./src/validate.js ***!
  \*************************/
  function _typeof(obj) {
    "@babel/helpers - typeof";
    return (
      (_typeof =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (obj) {
              return typeof obj;
            }
          : function (obj) {
              return obj &&
                "function" == typeof Symbol &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? "symbol"
                : typeof obj;
            }),
      _typeof(obj)
    );
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", { writable: false });
    return Constructor;
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof(key) === "symbol" ? key : String(key);
  }
  function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (_typeof(res) !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  var Validate = /*#__PURE__*/ (function () {
    function Validate() {
      _classCallCheck(this, Validate);
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
    _createClass(Validate, [
      {
        key: "verificate",
        value: function verificate() {
          var _this = this;
          document.addEventListener("click", function (e) {
            var el = e.target;
            if (el.classList.contains("btn")) {
              _this.eventPrevenDefault(e);
              if (_this.verificateInputUser() === false) {
                return;
              }
              if (_this.verificateInputPassword() === false) {
                return;
              }
              if (_this.verificateInputRepeatPassword() === false) {
                return;
              }
              if (_this.verificateInputEmail() === false) {
                return;
              }
              if (_this.verificateInputAddress() === false) {
                return;
              }
              if (_this.verificateInputChecked() === false) {
                return;
              }
              _this.FormSucess();
            }
          });
        },
      },
      {
        key: "eventPrevenDefault",
        value: function eventPrevenDefault(e) {
          e.preventDefault();
        },
      },
      {
        key: "createSpan",
        value: function createSpan() {
          var span = document.createElement("span");
          return span;
        },
      },
      {
        key: "removeSpan",
        value: function removeSpan(input) {
          if (
            input.nextElementSibling.classList.contains("error") ||
            input.nextElementSibling.classList.contains("sucess")
          ) {
            input.nextElementSibling.remove();
          }
        },
      },
      {
        key: "verificateInputUser",
        value: function verificateInputUser() {
          var regexNumbers = /^[0-9]/;
          this.removeSpan(this.inputs[0]);
          if (this.inputUser.value === "") {
            var span = this.createSpan();
            span.innerText = "o input não pode estar vázio";
            span.classList.add("error");
            this.inputUser.insertAdjacentElement("afterend", span);
            return false;
          }
          if (regexNumbers.test(this.inputUser.value)) {
            var _span = this.createSpan();
            _span.innerText = "Não utilize números no usuário";
            _span.classList.add("error");
            this.inputUser.insertAdjacentElement("afterend", _span);
            return false;
          }
          if (this.inputUser.value.length < 5) {
            var _span2 = this.createSpan();
            _span2.innerText = "o usuário precisa de no mínimo 5 caracteres";
            _span2.classList.add("error");
            this.inputUser.insertAdjacentElement("afterend", _span2);
            return false;
          }
          return true;
        },
      },
      {
        key: "verificateInputPassword",
        value: function verificateInputPassword() {
          this.removeSpan(this.inputs[1]);
          if (this.inputPassword.value === "") {
            var span = this.createSpan();
            span.innerText = "o input não pode estar vázio";
            span.classList.add("error");
            this.inputPassword.insertAdjacentElement("afterend", span);
            return false;
          }
          if (this.inputPassword.value.length < 8) {
            var _span3 = this.createSpan();
            _span3.innerText = "a senha precisa de no mínimo 8 caracteres";
            _span3.classList.add("error");
            this.inputPassword.insertAdjacentElement("afterend", _span3);
            return false;
          }
        },
      },
      {
        key: "verificateInputRepeatPassword",
        value: function verificateInputRepeatPassword() {
          this.removeSpan(this.inputs[2]);
          if (this.inputRepeatPassword.value !== this.inputPassword.value) {
            var span = this.createSpan();
            span.innerText = "As Senhas devem ser iguais :)";
            span.classList.add("error");
            this.inputRepeatPassword.insertAdjacentElement("afterend", span);
            return false;
          }
        },
      },
      {
        key: "verificateInputEmail",
        value: function verificateInputEmail() {
          this.removeSpan(this.inputs[3]);
          var email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
          if (this.inputEmail.value === "") {
            var span = this.createSpan();
            span.innerText = "o input não pode estar vázio";
            span.classList.add("error");
            this.inputEmail.insertAdjacentElement("afterend", span);
            return false;
          }
          if (!email.test(this.inputEmail.value)) {
            var _span4 = this.createSpan();
            _span4.innerText = "Email Inválido";
            _span4.classList.add("error");
            this.inputEmail.insertAdjacentElement("afterend", _span4);
            return false;
          }
        },
      },
      {
        key: "verificateInputAddress",
        value: function verificateInputAddress() {
          var span = document.querySelector(".msgErrorAddress");
          if (!this.inputAddress.value) {
            span.innerText = "o input não pode estar vázio";
            return false;
          } else {
            span.innerText = "";
          }
        },
      },
      {
        key: "verificateInputChecked",
        value: function verificateInputChecked() {
          var textInputCheckbox = document.querySelector(".textInputCheckbox");
          if (this.inputCheckbox.checked === false) {
            textInputCheckbox.innerText = "Necessário confirmar os termos";
            return false;
          } else {
            textInputCheckbox.innerText = "";
          }
        },
      },
      {
        key: "FormSucess",
        value: function FormSucess() {
          var div = document.querySelector(".btn-wrapper");
          var span = this.createSpan();
          span.innerText = "Cadastro realizado com sucesso";
          span.classList.add("success");
          div.insertAdjacentElement("afterend", span);
          setTimeout(function () {
            window.open("http://localhost:3000/", self);
          }, 1000);
        },
      },
    ]);
    return Validate;
  })();
  var validate = new Validate();
  /******/
})();
//# sourceMappingURL=validatebundle.js.map
