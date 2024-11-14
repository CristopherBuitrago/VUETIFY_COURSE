<template>
  <v-card flat width="100%">
    <v-card-subtitle class="grey--text">{{ medicament.id }}</v-card-subtitle>
    <!-- Título del Card -->
    <v-container class="ma-0">
      <v-card-title class="display-1 " >
         {{ medicament.name }}
      </v-card-title>
      <v-card-subtitle>
        Medicament Characteristics
      </v-card-subtitle>
    </v-container>
    
    <!-- Contenedor para la tabla -->
    <v-container>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Characteristics</th>
              <th class="text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{{medicament.brandName}}</td>
            </tr>
            <tr>
              <td>Purpose</td>
              <td>{{ medicament.purpose}}</td>
            </tr>
            <tr>
              <td>Active ingredients</td>
              <td>{{ medicament.activeIngredient}}</td>
            </tr>
            <tr>
              <td>Warnings</td>
              <td>{{ medicament.warnings}}</td>
            </tr>
            <tr>
              <td>Dosage</td>
              <td>{{ medicament.dosage}}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-container>
  </v-card>
</template>

<script>
import MedicamentService from '../services/medicament/MedicamentService';

export default {
  name: 'MedicamentInfoView',
  data() {
    return {
      medicamentName: this.$route.params.brandName,
      medicament: {}
    };
  },
  async created() {
    this.fetchMedicamentData(this.medicamentName);
  },
  methods: {
    async fetchMedicamentData(brandName) {
      this.medicament = await MedicamentService.fetchMedicamentById(brandName);
    }
  }
};

</script>

<style>
</style>
