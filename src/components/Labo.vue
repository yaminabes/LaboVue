<template>
  <div>
    <slot name="title"></slot>
    <router-view name="locLabo"></router-view>
  <v-container v-model="row" row>
    <v-btn to="/labo/slicer"><slot name="button1">Slicer</slot></v-btn>
    <v-btn to="/labo/mixer/$" ><slot name="button2">Mixer</slot></v-btn>
    <v-radio-group v-model="row" row>
      <v-radio label="Basic" value="radio-1"></v-radio>
      <v-radio label="Advanced" value="radio-2"></v-radio>
    </v-radio-group>
  </v-container>
  </div>
  
</template>

<script>
  export default {
    name: 'Labo',
        data : () => {
          return {
            row : null,
      }
    },
  }
  
</script>

<style scoped>
</style>
