import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Scissors = ({ children }) => {
  const { userRPS, setUserRPS, houseRPSPick } = useContext(AppContext);

  console.log("children: ", children);

  const handleClick = () => {
    if (!userRPS) {
      setUserRPS("scissor");
      setTimeout(() => {
        houseRPSPick("scissor");
      }, 1000);
    }
  };

  return (
    <>
      <div className="rps-container scissor-container">
        <div className="rps-wrapper" onClick={handleClick}>
          <img src="/images/icon-scissors.svg" alt="scissors" />
        </div>
        {children}
      </div>
    </>
  );
};

export default Scissors;
