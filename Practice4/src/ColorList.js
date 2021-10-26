import React from "react";
import { useColors } from "./color-hooks";
import Color from "./Color";

/** ColorList를 만듭니다.
 * - colors에 아무것도 없으면 No Color Listed를 적어주고
 * - colors가 있다면 새로운 <div>를 생성해서 <Color> Component를 만들어줍니다.
 */

export default function ColorList() {
  const { colors } = useColors(); // 원래 useContext 함수 였던 것을 모두 custom hook인 useColors에 묶어 줍니다.

  if (!colors.length) return <div>No Colors Listed. (Add a Color)</div>;
  return (
    <div className="color-list">
      {colors.map((color) => (
        <Color key={color.id} {...color} />
      ))}
    </div>
  );
}
