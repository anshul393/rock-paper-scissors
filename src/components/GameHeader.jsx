import React from "react";
import Score from "./Score";

const GameHeader = () => {
  return (
    <div className="game-header">
      <img src="/images/logo.svg" alt="rps-logo" />
      <Score />
    </div>
  );
};

export default GameHeader;
