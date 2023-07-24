<template>
  <div>
    <p>{{num}}</p>
    <button @click.prevent="increment()">Click ++</button>
    <hr />
<!--    <input name="phrase" v-model="phrase"/>-->
  </div>
</template>

<script>
import {useVal} from "./useVal";
import Index from "../index.html";

export default {
  name: "App",
  components: {Index},
  setup (){
    const {
      state:{num}, actions:{increment}} = useVal()

    return {
      num,
      increment
    }
  }
};
</script>
