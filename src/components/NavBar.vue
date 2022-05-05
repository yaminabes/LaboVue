<template>
  <div>
    <v-container>
      <v-btn v-for="(t,index) in titles" :key="index"  @click="$router.push({path: t.path})">
      {{t.text}}
      </v-btn>
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
