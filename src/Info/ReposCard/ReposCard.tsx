import React from "react";

type Repo = {
  id: number;
  clone_url: string;
  name: string;
};

type Props = {
  repos: Repo[];
};

const ReposCard = ({ repos }: Props): JSX.Element => {
  return (
    <div className="card">
      <h2>User Repositories: {repos.length}</h2>
      <div className="cardContent">
        {repos.map(
          (repo: Repo): JSX.Element => {
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
