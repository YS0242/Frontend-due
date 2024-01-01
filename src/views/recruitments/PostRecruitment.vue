<template>
    <v-app class="bg-grey-lighten-4">
        <NavBar />

        <v-main>
            <div v-if="isLoading" class="loading-overlay">
                <v-progress-circular indeterminate color="primary" size="64"></v-progress-circular>
            </div>
            <v-alert v-if="errorMessage" type="error">
                {{ errorMessage }}
            </v-alert>

            <v-container fluid>
                <v-row wrap justify="center">
                    <v-col sm="12" md="8" lg="8">
                        <v-card>
                            <v-card-title class="text-h5">
                                Post New Recruitment
                            </v-card-title>

                            <v-card-text>
                                <form @submit.prevent="postRecruitment">
                                    <v-text-field clearable label="Number of Student Required" type="number"
                                        v-model="newRecruitment.stuNumReq" color="primary" />

                                    <v-text-field label="Job Shift Date" type="date" v-model="newRecruitment.jobShiftDate"
                                        color="primary" />

                                    <v-combobox label="Start Time" :items="timeSlots" v-model="newRecruitment.startTime"
                                        color="primary" clearable />

                                    <v-combobox label="End Time" :items="timeSlots" v-model="newRecruitment.endTime"
                                        color="primary" clearable />

                                    <v-combobox label="Job Location"
                                        :items="['Warehouse', 'Office', 'Loading Bay', 'Freezer', 'Surveillance Room']"
                                        v-model="newRecruitment.jobLocation" color="primary" clearable />

                                    <v-combobox label="Job Description"
                                        :items="['Assist supervisor', 'Pack parcels', 'Check parcels', 'Loading and unloading', 'Cargo truck maintenance']"
                                        v-model="newRecruitment.jobDescription" color="primary" clearable />

                                    <v-switch label="First Come First Serve" hide-details v-model="newRecruitment.isFCFS"
                                        color="primary" />

                                    <v-btn type="submit" color="primary">Post</v-btn>
                                </form>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>
  
<script>
import axios from 'axios';
import NavBar from '@/components/NavBar.vue';
import { useMainStore } from '@/stores/store';

export default {
    components: {
        NavBar,
    },

    data() {
        return {
            newRecruitment: {
                staffID: null,
                stuNumReq: null,
                jobShiftDate: null,
                startTime: null,
                endTime: null,
                jobLocation: null,
                jobDescription: null,
                isFCFS: 0,
            },
            timeSlots: [
                '08:00:00', '08:30:00', '09:00:00', '09:30:00', '10:00:00', '10:30:00', '11:00:00', '11:30:00', '12:00:00', '12:30:00',
                '13:00:00', '13:30:00', '14:00:00', '14:30:00', '15:00:00', '15:30:00', '16:00:00', '16:30:00', '17:00:00', '17:30:00',
                '18:00:00', '18:30:00', '19:00:00'
            ],
            isLoading: false,
            errorMessage: null
        };
    },

    mounted() {
        const store = useMainStore();
        console.log("Mounted - staffID:", store.staffID);
    },

    methods: {
        postRecruitment() {
            this.isLoading = true;
            this.errorMessage = null;

            const store = useMainStore();
            this.newRecruitment.staffID = store.staffID;
            this.newRecruitment.isFCFS = this.newRecruitment.isFCFS ? 1 : 0;

            console.log("Posting recruitment with:", this.newRecruitment);

            axios.post("http://localhost:5045/recruitment/Recruitment", this.newRecruitment)
                .then(() => {
                    this.$router.push("/calendarView");
                })

                .catch(error => {
                    this.errorMessage = error.response?.data?.message || 'An error has occurred.';
                    console.error('POST request error:', error.response || error);
                })

                .finally(() => {
                    this.isLoading = false;
                });
        },
    },
};
</script>
  
<style>
.loading-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.8);
    z-index: 1000;
}
</style>
