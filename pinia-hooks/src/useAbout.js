import {useCounterStore} from "./stores/counter";


export const useAbout = ()=>{
    const store = useCounterStore();

    return {
        store
    }


}