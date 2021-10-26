import React from "react";
import { createArray } from "./lib";
import Star from "./Star";

export default function StarRating({
  totalStars = 5,
  selectedStars = 0,
  onRate = (f) => f, // 그저 argument를 받아오기 위한 넣은것이 그대로 나오는 함수
}) {
  return (
    <>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => onRate(i + 1)}
        />
      ))}
      <p style={{ fontSize: 30 }}>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  );
}
