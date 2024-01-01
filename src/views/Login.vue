<template>
    <div>
        <v-container>
            <v-row justify="center">
                <v-col md="6" class="pt-5">
                    <h1>E-Jom Belajar Sambil Bekerja</h1>
                    <form @submit.prevent="login">
                        <v-text-field v-model="staffID" clearable label="ID" color="primary" />
                        <v-text-field v-model="password" type="password" clearable label="Password" color="primary" />
                        <v-btn type="submit" color="primary">Post</v-btn>
                    </form>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import { useMainStore } from '@/stores/store';

export default {
    data() {
        return {
            staffID: null,
            password: null
        };
    },

    methods: {
        login() {
            const store = useMainStore();
            store.setStaffID(this.staffID);
            this.$router.push({ name: 'calendarView' });
        }
    }
}
</script>