<template>
  <v-app>
    <!-- Encabezado de la aplicación -->
    <NavBar />
    <!-- Contenido principal -->
    <v-main class="main-content">
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from './components/nav/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar
  }
};
</script>

<style scoped>
.v-app {
  background-color: #f5f5f5; /* Fondo claro para toda la aplicación */
}

/* Asegura que el contenido no esté cubierto por el NavBar */
.main-content {
  padding-top: 64px; /* Ajusta este valor según la altura de tu NavBar */
}
</style>
