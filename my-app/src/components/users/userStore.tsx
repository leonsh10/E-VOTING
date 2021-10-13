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
import { Redirect, useHistory } from "react-router-dom";
import { tsTypeReference } from "@babel/types";
import { createHashHistory } from "history";
// import { observer } from "mobx-react-lite"

export default class UserStore {
  user: User | null = null;
  props: any;
  setState: any;
  constructor() {
    makeAutoObservable(this);
  }

  get isLoggedIn() {
    return !!this.user;
  }

  //   get nrLeternjoftimit() {
  //     return !!this.user.nrLeternjofimit;
  //   }

  state = {
    redirect: false,
  };

  setRedirect = () => {
    this.setState({
      redirect: true,
    });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/home" />;
    }
  };

  renderRedirectLogin = () => {
    if (this.state.redirect) {
      return <Redirect to="/login" />;
    }
  };

  redirectToHome = () => {
    // const { history } = this.props;
    // history.push('/Home');
    const history = createHashHistory();
    history.go(-1);
    //return <Redirect to='/home'/>
  };

  redirectToLogin = () => {
    // const { history } = this.props;
    // if(history) history.push('/login');
    const history = createHashHistory();
    history.go(-1);
    //<Redirect to='/login'/>
  };

  redirectToHome2 = () => {
    // const { history } = this.props;
    // history.push('/Home');
    const history = createHashHistory();
    history.go(1);
    //return <Redirect to='/home'/>
  };

  login = async (creds: UserFormValues) => {
    try {
      const user = await agent.Account.login(creds);
      // const { history } = this.props;
      store.commonStore.setToken(user.token);
      runInAction(() => (this.user = user));

      store.modalStore.closeModal();
      // history.push('/home');
      this.redirectToHome();
      //this.renderRedirect();
      // return <Redirect to="/home"></Redirect>
      //    console.log(user);
    } catch (error) {
      throw error;
    }
  };

  logout = () => {
    // let history = useHistory();
    // const { history } = this.props;
    store.commonStore.setToken(null);
    window.localStorage.removeItem("jwt");
    this.user = null;
    // history.push('/login');
    this.redirectToLogin();
    //this.renderRedirectLogin();
  };

  getUser = async () => {
    try {
      const user = await agent.Account.current();
      runInAction(() => (this.user = user));
    } catch (error) {
      console.log(error);
    }
  };

  getNrLeter = async () => {
    const user = await agent.Account.current();
    runInAction(() => (this.user = user));
    if (
      user.nrLeternjofimit.startsWith("0") &&
      user.nrLeternjofimit.endsWith("0")
    ) {
      return true;
    }
    return false;
  };

  register = async (creds: UserFormValues) => {
    try {
      // let history = useHistory();
      // const { history } = this.props;
      const user = await agent.Account.register(creds);
      store.commonStore.setToken(user.token);
      runInAction(() => (this.user = user));

      //    history.push('/home');

      store.modalStore.closeModal();
      // this.props.history.push('/home');
      //this.renderRedirect();
      this.redirectToLogin();
      // console.log(user);
    } catch (error) {
      throw error;
    }
  };
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
