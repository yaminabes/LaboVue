<template>
  <div id="app">
      <router-view name="locLabo"></router-view>
      <v-row> 
        <v-col md="6">
          <div class="card">
          <v-btn block color="#90EE90" to="/labo/slicer"><slot name="button1">Slicer</slot></v-btn>
        </div>
        </v-col>
        <v-col md="6">
          <v-card width="300">
            <div class="card">
            <v-btn block color="#3b5998" to="/labo/mixer/$" row ><slot name="button2">Mixer</slot></v-btn>
              <v-radio-group  row>
                <v-radio label="Basic" value="radio-1"  dark></v-radio>
                <v-radio label="Advanced" value="radio-2" dark ></v-radio>
              </v-radio-group>
              </div>
            </v-card>
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
.card {
  background-color: #df3737;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  align-items: center;
  box-shadow: 0px 0px 10px #000000;

}
</style>
