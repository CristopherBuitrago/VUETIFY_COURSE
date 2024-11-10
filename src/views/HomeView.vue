<template>
  <div class="home">
    <h1>Home page</h1>

    <!-- to add a button use: v-btn -->
    <h2>Buttons</h2>
    <ul>
      <li>
        <h3>Normal button without props</h3>
        <v-btn> Normal Button </v-btn>
      </li>
      <li>
        <h3>Button with background</h3>
        <v-btn class="pink">Bg Button</v-btn>
      </li>
      <li>
        <h3>Button with text color</h3>
        <v-btn class="purple white--text">TEXT BUTTON</v-btn>
      </li>
      <li>
        <h3>Button without shadow</h3>
        <v-btn dark depressed color="pink">NO SHADOW BUTTON</v-btn>
      </li>
    </ul>

    <br>

    <h2>Buttons with icons</h2>
    <ul>
      <li>
        <h3>Normal button without props</h3>
        <v-btn>
          <v-icon>mdi-email</v-icon>
        </v-btn>
      </li>
      <li>
        <h3>Button with background</h3>
        <v-btn class="pink">
          <v-icon>mdi-camera</v-icon>
        </v-btn>
      </li>
      <li>
        <h3>Button rounded</h3>
        <v-btn rounded class="purple white--text">
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </li>
      <li>
        <h3>Button without shadow</h3>
        <v-btn dark depressed color="pink">
          <v-icon>mdi-bicycle</v-icon>
        </v-btn>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>
