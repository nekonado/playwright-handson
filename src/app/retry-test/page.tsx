import type { Metadata } from "next";
import { RetryTest } from "./retryTest";

export const metadata: Metadata = {
  title: "リトライのテスト",
  description: "Playwrightのリトライのテスト",
};

export default function Form() {
  return (
    <main>
      <h1>入力フォーム</h1>
      <RetryTest />
    </main>
  );
}
