import React, { useEffect, useState } from "react";

export default function Timer() {
  const [datetime, setDatetime] = useState(0);

  useEffect(() => {
    setInterval(tictocTime, 1000);
  }, [datetime]);

  // 뭔가 오해가 있구나... rendering 안할때도 계속 실행되게 하려면 setInterval로 주기적으로 실행해줘야돼...

  function tictocTime() {
    setDatetime(new Date().toLocaleString());
  }

  return <h1> {datetime} </h1>;
}
