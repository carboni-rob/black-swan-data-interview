import React from "react";

type Org = {
  id: number;
  login: string;
  url: string;
  avatar_url: string;
};

type Props = {
  orgs: Org[];
};

const OrgsCard = ({ orgs }: Props): JSX.Element => {
  return (
    <div className="card">
      <h2>User Organizations: {orgs.length}</h2>
      <div className="cardContent">
        {orgs.map(
          (org: Org): JSX.Element => {
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
  );
};

export default OrgsCard;
