<template>
  <v-card
    class="mx-auto"
    width="400"
    height="180"
    color="grey lighten-2"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="text-h5 mb-1">
          {{ title }}
        </v-list-item-title>
        <v-list-item-subtitle>{{ description }}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="blue lighten-2"
      ></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
      >
        Button
      </v-btn>
    </v-card-actions>
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
