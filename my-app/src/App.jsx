import React from "react";
import "./App.scss";
import { Login, Register } from "./components/login/index";
// <<<<<<< HEAD
// import Nav from './components/navigation/nav';
// import dashboard from "./components/dashboard/dashboard";
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



// import {Dashboard} from "./components/dashboard/dashboard";
// import Header from './header'
// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom'
// >>>>>>> eb27591f440648a49afb3dba3e3df226d24b0db4

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true
    };
  }
  
  componentDidMount() {
    
    this.rightSide.classList.add("right");
  }

  changeState() {
    const { isLogginActive } = this.state;

    if (isLogginActive) {
      this.rightSide.classList.remove("right");
      this.rightSide.classList.add("left");
    } else {
      this.rightSide.classList.remove("left");
      this.rightSide.classList.add("right");
    }
    this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
  }

  render() {
    const { isLogginActive } = this.state;
    const current = isLogginActive ? "Register" : "Login";
    const currentActive = isLogginActive ? "login" : "register";
    
    return (
<<<<<<< HEAD
       <div className="App">
         {/* <Router>
           <div className="App1">
             <Nav />
             <Switch>
               <Route path="/dashboard" component={dashboard} />
             </Switch>
           </div>
         </Router> */}
=======
      <div className="App">
        {/* <Router>
          <div>
            <Header>
              <Route path="./components/dashboard/dashboard" Component={Dashboard}></Route>
            </Header>
          </div>
        </Router> */}
        {/* <a href={dashboard.dashboard}>Dashboard</a> */}
        
>>>>>>> eb27591f440648a49afb3dba3e3df226d24b0db4
        <div className="login">
          <div className="container" ref={ref => (this.container = ref)}>
            
            {isLogginActive && (
              <Login containerRef={ref => (this.current = ref)} />
            )}
            {!isLogginActive && (
              <Register containerRef={ref => (this.current = ref)} />
            )}
          </div>
          <RightSide
            current={current}
            currentActive={currentActive}
            containerRef={ref => (this.rightSide = ref)}
            onClick={this.changeState.bind(this)}
          />
        </div>
      </div>
      
    );
    
  }
}

const RightSide = props => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};

export default App;