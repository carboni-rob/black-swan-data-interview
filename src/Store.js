import React from "react";

export const reducer = (state, action) => {
  switch (action.type) {
    case "resetState":
      return {
        userRepos: [],
        userData: {}
      };
    case "setUserRepos":
      return {
        ...state,
        userRepos: action.payload
      };

    case "setUserData":
      return {
        ...state,
        userData: action.payload
      };

    default:
      return state;
  }
};

export const Context = React.createContext();
