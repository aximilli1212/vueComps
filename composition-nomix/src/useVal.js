import {reactive, ref, watch, watchEffect, computed} from "vue";

export const useVal = ()=>{
    let num = ref(0)
    let phrase = ref("")
    let reversedPhrase = ref("")
    let btn = ref(null)


    const user = reactive({
        name:"John",
        address: "Triphosphate"
    })

    setTimeout(()=>{
        user.name = "Luis"
    }, 3000)

    const increment = () => {
        num.value+=3
        user.name = "Luis"
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

    return {
        state:{
            num,
            user,
            phrase,
            reversedPhrase,
            double,
            btn
        },
        actions:{
            increment,
            changeName
        }
    }
}