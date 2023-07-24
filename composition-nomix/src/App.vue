<template>
  <div>
    <p>{{num}}</p>
    <button @click.prevent="increment()">Click ++</button>
  </div>
</template>

<script>
import {useVal} from "./useVal";

export default {
  name: "App",
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
