import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { Button } from "antd";
import { Context } from "../Store";
import OrgsCard from "./OrgsCard/OrgsCard";
import ReposCard from "./ReposCard/ReposCard";
import UserCard from "./UserCard/UserCard";
import "./Info.css";
import bsdLogo from "../assets/black_swan_logo.png";

const Info = (): JSX.Element => {
  const { store, dispatch } = useContext(Context);
  const { userRepos, userData } = store;
  const [navigateToSearch, setNavigateToSearch] = useState(false);

  const handleBackButtonClick = (): void => {
    dispatch({ type: "resetState" });
    setNavigateToSearch(true);
  };

  return (
    <div>
      {navigateToSearch && <Redirect to="/" />}
      <nav>
        <Button
          className="customButton"
          type="primary"
          size="large"
          shape="round"
          icon="left-circle"
          onClick={(): void => handleBackButtonClick()}
        >
          BACK
        </Button>
        <img
          src={bsdLogo}
          alt="Black Swan Data logo"
          className="infoPageLogo"
        />
        <div />
      </nav>
      <main>
        {userData && userData.user && <UserCard {...userData.user} />}
        {userRepos && <ReposCard repos={userRepos} />}
        {userData && userData.orgs && <OrgsCard orgs={userData.orgs} />}
      </main>
    </div>
  );
};

export default Info;
