<template>
  <div id="app">
    <v-app>
    <v-row align="center" justify="center">
    <v-container>
      <v-app-bar 
      dark
      app
      >
      <virus></virus>
      <v-banner color="#ff5555">I need new Friends, <b style="colorblack">click me</b> to know what you have in your lab !</v-banner>
        <NavBar v-bind:titles="titles"></NavBar>
      
      </v-app-bar>
      <v-card flat 
        class="padding-top-bottom-20"
      > 
        <router-view name="locCentral"></router-view>
      </v-card>
      
      </v-container>
    </v-row>
    </v-app>
    <div id="footer">
    <Footer/>
    </div>
  </div>
</template>

<script>
import Footer from './components/Footer.vue'
import NavBar from './components/NavBar.vue'
import Virus from './components/Virus.vue'


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
    Virus,
    Footer,
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

  background-image: 
  linear-gradient(transparent 11px,
    rgba(220,220,200,.8) 12px,
    transparent 12px),
  linear-gradient(90deg,
    transparent 11px,
    rgba(220,220,200,.8) 12px,
    transparent 12px);
  background-size: 100% 12px, 12px 100%;
  
}
.footer {
  text-align: center;
  font-size: 1.2em;
  color: #1c6ab7;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}
</style>
