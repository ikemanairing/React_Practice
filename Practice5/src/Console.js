import { useTestContext } from "./Context/Context";

export default function Console() {
  const { count, setCount, memoryCount } = useTestContext();

  return (
    <div>
      <p>{`count : ${count}`}</p>
      <p>{`setCount: ${setCount}`} </p>
      <p>{`memoryCount.current.value: ${memoryCount.current.value}`}</p>
    </div>
  );
}
