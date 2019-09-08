import React, { useReducer } from "react";
import { Route } from "react-router-dom";
import { Context, reducer } from "./Store";
import Search from "./Search/Search";
import Info from "./Info/Info";

const App = (): JSX.Element => {
  const initialState = {};

  const [store, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ store, dispatch }}>
      <div>
        <Route exact path="/" component={Search} />
        <Route exact path="/info" component={Info} />
      </div>
    </Context.Provider>
  );
};

export default App;
