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
import { Redirect, useHistory } from "react-router";
// import { observer } from "mobx-react-lite"

export default class UserStore {

    user: User | null = null;
    props: any;

    constructor() {
        makeAutoObservable(this)

    }

    get isLoggedIn() {
        return !!this.user;

    }

    redirectToHome = () => {
        const { history } = this.props;
        if(history) history.push('/home');
       }

       redirectToLogin = () => {
        const { history } = this.props;
        if(history) history.push('/login');
       }

    

    login = async (creds: UserFormValues) => {

        try {

            const user = await agent.Account.login(creds);
            // const { history } = this.props;
            store.commonStore.setToken(user.token);
            runInAction(() => this.user = user);
            //    this.props.history.push('/home');
            store.modalStore.closeModal();
           this.redirectToHome();
            // return <Redirect to="/home"></Redirect>
            //    console.log(user);
        } catch (error) {
            throw error;
        }
    }

    logout = () => {
        // let history = useHistory();
        store.commonStore.setToken(null);
        window.localStorage.removeItem('jwt');
        this.user = null;
        this.redirectToLogin();

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
            const user = await agent.Account.register(creds);
            store.commonStore.setToken(user.token);
            runInAction(() => this.user = user);
            //    this.props.history.push('/home');
            //    history.push('/home');
            
            store.modalStore.closeModal();
            this.redirectToHome();
            // console.log(user);
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

