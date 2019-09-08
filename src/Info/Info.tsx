import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Button } from "antd";
import Card from "./Card/Card";
import "./Info.css";
import bsdLogo from "../assets/black_swan_logo.png";

const Info = (): JSX.Element => {
  const [navigateToSearch, setNavigateToSearch] = useState(false);

  const handleBackButtonClick = (): void => {
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
        <Card />
        <Card />
        <Card />
      </main>
    </div>
  );
};

export default Info;