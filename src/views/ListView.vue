<template>
  <v-app>
    <v-main>
      <v-container class="pa-8">
        <v-card elevation="12" rounded="lg" class="mx-auto" max-width="600px">
          <v-card-title class="justify-center text-h5 font-weight-bold">
            {{ $t('list.header') }}</v-card-title>
            <v-card-text>
              <v-text-field v-model="search" label="Search" clearable class="mb-4"></v-text-field>
              <v-data-table :items="contacts" :headers="headersContact" :custom-filter="customFilter" :search="search"
                :items-per-page="20" class="elevation-1">
                <template v-slot:item="props">
                  <tr>
                    <td>{{ props.item.name }}</td>
                    <td>{{ props.item.age }}</td>
                    <td>
                      <v-btn @click="deleteContact(props.item.id)" color="orange" rounded> {{ $t('list.btn') }}</v-btn>
                    </td>
                  </tr>
                </template>
              </v-data-table>
            </v-card-text>
          </v-card>

      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
const { t, locale } = useI18n();

const headersContact = ref([
  { text: 'Action', value: 'id' },
  { text: 'Name', value: 'name' },
  { text: 'Age', value: 'age' },

]);

const contacts = ref([
  { id: 1, name: 'John Doe', age: getRandomAge() },
  { id: 2, name: 'Jane Smith', age: getRandomAge() },
  { id: 3, name: 'Tom Brown', age: getRandomAge() },
  { id: 4, name: 'Lucy Green', age: getRandomAge() },
  { id: 5, name: 'Michael White', age: getRandomAge() },
  { id: 6, name: 'John Doe', age: getRandomAge() },
  { id: 7, name: 'Jane Smith', age: getRandomAge() },
  { id: 8, name: 'Tom Brown', age: getRandomAge() },
  { id: 9, name: 'Lucy Green', age: getRandomAge() },
  { id: 10, name: 'Michael White', age: getRandomAge() },
  { id: 11, name: 'John Doe', age: getRandomAge() },
  { id: 12, name: 'Jane Smith', age: getRandomAge() },
  { id: 13, name: 'Tom Brown', age: getRandomAge() },
  { id: 14, name: 'Lucy Green', age: getRandomAge() },
  { id: 15, name: 'Michael White', age: getRandomAge() },
  { id: 16, name: 'John Doe', age: getRandomAge() },
  { id: 17, name: 'Jane Smith', age: getRandomAge() },
  { id: 18, name: 'Tom Brown', age: getRandomAge() },
  { id: 19, name: 'Lucy Green', age: getRandomAge() },
  { id: 20, name: 'Michael White', age: getRandomAge() },
  { id: 21, name: 'John Doe', age: getRandomAge() },
  { id: 22, name: 'Jane Smith', age: getRandomAge() },
  { id: 23, name: 'Tom Brown', age: getRandomAge() },
  { id: 24, name: 'Lucy Green', age: getRandomAge() },
  { id: 25, name: 'Michael White', age: getRandomAge() },
]);

const search = ref('');

const pageSize = 20;
const currentPage = ref(1);

const customFilter = (value, search, item) => {
  if (!search) return true;
  const searchLower = search.toLowerCase();
  return (
    item.name.toLowerCase().includes(searchLower)

  );
};

function deleteContact(id) {
  const index = contacts.value.findIndex(contact => contact.id === id);
  if (index !== -1) {
    contacts.value.splice(index, 1);
  }
}

function getRandomAge() {
  return Math.floor(Math.random() * (60 - 20 + 1)) + 20;
}
</script>