<template>
  <v-card width="100%">
    <v- class="grey--text">Home page</v->
    <v-container class="my-5">
      <v-row justify="center">
        <v-col cols="12" sm="8" md="6" align="center">
          <h1>Welcome user</h1>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col v-for="(card, index) in cards" :key="index" cols="12" sm="6" md="4">
          <v-card class="primary_color elevation-5 d-flex flex-column align-center justify-center text-center" height="20vh">
            <v-card-title class="text-h5">
              {{ card.title }}
            </v-card-title>

            <v-card-subtitle>{{ card.message }}</v-card-subtitle>

            <v-card-actions>
              <v-btn text>
                Click me!
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      cards: [
        {
          title: 'Learning Vue',
          message: 'This is a card component made with Vue',
        },
        {
          title: 'Learning Vuetify',
          message: 'This is a card component made with Vuetify',
        },
        {
          title: 'Learning Vue',
          message: 'This is a card component made with Vue',
        },
        {
          title: 'Learning Vuetify',
          message: 'This is a card component made with Vuetify',
        },
        {
          title: 'Learning Vue',
          message: 'This is a card component made with Vue',
        },
        {
          title: 'Learning Vuetify',
          message: 'This is a card component made with Vuetify',
        },
        {
          title: 'Learning Vue',
          message: 'This is a card component made with Vue',
        },
        {
          title: 'Learning Vuetify',
          message: 'This is a card component made with Vuetify',
        },
        {
          title: 'Learning Vue',
          message: 'This is a card component made with Vue',
        },
        {
          title: 'Learning Vuetify',
          message: 'This is a card component made with Vuetify',
        }
        
      ]
    }
  }
}
</script>
