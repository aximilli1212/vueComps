<template>
 <div v-if="!flag" style="color: red">Name has changed to: <b>{{flag}}</b></div>
 <div v-if="!flag">Name has changed to: <b>{{userName}}</b></div>
</template>

<script>
import {computed} from "vue";
import {useVal} from "../useVal";

export default {
  name: "AppAlert",
  // props: ['user'],
  setup(){
    const {state:{user}} = useVal()

    const flag = computed(()=>{
      return user.name === "John"
    })
    const userName = computed(()=>{
      return user.name
    })
    return {
      flag,
      userName
    }
  }
}
</script>

<style scoped>

</style>