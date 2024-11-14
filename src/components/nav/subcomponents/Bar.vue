<template>
  <v-app-bar app flat color="primary" dark>
    <!-- Botón de menú para abrir el drawer -->
    <v-btn icon @click="toggleDrawer">
      <v-icon>mdi-menu</v-icon>
    </v-btn>

    <!-- Título de la barra de herramientas -->
    <v-toolbar-title>
      Medifarm
    </v-toolbar-title>

    <!-- Espaciador para alinear elementos al final -->
    <v-spacer />

    <!-- Botón de cierre de sesión -->
    <v-btn text>
      <span>Sign Out</span>
      <v-icon right>mdi-exit-to-app</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Bar',
  props: {
    drawer: Boolean
  },
  methods: {
    toggleDrawer() {
      this.$emit('update:drawer', !this.drawer);
    }
  }
};
</script>
