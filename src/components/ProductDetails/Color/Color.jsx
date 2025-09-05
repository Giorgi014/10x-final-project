import React, { useState } from "react";
import "./Color.scss";

export const Color = ({ colors: propColors }) => {
  const [selectedColor, setSelectedColor] = useState("");
  const colors = propColors && propColors.length ? propColors : ["black", "purple", "red", "gold", "white"];

  const chooseColor = (color) => setSelectedColor(color);
  const classSafe = (c) => c.replace(/\s+/g, "_").toLowerCase();

  return (
    <div className="color_container">
      {colors.map((color) => (
        <div
          key={color}
          className={`color ${classSafe(color)} ${selectedColor === color ? "choosed" : ""}`}
          onClick={() => chooseColor(color)}
          title={color}
        />
      ))}
    </div>
  );
};
