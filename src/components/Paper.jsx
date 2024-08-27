import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Paper = ({ children }) => {
  const { userRPS, setUserRPS, houseRPSPick } = useContext(AppContext);

  console.log("children: ", children);

  const handleClick = () => {
    if (!userRPS) {
      setUserRPS("paper");
      setTimeout(() => {
        houseRPSPick("paper");
      }, 1000);
    }
  };

  return (
    <>
      <div className="rps-container paper-container">
        <div className="rps-wrapper" onClick={handleClick}>
          <img src="/images/icon-paper.svg" alt="paper" />
        </div>
        {children}
      </div>
    </>
  );
};

export default Paper;
