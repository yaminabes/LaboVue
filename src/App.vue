<template>
  <div id="app">
    <v-row align="center" justify="center">
    <v-container>
      <v-app-bar 
      dark
      app
      >
        <NavBar v-bind:titles="titles"></NavBar>
      </v-app-bar>
      <v-card flat 
        color="primary"
        class="padding-top-bottom-20"
      > 
        <router-view name="locCentral"></router-view>
      </v-card>
    </v-container>
    </v-row>
    
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'


export default {
  name: 'App',
  data : () => {
    return {
      titles : [
        { text: "Home", color:"red", path: "/home", icon: "mdi-home" },
        { text: "Labo", color:"grey", path: "/labo", icon: "mdi-flask" },
        { text: "Library", color:"pink", path: "/library", icon: "mdi-file-search"},
      ],
    }
  },
  components: {
    NavBar,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  
}
</style>
