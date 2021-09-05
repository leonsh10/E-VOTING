import React from 'react';
import '../../App.scss';
import Sidebar from "../sidebar/sidebar";
import Partite from "../content/partite";
import Deputetet from "../content/deputetet";
import Shtetet from "../content/shtetet";
// import Qytetet from "../content/qytetet";
import  {Qytetet} from "../content/qytetet";
import Votuesit from "../content/votuesit";
import Votat from "../content/votat";
import Votimi from "../content/votimi";
import Contacti from "../content/contactDashboard";
import  {HomeDashboard} from "../content/homeDashboard";
import biografiDep from '../content/biografiDep';
import Navbar from '../navigation/navBar';
// import "bootstrap/dist/css/bootstrap.min.css";
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
              <Route path='/votat' component={Votat} />
              <Route path='/contactDashboard' component={Contacti} />
              <Route path='/biografiDep' component={biografiDep} />
            </Switch>
          </Router>
        </>
      );
}
export default Dashboard;