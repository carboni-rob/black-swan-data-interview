import React, { useState, useEffect } from "react";
import { Input, Tooltip, Icon, Button, Modal } from "antd";
import { getRepos, getUserData } from "./api/github-api";
import bsdLogo from "./assets/black_swan_logo.png";
import "./App.css";

const App: React.FC = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect((): void => {
    if (username.length) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [username]);

  async function handleButtonClick(): Promise<any> {
    let userRepos;
    let userData;

    setIsLoading(true);
    try {
      userRepos = await getRepos(username);
      userData = await getUserData(username);
      setIsLoading(false);
    } catch (error) {
      Modal.error({
        title: "Sorry but...",
        content:
          "...an error occurred while processing your request. Did you type the right username?"
      });
      setIsLoading(false);
      setUsername("");
    }
  }

  return (
    <main className="mainPage">
      <img src={bsdLogo} alt="Black Swan Data logo" className="mainPageLogo" />
      <Input
        size="large"
        className="mainPageInput"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e): void => setUsername(e.target.value)}
        prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
        suffix={
          <Tooltip title="Please enter a username to see user's repos and organizations">
            <Icon type="info-circle" style={{ color: "rgba(0,0,0,.45)" }} />
          </Tooltip>
        }
      />
      <Button
        className="mainPageButton"
        type="primary"
        size="large"
        disabled={isButtonDisabled}
        loading={isLoading}
        onClick={(): Promise<any> => handleButtonClick()}
      >
        Look it up for me
      </Button>
    </main>
  );
};

export default App;
