// src/index.tsx
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { DemoPage } from "./Demo.tsx";

const container = document.getElementById("root");
if (container !== null) {
  const root = createRoot(container);
  root.render(<DemoPage />);
} else {
  console.error("Root container not found");
}
