import React from "react";
import { useInput } from "./hooks";
import { useColors } from "./color-hooks";

export default function AddColorForm() {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");
  const { addColor } = useColors();

  const submit = (e) => {
    e.preventDefault();
    addColor(titleProps.value, colorProps.value);
    resetTitle();
    resetColor();
  };

  return (
    <form onSubmit={submit}>
      <input
        {...titleProps}
        type="text"
        placeholder="color title..."
        required
      />
      <input {...colorProps} type="color" required />
      <button>ADD</button>
    </form>
  );
}

// onNewColor 라는 prop을 가진 AddColorForm이라는 앱을 살펴보자
// useRef를 이용해 txtTitle을 할당 - no value
// useRef를 이용해 hexColor을 할당 - no value
// 이후는 결정 된 것이 없다.
