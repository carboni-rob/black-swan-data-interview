/* eslint-disable @typescript-eslint/camelcase */
import React from "react";

type Props = {
  name: string;
  company: string;
  email: string;
  followers: number;
  following: number;
  avatar_url: string;
};

const UserCard = ({
  name,
  company,
  email,
  followers,
  following,
  avatar_url
}: Props): JSX.Element => {
  return (
    <div className="card">
      <h2>User Info:</h2>
      <img src={avatar_url} alt="User Avatar" className="userAvatar" />
      <h3>User name: {name || "not set"}</h3>
      <h3>Company: {company || "not set"}</h3>
      <h3>Email: {email || "not set"}</h3>
      <h3>Followers: {followers}</h3>
      <h3>Following: {following}</h3>
    </div>
  );
};

export default UserCard;
