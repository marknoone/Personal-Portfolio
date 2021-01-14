import React from 'react';
import './borderBtn.css';

type BorderButtonProps = {
    name: string
    onClick?: () => void
}

const BorderButton: React.FunctionComponent<BorderButtonProps> = (props: BorderButtonProps) => {
    return <a className="border-btn" onClick={() => { if(props.onClick) props.onClick(); }}>{props.name}</a>
}

export default BorderButton;