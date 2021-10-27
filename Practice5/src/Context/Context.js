import React, { useContext, createContext, useState, useRef } from "react";

const TestContext = createContext();
export const useTestContext = () => useContext(TestContext);

// TestContext라는 Component를 Context 저장소로 만든다.
// 이제 이것을 사용할때 useTestContext라고 해서 사용한다.

export default function TestContextProvider({ children }) {
  const [count, setCount] = useState(0);
  const memoryCount = useRef(0);

  return (
    <TestContext.Provider value={{ count, setCount, memoryCount }}>
      {children}
    </TestContext.Provider>
  );
}

// React development tools에서 children이란 TestContext.Provider에 둘러싸인 모든 JSX 객체를 뜻한다.
// 여기서는 <TestContext.Provider> 아래에 있는 모든 Component를 뜻한다.
