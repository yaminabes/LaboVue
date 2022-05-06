<template>
  <div id="app">
  <v-container>
    <v-row align="center" justify="center" class="ma-6">
      <h1><slot name="titles">Home</slot></h1>
    </v-row>
    <br>
    <p> Welcome to Dr Mad P4 laboratory. Here you can create the most monstruous viruses ever known</p>
    <p>Go to the Library to browse the collection of Dr Mad</p>
    <p>Go to the Lab to imagine new viruses</p>
  </v-container>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
</style>
