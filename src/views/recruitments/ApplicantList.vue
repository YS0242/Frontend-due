<!-- Try to think, whether to remove the approved studetn from the Application table so that when reload, the studnet is not shown. -->

<template>
    <v-app class="bg-grey-lighten-4">
        <NavBar />

        <v-main>
            <div v-if="isLoading" class="loading-overlay">
                <v-progress-circular indeterminate color="primary" size="64"></v-progress-circular>
            </div>

            <v-container fluid>
                <v-row class="mt-2 ml-2">
                    <v-col lg="1">
                        <v-btn color="primary" @click="goBack" icon>
                            <v-icon>mdi-arrow-left</v-icon>
                        </v-btn>
                    </v-col>

                    <v-col class="text-h5">
                        <h1>Applicants</h1>
                    </v-col>
                </v-row>

                <v-row wrap justify="center">
                    <!-- <v-col v-if="applicantCollection.length > 0" xs="12" sm="12" md="12" lg="10"
                        v-for="(item, index) in applicantCollection" :key="item.recruitmentID"> -->

                    <v-col v-if="filteredApplicants.length > 0" xs="12" sm="12" md="12" lg="10"
                        v-for="(item, index) in filteredApplicants" :key="item.recruitmentID">

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
                                    <v-card-title class="text-subtitle-2 text-left font-weight-light">Application
                                        ID:</v-card-title>
                                    <v-card-text class="text-body-2 text-left">{{ item.applicationID }}</v-card-text>
                                </v-col>

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
                                            @click="approveApplication(item.studentID, item.recruitmentID)">Approve</v-btn>
                                    </v-card-actions>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>

                    <v-col v-else>
                        <v-alert type="error">No applicants!</v-alert>
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
            applicantCollection: [],
            isLoading: false,
        };
    },

    methods: {
        async fetchApplicants() {
            try {
                this.isLoading = true;
                const store = useMainStore();
                const recruitmentID = store.recruitmentID;

                this.applicantCollection = [];
                const response = await axios.get(`http://localhost:5045/Application/application/${recruitmentID}`);
                this.applicantCollection = response.data;
                console.log("Fetched applicants:", this.applicantCollection);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                this.isLoading = false;
            }
        },
        async approveApplication(studentID, recruitmentID) {
            try {
                this.isLoading = true;
                await axios.post(`http://localhost:5045/approveJob/${recruitmentID}/${studentID}`);
                console.log("Approval successful");
                await this.fetchApplicants(); // Refresh the list after approval
            } catch (error) {
                console.error('Failed to approve', error);
            } finally {
                this.isLoading = false;
            }
        },
        goBack() {
            const store = useMainStore();
            store.recruitmentID = null; // Set recruitmentID in the store to null
            this.$router.push('/recruitments'); // Navigate back to "/recruitments" route
        },
    },
    mounted() {
        this.fetchApplicants();
    },

    computed: {
        filteredApplicants() {
            return this.applicantCollection.filter(applicant => !applicant.isApproved);
        }
    }
}
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

<!-- <script>
import axios from 'axios';
import NavBar from '@/components/NavBar.vue';
import { useMainStore } from '@/stores/store';

export default {
    components: {
        NavBar,
    },

    data() {
        return {
            applicantCollection: [],
            studentID: null,
            recruitmentID: null,
            isLoading: false
        }
    },

    methods: {
        approveApplication(studentID, recruitmentID) {
            try {
                this.isLoading = true;
                const StudentID = studentID
                const RecruitmentID = recruitmentID
                console.log(StudentID);
                console.log(RecruitmentID);
                axios.post(`http://localhost:5045/approveJob/${RecruitmentID}/${StudentID}`)
                    .then((response) => {
                        console.log("Yeah, you are right")
                    })
                    .finally(() => {
                        this.isLoading = false;
                    });

            } catch (error) {
                console.error('Sad life, faild to approve', error);
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

        axios.get(`http://localhost:5045/Application/application/${recruitmentID}`)
            .then((response) => {
                this.applicantCollection = response.data
                this.studentID = this.applicantCollection.studentID;
                this.recruitmentID = this.applicantCollection.recruitmentID;
                console.log("success fetching");
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }
}
</script> -->
