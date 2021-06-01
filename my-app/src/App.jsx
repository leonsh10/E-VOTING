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


class App extends React.Component {
  constructor(props) {
    super(props);
   
  }
  


  render() {
   
    
    return (
      //  <div className="App">
         <Router>
           <div className="App1">
             <Nav />
             <Switch>
               <Route path="/dashboard" component={dashboard} />
               {/* <Route path="/login" component={Login} /> */}
               {/* <Route path="/register" component={Register} /> */}
               <Route path="/App2" component={App2} />
             </Switch>
           </div>
         </Router>
   );
    
  }
}



export default App;