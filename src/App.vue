<template>
  <v-app class="grey lighten-4">
    <!-- Contenido principal -->
    <v-main>
      <!-- Encabezado de la aplicación -->
      <NavBar />
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <router-view />
          </v-col>
        </v-row>
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
