<template>
  <v-navigation-drawer app :value="drawer" @input="drawer = $event" color="primary" dark>
    <v-list>
      <v-subheader>MENU</v-subheader>
      <v-list-item-group v-model="selectedItem" color="secondary">
        <v-list-item v-for="link in links" :key="link.text" :to="{ name: link.route }">
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
</template>

<script>
export default{
  name: 'Drawer',
  data() {
    return {
      selectedItem: 0,
      links: [
        { icon: 'mdi-home', text: 'Home', route: 'home' },
        { icon: 'mdi-tools', text: 'Tools', route: 'tools' },
        { icon: 'mdi-medication', text: 'Medicaments', route: 'medicaments' },
      ]
    }
  },
  props: {
    drawer : Boolean
  }
}
</script>