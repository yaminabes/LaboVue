<template>
  <div>
    <slot name="title"></slot>
    <hr />
    <v-btn to="/labo/slicer"><slot name="button1">Slicer</slot></v-btn>
    <v-btn to="/labo/mixer/$"><slot name="button2">Mixer</slot></v-btn>
    <hr />
    <router-view name="locLabo"></router-view>
  </div>
</template>

<script>
  export default {
    name: 'Labo',
  }
</script>

<style scoped>
</style>
