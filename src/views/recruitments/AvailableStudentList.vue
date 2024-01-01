<template>
    <v-app class="bg-grey-lighten-4">
        <NavBar />

        <v-main>
            <v-container fluid>

                <v-row>
                    <v-col>
                        <v-btn color="primary" @click="goBack" icon>
                            <v-icon>mdi-arrow-left</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>

                <v-row wrap justify="center" class="text-center">
                    <v-col v-if="availableStudentCollection.length > 0" xs="12" sm="12" md="12" lg="10"
                        v-for="(item, index) in availableStudentCollection" :key="item.recruitmentID">
                        <div v-if="index === 0">
                            <v-card variant="tonal" color="primary">
                                <v-row justify="start">
                                    <v-col lg="2">
                                        <v-card-title class="text-subtitle-2 text-left font-weight-light">Recruitment
                                            ID:</v-card-title>
                                        <v-card-text class="text-body-2 text-left">{{ item.recruitmentID }}</v-card-text>
                                    </v-col>
                                </v-row>
                            </v-card>
                            <v-divider></v-divider>
                        </div>

                        <v-card variant="outlined">
                            <v-row justify="start">
                                <v-col xs="12" sm="6" md="4" lg="3">
                                    <v-card-title class="text-subtitle-2 text-left font-weight-light">Student
                                        ID:</v-card-title>
                                    <v-card-text class="text-body-2 text-left">{{ item.studentID }}</v-card-text>
                                </v-col>

                                <v-col xs="12" sm="6" md="4" lg="3">
                                    <v-card-title class="text-subtitle-2 text-left font-weight-light">Student
                                        Name:</v-card-title>
                                    <v-card-text class="text-body-2 text-left">{{ item.studentName }}</v-card-text>
                                </v-col>

                                <v-col xs="12" sm="6" md="4" lg="3">
                                    <v-card-actions>
                                        <v-btn color="green"
                                            @click="assignStudent(item.studentID)">Approve</v-btn>

                                        <!-- Still havent update reject function -->
                                        <v-btn color="error">Reject</v-btn>
                                    </v-card-actions>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>

                    <v-col v-else>
                        <v-alert type="error">No available students!</v-alert>
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
            availableStudentCollection: [],
            recruitmentID: null,
            studentID: null,
        }
    },

    methods: {
        assignStudent(studentID) {
            try {
                const store = useMainStore();
                const StudentID = studentID;
                const RecruitmentID = store.recruitmentID;
                console.log(StudentID);
                console.log(RecruitmentID);
                axios.post(`http://localhost:5045/assignJob/${RecruitmentID}/${StudentID}`)
                    .then((response) => {
                        console.log("Yeah, you are right")
                    })
            } catch (error) {
                console.error('Sad life, failed to assign', error);
                console.log("error");
            }
        },

        goBack() {
            const store = useMainStore();
            store.recruitmentID = null; // Set recruitmentID in the store to null
            this.$router.push('/recruitments'); // Navigate back to "/recruitments" route
        },
    },

    mounted() {
        const store = useMainStore();
        const recruitmentID = store.recruitmentID;

        axios.get(`http://localhost:5045/getAvailableStudent/${recruitmentID}`)
            .then((response) => {
                this.availableStudentCollection = response.data;
                // this.recruitmentID = this.availableStudentCollection.recruitmentID;
                console.log("Success fetching available students");
                console.log("check", this.studentID);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }
}
</script>