<template>
  <div>
    <h2>In my basket :</h2>
    <table >
      <tr><td>Name</td><td>Code</td><td>% Mortality</td></tr>
      <tr>
        <CheckedList :fields="['name','code']" 
        :showEntryButton="true" 
        :showMainButton="true" 
        :entries="basketFunction"
        :headers="headers"
        @entry-clicked="remove($event)"
        @list-clicked="emptyAllBasket"
        >
          <template v-slot:entry="slotProps">          
          <td>{{slotProps.item.name}}</td>
          <td>{{slotProps.item.code}}</td>
          <td>{{slotProps.item.mortalite}}</td>
        </template>
        <template v-slot:entryButton>
          Remove
        </template>
        <template v-slot:mainButton>
          empty basket
        </template>
        </CheckedList>
      </tr>
    </table>
    <v-btn :disabled="basket.length === 0" @click="sendBasketToLab">Send basket to Lab</v-btn>
  </div>
</template>

<script>

import {mapState, mapMutations} from 'vuex'
import CheckedList from "./CheckedList";

export default {
  name: 'Basket',
  components: {
    CheckedList,
  },
  props: ['operation','name','code'],
  data : () => {
    return {
       headers: [
          //{ text: 'Select'},
          {
            text: 'Name', value: 'name',
          },
          // this replaces the scoped-slot of the entries as we can choose to give the v-dataTable what informations we need
          { text: 'Code', value: 'code' },
          { text: 'Mortality (%)', value: 'mortalite'},
          { text: 'action', value: '' },
        ]
    }
  },
  computed: {
    ...mapState(['basket','collec']),
    basketFunction() {
      let basketDisplay = []
      for(let i=0; i<this.basket.length; i++){
        basketDisplay.push(this.collec[this.basket[i]]);
      }
      return basketDisplay      
    }
  },
  methods: {
    ...mapMutations(['sendBasketToLab','removeFromBasket','emptyAllBasket']),
    remove(index) {
      this.removeFromBasket(this.basket[index])
    },
    emptyBasket() {      
      this.emptyAllBasket()      
    },

  }

}
</script>

<style scoped>
</style>
