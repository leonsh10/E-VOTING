import React, { useEffect } from "react";
import "./App.scss";
//import  {Login} from "./components/login/index";
//import {Register} from "./components/login/index";
// import {Navigation} from "./components/navigation/navigation";
import Nav from './components/navigation/nav';
import dashboard from "./components/dashboard/dashboard";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
//import App2 from "./components/login/App2";
import login from "./components/login/login";
import otherData from "./components/login/otherData";
import votimi from "./components/content/votimi";
import home from "./components/content/home";
import statistikat from "./components/content/statistikat";
import contactUs from "./components/content/contactus";
import DeputetetBio from "./components/content/DeputetetBio";
import { useStore } from "./components/users/store";
import { observer } from "mobx-react";
import RegisterForm from "./components/login/RegisterForm";

export default observer (function App(){
  // constructor(props) {
  //   super(props);
  // }
  

  // render() {
    const {commonStore,userStore} = useStore();
    
useEffect(() => {
  if(commonStore.token) {
    userStore.getUser().finally(() => commonStore.setAppLoaded());
  } else {
    commonStore.setAppLoaded();
  }
}, [commonStore, userStore]
)

// if(!commonStore.appLoaded) return<LoadingComponent content='Loading app...' />

    return (
      
      
      //  <div className="App">
         <Router>
           <div className="App1">
             <Nav />
             <Switch>
              <Route path="/" exact component={home} />
              <Route path="/RegisterForm" exact component={RegisterForm} />
              <Route path="/home" exact component={home} />
              <Route path="/statistikat" component={statistikat} />
              <Route path="/contactus" component={contactUs} />
              <Route path="/DeputetetBio" component={DeputetetBio} />
               <Route path="/dashboard" component={dashboard} />
               {/* <Route path="/login" component={Login} /> */}
               {/* <Route path="/register" component={Register} /> */}
               <Route path="/login" component={login} />
               <Route path="/otherData" component={otherData} />
               <Route path="/votimi" component={votimi} />
             </Switch>
           </div>
         </Router>
   ); 
  // }
})



// export default App;