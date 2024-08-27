import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const RulesBtn = () => {
  const { setShowRules } = useContext(AppContext);

  return (
    <div
      className="rules-btn"
      onClick={() => {
        setShowRules(true);
      }}
    >
      rules
    </div>
  );
};

export default RulesBtn;
