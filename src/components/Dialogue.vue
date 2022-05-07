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
          Hello Dr. Mad
        </v-card-title>

        <v-card-text>
            <v-list-item v-for="(virus) in samples" :key="virus">
                <v-list-item-content>
                  <v-list-item-title>{{virus.name}}</v-list-item-title>
                  <v-list-item-subtitle>{{virus.code}}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <p v-if="samples.length === 0">There is nothing in the labo ! </p>
              <p v-if="parts.length !== 0">There is {{parts.length}} virus to play with in the mixer !  </p>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="$router.push({path: '/library'}), dialog = false"><v-icon>mdi-flask</v-icon> Go to Library</v-btn>
          <v-btn @click="$router.push({path: '/labo'}), dialog = false">
          <v-icon>mdi-file-search</v-icon> Go to Laboratory
          </v-btn>
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
    ...mapState(["samples", "library", "parts"]),
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
