<template>
<div class="footer">
  <v-footer color="primary">
    <v-row justify="center">
      <div id="footer">
      <p>Dr.Mad Vue.js Project - © Powered by Yamina OUADAH and Ridvan BASBUNAR</p>
      </div>
      <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} — <strong>PR71</strong>
      </v-col>
    </v-row>
  </v-footer>
  </div>
</template>


<script>
export default {
data: () => ({
}),
};
</script>

<style lang="scss" scoped>
.footer {
  text-align: center;
}
</style>

