import React, { createContext, useState, useContext } from "react";
import colorData from "./color-data.json";
import { v4 } from "uuid";

const ColorContext = createContext();
export const useColors = () => useContext(ColorContext);

export default function ColorProvider({ children }) {
  // children?
  const [colors, setColors] = useState(colorData); // colorData는 이제 state야!
  const addColor = (title, color) =>
    setColors([
      // argument 두개?
      ...colors,
      {
        id: v4(),
        rating: 0,
        title,
        color,
      },
    ]); // Array 받네.. colors를 푼것과 새로운 object = { id(v4가 생성), rating, title, color}

  const rateColor = (id, rating) =>
    setColors(
      colors.map((color) => (color.id === id ? { ...color, rating } : color))
    );

  const removeColor = (id) =>
    setColors(colors.filter((color) => color.id !== id));

  return (
    <ColorContext.Provider
      value={{ colors, addColor, removeColor, rateColor }} // Contect provider는 4가지를 받는다. 함수 3 변수 1
    >
      {children}
    </ColorContext.Provider> // Children이 뭔지 모르겠어..
  );
}

// 칠드런 어디 써?
