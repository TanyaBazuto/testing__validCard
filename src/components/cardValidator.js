export function isValidNum(inputField, value) {
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

export function isValidTypeCard(value) {
  const elementLi = document.querySelectorAll("li");
  elementLi.forEach((item) => {
    item.classList.add("notPaymentSystem");
  });
  if (/^[4]/.test(value)) {
    const visa = document.querySelector('[data-id="Visa"]').parentElement;
    const message = document.querySelector(".message");
    const text = document.querySelector(".text")
    visa.classList.remove("notPaymentSystem");
    visa.classList.add("choice");
    message.classList.remove("message_none");
    text.innerHTML = "Карта платежной системы Visa";
  }
  if (/^[5]/.test(value)) {
    const masterCard = document.querySelector(
      '[data-id="MasterCard"]',
    ).parentElement;
    masterCard.classList.remove("notPaymentSystem");
    masterCard.classList.add("choice");
    document.querySelector(".message").classList.remove("message_none");
    document.querySelector(".text").innerHTML =
      "Карта платежной системы MasterCard";
  }
  if (/^34|^37/.test(value)) {
    const americanExpress = document.querySelector(
      '[data-id="AmericanExpress"]',
    ).parentElement;
    americanExpress.classList.remove("notPaymentSystem");
    americanExpress.classList.add("choice");
    document.querySelector(".message").classList.remove("message_none");
    document.querySelector(".text").innerHTML =
      "Карта платежной системы AmericanExpress";
  }
  if (/^83|^63/.test(value)) {
    const unionpay = document.querySelector(
      '[data-id="Unionpay"]',
    ).parentElement;
    unionpay.classList.remove("notPaymentSystem");
    unionpay.classList.add("choice");
    document.querySelector(".message").classList.remove("message_none");
    document.querySelector(".text").innerHTML =
      "Карта платежной системы Union Pay";
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
