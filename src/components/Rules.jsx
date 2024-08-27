import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Rules = () => {
  const { showRules, setShowRules } = useContext(AppContext);

  return showRules ? (
    <div className="rules">
      <div className="rules-header">
        <span>RULES</span>
        <img
          src="images/icon-close.svg"
          alt="rules_close_icon"
          onClick={(event) => {
            console.log(event);
            setShowRules(false);
          }}
        />
      </div>
      <img src="images/image-rules.svg" alt="rps_rules" />
    </div>
  ) : (
    <></>
  );
};

export default Rules;
