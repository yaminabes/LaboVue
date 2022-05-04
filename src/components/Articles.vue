<template>
  <div>
    <CheckedList :fields="['name','code']" :entries="articlesFunction" @chosen-changed="selected = $event">
      <template v-slot:entry="slotProps">
        {{ slotProps.item }}
      </template>
    </CheckedList>
    <button :disabled="selected.length===0" @click="sendSelectedToBasket">To basket</button>
  </div>
</template>

<script>

import {mapMutations, mapState} from "vuex";
import CheckedList from "./CheckedList";

export default {
  name: 'Articles-component',
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
      this.articles.filter(v => {
        let idx = this.removed.findIndex(r => r === v)
        return idx === -1
      })
    let articlesDisplay = []
    for(let i=0; i<this.articles.length; i++){
      articlesDisplay.push(this.collec[this.articles[i]]);
    }
      return articlesDisplay
      
    }
  },
  methods: {
    ...mapMutations(['sendToBasket', 'initStock']),
    sendSelectedToBasket() {
      // pb : if we move articles one by one in basket, and put them in removed
      // articles is recomputed as soon as removed changes. Thus, indexes in articles
      // become shifted compared to selected => must begin by the end of articles and thus
      // reorder selected by decreasing indexes
      this.selected.sort((a,b) => b-a)
      this.selected.forEach(idx => {
        // idx is an index in articles, must retrieve the index in articles (=> see remarks in the solution article on cours-info)
        let articlesIdx = this.articles.findIndex(v => v === this.articles[idx])
        // call the mutation with the index in articles
        this.sendToBasket(articlesIdx)
        // send an event to Library so that it puts the virus in the one that must be removed from the list.
        this.$emit('add-removed',this.articles[idx])
      })
      this.selected.splice(0,this.selected.length)
    },
  },
  mounted() {
    this.initStock()
  },
}
</script>

<style scoped>
</style>
