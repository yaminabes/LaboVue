<template>
  <div id="app">
    <v-container>
          <v-card class="overflow-hidden">
      <v-app-bar
        absolute
        color="white"
        elevate-on-scroll
        scroll-target="#scrolling-techniques-7"
      >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
  
        <v-toolbar-title>Title</v-toolbar-title>
  
        <v-spacer></v-spacer>
  
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
  
        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>
  
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>
      <v-sheet
        id="scrolling-techniques-7"
        class="overflow-y-auto"
        max-height="600"
      >
        <v-container style="height: 1500px;">
            <NavBar :titles="titles" @menu-clicked="currentMenu=$event"/>
        </v-container>
      </v-sheet>
    </v-card>

      
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
    </v-container>
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
