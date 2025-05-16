export default function cardAlgorithm(value) {
  const message = document.querySelector(".message");
  const text = document.querySelector(".text");
  const valueList = value.split("");
  let sum = 0;
  valueList.forEach((el, i) => {
    const elNum = Number(el);
    if (i % 2 === 0) {
      elNum * 2 > 9 ? (sum = sum + elNum * 2 - 9) : (sum += elNum * 2);
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
