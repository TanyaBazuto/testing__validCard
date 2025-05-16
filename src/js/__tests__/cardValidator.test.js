/**
 * @jest-environment jsdom
 */

import { isValidNum } from "../../components/cardValidator";

test.each([
  ["card123456", "Введите номер карты"],
  ["", "Введите номер карты"],
])("the function on the card number %s", (value, expected) => {
  const inputField = document.createElement("input");
  isValidNum(inputField, value);
  expect(inputField.placeholder).toBe(expected);
});
