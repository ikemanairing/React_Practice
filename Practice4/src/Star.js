import React from "react";
import { FaStar } from "react-icons/fa";

export default function Star({ selected = false, onSelect = (f) => f }) {
  return (
    <FaStar size={30} color={selected ? "red" : "grey"} onClick={onSelect} />
  );
}
