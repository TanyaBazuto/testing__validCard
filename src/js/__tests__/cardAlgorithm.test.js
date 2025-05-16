/**
 * @jest-environment jsdom
 */

import cardAlgorithm from "../../components/cardAlgorithm";

test.each([
  ["корректное значение", "5406603229938899", true],
  ["корректное значение", "4532049653857512", true],
  ["некорректное значение", "812282246311784", false],
  ["некорректное значение", "1123223433334444", false],
  ["некорректное значение", "1544846518328", false],
])("Ожидается %s для карты с номером %d", (_, value, expected) => {
  expect(cardAlgorithm(value)).toBe(expected);
});
