import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Projects from './projects.json';
import './projectview.css';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { NoMargin, NoPadding } from '../../app.css';

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
    return <div className="container-fluid" style={{...NoPadding, ...NoMargin, textAlign: 'center'}}>
        <div className="row justify-content-center">
            <div className="col-lg-2 col-lg-4 col-sm-6">
                <h3 className="project-header">Projects</h3>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col-sm-10">
                <div style={{display: 'inline-block', textAlign: 'left', padding: '0px 24px', marginBottom: '48px'}}>
                    <div className="project-container">
                        <img className="project-image" src={selectedProject.img} alt="project screenshot"/>
                        <div style={{position: 'relative', height: '100%', paddingTop: '24px', minHeight: '240px'}}>
                            <p className="project-tech">{selectedProject.technologies.join(", ")}</p>
                            <h5 style={{fontSize: '24px', fontWeight:900, color: '#1A1A1A'}}>{selectedProject.title + "."}</h5>
                            <p className="project-desc">{selectedProject.description}</p> 
                            <a href={selectedProject.external} target="_blank" rel="noreferrer"
                                style={{ textDecoration: 'none', color: '#012A4A', 
                                    position: 'absolute', bottom: '5%', right: '0px'
                            }}><FontAwesomeIcon style={{fontSize: '24px'}}icon={faGithub}/></a>
                            
                            <p className="project-time">
                                <FontAwesomeIcon icon={faClock} style={{fontSize:'14px', marginRight: '6px'}}/>
                                {selectedProject.date}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-4 col-sm-10">
                    <ul className="project-grid">
                        {
                            Projects.map((project: Project) => 
                            <li key={project.title} onClick={() => setSelectedProject(project)}><p>{project.title+"."}</p></li>)
                        }
                    </ul>
            </div>
        </div>
    </div>
}

export default ProjectGridView;