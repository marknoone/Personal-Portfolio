import React, { useState } from 'react';

type TabbedViewProps = {
    views: { [key:string]: () => JSX.Element }
};

const TabbedView: React.FunctionComponent<TabbedViewProps> = (props: TabbedViewProps) => {
    const [currentTab, setCurrentTab] = useState<string>(Object.keys(props.views)[0] || "");
    return <div style={{width: '100%'}}>
        <ul style={{textDecoration: 'none', listStyle: 'none', padding: 0, margin: 0, marginBottom: '4vh'}}>
            {
                Object.keys(props.views).map((placeOfWork:string) => 
                    <li className="noselect" style={{ color: '#1A1A1A', fontSize: '15px', fontWeight: 600, 
                        display: 'inline-block', marginRight: '24px', padding: '0px 3px 4px 3px', cursor: 'pointer',
                        ...(placeOfWork === currentTab && { borderBottom: '2px solid #1A1A1A'})
                    }} onClick={() => setCurrentTab(placeOfWork)}>
                        {placeOfWork}
                    </li>
                )
            }
        </ul>
        <div style={{width:'100%', minHeight: '300px'}}>{props.views[currentTab]?props.views[currentTab]():null}</div>
    </div>
}

export default TabbedView;