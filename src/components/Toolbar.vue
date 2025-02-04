
<template>
  <v-app>
    <!-- App Bar -->
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Responsive Layout</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Layout -->
    <v-main>
      <v-container>
        <!-- Navigation Drawer -->
        <v-navigation-drawer
          v-model="drawer"
          app
          color="grey lighten-4"
          :permanent="!$vuetify.display.mobile"
        >
          <v-list>
            <v-list-item-group>
              <v-list-item v-for="item in ['Home', 'Profile', 'Settings']" :key="item">
                <v-list-item-title>{{ item }}</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue';

const drawer = ref(false); 
</script>


<style scoped>
h1 {
  margin-bottom: 1rem;
}
</style>



