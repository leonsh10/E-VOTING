import React from 'react';
import '../../App.scss';
import Sidebar from "../sidebar/sidebar";
import Partite from "../content/partite";
import Deputetet from "../content/deputetet";
import Shtetet from "../content/shtetet";
import Qytetet from "../content/qytetet";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
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