import CommonStore from "./commonStore";
import UserStore from "./userStore";
import { createContext, useContext } from "react";
import ModalStore from "./modalStore";

interface Store {
userStore: UserStore;
commonStore: CommonStore;
modalStore: ModalStore;
}

export const store: Store = {
userStore: new UserStore(),
commonStore: new CommonStore(),
modalStore: new ModalStore()
}

export const StoreContext= createContext(store);

export function useStore(){
    return useContext(StoreContext);
}