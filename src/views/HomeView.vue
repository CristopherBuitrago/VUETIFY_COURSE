<template>
  <div class="home">
    <h1>Home page</h1>
    <!-- se oculta de 1265px hacia abajo -->
    <v-card elevation="8" class="dark pink pa-5 ma-5 hidden-md-and-down">
      <h2 class="white--text">This will show since 1265px and down</h2>
      <v-btn class="orange">Click me</v-btn>
    </v-card>

    <!-- se oculta de 1265px hacia abajo -->
    <v-card elevation="8" class="dark orange pa-5 ma-5 hidden-md-and-up">
      <h2 class="white--text">This will show since 1265px and up </h2>
      <v-btn class="pink">Don't click me</v-btn>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>
