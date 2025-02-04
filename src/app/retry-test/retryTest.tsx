"use client";

import { useState } from "react";

export function RetryTest() {
  const [count, setCount] = useState(1);
  const [title, setTitle] = useState<string | undefined>(undefined);

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const fetchData = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${count}/`
    );
    const json = await res.json();

    // flaky network test
    await delay(Math.random() * 75000);

    setTitle(json.title);
    setCount((prev) => prev + 1);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        alignItems: "start",
      }}
    >
      <button onClick={fetchData}>fetch</button>
      <output>{`title: ${title ?? ""}`}</output>
    </div>
  );
}
