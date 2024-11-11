<template>
  <nav>
    <v-toolbar app flat color="primary" dark>
      <!-- Botón de menú para abrir el drawer -->
      <v-btn icon @click="drawer = !drawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>

      <!-- Título de la barra de herramientas -->
      <v-toolbar-title>
        <v-header>Medifarm</v-header>
      </v-toolbar-title>

      <!-- Espaciador para alinear elementos al final -->
      <v-spacer />

      <!-- Botón de cierre de sesión -->
      <v-btn text>
        <span>Sign Out</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-toolbar>

    <!-- Drawer de navegación -->
    <v-navigation-drawer app v-model="drawer" color="primary" dark>
      <v-list>
        <v-subheader>MENU</v-subheader>
        <v-list-item-group
          v-model="selectedItem"
          color="secondary"
        >
          <v-list-item
            v-for="link in links"
            :key="link.text"
            :to="{ name: link.route }"
          >
            <v-list-item-icon>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ link.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      drawer: false,
      selectedItem: 0,
      links: [
        { icon: 'mdi-home', text: 'Home', route: 'home' },
        { icon: 'mdi-tools', text: 'Tools', route: 'tools' },
        { icon: 'mdi-medication', text: 'Medicaments', route: 'medicaments' },
      ]
    };
  }
};
</script>
