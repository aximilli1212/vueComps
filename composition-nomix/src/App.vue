<template>
  <div>
    <p>{{num}}</p>
    <button @click.prevent="increment()" style="margin-bottom: 30px">Click ++</button> <br />

    <input type="text" v-model="phrase" /> <br />
    <p>Phrase: {{phrase}}</p> <br />
    <p>Reversed Phrase: {{reversedPhrase}}</p>
  </div>
</template>

<script>
import {useVal} from "./useVal";

export default {
  name: "App",
  setup (){
   const {
     state:{num, phrase, reversedPhrase}, actions:{increment}} = useVal()

    return {
     num,
      increment,
      phrase,
      reversedPhrase
    }
  }
};
</script>
