<template>
    <nav>
      <v-toolbar flat app class="blue elevation-2">
        <!-- Toolbar's title -->
        <v-toolbar-title>
            <v-btn icon dark>
                <v-icon>mdi-account</v-icon>
            </v-btn>
        </v-toolbar-title>
  
        <!-- Adding spacing between items -->
        <v-spacer />
  
        <!-- Sign out button -->
        <v-btn text dark>
          <span>Sign Out</span>
          <v-icon right>mdi-exit-to-app</v-icon>
        </v-btn>
      </v-toolbar>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavBar'
  }
  </script>
  
  <style scoped>
  </style>
  