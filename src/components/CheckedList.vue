<template>
  <div>
    <table>
      <tr v-for="(entry,index) in entries" :key="index">
        <td>
          <p>
            <input v-if="showChecked" type="checkbox" :id="index" :value="index" v-model="chosenEntries" @change="$emit('checked-changed', chosenEntries)">
            <slot name="entry" v-bind:item="entry" >
              {{entry}}
            </slot>
            <v-btn v-if="showEntryButton" @click="$emit('entry-clicked', index)">
              <slot name="entryButton">
                Entry Button
              </slot>
            </v-btn>
          </p>
        </td>
      </tr>
    </table>
    <v-btn v-if="showMainButton" @click="$emit('list-clicked'), updateChecked()">
      <slot name="mainButton">
        Main button
      </slot>
    </v-btn>
  </div>
</template>

<script>

  export default {
    name: 'CheckedList',
    props: ['entries','checked', 'showChecked', 'showEntryButton', 'showMainButton', 'fields'],
    data : () => {
      return {
        chosenEntries:[],
        mainClick : false,
        
      }
    },
    methods : {
      updateChecked(){
        this.chosenEntries = []
      }
    }
  }
</script>

<style scoped>
</style>
