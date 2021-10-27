import React, { useState, useEffect } from "react";

export default function Timer() {
  const [timeState, setTimeState] = useState();

  useEffect(() => {
    setInterval(TiktokDate, 1000);
  });

  const TiktokDate = () => {
    setTimeState(new Date().getSeconds());
  };

  return (
    <div>
      <h1> {timeState} </h1>
    </div>
  );
}
