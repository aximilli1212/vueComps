import {reactive, ref} from "vue";

export const useVal = ()=>{
    let num = ref(0)

    const user = reactive({
        name:"Adenosine",
        address: "Triphosphate"
    })

    const increment = ()=>{
        num.value+=3
    }

    const changeName = ()=>{
        user.name   = "John"
        user.address = "Madina"
    }



    return {
        state:{
            num,
            user,
        },
        actions:{
            increment,
            changeName
        }
    }
}