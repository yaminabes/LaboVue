<template>
  <div>
    <CheckedList 
      :fields="['name','code']" 
      :showChecked="true" 
      :showEntryButton="true" 
      :showMainButton="true" 
      :entries="articlesFunction" 
      @entry-clicked="sendOneToBasket($event)"
      @list-clicked="sendSelectedToBasket($event)"
      @checked-changed="updateSelected($event)"
      >
      
        <template v-slot:entry="slotProps">
          {{ slotProps.item }}
        </template>
        <template v-slot:entryButton>
          To Basket
        </template>
        <template v-slot:mainButton>
          Send selected to Basket
        </template>
    </CheckedList>
  </div>
</template>

<script>

import {mapMutations, mapState} from "vuex";
import CheckedList from "./CheckedList";

export default {
  name: 'Articles',
  components: {
    CheckedList,
  },
  props: {
    removed: Array,
  },
  data: () => ({
    selected: [], // the current selected indexes, in the checked list
  }),
  computed: {
    ...mapState(['articles','collec']),
    articlesFunction() {
    let articlesDisplay = []
    for(let i=0; i<this.articles.length; i++){
      articlesDisplay.push(this.collec[this.articles[i]]);
    }
    return articlesDisplay      
  },
    updateChecked(){
      if(this.selected.length === 0){
        return false
      }
      return true
    }
  },
  methods: {
    ...mapMutations(['sendToBasket', 'initStock']),
    sendSelectedToBasket() {
      console.log(this.selected)
      for(let i = 0; i < this.selected.length; i++){
        this.sendToBasket(this.selected[i])
      }
      this.selected.splice(0,this.selected.length)
    },
    sendOneToBasket(idx){
      this.sendToBasket(this.articles[idx])
    },
    updateSelected(idx){
      for(let i = 0; i<idx.length; i++){
        if(!this.selected.includes(this.articles[idx[i]])){
          this.selected.push(this.articles[idx[i]])
        }
      }
      console.log(idx)
    },

  },
  mounted() {
    this.initStock()
  },
}
</script>

<style scoped>
</style>
