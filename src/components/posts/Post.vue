<template>
  <v-card class="mx-auto" width="400" height="180">
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
        :src="imageSrc"
      ></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn
        link
        outlined
        rounded
        text
        :to="{ name: 'medicamentInfo', params: { brandName: title } }"
      >
        More
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
    image: {
      type: String,
      default: 'https://wpdirecto.com/wp-content/uploads/2017/08/alt-de-una-imagen.png'
    }
  },
  computed: {
    imageSrc() {
      return this.image || 'https://wpdirecto.com/wp-content/uploads/2017/08/alt-de-una-imagen.png';
    }
  }
}
</script>
