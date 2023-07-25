<template>
  <div>
    <p>{{num}}</p>
    <p>Computed Double: {{double}}</p>

    <button @click.prevent="increment()" style="margin-bottom: 30px">Click ++</button> <br />

    <input type="text" v-model="phrase" /> <br />
    <p>Phrase: {{phrase}}</p> <br />
    <p>Reversed Phrase: {{reversedPhrase}}</p> <br />
    <app-alert :user="user"/>
  </div>
</template>
<script >
import {useVal} from "./useVal";
import AppAlert from "./components/Alert"

export default {
  name: "App",
  components: {
    AppAlert
  },
  setup (){
   const {
     state:{num, phrase, reversedPhrase, double, user}, actions:{increment}} = useVal()

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
