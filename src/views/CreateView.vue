<template>
    <v-app>
        <v-main>
            <v-container class="pa-8">
                <v-card elevation="12" rounded="lg" class="mx-auto" max-width="600px">
                    <v-card-title class="justify-center text-h5 font-weight-bold">
                        {{ $t('create.header') }}
                    </v-card-title>
                    <v-card-text>
                        <v-form ref="form" v-model="valid" lazy-validation>
                            <v-row justify="center" align="center">
                                <v-col cols="12">
                                    <v-text-field v-model="name" label="Name" variant="outlined" clearable
                                        :rules="[rules.required]"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field v-model="age" label="Age" variant="outlined" clearable type="number"
                                        :rules="[rules.required, rules.minAge]"></v-text-field>
                                </v-col>
                            </v-row>
                        </v-form>
                    </v-card-text>
                    <v-card-actions class="justify-center">
                        <v-btn color="primary" class="text-white" elevation="2" :disabled="!valid" @click="submitForm">
                            {{ $t('create.add_btn') }}
                        </v-btn>
                        <v-btn outlined class="ml-2" @click="clearForm">
                            {{ $t('create.can_btn') }}
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-container>
            <v-dialog v-model="dialog" persistent max-width="400px">
                <v-card v-if="name !== 'AA'">
                    <v-card-title class="text-h6 font-weight-bold">
                        <v-icon color="green-darken-2">mdi-check-circle-outline</v-icon> {{ $t('create.alert1') }}
                    </v-card-title>
                    <v-card-text>
                        {{ $t('create.text1') }}
                    </v-card-text>
                    <v-card-actions class="justify-end">
                        <v-btn color="primary" text @click="navigateToList">
                            OK
                        </v-btn>
                    </v-card-actions>
                </v-card>
                <v-card v-else>
                    <v-card-title class="text-h6 font-weight-bold">
                        <v-icon color="orange-darken-2">mdi-alpha-x-circle-outline</v-icon> {{ $t('create.alert2') }}
                    </v-card-title>
                    <v-card-text>
                        {{ $t('create.text2') }}
                    </v-card-text>
                    <v-card-actions class="justify-end">
                        <v-btn color="primary" text @click="dialog = false">
                            OK
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-main>
    </v-app>

</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from "vue-router";
import { useI18n } from 'vue-i18n';
const { t, locale } = useI18n();

const router = useRouter();
const name = ref('');
const age = ref('');
const valid = ref(false);
const dialog = ref(false);

const rules = {
    required: (value) => !!value || "Field is requir.",
    minAge: (value) =>
        value >= 0 || "Age must be a positive number.",
};

const submitForm = () => {
    //alert(`Submitted:\nName: ${name.value}\nAge: ${age.value}`);
    console.log(`Submitted:\nName: ${name.value}\nAge: ${age.value}`);
    dialog.value = true;
};

const clearForm = () => {
    name.value = "";
    age.value = "";
};

const navigateToList = () => {
    dialog.value = false;
    router.push("/list");
};


</script>