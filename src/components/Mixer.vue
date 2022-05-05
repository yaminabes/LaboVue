<template>
  <div>
    <h1>Mixer</h1>
    <CheckedList :fields="['name','code']" :entries="parts" @chosen-changed="selectedParts = $event" />
    <hr/>
    <v-btn :disabled="selectedParts.length === 0" @click="mixSelected">Mix</v-btn>
    <v-btn :disabled="parts.length === 0" @click="wipeParts">Wipe</v-btn>
    <hr />
    <CheckedList :fields="['name','code']" :entries="newViruses" @chosen-changed="selectedNew = $event" />
    <v-btn :disabled="selectedNew.length === 0" @click="sendToLibrary">Send to library</v-btn>
    <v-btn :disabled="selectedNew.length === 0" @click="sendToLab">Send to lab</v-btn>
    <v-btn :disabled="newViruses.length === 0" @click="removeViruses">Remove all</v-btn>
  </div>
</template>

<script>
import CheckedList from "./CheckedList";
import {mapMutations, mapState} from "vuex";

export default {
  name: "Mixer-component",
  components: {
    CheckedList,
  },
  data: () => ({
    selectedParts: [], // the current selected indexes, in the checked list
    selectedNew: [], // the current selected indexes, in the checked list
  }),
  computed: {
    ...mapState(['parts','newViruses'])
  },
  methods: {
    ...mapMutations(['assemble','clearParts','sendNewVirusToLab','sendNewVirusToLibrary','removeNewVirus']),
    mixSelected() {
      this.assemble(this.selectedParts)
      this.selectedParts.splice(0,this.selectedParts.length)
    },
    wipeParts() {
      this.selectedParts.splice(0,this.selectedParts.length)
      this.clearParts()
    },
    sendToLibrary() {
      // usual pb : must reorder selected qo that removing virus does not produce a shift
      // between selected & newViruses
      this.selectedNew.sort((a,b) => b-a)
      this.selectedNew.forEach(idx => {
        this.sendNewVirusToLibrary(idx)
      })
      this.selectedNew.splice(0,this.selectedNew.length)
    },
    sendToLab() {
      // usual pb : must reorder selected qo that removing virus does not produce a shift
      // between selected & newViruses
      this.selectedNew.sort((a,b) => b-a)
      this.selectedNew.forEach(idx => {
        this.sendNewVirusToLab(idx)
      })
      this.selectedNew.splice(0,this.selectedNew.length)
    },
    removeViruses() {
      let size = this.newViruses.length
      for(let i=0;i<size;i++) {
        this.removeNewVirus(0)
      }
      this.selectedNew.splice(0,this.selectedNew.length)
    }
  }
}
</script>

<style scoped>

</style>