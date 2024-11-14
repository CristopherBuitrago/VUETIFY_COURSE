<template>
  <v-card flat width="100%">
    <v-subheader class="grey--text">Medicaments</v-subheader>
    <v-container class="my-5">
      <v-row justify="center">
        <v-col cols="12" sm="8" md="6" align="center">
          <h1>Medicaments</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt commodi totam aliquid vitae reprehenderit consequuntur iure eligendi blanditiis exercitationem nam dicta cumque, iste nisi inventore quibusdam facilis mollitia ullam impedit!</p>
        </v-col>
      </v-row>

      <v-divider class="ma-5"/>

      <v-row justify="center">
        <v-col 
          cols="12"
          sm="5"
          md="4"
          lg="3"
          align="center"  
          class="d-flex justify-center"
          v-for="drug in drugs"
          :key="`${drug.id}-${drug.name}`"
        >
          <Post :title="drug.name" :description="drug.case"/>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import Post from '../components/posts/Post.vue';
import MedicamentService from '../services/medicament/MedicamentService';

export default {
  name: 'MedicamentView',
  data() {
    return {
      drugs: []
    }
  },
  components: {
    Post
  },
  async mounted() {
    // Llamada al servicio para obtener los medicamentos
    this.drugs = await MedicamentService.fetchAllMedicaments();
  }
}
</script>
