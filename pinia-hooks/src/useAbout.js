import {useCounterStore} from "./stores/counter";


export const useAbout = ()=>{
    const {increment, count, doubleCount} = useCounterStore();

    return {
        state:{
            count,
        }
    }


}