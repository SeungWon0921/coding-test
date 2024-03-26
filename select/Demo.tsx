import { useState } from "react";
import { Select } from "./Select.tsx";
import { fetchTop100Films } from "./fetchTop100Films.ts";
import top100Films from "./top100Films.json";
import React from "react";

function DemoPage() {
  const [selectedValue, setSelectedValue] = useState<string>("");
  return (
    <div>
      <Select
        value={selectedValue}
        options={top100Films}
        onChange={(value) => setSelectedValue(value)}
      />
      <Select
        value={selectedValue}
        options={fetchTop100Films}
        onChange={(value) => setSelectedValue(value)}
      />
    </div>
  );
}

export { DemoPage };
