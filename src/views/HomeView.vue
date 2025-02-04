<template>
  <v-app>
    <v-main>
      <v-container class="pa-8">
        <v-card elevation="12" rounded="lg" class="mx-auto" max-width="600px">
          <v-card-title class="justify-center text-center text-h5 font-weight-bold">
            {{  $t('profile') }}
          </v-card-title>
          <v-card-text class="text-center">
            <img class="h-28 w-28 mx-auto  rounded-full shadow-xl border-4 border-blue-500"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Profile Image" />
            <div>
              <h2 class="text-3xl font-semibold text-gray-800">{{ name }}</h2>
              <button @click="editName"   v-if="!editing" 
                class="mt-4 px-6 py-3 bg-blue-600 text-green-500 rounded-full hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400">
                Edit Name
              </button>
            </div>
            <div v-if="editing" class="mt-6">
            <v-text-field 
              v-model="newName" 
              label="Edit Name" 
              variant="outlined" 
              
            ></v-text-field>
            <button 
              @click="saveName" 
              class="mt-4 px-6 py-3 bg-green-600 text-gray rounded-full hover:bg-green-500"
              elevation="2"
            >
              Save
            </button>
            <button
              @click="cancelEdit" 
              class="mt-4 ml-2 px-6 py-3 bg-gray-400 text-gray rounded-full hover:bg-gray-300"
              elevation="2"
            >
              Cancel
            </button>
          </div>
          </v-card-text>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
const { t, locale } = useI18n();

const name = ref('Arnin your');
const newName = ref(name.value);
const editing = ref(false);

const editName = () => {
  editing.value = true;
};

const saveName = () => {
  name.value = newName.value;
  editing.value = false; 
};

const cancelEdit = () => {
  newName.value = name.value; 
  editing.value = false; 
};
</script>