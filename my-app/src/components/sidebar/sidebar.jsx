<<<<<<< HEAD
// import React from 'react';
// import {sidebarData} from './sidebarData';
=======
import React from 'react';
import "../../App.scss";
import {sidebarData} from "./sidebarData";
>>>>>>> 97dfa98825de77e0047d8f81b241cb17ea502adb

function sidebar() {
    return (
        <div className="Sidebar">
            <ul className="SidebarList">
                {sidebarData.map((val, key) => {
                    return(
                        <li key={key} className="row" id={window.location.pathname == val.link ? "active" : ""} onClick={() => {window.location.pathname = val.link}}>
                            <div id="title">{val.title}</div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
export default sidebar


