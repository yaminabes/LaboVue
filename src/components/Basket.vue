<template>
  <div>
    <h2>In my basket :</h2>
    <table >
      <tr><td>Name</td><td>Code</td><td>% Mortality</td></tr>
      <tr v-for="(v,index) in basket" :key="index">
        <td>{{v.name}}</td>
        <td>{{v.code}}</td>
        <td>{{v.mortalite}}</td>
        <td><button @click="remove(index)">remove</button></td>
      </tr>
    </table>
    <button :disabled="basket.length === 0" @click="sendBasketToLab">Send basket to Lab</button>
  </div>
</template>

<script>

import {mapState, mapMutations} from 'vuex'

export default {
  name: 'Basket-component',
  props: ['operation','name','code'],
  data : () => {
    return {
    }
  },
  computed: {
    ...mapState(['basket','collec'])
  },
  methods: {
    ...mapMutations(['sendBasketToLab','removeFromBasket']),
    remove(index) {
      // remove an item from the basket using the mutation
      // and send an event to Library so that it modifies the list of removed indexes
      this.$emit('remove-removed', this.basket[index])
      this.removeFromBasket(index)

    },
    emptyBasket() {
      // NB: this method should be a mutation in the store !

      // remove item 0 in basket, as many times there are viruses in the basket.
      // CAUTION : do not use directly i<this.basket.length since it will effectively change
      let size = this.basket.length
      for(let i=0;i<size;i++) {
        this.removeFromBasket(0)
      }
    },

  }

}
</script>

<style scoped>
</style>
