<template>
  <v-card flat width="100%">
    <v-card-subtitle class="grey--text">Tools</v-card-subtitle>
    <v-container class="ma-0">
      <v-card-title class="display-1 mb-2" >
         Tools
      </v-card-title>
      <v-card-subtitle class="ma-2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste tenetur eius quos, nobis alias accusantium vitae consectetur molestias laborum possimus reiciendis nemo ex mollitia repudiandae ea, recusandae placeat beatae. Voluptatem.
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
          v-for="tool in tools"
          :key="tool.id"
        >
          <ToolPost :id="tool.id" :title="tool.name" :description="tools.purpose"/>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import ToolPost from '../components/posts/ToolPost.vue';
import ToolsService from '../services/tools/ToolsService';
export default{
  name: 'ToolsView',
  data() {
    return {
      tools : []
    }
  },
  components: {
    ToolPost
  },
  async mounted() {
    this.tools = await ToolsService.fetchAllTools();
  }
}
</script>