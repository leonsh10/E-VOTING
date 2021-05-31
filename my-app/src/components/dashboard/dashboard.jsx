import React from 'react';
import '../../App.scss';
import Sidebar from "../sidebar/sidebar";
import Partite from "../content/partite";
import Deputetet from "../content/deputetet";
import Shtetet from "../content/shtetet";
import Qytetet from "../content/qytetet";

function Dashboard(){
    return(
        <div className="App2">
            <Sidebar />
            {/* <Partite />  */}
            <Deputetet />
            {/* <Shtetet /> */}
            {/* <Qytetet /> */}
        </div>  
    )
}
export default Dashboard;