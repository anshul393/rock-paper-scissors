import React, { useContext } from "react";
import Rock from "./Rock";
import Paper from "./Paper";
import Scissors from "./Scissors";
import { AppContext } from "../context/AppContext";

const Options = () => {
  const { userRPS } = useContext(AppContext);

  return !userRPS ? (
    <div className="rps-options">
      <img src="images/bg-triangle.svg" alt="rps_options_for_user" />
      <Rock />
      <Paper />
      <Scissors />
    </div>
  ) : (
    <></>
  );
};

export default Options;
