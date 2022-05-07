
<template>
  <v-container fluid>
        <v-textarea
          filled
          name="input-7-4"
          label="Description"
          value="Welcome to Dr Mad P4 laboratory. Here you can create the most monstruous viruses ever known
Go to the Library to browse the collection of Dr Mad
Go to the Lab to imagine new viruses"
        ></v-textarea>
  </v-container>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
#home {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: #1c6ab7;
  margin-top: 60px;
}
h1 {
  font-size: 4em;
  text-align: center;
}
p {
  font-size: 2em;
  text-align: center;
  padding: auto;
  margin: auto;
}
.card {
  background-color: #edc3c3;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

}
</style>
