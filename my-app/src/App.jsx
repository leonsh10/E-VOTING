import React from "react";
import "./App.scss";
import  {Login} from "./components/login/index";
import {Register} from "./components/login/index";
// import {Navigation} from "./components/navigation/navigation";
// <<<<<<< HEAD
import Nav from './components/navigation/nav';
import dashboard from "./components/dashboard/dashboard";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import App2 from "./components/login/App2";
import otherData from "./components/login/otherData";
import votimi from "./components/content/votimi";
import home from "./components/content/home";
import statistikat from "./components/content/statistikat";
import contactUs from "./components/content/contactus";
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
//

  render() {
   
    
    return (
      //  <div className="App">
         <Router>
           <div className="App1">
             <Nav />
             <Switch>
              <Route path="/home" component={home} />
              <Route path="/statistikat" component={statistikat} />
              <Route path="/contactus" component={contactUs} />
               <Route path="/dashboard" component={dashboard} />
               {/* <Route path="/login" component={Login} /> */}
               {/* <Route path="/register" component={Register} /> */}
               <Route path="/App2" component={App2} />

               <Route path="/otherData" component={otherData} />
               <Route path="/votimi" component={votimi} />
             </Switch>
           </div>
         </Router>
   ); 
  }
}



export default App;