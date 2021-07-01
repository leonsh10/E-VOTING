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
<<<<<<< HEAD
=======
import Statistikat from "../content/statistikat";
import Home from "../content/home";
>>>>>>> 76307f3b3920b32408d693ab746221774bcecf8c
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
<<<<<<< HEAD
              <Route path='/votimi' component={Votimi} />
=======
              {/* <Route path='/votimi' component={Votimi} />
              <Route path='/statistikat' component={Statistikat} />
              <Route path='/home' component={Home} /> */}
>>>>>>> 76307f3b3920b32408d693ab746221774bcecf8c
            </Switch>
          </Router>
        </>
      );
}
export default Dashboard;