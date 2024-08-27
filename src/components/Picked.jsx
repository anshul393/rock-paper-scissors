import React, { useContext } from "react";
import Scissors from "./Scissors";
import Paper from "./Paper";
import Result from "./Result";
import { AppContext } from "../context/AppContext";
import Rock from "./Rock";
import Winner from "./Winner";

const Picked = () => {
  const { userRPS, houseRPS, gameWinner } = useContext(AppContext);

  const result = gameWinner(userRPS, houseRPS);
  let userResult = "";
  let houseResult = "";

  if (result === "win") {
    userResult = "win";
    houseResult = "loss";
  } else if (result === "loss") {
    userResult = "loss";
    houseResult = "win";
  }

  console.log("game result: ", gameWinner(userRPS, houseRPS));

  const renderRPS = (choice, winner) => {
    switch (choice) {
      case "rock":
        return winner === "win" ? (
          <Rock>
            <Winner />
          </Rock>
        ) : (
          <Rock />
        );
      case "paper":
        return winner === "win" ? (
          <Paper>
            <Winner />
          </Paper>
        ) : (
          <Paper />
        );
      case "scissor":
        return winner === "win" ? (
          <Scissors>
            <Winner />
          </Scissors>
        ) : (
          <Scissors />
        );
      default:
        return <></>;
    }
  };

  return !userRPS ? (
    <></>
  ) : (
    <div className="picked">
      <div className="user-picked">
        <span>you picked</span>
        <div className="picked-cont">{renderRPS(userRPS, userResult)}</div>
      </div>
      <Result />
      <div className="house-picked">
        <span>the house picked</span>
        <div className="picked-cont">{renderRPS(houseRPS, houseResult)}</div>
      </div>
    </div>
  );
};

export default Picked;
