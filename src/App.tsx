import React from "react";
import { Route } from "react-router-dom";
import Search from "./Search/Search";
import Info from "./Info/Info";

const App = (): JSX.Element => {
  return (
    <div>
      <Route exact path="/" component={Search} />
      <Route exact path="/info" component={Info} />
    </div>
  );
};

export default App;
