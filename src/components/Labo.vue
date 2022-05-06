<template>
  <div id="app">
      <router-view name="locLabo"></router-view>
      <v-row> 
        <v-col md="6">
          <v-btn to="/labo/slicer"><slot name="button1">Slicer</slot></v-btn>
        </v-col>
        <v-col md="6">
          <v-btn to="/labo/mixer/$" row ><slot name="button2">Mixer</slot></v-btn>
            <v-radio-group row>
              <v-radio label="Basic" value="radio-1"></v-radio>
              <v-radio label="Advanced" value="radio-2"></v-radio>
            </v-radio-group>
        </v-col>
      </v-row>
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
