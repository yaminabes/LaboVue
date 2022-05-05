<template>
  <div>
    <slot name="title"></slot>
    <hr />
    <v-btn @click="currentOp = 0"><slot name="button1">button 1</slot></v-btn>
    <v-btn @click="currentOp = 1"><slot name="button2">button 2</slot></v-btn>
    <hr />
    <div v-if="currentOp === 0">
      <Slicer />
    </div>
    <div v-else>
      <Mixer />
    </div>
  </div>
</template>

<script>

  import Slicer from "./Slicer";
  import Mixer from "./Mixer";

  export default {
    name: 'Labo-component',
    data : () => {
      return {
        currentOp: 0,
      }
    },
    components: {
      Slicer,
      Mixer,
    },
  }
</script>

<style scoped>
</style>
