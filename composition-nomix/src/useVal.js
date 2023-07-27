import {reactive, ref, watch, watchEffect, computed} from "vue";

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

    const double = computed(()=>{
        return num.value*5
    })

    const changeName = ()=>{
        user.name   = "John"
        user.address = "Madina"
    }

    // watchEffect(()=>{
    //     reversedPhrase.value = phrase.value.split("").reverse().join("")
    // })

    watch([phrase], ([newVal, oldVal]) =>{
        reversedPhrase.value = phrase.value.split("").reverse().join("")
    })

 // NB: Use `ToRefs()` if you want to use the spread operator on a reactive object

    return {
        state:{
            num,
            user,
            phrase,
            reversedPhrase,
            double
        },
        actions:{
            increment,
            changeName
        }
    }
}