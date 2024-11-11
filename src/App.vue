<template>
  <v-app >
    <!-- Contenido principal -->
    <v-main>
      <!-- Encabezado de la aplicación -->
      <NavBar/>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar
  }
};
</script>

<style scoped>
/* Puedes aplicar estilos globales o específicos aquí para el layout */
.v-app {
  background-color: #f5f5f5; /* Fondo claro para toda la aplicación */
}
</style>
