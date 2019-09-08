import React from "react";

type Props = {
  orgs: any[];
};

const OrgsCard = ({ orgs }: Props): JSX.Element => {
  return (
    <div className="card">
      <h2>User Organizations: {orgs.length}</h2>
      <div className="cardContent">
        {orgs.map(
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
  );
};

export default OrgsCard;
