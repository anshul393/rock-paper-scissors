import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [showRules, setShowRules] = useState(false);
  const [userRPS, setUserRPS] = useState("");
  const [houseRPS, setHouseRPS] = useState("");

  //   0 --> User Loss, 1 --> User Wins, 2 --> draw
  const gameWinner = (userRPS, houseRPS) => {
    const rules = { rock: "scissor", scissor: "paper", paper: "rock" };
    if (userRPS && houseRPS) {
      if (userRPS === houseRPS) {
        return "draw";
      }

      return houseRPS === rules[userRPS] ? "win" : "loss";
    }
    return "";
  };

  const houseRPSPick = (userPick) => {
    const options = ["rock", "paper", "scissor"];
    const housePick = options[Math.floor(Math.random() * 3)];

    const gameResult = gameWinner(userPick, housePick);
    console.log(userPick, housePick, gameResult);
    if (gameResult === "win") {
      setScore(score + 1);
    } else if (gameResult === "loss") {
      setScore(score - 1);
    }

    setHouseRPS(housePick);
  };

  return (
    <AppContext.Provider
      value={{
        score,
        setScore,
        showRules,
        setShowRules,
        userRPS,
        setUserRPS,
        houseRPS,
        setHouseRPS,
        gameWinner,
        houseRPSPick,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
