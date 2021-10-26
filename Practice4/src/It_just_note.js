// 일단 Stateful Context Provider를 만들기로 했네요

// 뭐가 달라지죠?

// ColorProivder를 만들었어요!

// New component!

const ColorContext = createContext(); // 이게 아니네요? 지역 ColorContext를 만들었습니다. 무엇이 전역으로 빠지죠?

// 애초에 Context Provider를 Component로 쓰기로 마음먹었네요? 이래도 되나요?
// 될거 같은데요. 원래 ColorContext는 Component였으니까요?
export default function ColorProvider({ children }) {
  return (
    <ColorContext.Provider value={{ colors, setColors }}>
      {children}
    </ColorContext.Provider>
  );
}
// 뭐죠 children?

// 정리나 해봅시다.
/** ColorProvider는 children이라는 props를 가집니다. destruction object니까 별 신경은...
 * 이것은 우리가 예상했듯이 createContext를 이용해서 만든 ColorContext.Provider를 리턴해요. 값은 원래의 default인 colors
 * 그리고 함수인 setColors와 함께요? 그리고 사이에 Children을 리턴하죠
 * 우리는 현재 children이 뭔지는 모르겠지만 막연하게 ColorProvider의 props라고 생각해요.
 *
 * 그러면 ColorProivder를 추적해야겠네요...
 */
