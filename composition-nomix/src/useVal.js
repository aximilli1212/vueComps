import {reactive, ref, watchEffect} from "vue";

export const useVal = ()=>{
    let num = ref(0)

    const user = reactive({
        name:"Adenosine",
        address: "Triphosphate"
    })

    const phrase = ref("")
    const reversedPhrase = ref("")

    watchEffect(()=>{
        reversedPhrase.value = phrase.value.split("").reverse().join()
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
            phrase,
            reversedPhrase,
        },
        actions:{
            increment,
            changeName
        }
    }
}