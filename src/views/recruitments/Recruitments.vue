<!-- <template>
    <v-app class="bg-grey-lighten-4">
        <NavBar />

        <v-main>
            <v-container fluid>
                <v-row wrap justify="center" class="text-center">
                    <v-col sm="12" md="12" lg="10" v-for="item in recruitmentCollection" :key="item.recruitmentID">
                        <v-card>
                            <v-row class="ma-1 pa-1">
                                <v-col lg="5">
                                    <v-card-title class="text-subtitle-2 text-left font-weight-light">Recruitment ID:
                                    </v-card-title>
                                    <v-card-text class="text-body-2 text-left">{{ item.recruitmentID }}</v-card-text>
                                </v-col>

                                <v-col lg="2">
                                    <v-card-title class="text-subtitle-2 text-left font-weight-light">Job Shift Date:
                                    </v-card-title>
                                    <v-card-text class="text-body-2 text-left">{{ item.jobShiftDate }}</v-card-text>
                                </v-col>

                                <v-col lg="2">
                                    <v-card-title class="text-subtitle-2 text-left font-weight-light">Staff ID:
                                    </v-card-title>
                                    <v-card-text class="text-body-2 text-left">{{ item.staffID }}</v-card-text>
                                </v-col>

                                <v-col lg="3">
                                    <v-card-title class="text-subtitle-2 text-left font-weight-light">Number of Student
                                        Required: </v-card-title>
                                    <v-card-text class="text-body-2 text-left">{{ item.stuNumReq }}</v-card-text>
                                </v-col>
                            </v-row>

                            <v-expand-transition>
                                <v-row v-if="expand">
                                    <v-row justify="center">
                                        <v-col lg="4">
                                            <v-card-title class="text-subtitle-2 text-left font-weight-light">Job Shift
                                                Date:</v-card-title>
                                            <v-card-text class="text-body-2 text-left">{{ item.jobShiftDate }}</v-card-text>
                                        </v-col>

                                        <v-col lg="4">
                                            <v-card-title class="text-subtitle-2 text-left font-weight-light">Start Time:
                                            </v-card-title>
                                            <v-card-text class="text-body-2 text-left">{{ item.startTime }}</v-card-text>
                                        </v-col>

                                        <v-col lg="4">
                                            <v-card-title class="text-subtitle-2 text-left font-weight-light">End Time:
                                            </v-card-title>
                                            <v-card-text class="text-body-2 text-left">{{ item.endTime }}</v-card-text>
                                        </v-col>
                                    </v-row>

                                    <v-row>
                                        <v-col lg="12">
                                            <v-card-title class="text-subtitle-2 text-left font-weight-light">Job
                                                Description:
                                            </v-card-title>
                                            <v-card-text class="text-body-2 text-left">{{ item.jobDescription
                                            }}</v-card-text>
                                        </v-col>
                                    </v-row>

                                    <v-row>
                                        <v-col lg="4">
                                            <v-card-title class="text-subtitle-2 text-left font-weight-light">Job Location:
                                            </v-card-title>
                                            <v-card-text class="text-body-2 text-left">{{ item.jobLocation }}</v-card-text>
                                        </v-col>

                                        <v-col lg="4">
                                            <v-card-title class="text-subtitle-2 text-left font-weight-light">Is FCFS?:
                                            </v-card-title>
                                            <v-card-text class="text-body-2 text-left">{{ item.isFCFS }}</v-card-text>
                                        </v-col>

                                        <v-col lg="4">
                                            <v-card-title class="text-subtitle-2 text-left font-weight-light">Remaining
                                                Quota:
                                            </v-card-title>
                                            <v-card-text class="text-body-2 text-left">{{ item.stuNumReqRemain
                                            }}</v-card-text>
                                        </v-col>
                                    </v-row>
                                </v-row>

                            </v-expand-transition>


                            <v-card-actions>
                                <v-btn @click="expand = !expand">
                                    {{ !expand ? 'Full Report' : 'Hide Report' }}
                                </v-btn>
                            </v-card-actions>
                        </v-card>
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
                <v-row wrap justify="center" class="text-center">
                    <v-col xs="12" sm="12" md="12" lg="10" v-for="item in recruitmentCollection" :key="item.recruitmentID">
                        <v-card :style="borderStyle(item.stuNumReqRemain)">
                            <v-row class="mt-1 mx-1 pt-1 px-1">
                                <v-col xs="12" sm="6" md="4" lg="3">
                                    <v-card-title class="text-subtitle-2 text-left font-weight-light">Recruitment
                                        ID:</v-card-title>
                                    <v-card-text class="text-body-2 text-left">{{ item.recruitmentID }}</v-card-text>
                                </v-col>

                                <v-col xs="12" sm="6" md="4" lg="3">
                                    <v-card-title class="text-subtitle-2 text-left font-weight-light">Job Shift
                                        Date:</v-card-title>
                                    <v-card-text class="text-body-2 text-left">{{ item.jobShiftDate }}</v-card-text>
                                </v-col>

                                <v-col xs="12" sm="6" md="4" lg="3">
                                    <v-card-title class="text-subtitle-2 text-left font-weight-light">Staff
                                        ID:</v-card-title>
                                    <v-card-text class="text-body-2 text-left">{{ item.staffID }}</v-card-text>
                                </v-col>

                                <v-col xs="12" sm="6" md="4" lg="3">
                                    <v-card-title class="text-subtitle-2 text-left font-weight-light">Number of Students
                                        Required:</v-card-title>
                                    <v-card-text class="text-body-2 text-left">{{ item.stuNumReq }}</v-card-text>
                                </v-col>
                            </v-row>


                            <v-expand-transition>
                                <div v-if="item.expand">
                                    <v-row justify="start" class="mt-1 mx-1 pt-1 px-1">
                                        <v-col xs="12" sm="6" md="4" lg="3">
                                            <v-card-title class="text-subtitle-2 text-left font-weight-light">Start
                                                Time:</v-card-title>
                                            <v-card-text class="text-body-2 text-left">{{ item.startTime }}</v-card-text>
                                        </v-col>

                                        <v-col xs="12" sm="6" md="4" lg="3">
                                            <v-card-title class="text-subtitle-2 text-left font-weight-light">End
                                                Time:</v-card-title>
                                            <v-card-text class="text-body-2 text-left">{{ item.endTime }}</v-card-text>
                                        </v-col>

                                        <v-col xs="12" sm="6" md="4" lg="3">
                                            <v-card-title class="text-subtitle-2 text-left font-weight-light">Job
                                                Location:</v-card-title>
                                            <v-card-text class="text-body-2 text-left">{{ item.jobLocation }}</v-card-text>
                                        </v-col>
                                    </v-row>

                                    <v-row justify="start" class="mt-1 mx-1 pt-1 px-1">
                                        <v-col xs="12" sm="6" md="4" lg="9">
                                            <v-card-title class="text-subtitle-2 text-left font-weight-light">Job
                                                Description:</v-card-title>
                                            <v-card-text class="text-body-2 text-left">{{ item.jobDescription
                                            }}</v-card-text>
                                        </v-col>
                                    </v-row>

                                    <v-row justify="start" class="mt-1 mx-1 pt-1 px-1">
                                        <v-col xs="12" sm="6" md="4" lg="3">
                                            <v-card-title class="text-subtitle-2 text-left font-weight-light">Is
                                                FCFS?:</v-card-title>
                                            <v-card-text class="text-body-2 text-left">{{ item.isFCFS }}</v-card-text>
                                        </v-col>

                                        <v-col xs="12" sm="6" md="4" lg="3">
                                            <v-card-title class="text-subtitle-2 text-left font-weight-light">Remaining
                                                Quota:</v-card-title>
                                            <v-card-text class="text-body-2 text-left">{{ item.stuNumReqRemain
                                            }}</v-card-text>
                                        </v-col>
                                    </v-row>
                                </div>
                            </v-expand-transition>

                            <v-divider></v-divider>

                            <v-row justify="end" class="ma-1 pa-1">
                                <v-card-actions>

                                    <v-btn @click="viewAvailableStudents(item.recruitmentID)">Available Students</v-btn>

                                    <v-btn color="#EC407A" @click="viewAssignments(item.recruitmentID)">
                                        Assignments
                                        <v-tooltip activator="parent" location="start"><span>Display assignments of
                                                Recruitment {{ item.recruitmentID }}</span></v-tooltip>
                                    </v-btn>

                                    <v-btn color="#66bb6a" @click="viewApplicants(item.recruitmentID)">
                                        Applicants
                                        <v-tooltip activator="parent" location="start"><span>Display applicants of
                                                Recruitment {{ item.recruitmentID }}</span></v-tooltip>
                                    </v-btn>

                                    <v-btn color="error" @click="openDeleteDialog(item.recruitmentID)">
                                        Delete
                                        <v-tooltip activator="parent" location="top"><span>Delete Recruitment {{
                                            item.recruitmentID }}</span></v-tooltip>
                                    </v-btn>

                                    <!-- <v-btn color="#ef6c00" @click="updateRecruitment(item)">
                                        Update
                                        <v-tooltip activator="parent" location="top"><span>Update Recruitment {{
                                            item.recruitmentID }}</span></v-tooltip>
                                    </v-btn> -->

                                    <v-btn color="primary" @click="item.expand = !item.expand">
                                        {{ !item.expand ? 'Expand' : 'Collapse' }}
                                    </v-btn>
                                </v-card-actions>
                            </v-row>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
        <DeleteDialog @delete-success="handleDeleteSuccess"></DeleteDialog>
    </v-app>
