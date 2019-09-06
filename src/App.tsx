import React, { useState, useEffect } from "react";
import { Input, Tooltip, Icon, Button } from "antd";
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
          onChange={e => setUsername(e.target.value)}
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
          onClick={() => setIsLoading(true)}
        >
          Look it up for me
        </Button>
      </header>
    </div>
  );
};

export default App;
