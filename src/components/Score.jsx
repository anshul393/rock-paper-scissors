import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Score = () => {
  const { score } = useContext(AppContext);

  return (
    <div className="rps-score">
      <span>SCORE</span>
      <span>{score}</span>
    </div>
  );
};

export default Score;
