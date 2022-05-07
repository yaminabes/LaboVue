<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="red lighten-2"
          dark
          v-bind="attrs"
          v-on="on"
        >
          See what's in the Labo
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Privacy Policy
        </v-card-title>

        <v-card-text>
            <v-list-item v-for="(virus) in samples" :key="virus">
                <v-list-item-content>
                  <v-list-item-title>{{virus.name}}</v-list-item-title>
                  <v-list-item-subtitle>{{virus.code}}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <p v-if="samples.length === 0">There is nothing in the labo</p>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="$router.push({path: '/library'}), dialog = false">Go to Library</v-btn>
          <v-btn @click="$router.push({path: '/labo'}), dialog = false">Go to Laboratory</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Dialogue",
  computed: {
    ...mapState(["samples", "library"]),
  },
  data() {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
    };
  },
};
</script>

<style lang="scss" scoped></style>
