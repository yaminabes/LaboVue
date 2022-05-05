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
            <button v-if="showEntryButton" @click="$emit('entry-clicked', index)">
              <slot name="entryButton">
                Entry Button
              </slot>
            </button>
          </p>
        </td>
      </tr>
    </table>
    <button v-if="showMainButton" @click="$emit('list-clicked'), updateChecked()">
      <slot name="mainButton">
        Main button
      </slot>
    </button>
  </div>
</template>

<script>

  export default {
    name: 'CheckedList-component',
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
