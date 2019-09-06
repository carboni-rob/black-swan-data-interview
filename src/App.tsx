import React, { useState, useEffect } from "react";
import { Input, Tooltip, Icon, Button } from "antd";
import bsdLogo from "./assets/black_swan_logo.png";
import "./App.css";

const App: React.FC = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect((): void => {
    if (username.length) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [username]);

  const handleButtonClick = (): void => {
    setIsLoading(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={bsdLogo}
          alt="Black Swan Data logo"
          className="mainPageLogo"
        />
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
          onClick={(): void => handleButtonClick()}
        >
          Look it up for me
        </Button>
        {errorMessage && (
          <h2>
            An error occurred while processing your request: {errorMessage}
          </h2>
        )}
      </header>
    </div>
  );
};

export default App;
