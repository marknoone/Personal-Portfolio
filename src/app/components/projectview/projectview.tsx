import React, { useState, useEffect } from 'react';
import CSS from 'csstype';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

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

const HeaderElem: CSS.Properties = {
    borderBottom: '2px solid #fefefe', 
    width: '240px', 
    margin: 'auto', 
    fontSize: '24px',
    fontWeight: 400,
    paddingBottom: '16px',
    color: '#fefefe'
}

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

    return <div style={{width: '100%', textAlign: 'center'}}>
        <h3 style={HeaderElem}>Projects</h3>
        <ul style={{listStyle: 'none', padding: '24px 0px 0px 0px', margin: 0, textDecoration: 'none'}}>
            {
                projectGridState.repositories.map((repo: GithubRepo) => 
                    <li style={{textAlign: 'left', backgroundColor: '#013A63', borderRadius: '6px', boxShadow: '0px 2px 4px 2px rgba(0, 0, 0, 0.1)',
                        padding: '12px 24px', width: '320px', minHeight: '300px', position: 'relative'}}>
                        <h5 style={{fontSize: '18px', color: '#fefefe'}}>{repo.name}</h5>
                        <p style={{color: '#fefefe'}}>{repo.description}</p> 
                        <a href={repo.html_url} target="_blank" style={{ textDecoration: 'none', color: '#fefefe', 
                            position: 'absolute', bottom: '16px', right: '16px'
                        }}><FontAwesomeIcon style={{fontSize: '24px'}}icon={faGithub}/></a>
                    </li>
                )
            }
        </ul>
    </div>
}

export default ProjectGridView;