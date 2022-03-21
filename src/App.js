import React from "react";
import "./App.css";
import Header from "./component/ui/Header";

import Root from "./Root";

const App = () => {
  return (
    <div className="container center">
      <Header />
      <Root />
    </div>
  );
};

export default App;
