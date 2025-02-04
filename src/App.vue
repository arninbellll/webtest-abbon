<template>
  <v-app>
    <!-- App Bar -->
    <v-app-bar app color="teal-darken-2">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <div class="flex items-center space-x-5">
        <router-link to="/">
          <img src="./assets/logo.svg" alt="User Avatar" class="h-8 w-8 rounded-full" />
        </router-link>
      </div>
      <v-toolbar-title>ABBON TEST</v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="flex items-center pa-2">
        <v-btn :class="{ 'font-bold underline': locale === 'en' }" @click="changeLanguage('en')">
          {{ $t('language.en') }}
        </v-btn>
        <v-btn :class="{ 'font-bold underline': locale === 'th' }" @click="changeLanguage('th')">
          {{ $t('language.th') }}
        </v-btn>
      </div>
      <v-btn icon>
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-app-bar>
    <v-container>
      <v-navigation-drawer v-model="drawer" app color="green lighten-3" :permanent="!$vuetify.display.mobile">
        <v-list>
          <v-list-item-group>
            <v-list-item v-for="item in navMenu" :key="item">
              <v-list-item-title v-if="item.children">
               
                <div class="block px-4">  <v-icon>{{ item.icon }}</v-icon> {{ item.name }}</div>
                <v-list-item v-for="(child, i) in item.children" :key="i">
                  <router-link :to="child.to" class="block px-4">{{ child.name }}</router-link>
                </v-list-item>
              </v-list-item-title>
              <v-list-item-title v-else>
                
                <router-link :to="item.to" class="block px-4"> <v-icon>{{ item.icon }}</v-icon>{{ item.name }}</router-link>
              </v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>


    </v-container>
    <v-main>
      <v-container>
        <router-view />
      </v-container>

    </v-main>
    <v-footer app class="bg-indigo-lighten-2">
      <v-row justify="center" align="center" class="text-center">
        <v-col cols="12">
          <p>📍 123 Main Street, Khonekean, Thailand 40000</p>
          <p>📞 +123-456-7890</p>
          <p> anant.antbie@gmail.co,</p>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>

</template>


<script setup>
import { ref, onMounted, computed } from 'vue';
import { useI18n } from 'vue-i18n';
const { t, locale } = useI18n();

const drawer = ref(false);

const navMenu = ref([
  { icon: "mdi-home-circle-outline", name: "Home", to: "/", },
  { icon: "mdi-account-box", name: "Contacts List", to: "/list", children: [{ name: "List", to: "/list" }, { name: "Create Contact", to: "/create" }] },
  { icon: "mdi-map-marker", name: "Current Location", to: "/location" },
])

const isSidebarOpen = ref(true);
const isMobile = computed(() => window.innerWidth <= 350); // Change based on your mobile breakpoint

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

const changeLanguage = (lang) => {
  console.log(`Language switched to: ${lang}`);
  locale.value = lang;
  localStorage.setItem('language', lang);
};

onMounted(() => {
  const savedLanguage = localStorage.getItem('language') || 'en';
  locale.value = savedLanguage;
});
</script>

<style scoped></style>
