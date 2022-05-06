<template>
  <div>
    <h1>Mixer</h1>
    <CheckedList :headers="headers"  :entries="parts" @checked-changed="updateSelectedParts($event)" :showChecked="true" >
      <template v-slot:entry="slotProps">          
        <td>{{slotProps.item.name}}</td>
        <td>{{slotProps.item.code}}</td>
      </template>
    </CheckedList>
    <hr/>
    <v-btn :disabled="selectedParts.length === 0" @click="mixSelected">Mix</v-btn>
    <v-btn :disabled="parts.length === 0" @click="wipeParts">Wipe</v-btn>
    <hr />
    <CheckedList :headers="headers" :entries="newViruses" @checked-changed="updateSelectedNew($event)" :showChecked="true">
      <template v-slot:entry="slotProps">          
        <td>{{slotProps.item.name}}</td>
        <td>{{slotProps.item.code}}</td>
      </template>
    </CheckedList>
    <v-btn :disabled="selectedNew.length === 0" @click="sendToLibrary">Send to library</v-btn>
    <v-btn :disabled="selectedNew.length === 0" @click="sendToLab">Send to lab</v-btn>
    <v-btn :disabled="newViruses.length === 0" @click="removeViruses">Remove all</v-btn>
  </div>
</template>

<script>
import CheckedList from "./CheckedList";
import {mapMutations, mapState} from "vuex";

export default {
  name: "Mixer",
  props: ['mode'],
  components: {
    CheckedList,
  },
  data: () => ({
    selectedParts: [], // the current selected indexes, in the checked list
    selectedNew: [], // the current selected indexes, in the checked list
    headers: [
          { text: 'Name', value: 'name'},
          { text: 'Code', value: 'code' },
        ]
  }),
  computed: {
    ...mapState(['parts','newViruses'])
  },
  methods: {
    ...mapMutations(['assemble','clearParts','sendNewVirusToLab','sendNewVirusToLibrary','removeNewVirus']),
    mixSelected() {
      let indexes = this.getIndexe(this.selectedParts)
      this.assemble(indexes)
      this.selectedParts.splice(0,this.selectedParts.length)
    },
    wipeParts() {
      this.selectedParts.splice(0,this.selectedParts.length)
      this.clearParts()
    },
    sendToLibrary() {
      // usual pb : must reorder selected qo that removing virus does not produce a shift
      // between selected & newViruses
      let indexes = this.getIndexe(this.selectedNew)
      this.selectedNew.sort((a,b) => b-a)
      indexes.forEach(idx => {
        this.sendNewVirusToLibrary(idx)
      })
      this.selectedNew.splice(0,this.selectedNew.length)
    },
    sendToLab() {
      // usual pb : must reorder selected qo that removing virus does not produce a shift
      // between selected & newViruses
      let indexes = this.getIndexe(this.selectedNew)
      this.selectedNew.sort((a,b) => b-a)
      indexes.forEach(idx => {
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
    },
    updateSelectedParts(idx){
      
      for(let i = 0; i<idx.length; i++){
        if(!this.selectedParts.includes(this.parts[idx[i]])){
          this.selectedParts.push(this.parts[idx[i]])
        }
      }
    },
    updateSelectedNew(idx){
      
      for(let i = 0; i<idx.length; i++){
        if(!this.selectedNew.includes(this.newViruses[idx[i]])){
          this.selectedNew.push(this.newViruses[idx[i]])
        }
      }
    },
    getIndexe(tab){
      let indexes = []
      for(let i=0; i<tab.length; i++){
        indexes.push(i)
      }
      return indexes
    }
  }
}
</script>

<style scoped>

</style>