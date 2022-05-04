<template>
  <div>
    <button v-for="(t,index) in titles" :key="index" :style="{color : t.color}" @click="$emit('menu-clicked', index)">{{t.text}}</button>
  </div>
</template>

<script>
  export default {
    name: 'NavBar-component',
    props: ['titles']
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
