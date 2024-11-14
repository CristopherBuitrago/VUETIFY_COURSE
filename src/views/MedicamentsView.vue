<template>
  <v-card flat width="100%">
    <v-card-subtitle class="grey--text">Medicaments</v-card-subtitle>
    <v-container class="ma-0">
      <v-card-title class="display-1 mb-3">
        Medicaments
      </v-card-title>
      <v-card-subtitle class="ma-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ad eveniet provident accusantium soluta officiis veniam deserunt distinctio ducimus alias dolor fugiat nisi maiores, magnam molestiae consequuntur facere dolorum corporis? lor
      </v-card-subtitle>
    </v-container>
    
    <v-divider class="ma-5"/>
    
    <v-container flat class="my-5">
      <v-row justify="center">
        <v-col 
          cols="12"
          sm="5"
          md="4"
          lg="3"
          align="center"  
          class="d-flex justify-center"
          v-for="drug in drugs"
          :key="`${drug.id}`"
        >
          <MedicamentPost :id="drug.id" :title="drug.name" :description="drug.case"/>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import MedicamentPost from '../components/posts/MedicamentPost.vue';
import MedicamentService from '../services/medicament/MedicamentService';

export default {
  name: 'MedicamentsView',
  data() {
    return {
      drugs: []
    }
  },
  components: {
    MedicamentPost
  },
  async mounted() {
    // Llamada al servicio para obtener los medicamentos
    this.drugs = await MedicamentService.fetchAllMedicaments();
  }
}
</script>
