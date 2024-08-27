import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Rock = ({ children }) => {
  const { userRPS, setUserRPS, houseRPSPick } = useContext(AppContext);

  console.log("children: ", children);

  const handleClick = () => {
    if (!userRPS) {
      setUserRPS("rock");
      setTimeout(() => {
        houseRPSPick("rock");
      }, 1000);
    }
  };

  return (
    <>
      <div className="rps-container rock-container">
        <div className="rps-wrapper" onClick={handleClick}>
          <img src="/images/icon-rock.svg" alt="rock" />
        </div>
        {children}
      </div>
    </>
  );
};

export default Rock;
