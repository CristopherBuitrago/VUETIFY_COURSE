<template>
  <v-card 
    dark
    color="blue darken-3"
    class="d-flex flex-column align-center"
    width="100%"
  >
    <v-card-title>{{ title }}</v-card-title>
    
    <!-- Imagen predeterminada en caso de que no se proporcione una imagen -->
    <v-img
      :src="imageSrc"
    />

    <v-card-text> <span>USE IN CASE OF: </span> {{ description }}</v-card-text>
    <v-btn light class="mb-5">More</v-btn>
  </v-card>
</template>

<script>
export default {
  name: 'Post',
  props: {
    title: String,
    description: {
      type: String,
      default: 'No indications of use'
    },
    // Propiedad opcional para la imagen
    image: {
      type: String,
      default: 'https://wpdirecto.com/wp-content/uploads/2017/08/alt-de-una-imagen.png' // Imagen por defecto
    }
  },
  computed: {
    // Computed para manejar la imagen, mostrando la imagen predeterminada si no hay una imagen proporcionada
    imageSrc() {
      return this.image || 'https://wpdirecto.com/wp-content/uploads/2017/08/alt-de-una-imagen.png';
    }
  }
}
</script>
