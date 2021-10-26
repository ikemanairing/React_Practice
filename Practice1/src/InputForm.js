import { useInput } from "./custom/hooks";

export default function InputForm() {
  const [inputProps, resetInput] = useInput("");

  const submit = (e) => {
    e.preventDefault();
    resetInput();
  };

  console.log(inputProps);

  return (
    <>
      <div>
        <form onSubmit={submit}>
          <input
            {...inputProps}
            type="password"
            placeholder="Type your password!"
            required
          ></input>
          <input type="submit" value="입력하세요!"></input>
        </form>
        <h1> 입력된 비밀번호는 {inputProps.value} 입니다. </h1>
      </div>
    </>
  );
}
