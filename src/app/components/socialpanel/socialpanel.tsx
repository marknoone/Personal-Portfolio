import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMediumM, faGithub, faLinkedinIn, faSpotify} from '@fortawesome/free-brands-svg-icons'
import './socialpanel.css';

const SocialPanel: React.FunctionComponent = () => {
    return <ul className="social-panel">
        <li><a href="https://medium.com/@marklaurencenoone" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faMediumM}/></a></li>
        <li><a href="https://github.com/marknoone" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub}/></a></li>
        <li><a href="https://open.spotify.com/user/1183282881?si=llk86pEjRVulxjrMYU2r6w" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faSpotify}/></a></li>
        <li><a href="https://www.linkedin.com/in/mark-noone-986200117/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn}/></a></li>
    </ul>
}

export default SocialPanel;