<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>{{$route.params.member }}</h2> <br />
    <button @click="goHome"> Go to new route</button>
  </div>
</template>

<script>
import {useRoute, useRouter} from  "vue-router"

export default {
  setup(){
    const route = useRoute() //this.$route -  for route params and other data about the current route
    const router = useRouter() //this.$router - for dynamic navigation eg: router.push(-1)

    let aboutMember = route.params.member;
    console.log(aboutMember)

    router.push({hash: '#test'})

    const goHome = ()=>{
      // router.push('/home')
      router.go(0)
    }

    return {
         goHome
    }
  }
}

</script>
