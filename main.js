/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/

;// ./src/components/cardValidator.js
function isValidNum(inputField, value) {
  const isNum = /^\d+$/.test(value);
  if (!isNum) {
    inputField.value = "";
    inputField.classList.add("numInValid");
    inputField.placeholder = "Введите номер карты";
  } else {
    inputField.classList.remove("numInValid");
    // inputField.placeholder = 'Credit card number';
  }
}
function isValidTypeCard(value) {
  const elementLi = document.querySelectorAll("li");
  elementLi.forEach(item => {
    item.classList.add("notPaymentSystem");
  });
  if (/^[4]/.test(value)) {
    const visa = document.querySelector('[data-id="Visa"]').parentElement;
    const message = document.querySelector(".message");
    const text = document.querySelector(".text");
    visa.classList.remove("notPaymentSystem");
    visa.classList.add("choice");
    message.classList.remove("message_none");
    text.innerHTML = "Карта платежной системы Visa";
  }
  if (/^[5]/.test(value)) {
    const masterCard = document.querySelector('[data-id="MasterCard"]').parentElement;
    masterCard.classList.remove("notPaymentSystem");
    masterCard.classList.add("choice");
    document.querySelector(".message").classList.remove("message_none");
    document.querySelector(".text").innerHTML = "Карта платежной системы MasterCard";
  }
  if (/^34|^37/.test(value)) {
    const americanExpress = document.querySelector('[data-id="AmericanExpress"]').parentElement;
    americanExpress.classList.remove("notPaymentSystem");
    americanExpress.classList.add("choice");
    document.querySelector(".message").classList.remove("message_none");
    document.querySelector(".text").innerHTML = "Карта платежной системы AmericanExpress";
  }
  if (/^83|^63/.test(value)) {
    const unionpay = document.querySelector('[data-id="Unionpay"]').parentElement;
    unionpay.classList.remove("notPaymentSystem");
    unionpay.classList.add("choice");
    document.querySelector(".message").classList.remove("message_none");
    document.querySelector(".text").innerHTML = "Карта платежной системы Union Pay";
  }
  if (/^35/.test(value)) {
    const jcb = document.querySelector('[data-id="JCB"]').parentElement;
    jcb.classList.remove("notPaymentSystem");
    jcb.classList.add("choice");
    document.querySelector(".message").classList.remove("message_none");
    document.querySelector(".text").innerHTML = "Карта платежной системы JCB";
  }
  if (/^[2]/.test(value)) {
    const mir = document.querySelector('[data-id="Mir"]').parentElement;
    mir.classList.remove("notPaymentSystem");
    mir.classList.add("choice");
    document.querySelector(".message").classList.remove("message_none");
    document.querySelector(".text").innerHTML = "Карта платежной системы МИР";
  }
}
;// ./src/components/cardAlgorithm.js
function cardAlgorithm(value) {
  const message = document.querySelector(".message");
  const text = document.querySelector(".text");
  const valueList = value.split("");
  let sum = 0;
  valueList.forEach((el, i) => {
    const elNum = Number(el);
    if (i % 2 === 0) {
      elNum * 2 > 9 ? sum = sum + elNum * 2 - 9 : sum += elNum * 2;
    } else {
      sum += elNum;
    }
  });
  if (sum % 10 === 0) {
    if (message !== null) {
      message.classList.remove("message_none");
      message.classList.add("valid");
      text.innerHTML = "Корректный номер карты";
    }
  } else {
    if (message !== null) {
      message.classList.remove("message_none");
      message.classList.add("invalid");
      text.innerHTML = "Некорректный номер карты";
    }
  }
  return sum % 10 === 0;
}
;// ./src/pic/visa_logo.png
const visa_logo_namespaceObject = __webpack_require__.p + "e42b06d47505b8ed85ea.png";
;// ./src/pic/mir_logo.png
const mir_logo_namespaceObject = __webpack_require__.p + "c3854d2817833a81897f.png";
;// ./src/pic/jcb_logo.png
const jcb_logo_namespaceObject = __webpack_require__.p + "4c5ac413499e3efd0ae1.png";
;// ./src/pic/americanexpress_logo.png
const americanexpress_logo_namespaceObject = __webpack_require__.p + "17f15eeef5214fd392f4.png";
;// ./src/pic/mastercard_logo.png
const mastercard_logo_namespaceObject = __webpack_require__.p + "a6c5136f4776c80fffeb.png";
;// ./src/pic/unionpay_logo.png
const unionpay_logo_namespaceObject = __webpack_require__.p + "470eb8a5fa12f84757fb.png";
;// ./src/components/widget.js








class Widget {
  constructor(container) {
    this.container = container;
    this.onSubmit = this.onSubmit.bind(this);
    this.onText = this.onText.bind(this);
    this.bindToDOM();
  }
  static get markup() {
    return `<div class="container__body">
    <div class="container__content">
      <div class="validator__widget widget">
        <ul class="card__list">
          <li class="widget__item mir"><img data-id="Mir" src="${mir_logo_namespaceObject}" title="Мир" alt="Мир"></li>
          <li class="widget__item"><img data-id="Visa" src="${visa_logo_namespaceObject}" title="Visa" alt="Visa"></li>
          <li class="widget__item"><img data-id="MasterCard" src="${mastercard_logo_namespaceObject}" title="MasterCard" alt="MasterCard"></li>
          <li class="widget__item"><img data-id="AmericanExpress" src="${americanexpress_logo_namespaceObject}" title="AmericanExpress" alt="AmericanExpress"></li>
          <li class="widget__item"><img data-id="Unionpay" src="${unionpay_logo_namespaceObject}" title="UnionPay" alt="Unionpay"></li>
          <li class="widget__item"><img data-id="JCB" src="${jcb_logo_namespaceObject}" title="JCB" alt="JCB"></li>
        </ul>
        <form class="widget__form">
          <div class="widget__row">
            <input class="input" id="card-number" type="number" placeholder="Введите номер карты">
            <button class="button" id="btn-valid" type="submit">Подтвердить</button>
          </div>
          <div class="message message_none">
            <p class="text"></p>
          </div>
        </form>
      </div>
    </div>
  </div>`;
  }
  static get selector() {
    return ".widget__form";
  }
  static get inputSelector() {
    return ".input";
  }
  static get submitSelector() {
    return ".button";
  }
  bindToDOM() {
    this.container.innerHTML = Widget.markup;
    this.element = this.container.querySelector(Widget.selector);
    this.submit = this.element.querySelector(Widget.submitSelector);
    this.input = this.element.querySelector(Widget.inputSelector);
    this.element.addEventListener("submit", this.onSubmit);
    this.input.addEventListener("input", this.onText);
  }
  onSubmit(e) {
    e.preventDefault();
    if (this.input.value !== "") {
      cardAlgorithm(this.input.value);
    } else {
      isValidNum(this.input, "zero click");
    }
  }
  onText(e) {
    e.preventDefault();
    isValidNum(this.input, this.input.value);
    if (this.input.value !== "") {
      isValidTypeCard(this.input.value);
    }
    this.input.addEventListener("click", () => {
      this.input.value = "";
      this.input.classList.remove("numInValid");
      const liList = document.querySelectorAll("li");
      liList.forEach(item => {
        item.classList.remove("not-identified-card");
      });
      document.querySelector(".message").classList.add("valid");
      document.querySelector(".message").classList.add("invalid");
    });
  }
}
;// ./src/js/app.js

const widget = new Widget(document.querySelector(".container"));
widget.bindToDOM();
;// ./src/index.js


/******/ })()
;
//# sourceMappingURL=main.js.map