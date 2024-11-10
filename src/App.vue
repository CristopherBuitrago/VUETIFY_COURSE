<template>
  <v-app class="grey">
    <NavBar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue';
export default {
  name: 'App',

  data: () => ({
    //
  }),
  components: {
    /*
     * We put children components here
     */
    NavBar
  }
};
</script>
