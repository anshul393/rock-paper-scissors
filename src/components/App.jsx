import React from "react";
import GameHeader from "./GameHeader";
import Options from "./Options";
import RulesBtn from "./RulesBtn";
import Rules from "./Rules";
import Picked from "./Picked";
import { AppContextProvider } from "../context/AppContext";
import RulesShadow from "./RulesShadow";

const App = () => {
  return (
    <AppContextProvider>
      <GameHeader />
      <Options />
      <Picked />
      <RulesShadow />
      <Rules />
      <RulesBtn />
    </AppContextProvider>
  );
};

export default App;
