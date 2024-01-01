<!-- <template>
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
                    <v-col v-if="assignmentCollection.length > 0" xs="12" sm="12" md="12" lg="10"
                    v-for="(item, index) in assignmentCollection" :key="item.recruitmentID">
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

                        <v-card variant="outlined">
                            <v-row justify="space-between">
                                <v-col xs="12" sm="6" md="4" lg="3">
                                    <v-card-title class="text-subtitle-2 text-left font-weight-light">Student
                                        ID:</v-card-title>
                                    <v-card-text class="text-body-2 text-left">{{ item.studentID }}</v-card-text>
                                </v-col>
                                
                                <v-col xs="12" sm="6" md="4" lg="3" class="text-right">
                                    <v-card-title class="text-subtitle-2 text-left font-weight-light">Student
                                        Name:</v-card-title>
                                    <v-card-text class="text-body-2 text-left">{{ item.studentName }}</v-card-text>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>

                    <v-col v-else>
                        <v-alert type="error">No assignments!</v-alert>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template> -->

<template>
    <v-app class="bg-grey-lighten-4">
        <NavBar />

        <v-main>
            <v-container fluid>
                <v-row class="mt-2 ml-2">
                    <v-col lg="1">
                        <v-btn color="primary" @click="goBack" icon>
                            <v-icon>mdi-arrow-left</v-icon>
                        </v-btn>
                    </v-col>

                    <v-col class="text-h5">
                        <h1>Assignments</h1>
                    </v-col>
                </v-row>

                <v-row v-if="assignmentCollection.length > 0" justify="center">
                    <v-col lg="10">
                        <v-card variant="tonal" color="primary">
                            <v-card-title class="text-subtitle-2 text-left font-weight-light">
                                Recruitment ID:
                            </v-card-title>
                            <v-card-text class="text-body-2 text-left">
                                {{ assignmentCollection[0].recruitmentID }}
                            </v-card-text>
                        </v-card>
                        <v-divider></v-divider>
                    </v-col>
                </v-row>

                <v-row wrap justify="center" class="text-center">
                    <v-col v-for="(item, index) in assignmentCollection" :key="item.recruitmentID" 
                           xs="12" sm="12" md="12" lg="10">
                        <v-card variant="outlined">
                            <v-row justify="space-between">
                                <v-col xs="12" sm="6" md="4" lg="3">
                                    <v-card-title class="text-subtitle-2 text-left font-weight-light">Student ID:</v-card-title>
                                    <v-card-text class="text-body-2 text-left">{{ item.studentID }}</v-card-text>
                                </v-col>
                                
                                <v-col xs="12" sm="6" md="4" lg="3" class="text-right">
                                    <v-card-title class="text-subtitle-2 text-left font-weight-light">Student Name:</v-card-title>
                                    <v-card-text class="text-body-2 text-left">{{ item.studentName }}</v-card-text>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>

                    <v-col v-if="assignmentCollection.length === 0">
                        <v-alert type="error">No assignments!</v-alert>
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
            assignmentCollection: [],
            recruitmentID: null,
        }
    },

    mounted() {
        const store = useMainStore();
        const recruitmentID = store.recruitmentID;

        axios.get(`http://localhost:5045/assignment/Assignment/${recruitmentID}`)
            .then((response) => {
                this.assignmentCollection = response.data
            })
    },

    methods: {
        goBack() {
            const store = useMainStore();
            store.recruitmentID = null; // Set recruitmentID in the store to null
            this.$router.push('/recruitments'); // Navigate back to "/recruitments" route
        },
    },
}
</script>