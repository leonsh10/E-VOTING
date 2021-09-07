// import { store } from "./store";
import { User, UserFormValues } from "./user";
import { makeAutoObservable, runInAction} from "mobx";
import agent from "./agent";
import { createContext } from "react";
import { useContext } from "react";
import CommonStore from "./commonStore";
import {useHistory} from "react-router-dom";
// import { observer } from "mobx-react-lite"

export default class UserStore{
    
    user: User | null = null;
    props: any;

    constructor(){
        makeAutoObservable(this)
    }

    get isLoggedIn(){
        return !!this.user;
    }

    login= async(creds: UserFormValues) => {
        try{
            var history = useHistory();
            const user = await agent.Account.login(creds);
             store.commonStore.setToken(user.token);
            runInAction(() => this.user = user);
        //    this.props.history.push('/home');
           history.push('/home');
            // console.log(user);
        } catch(error){
            throw error;
        }
    }

    logout = () => {
        store.commonStore.setToken(null);
        window.localStorage.removeItem('jwt');
        this.user=null;
        
    }
}

interface Store {
    userStore: UserStore;
    commonStore: CommonStore;
    }
    
    export const store: Store = {
    userStore: new UserStore(),
    commonStore: new CommonStore()
    }

    export const StoreContext= createContext(store);

export function useStore(){
    return useContext(StoreContext);
}


