import React from 'react';
import '../../App.scss';
function Dashboard(){
    return(
        <div className="App">
            <h1>Dashboard</h1>
        </div>
    )
}
//--------------------------------------------------------
// import "../sidebar/sidebar.scss";
// import {sidebarData} from '../sidebar/sidebarData';

// class Dashboard extends React.Component {

//     constructor(props) {
//         super(props);
//     }
//     render() {
//     return <div className="sidebar">
//         <ul className="sidebarList">
//         {sidebarData.map((val, key) => {
//             return (
//                 <li 
//                 key={key}
//                 className="row"
//                 id={window.location.pathname == val.link ? "active" : ""} 
//                 onClick={() => {window.location.pathname = val.link}}>
//                     <div id="title">
//                         {val.title}
//                     </div>
//                 </li>
//             );
//         })}
//         </ul>
//     </div>
//     }

// }

export default Dashboard;