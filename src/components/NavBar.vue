<template>
  <div>
    <v-container>
      <v-row>
            <v-col v-for="(t,index) in titles" :key="index" >
              <div class="icon">
            <span style="margin-top:20%"><v-icon>{{t.icon}}</v-icon></span>
              <v-btn  :style="{color : t.color}" :icon="{icon : t.icon}" @click="$router.push({path: t.path})">{{t.text}}</v-btn>
            </div>
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
.icon
{
  margin: auto;
}

</style>
