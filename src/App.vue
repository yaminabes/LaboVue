<template>
  <div id="app">
    <NavBar :titles="titles" @menu-clicked="currentMenu=$event"/>
    <div v-if="currentMenu == 0"><Home/></div>
    <div v-else-if="currentMenu == 1">
      <Labo>
        <template #title> <h2>Labo</h2> </template>
        <template #button1>Slicer</template>
        <template #button2>Mixer</template>
      </Labo>
    </div>
    <div v-else-if="currentMenu == 2">
      <Library>
        <template #title> <h2>Library</h2> </template>
      </Library>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Home from "./components/Home";
import Labo from "./components/Labo";
import Library from "./components/Library";
import {mapState} from 'vuex'


export default {
  name: 'App',
  data : () => {
    return {
      titles : [ { text: "Home", color:"black"}, { text: "Lab", color:"blue"}, { text: "Library", color:"red"} ],
      currentMenu : 0,
    }
  },
  computed: {
    ...mapState(['collec']),
  },
  components: {
    NavBar,
    Home,
    Library,
    Labo,
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
