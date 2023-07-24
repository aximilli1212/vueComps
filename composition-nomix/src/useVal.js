import {reactive, ref, watchEffect} from "vue";

export const useVal = ()=>{
    let num = ref(0)
    let phrase = ref("")
    let reversedPhrase = ref("")

    const user = reactive({
        name:"Adenosine",
        address: "Triphosphate"
    })

    const increment = () => {
        num.value+=3
    }

    const changeName = ()=>{
        user.name   = "John"
        user.address = "Madina"
    }

    watchEffect(()=>{
        reversedPhrase.value = phrase.value.split("").reverse().join("")
    })

    return {
        state:{
            num,
            user,
            phrase,
            reversedPhrase
        },
        actions:{
            increment,
            changeName
        }
    }
}