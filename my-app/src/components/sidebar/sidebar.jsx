import React from 'react';
import {sidebarData} from './sidebarData';

function sidebar() {
    return <div className="sidebar">
        <ul className="sidebarList">
        {sidebarData.map((val, key) => {
            return (
                <li 
                key={key}
                className="row"
                id={window.location.pathname == val.link ? "active" : ""} 
                onClick={() => {window.location.pathname = val.link}}>
                    <div id="title">
                        {val.title}
                    </div>
                </li>
            );
        })}
        </ul>
    </div>
}

export default sidebar
