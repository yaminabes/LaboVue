<template>
  <div id="app">
    <v-container>
      <NavBar v-bind:titles="titles"></NavBar>
      <router-view name="locCentral"></router-view>
    </v-container>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import {mapState} from 'vuex'

export default {
  name: 'App',
  data : () => {
    return {
      titles : [
        { text: "Home", color:"black", path: "/home" }, 
        { text: "Labo", color:"blue", path: "/labo" },
        { text: "Library", color:"red", path: "/library" },
      ],
    }
  },
  computed: {
    ...mapState(['collec']),
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
