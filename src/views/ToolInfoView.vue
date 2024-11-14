<template>
  <v-card flat width="100%">
    <v-card-subtitle class="grey--text">{{ tool.id }}</v-card-subtitle>
    <!-- Título del Card -->
    <v-container class="ma-0">
      <v-card-title class="display-1 " >
         {{ tool.name }}
      </v-card-title>
      <v-card-subtitle>
        Tool Characteristics
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
              <td>{{tool.brandName}}</td>
            </tr>
            <tr>
              <td>Purpose</td>
              <td>{{tool.purpose}}</td>
            </tr>
            <tr>
              <td>Main components</td>
              <td>{{tool.mainComponents}}</td>
            </tr>
            <tr>
              <td>Warnings</td>
              <td>{{tool.warnings}}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-container>
  </v-card>
</template>

<script>
import ToolsService from '../services/tools/ToolsService';

export default {
  name: 'ToolInfoView',
  data() {
    return {
      toolName: this.$route.params.brandName,
      tool: {}
    };
  },
  async created() {
    this.fetchToolInfo(this.toolName);
  },
  methods: {
    async fetchToolInfo(brandName) {
      this.tools = await ToolsService.fetchToolByName(brandName);
    }
  }
};

</script>