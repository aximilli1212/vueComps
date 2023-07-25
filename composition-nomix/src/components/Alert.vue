<template>
 <div v-if="!flag">Name has changed to: <b>{{userName}}</b></div>
</template>

<script>
import {computed} from "vue";

export default {
  name: "AppAlert",
  props: ['user'],
  setup(props){
    const flag = computed(()=>{
      return props.user.name === "Alexoo"
    })
    const userName = computed(()=>{
      return props.user.name
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