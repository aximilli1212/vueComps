<template>
  <div class="about">
    <h1>{{ $route.params.member }}</h1>
    <p>{{ store.counter }}</p>
    <p>{{ store.doubleCount }}</p>
    <hr />
    <p>{{store.counter}}</p>
    <button type="button" @click.prevent="store.increment">Press me!</button>
  </div>
</template>

<script>
import { useRoute, useRouter } from "vue-router";
import {useAbout} from "../useAbout";

export default {
  setup() {
    const route = useRoute(); // this.$route
    const router = useRouter(); // this.$router
    const {state:{store}} = useAbout()

    console.log(route.params.member);

    router.push({
      hash: "#test",
    });

    return {
      store
    };
  },
};
</script>
