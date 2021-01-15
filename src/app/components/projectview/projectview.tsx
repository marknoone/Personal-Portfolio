import React, { useState, useEffect } from 'react';

type GithubRepo = {
    id: string;
    name: string,
    "full_name": string;
    "html_url":string;
    description: string;
    topics: string[];
}

type ProjectGridViewState = {
    loading: boolean,
    repositories: GithubRepo[]
};

const ProjectGridView: React.FunctionComponent = () => {
    const [projectGridState, setProjectGridState] = useState<ProjectGridViewState>({
        loading:false,
        repositories: []
    });

    useEffect(() => {
        setProjectGridState({ ...projectGridState, loading: true });
        fetch("https://api.github.com/users/marknoone/repos", {
            // Needed for repository topics to be in headers
            headers: new Headers({'accept': 'application/vnd.github.mercy-preview+json'})
        }).then((res) => res.json())
          .then((repos: GithubRepo[]) => {
              const repositories = repos.filter((repo:GithubRepo) => 
                repo.topics.includes("portfolio-project"));
              setProjectGridState({ loading: false, repositories: repositories});
          });
      }, [setProjectGridState]);

    console.log(projectGridState.repositories);
    return <></>
}

export default ProjectGridView;