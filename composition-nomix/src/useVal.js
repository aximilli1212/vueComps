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



 // NB: Use `ToRefs()` if you want to use the spread operator on a reactive object

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