<template>
  <div>
    <!-- <table>
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
    </table> -->
    <v-data-table
      v-model="selected"
      :headers="headers"
      :items="entries"
      :single-select="singleSelect"
      :search="search"
      :custom-filter="filterByName"
      :show-select="showChecked"
      item-key="name"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-text-field
          v-model="search"
          label="Search by name"
          class="mx-4"
          outlined
        ></v-text-field>

      </template>

      <template v-slot:item="row">
        <tr>
          <td>
            <input
              v-if="showChecked"
              type="checkbox"
              :id="row.index"
              :value="row.index"
              v-model="chosenEntries"
              @change="$emit('checked-changed', chosenEntries)"
            />
          </td>
          <slot name="entry" v-bind:item="row.item">
            {{ row.item }}
          </slot>
          <td>
            <v-btn
              v-if="showEntryButton"
              @click="$emit('entry-clicked', row.index)"
            >
              <slot name="entryButton"> Entry Button </slot>
            </v-btn>
          </td>
        </tr>
      </template>

      <template slot="body.append">
        <v-btn
          v-if="showMainButton"
          @click="$emit('list-clicked'), updateChecked()"
        >
          <slot name="mainButton"> Main button </slot>
        </v-btn>
      </template>
      
    </v-data-table>
  </div>
</template>

<script>
export default {
  name: "CheckedList",
  props: [
    "entries",
    "checked",
    "showChecked",
    "showEntryButton",
    "showMainButton",
    "fields",
    "headers",
  ],
  data: () => {
    return {
      singleSelect: false,
      chosenEntries: [],
      mainClick: false,
      selected: [],
      search: '',
    };
  },
  methods: {
    updateChecked() {
      this.chosenEntries = [];
    },
    filterByName (value, search) {
        return value !== null &&
          search !== null &&
          typeof value === 'string' &&
          value.toString().indexOf(search) !== -1
      },
  },
};
</script>

<style scoped></style>
