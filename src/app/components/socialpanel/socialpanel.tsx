import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMediumM, faGithub, faLinkedinIn, faSpotify} from '@fortawesome/free-brands-svg-icons'
import './socialpanel.css';

const SocialPanel: React.FunctionComponent = () => {
    return <ul className="social-panel">
        <li><a href="http://www.google.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faMediumM}/></a></li>
        <li><a href="http://www.google.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub}/></a></li>
        <li><a href="http://www.google.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faSpotify}/></a></li>
        <li><a href="http://www.google.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn}/></a></li>
    </ul>
}

export default SocialPanel;