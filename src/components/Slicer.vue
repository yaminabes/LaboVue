<template>
  <div>
    <h1>Slicer</h1>
    <CheckedList :fields="['name','code']" :entries="samples" :showChecked="true" @checked-changed="updateSelected($event)" />
    <hr/>
    <v-btn :disabled="selected.length === 0" @click="mutateSelected">Mutate</v-btn>
    <input :disabled="selected.length === 0" :value="nbMutations" @change="checkNbMutations($event.target.value)">
    <v-btn :disabled="selected.length === 0" @click="cutSelected">Cut</v-btn>
    <input :disabled="selected.length === 0" :value="cutSize" @change="checkCutSize($event.target.value)">
  </div>
</template>

<script>
import CheckedList from "./CheckedList";
import {mapMutations, mapState} from "vuex";

export default {
  name: "Slicer",
  components: {
    CheckedList
  },
  data: () => ({
    selected: [], // the current selected indexes, in the checked list
    nbMutations : 5,
    cutSize : 3,
  }),
  computed: {
    ...mapState(['samples', 'collec'])
  },
  methods: {
    ...mapMutations(['mutate','cut']),
    checkNbMutations(num) {
      let nb = parseInt(num)
      if ((isNaN(nb) || (nb < 1) || (nb > 10))) {
        // do +1 then -1 to force an update of virusIndex, and thus in the text field.
        this.nbMutations += 1
        this.nbMutations -= 1
      } else {
        this.nbMutations = nb
      }
    },
    checkCutSize(num) {
      let nb = parseInt(num)
      if ((isNaN(nb) || (nb < 2) || (nb > 10))) {
        // do +1 then -1 to force an update of virusIndex, and thus in the text field.
        this.cutSize += 1
        this.cutSize -= 1
      } else {
        this.cutSize = nb
      }
    },
    mutateSelected() {
      for(let i=0; i<this.selected.length; i++){
        let params = {index: i, nb: this.nbMutations}        
        this.mutate(params)
      }
      
    },
    cutSelected() {
      // pb: cut() will remove the virus from samples, so it will lead to a shift with selected.
      // reorder selected
      let size = this.selected.length
      //this.selected.sort((a,b) => b-a)
      for(let i=size-1; i>=0; i--){
        let params = {index: i, nb: this.cutSize}        
        this.cut(params)
      }
    },
    updateSelected(idx){
      
      for(let i = 0; i<idx.length; i++){
        if(!this.selected.includes(this.samples[idx[i]])){
          this.selected.push(this.samples[idx[i]])
        }
      }
    },
  }
}
</script>

<style scoped>

</style>