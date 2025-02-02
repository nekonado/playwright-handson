import { test, expect } from "@playwright/test";

test("リトライのテスト", async ({ page }) => {
  await page.goto("http://localhost:3000/retry-test");
  await page.getByRole("button", { name: "fetch" }).click();
  await expect(page.getByText("title: delectus aut autem")).toBeVisible();
  await page.getByRole("button", { name: "fetch" }).click();
  await expect(page.getByText("title: quis ut nam facilis et")).toBeVisible();
  await page.getByRole("button", { name: "fetch" }).click();
  await expect(page.getByText("title: fugiat veniam minus")).toBeVisible();
});
