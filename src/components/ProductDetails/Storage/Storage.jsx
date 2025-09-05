import { useState } from "react";
import "./Storage.scss";

export const Storage = ({ storageOptions }) => {
  const [selectedStorage, setSelectedStorage] = useState("");
  const storage = storageOptions && storageOptions.length ? storageOptions : ["128GB", "256GB", "512GB", "1TB"];

  const chooseStorage = (str) => setSelectedStorage(str);
  const classSafe = (c) => c.replace(/\s+/g, "_").toLowerCase();

  return (
    <div className="storage_container">
      {storage.map((s) => (
        <div
          key={s}
          className={`storage ${classSafe(s)} ${selectedStorage === s ? "choosed_strg" : ""}`}
          onClick={() => chooseStorage(s)}
        >
          <p>{s}</p>
        </div>
      ))}
    </div>
  );
};
