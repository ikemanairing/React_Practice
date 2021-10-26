import { useState } from "react";

export const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  return [
    { value, onChange: (e) => setValue(e.target.value) },
    () => setValue(initialValue),
  ];
};

/** 세부적으로 뜯어 보자
 * useInput은 function이지 not default인?
 * useState를 사용해서 첫 initialState를 변수로 받아?, 지금부터 initialState는 value가 되는거지
 * 이니셜 State를 넣으면 Array 반환
 * 어떤 Array? [ {10, */
