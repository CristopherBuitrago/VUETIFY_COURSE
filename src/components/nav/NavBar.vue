<template>
  <nav>
    <!-- Barra de navegacion -->
    <Bar :drawer.sync="drawer" />
    <!-- Drawer de navegación -->
    <Drawer :drawer="drawer"/>
  </nav>
</template>

<script>
import Bar from './subcomponents/Bar.vue';
import Drawer from './subcomponents/Drawer.vue';
export default {
  name: 'NavBar',
  data() {
    return {
      drawer: false,
    };
  },
  components: {
    Bar,
    Drawer
  }
};
</script>
