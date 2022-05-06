<template>
  <div id="home">
  <v-card class="card">
      <h1><slot name="titles">Home</slot></h1>
    <br>
    <p> Welcome to Dr Mad P4 laboratory. Here you can create the most monstruous viruses ever known</p>
    <p>Go to the Library to browse the collection of Dr Mad</p>
    <p>Go to the Lab to imagine new viruses</p>
  </v-card>
  </div>
</template>


<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
</style>
