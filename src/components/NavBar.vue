<template>
  <div>
    <v-container>
      <v-row>

            <v-col v-for="(t,index) in titles" :key="index" >
            <span style="margin-right:3%"><v-icon>{{t.icon}}</v-icon></span>
            <v-btn  :style="{color : t.color}" :icon="{icon : t.icon}" @click="$router.push({path: t.path})">{{t.text}}</v-btn>
            
            </v-col>

      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'NavBar',
    props: ['titles']
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
