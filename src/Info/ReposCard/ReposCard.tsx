import React from "react";

type Props = {
  repos: any[];
};

const ReposCard = ({ repos }: Props): JSX.Element => {
  return (
    <div className="card">
      <h2>User Repositories: {repos.length}</h2>
      <div className="cardContent">
        {repos.map(
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
  );
};

export default ReposCard;
