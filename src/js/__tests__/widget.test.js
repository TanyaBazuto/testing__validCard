/**
 * @jest-environment jsdom
 */

import Widget from "../../components/widget";

test.each([["", "Подтвердить"]])(
  "the function .onSubmit",
  (value, expected) => {
    document.body.innerHTML = '<div class="container"></div>';
    const parentEl = document.querySelector(".container");
    const widget = new Widget(parentEl);
    widget.input.value = value;
    const submitEl = parentEl.querySelector(Widget.submitSelector);
    submitEl.click();
    const result = widget.submit.innerHTML;
    expect(result).toBe(expected);
  },
);

test.each([
  ["4", "Подтвердить"],
  ["", "Подтвердить"],
])("the function .onText", (value, expected) => {
  document.body.innerHTML = '<div class="container"></div>';
  const parentEl = document.querySelector(".container");
  const widget = new Widget(parentEl);
  const input = parentEl.querySelector(Widget.inputSelector);
  widget.input.value = value;
  input.dispatchEvent(new Event("input", { bubbles: true }));
  input.dispatchEvent(new Event("click", { bubbles: true }));
  const result = widget.submit.innerHTML;
  expect(result).toBe(expected);
});
