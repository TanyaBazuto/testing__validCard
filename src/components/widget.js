import { isValidNum, isValidTypeCard } from "./cardValidator";
import cardAlgorithm from "./cardAlgorithm";
import visa from "../pic/visa_logo.png";
import mir from "../pic/mir_logo.png";
import jcb from "../pic/jcb_logo.png";
import americanexpress from "../pic/americanexpress_logo.png";
import mastercard from "../pic/mastercard_logo.png";
import unionpay from "../pic/unionpay_logo.png";

export default class Widget {
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
          <li class="widget__item mir"><img data-id="Mir" src="${mir}" title="Мир" alt="Мир"></li>
          <li class="widget__item"><img data-id="Visa" src="${visa}" title="Visa" alt="Visa"></li>
          <li class="widget__item"><img data-id="MasterCard" src="${mastercard}" title="MasterCard" alt="MasterCard"></li>
          <li class="widget__item"><img data-id="AmericanExpress" src="${americanexpress}" title="AmericanExpress" alt="AmericanExpress"></li>
          <li class="widget__item"><img data-id="Unionpay" src="${unionpay}" title="UnionPay" alt="Unionpay"></li>
          <li class="widget__item"><img data-id="JCB" src="${jcb}" title="JCB" alt="JCB"></li>
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
      liList.forEach((item) => {
        item.classList.remove("not-identified-card");
      });
      document.querySelector(".message").classList.add("valid");
      document.querySelector(".message").classList.add("invalid");
    });
  }
}
