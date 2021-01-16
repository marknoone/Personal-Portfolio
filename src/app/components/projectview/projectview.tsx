import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Projects from './projects.json';
import './projectview.css';
import { faClock } from '@fortawesome/free-regular-svg-icons';

type Project = {
    img: string;
    title: string; 
    description: string; 
    date: string;
    github: string; 
    external: string; 
    technologies: string[]; 
} 

const ProjectGridView: React.FunctionComponent = () => {
    const [selectedProject, setSelectedProject] = useState<Project>(Projects[0] || null);
    return <div style={{width: '100%', textAlign: 'center'}}>
        <h3 className="project-header">Projects</h3>
        <div style={{display: 'inline-block', width :'50%', textAlign: 'left', padding: '24px', float: 'left'}}>
            <div className="project-container">
                <img className="project-image" src={selectedProject.img} alt="project screenshot"/>
                <div style={{position: 'relative', height: '100%', paddingTop: '24px', minHeight: '240px'}}>
                    <h5 style={{fontSize: '24px', fontWeight:900, color: '#1A1A1A'}}>{selectedProject.title + "."}</h5>
                    <p className="project-desc">{selectedProject.description}</p> 
                    <a href={selectedProject.external} target="_blank" rel="noreferrer"
                        style={{ textDecoration: 'none', color: '#012A4A', 
                            position: 'absolute', bottom: '16px', right: '0px'
                    }}><FontAwesomeIcon style={{fontSize: '24px'}}icon={faGithub}/></a>
                    
                    <p className="project-tech">{selectedProject.technologies.join(", ")}</p>
                    <p className="project-time">
                        <FontAwesomeIcon icon={faClock} style={{fontSize:'14px', marginRight: '6px'}}/>
                        {selectedProject.date}
                    </p>
                </div>
            </div>
        </div>
        <div style={{display: 'inline-block', textAlign: 'left', width :'50%', padding: '24px', float: 'left'}}>
            <ul className="project-grid">
                {
                    Projects.map((project: Project) => 
                        <li key={project.title} onClick={() => setSelectedProject(project)}><p>{project.title+"."}</p></li>)
                }
            </ul>
        </div>
    </div>
}

export default ProjectGridView;