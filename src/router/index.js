import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../components/Home";
import Labo from "../components/Labo";
import Library from "../components/Library";
import Slicer from "../components/Slicer";
import Mixer from "../components/Mixer";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    components: {
      locCentral: Home
    }
  },
  {
    path: '/home',
    components: {
      locCentral: Home
    }
  },
  {
    path: '/labo',
    components: {
      locCentral: Labo
    },
    children: [
      {
        path: 'mixer/:mode',
        components: {
          locLabo : Mixer
        },
        props: {
          locLabo : route => { return {mode: route.params.mode} }
        }
      },
      {
        path: 'slicer',
        components: {
          locLabo : Slicer
        }
      }
    ]
  },
  {
    path: '/library',
    components: {
      locCentral: Library
    }
  },
]

const router = new VueRouter({
  routes
})

export default router
