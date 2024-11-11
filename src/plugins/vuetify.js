import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#274C77',
        secondary: '#E7ECEF',
        primary_color: '#6096BA',
        highlight: '#A3CEF1',
        link_color: '#8B8C89'
      },
      dark: {
        primary: '#1B263B',
        secondary: '#4E4E50',
        primary_color: '#3A506B',
        highlight: '#5BC0EB',
        link_color: '#B0B0B0'
      }
    },
    dark: false // Configuración inicial (false para tema claro, true para tema oscuro)
  }
});
