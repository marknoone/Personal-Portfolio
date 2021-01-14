import React from 'react';
import './shortcuts.css';

const ShortcutsPanel: React.FunctionComponent = () => {
    return <ul className="page-shortcuts">
        <li><a href="#intro">INTRO</a></li>
        <li>.</li>
        <li><a href="#bio">BIO</a></li>
        <li>.</li>
        <li><a href="#work">WORK</a></li>
        <li>.</li>
        <li><a href="#projects">PROJECTS</a></li>
        <li>.</li>
        <li><a href="#contact">CONTACT</a></li>
    </ul>
}

export default ShortcutsPanel;