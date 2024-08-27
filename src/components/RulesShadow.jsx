import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const RulesShadow = () => {
  const { showRules } = useContext(AppContext);

  return showRules ? <div className="rules-shadow"></div> : <></>;
};

export default RulesShadow;