</template>

<script>
import axios from 'axios';
import NavBar from '@/components/NavBar.vue';
import { useMainStore } from '@/stores/store';
import DeleteDialog from '@/components/DeleteRecruitmentDialog.vue';

export default {
    components: {
        NavBar,
        DeleteDialog,
    },

    data() {
        return {
            recruitmentCollection: [],
            // showDeleteDialog: false,
        };
    },

    methods: {
        borderStyle(stuNumReqRemain) {
            if (stuNumReqRemain > 0) {
                return { borderLeft: '5px solid red' };
            } else {
                return { borderLeft: '5px solid green' };
            }
        },

        openDeleteDialog(recruitmentID) {
            console.log("hello")
            console.log(recruitmentID);
            try {
                const store = useMainStore();
                store.setRecruitmentID(recruitmentID);
                store.setShowDialogStatus(true);
                // console.log(this.showDeleteDialog);
            } catch (error) {
                console.error('Error setting recruitment ID:', error);
                console.log("error")
            }
        },

        viewApplicants(recruitmentID) {
            try {
                const store = useMainStore();
                store.setRecruitmentID(recruitmentID);
                this.$router.push("/applicantList");
            } catch (error) {
                console.error('Sad life, faild to view applicants', error);
                console.log("error applicants");
            }
        },

        viewAssignments(recruitmentID) {
            try {
                const store = useMainStore();
                store.setRecruitmentID(recruitmentID);
                this.$router.push("/assignmentList");
            } catch (error) {
                console.error('Sad life, faild to view assignments', error);
                console.log("error assignments");
            }
        },

        handleDeleteSuccess(deletedRecruitmentID) {
            this.recruitmentCollection = this.recruitmentCollection.filter(item => item.recruitmentID !== deletedRecruitmentID);
        },

        viewAvailableStudents(recruitmentID){
            try{
                const store = useMainStore();
                store.setRecruitmentID(recruitmentID);
                this.$router.push("/availableStudentList");
            }catch(error){
                console.error('Sad life, faled to view availabel student list')
                console.log("error");
            }
        }
    },

    mounted() {
        const store = useMainStore();
        const staffID = store.staffID;

        axios.get(`http://localhost:5045/recruitment/Recruitment/staff/${staffID}`)
            .then((response) => {
                this.recruitmentCollection = response.data.map(item => ({
                    ...item,
                    expand: false // Initialize expand property for each item
                }));
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }
}
</script>

<style></style>

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
            recruitmentCollection: [],
            expand: false,
        };
    },

    mounted() {
        const store = useMainStore();
        const staffID = store.staffID;
        axios.get(`http://localhost:5045/recruitment/Recruitment/staff/${staffID}`)
            .then((response) => {
                this.recruitmentCollection = response.data;//Assign JSON into collection
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }
}
</script> -->