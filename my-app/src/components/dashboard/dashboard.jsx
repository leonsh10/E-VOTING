import React from 'react';
import '../../App.scss';
import Sidebar from "../sidebar/sidebar";
import Partite from "../content/partite";
import Deputetet from "../content/deputetet";
import Shtetet from "../content/shtetet";
// import Qytetet from "../content/qytetet";
import  {Qytetet} from "../content/qytetet";
import Votuesit from "../content/votuesit";
import Votimi from "../content/votimi";
import  {HomeDashboard} from "../content/homeDashboard";
import Navbar from '../navigation/navBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
function Dashboard(){
    // return(
    //     <div className="App2">
    //         <Sidebar />
    //         {/* <Partite />  */}
    //         <Deputetet />
    //         {/* <Shtetet /> */}
    //         {/* <Qytetet /> */}
    //     </div>  
    // )
    return (
        <>
        {/* <h1>Dashboard</h1> */}
          <Router>
            <Navbar />
            <Switch>
              <Route path='/partite' exact component={Partite} />
              <Route path='/deputetet' component={Deputetet} />
              <Route path='/shtetet' component={Shtetet} />
              <Route path='/qytetet' component={Qytetet} />
              <Route path='/votuesit' component={Votuesit} />
              <Route path='/votimi' component={Votimi} />
              <Route path='/homeDashboard' component={HomeDashboard} />
            </Switch>
          </Router>
        </>
      );
}
export default Dashboard;