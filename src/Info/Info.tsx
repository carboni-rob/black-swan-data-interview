import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { Button } from "antd";
import { Context } from "../Store";
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
          className="mainPageButton"
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
        {userData && (
          <div className="card">
            <h2>User Info:</h2>
            <img
              src={userData.user.avatar_url}
              alt="User Avatar"
              className="userAvatar"
            />
            <h3>User name: {userData.user.name || "not set"}</h3>
            <h3>Company: {userData.user.company || "not set"}</h3>
            <h3>Email: {userData.user.email || "not set"}</h3>
            <h3>Followers: {userData.user.followers}</h3>
            <h3>Following: {userData.user.following}</h3>
          </div>
        )}
        {userRepos && (
          <div className="card">
            <h2>User Repositories: {userRepos.length}</h2>
            <div className="cardContent">
              {userRepos.map(
                (repo: any): JSX.Element => {
                  return (
                    <a href={repo.clone_url} key={repo.id}>
                      {repo.name}
                    </a>
                  );
                }
              )}
            </div>
          </div>
        )}
        {userData && (
          <div className="card">
            <h2>User Organizations: {userData.orgs.length}</h2>
            <div className="cardContent">
              {userData.orgs.map(
                (org: any): JSX.Element => {
                  return (
                    <a href={org.url} key={org.id}>
                      <img alt="" src={org.avatar_url} className="orgAvatar" />
                      {org.login}
                    </a>
                  );
                }
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Info;
