import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Result = () => {
  const { userRPS, houseRPS, gameWinner, setUserRPS, setHouseRPS } =
    useContext(AppContext);

  const handleClick = () => {
    setUserRPS("");
    setHouseRPS("");
  };

  return userRPS && houseRPS ? (
    <div className="result">
      <span className="result-text">{gameWinner(userRPS, houseRPS)}</span>
      <button className="play-again-btn" onClick={handleClick}>
        play again
      </button>
    </div>
  ) : (
    <></>
  );
};

export default Result;
