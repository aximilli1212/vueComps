<template>
  <div>
    <p>{{num}}</p>
    <p>Computed Double: {{double}}</p>

    <button @click.prevent="increment()" style="margin-bottom: 30px">Click ++</button> <br />

    <input type="text" v-model="phrase" /> <br />
    <p>Phrase: {{phrase}}</p> <br />
    <p>Reversed Phrase: {{reversedPhrase}}</p> <br />
    <app-alert />
    <button  ref="btn" type="button"> Hit me </button>
  </div>
</template>
<script >
import {onBeforeMount, onMounted} from "vue";
import {useVal} from "./useVal";
import AppAlert from "./components/Alert.vue"

export default {
  name: "App",
  components: {
    AppAlert
  },
  setup (){
   const {
     state:{num, phrase, reversedPhrase, double, user, btn}, actions:{increment}} = useVal()

    onBeforeMount(()=>{
      console.log("on Before Mount.")
    })

    onMounted(()=>{
      console.log("onMounted hook runned.")
    })

    return {
     num,
      increment,
      phrase,
      reversedPhrase,
      double,
      user
    }
  }
};
</script>
