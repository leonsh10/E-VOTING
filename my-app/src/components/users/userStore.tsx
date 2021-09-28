// import { store } from "./store";
import { User, UserFormValues } from "./user";
import { makeAutoObservable, runInAction } from "mobx";
import agent from "./agent";
import { createContext } from "react";
import { useContext } from "react";
import CommonStore from "./commonStore";
// import {useHistory} from "react-router-dom";
import ModalStore from "./modalStore";
import React from "react";
// import { useHistory } from "react-router-dom"
import { store } from "./store";
import { Redirect, useHistory, Switch } from "react-router-dom";
import {Route, withRouter} from "react-router";
import home from "../content/home";
import {createHashHistory} from 'history';
// import { observer } from "mobx-react-lite"

export default class UserStore {
    user: User | null = null;
    props: any;
    setState: any;

    constructor() {
        makeAutoObservable(this)
    }

    get isLoggedIn() {
        return !!this.user;

    }

    state = {
        redirect: false
    }

    redirectLogin = () => {
        //const {history} = this.props;
        this.props.history.push('/login');
    }

    setRedirect = () => {
        this.setState({
          redirect: true
        })
      }

      renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect strict to='/home' />
        }
      }

      renderRedirectLogin = () => {
        if (this.state.redirect) {
          return <Redirect to='/login' />
        }
      }

    redirectToHome = () => {
        // const { history } = this.props;
        // history.push('/Home');
        //return <Route path="/home" exact component={home} />
        //return window.location.href = "http://localhost:3000/home";
       }

       redirectToLogin = () => {
        // const { history } = this.props;
        // if(history) history.push('/login');
        return <Redirect to='/login'/>
       }

    

    login = async (creds: UserFormValues) => {

        try {

            const user = await agent.Account.login(creds);
            // const { history } = this.props;
            store.commonStore.setToken(user.token);
            runInAction(() => this.user = user);
            
            store.modalStore.closeModal();
            // history.push('/home');
            //this.setRedirect();
            //this.redirectToHome();
           //this.renderRedirect();
            // return <Redirect to="/home"></Redirect>
            //    console.log(user);
            const history = createHashHistory();
            history.go(-1);
            // if(isLoggedIn()){
            //     window.location.href = "http://localhost:3000/home";
            // }
        } catch (error) {
            throw error;
        }
    }

    // componentDidMount(){
    //     this.props.history.push('/login');
    // }

    logout = () => {
        // let history = useHistory();
        // const { history } = this.props;
        store.commonStore.setToken(null);
        window.localStorage.removeItem('jwt');
        this.user = null;
        // history.push('/login');
        //this.redirectToLogin();
        //this.redirectLogin();
        //this.renderRedirectLogin();
        // const history = createHashHistory();
        // history.go(-1);
        window.location.href = 'http://localhost:3000/login'
    }

    getUser = async () => {
        try {
            const user = await agent.Account.current();
            runInAction(() => this.user = user);
        } catch (error) {
            console.log(error);
        }

    }

    register = async (creds: UserFormValues) => {
        try {
            // let history = useHistory();
            // const { history } = this.props;
            const user = await agent.Account.register(creds);
            store.commonStore.setToken(user.token);
            runInAction(() => this.user = user);
              
            //    history.push('/home');
            
            store.modalStore.closeModal();
            // this.props.history.push('/home');
            //this.renderRedirect();
            // this.redirectToHome();
            // console.log(user);
            const history = createHashHistory();
            history.go(-1);
        } catch (error) {
            throw error;
        }
    }

}

// interface Store {
//     userStore: UserStore;
//     commonStore: CommonStore;
//     modalStore: ModalStore;
//     }

//     export const store: Store = {
//     userStore: new UserStore(),
//     commonStore: new CommonStore(),
//     modalStore: new ModalStore()
//     }

//     export const StoreContext= createContext(store);

// export function useStore(){
//     return useContext(StoreContext);
// }

