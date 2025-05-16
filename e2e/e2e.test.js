import puppeteer from "puppeteer";
import { fork } from "child_process";

jest.setTimeout(30000); // default puppeteer timeout

describe("Valid Card", () => {
  let browser = null;
  let page = null;
  let server = null;
  const baseUrl = "http://localhost:9000";

  beforeAll(async () => {
    server = fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on("error", reject);
      server.on("message", (message) => {
        if (message === "ok") {
          resolve();
        }
      });
    });

    browser = await puppeteer.launch({
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
    server.kill();
  });

  test("should add do something", async () => {
    await page.goto(baseUrl);
  });

  // test("valid card number", async () => {
  //   // Выбираем платежную систему Visa
  //   const mirItem = await page.$(".widget__item.mir");
  //   await mirItem.click();

  //   // Вводим валидный номер карты номера Visa
  //   await page.type("#card-number", "2201382000000013");
  //   await page.click("#btn-valid");

  //   // Ожидание появления сообщения о валидности
  //   await page.waitForSelector(".text", {
  //     visible: true,
  //   });
  //   const message = await page.$eval(
  //     ".text",
  //     (el) => el.textContent,
  //   );
  //   expect(message).toBe("Корректный номер карты");
  // });

  // test("invalid card number", async () => {

  //   // Выбираем платежную систему MasterCard
  //   const mirItem = await page.$(".widget__item.mir");
  //   await mirItem.click();

  //   // Вводим невалидный номер карты
  //   await page.type("#card-number", "4111111111111110");
  //   await page.click("#btn-valid");

  //   // Ожидание появления сообщения о некорректности
  //   await page.waitForSelector(".text", {
  //     visible: true,
  //   });
  //   const message = await page.$eval(
  //     ".text",
  //     (el) => el.textContent,
  //   );
  //   expect(message).toBe("Некорректный номер карты");
  // });
});
