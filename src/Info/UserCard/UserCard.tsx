import React from "react";

type Props = {
  user: any;
};

const UserCard = ({ user }: Props): JSX.Element => {
  return (
    <div className="card">
      <h2>User Info:</h2>
      <img src={user.avatar_url} alt="User Avatar" className="userAvatar" />
      <h3>User name: {user.name || "not set"}</h3>
      <h3>Company: {user.company || "not set"}</h3>
      <h3>Email: {user.email || "not set"}</h3>
      <h3>Followers: {user.followers}</h3>
      <h3>Following: {user.following}</h3>
    </div>
  );
};

export default UserCard;
