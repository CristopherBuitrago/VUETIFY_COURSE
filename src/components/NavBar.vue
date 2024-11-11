<template>
  <nav>
    <v-toolbar app class="blue elevation-2">
      <!-- Icono de menú para abrir el drawer -->
      <v-btn icon dark @click="drawer = !drawer">
        <v-icon dark>mdi-menu</v-icon>
      </v-btn>

      <!-- Título de la barra de herramientas -->
      <v-toolbar-title>
        <v-btn icon dark>
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </v-toolbar-title>

      <!-- Espaciador entre los elementos -->
      <v-spacer />

      <!-- Botón de cierre de sesión -->
      <v-btn text dark>
        <span>Sign Out</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-toolbar>

    <!-- Drawer de navegación controlado por la variable 'drawer' -->
    <v-navigation-drawer app v-model="drawer" class="indigo">
      <p>Test</p>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      drawer: false
    };
  }
};
</script>

