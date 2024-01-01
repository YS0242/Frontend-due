<template>
    <v-app class="bg-grey-lighten-4">
        <NavBar />

        <v-main>
            <v-container fluid>
                <v-row class="mt-2 ml-2">
                    <v-col class="text-h5">
                        <h1>Cancellation Requests</h1>
                    </v-col>
                </v-row>

                <v-row wrap justify="center" class="text-center" >
                    <v-col xs="12" sm="12" md="12" lg="10" v-for="item in cancellationRequestCollection"
                        :key="item.recruitmentID">
                        <v-card>
                            <v-row class="mt-1 mx-1 pt-1 px-1">
                                <v-col xs="12" sm="6" md="4" lg="3">
                                    <v-card-title class="text-subtitle-2 text-left font-weight-light">Recruitment
                                        ID:</v-card-title>
                                    <v-card-text class="text-body-2 text-left">{{
                                        item.recruitmentID }}</v-card-text>
                                </v-col>

                                <v-col xs="12" sm="6" md="4" lg="3">
                                    <v-card-title class="text-subtitle-2 text-left font-weight-light">Job Shift
                                        Date:</v-card-title>
                                    <v-card-text class="text-body-2 text-left">{{ item.jobShiftDate
                                    }}</v-card-text>
                                </v-col>

                                <v-col xs="12" sm="6" md="4" lg="3">
                                    <v-card-title class="text-subtitle-2 text-left font-weight-light">Start
                                        Time:</v-card-title>
                                    <v-card-text class="text-body-2 text-left">{{
                                        item.startTime }}</v-card-text>
                                </v-col>

                                <v-col xs="12" sm="6" md="4" lg="3">
                                    <v-card-title class="text-subtitle-2 text-left font-weight-light">End
                                        Time:</v-card-title>
                                    <v-card-text class="text-body-2 text-left">{{ item.endTime
                                    }}</v-card-text>
                                </v-col>
                            </v-row>


                            <v-expand-transition>
                                <div v-if="item.expand">
                                    <v-row justify="start" class="mt-1 mx-1 pt-1 px-1">

                                        <v-col xs="12" sm="6" md="4" lg="3">
                                            <v-card-title class="text-subtitle-2 text-left font-weight-light">Student
                                                ID:</v-card-title>
                                            <v-card-text class="text-body-2 text-left">{{ item.studentID
                                            }}</v-card-text>
                                        </v-col>

                                        <v-col xs="12" sm="6" md="4" lg="3">
                                            <v-card-title class="text-subtitle-2 text-left font-weight-light">Staff
                                                ID:</v-card-title>
                                            <v-card-text class="text-body-2 text-left">{{ item.staffID
                                            }}</v-card-text>
                                        </v-col>

                                        <v-col xs="12" sm="6" md="4" lg="3">
                                            <v-card-title class="text-subtitle-2 text-left font-weight-light">Number of
                                                Students
                                                Required:</v-card-title>
                                            <v-card-text class="text-body-2 text-left">{{ item.stuNumReq
                                            }}</v-card-text>
                                        </v-col>

                                        <v-col xs="12" sm="6" md="4" lg="3">
                                            <v-card-title class="text-subtitle-2 text-left font-weight-light">Job
                                                Location:</v-card-title>
                                            <v-card-text class="text-body-2 text-left">{{
                                                item.jobLocation }}</v-card-text>
                                        </v-col>
                                    </v-row>

                                    <v-row justify="start" class="mt-1 mx-1 pt-1 px-1">
                                        <v-col xs="12" sm="6" md="4" lg="9">
                                            <v-card-title class="text-subtitle-2 text-left font-weight-light">Job
                                                Description:</v-card-title>
                                            <v-card-text class="text-body-2 text-left">{{
                                                item.jobDescription
                                            }}</v-card-text>
                                        </v-col>
                                    </v-row>

                                    <v-row justify="start" class="mt-1 mx-1 pt-1 px-1">
                                        <v-col xs="12" sm="6" md="4" lg="3">
                                            <v-card-title class="text-subtitle-2 text-left font-weight-light">Is
                                                FCFS?:</v-card-title>
                                            <v-card-text class="text-body-2 text-left">{{ item.isFCFS
                                            }}</v-card-text>
                                        </v-col>

                                        <v-col xs="12" sm="6" md="4" lg="3">
                                            <v-card-title class="text-subtitle-2 text-left font-weight-light">Remaining
                                                Quota:</v-card-title>
                                            <v-card-text class="text-body-2 text-left">{{
                                                item.stuNumReqRemain
                                            }}</v-card-text>
                                        </v-col>
                                    </v-row>
                                </div>
                            </v-expand-transition>

                            <v-divider></v-divider>

                            <v-row justify="end" class="ma-1 pa-1">
                                <v-card-actions>

                                    <v-btn color="#EC407A" @click="openCancelDialog(item.recruitmentID, item.studentID)">
                                        Approve
                                    </v-btn>

                                    <v-btn color="primary" @click="item.expand = !item.expand">
                                        {{ !item.expand ? 'Expand' : 'Collapse' }}
                                    </v-btn>
                                </v-card-actions>
                            </v-row>
                        </v-card>
                    </v-col>
                </v-row>

                <div v-if="cancellationRequestCollection.length === 0">
                    <v-alert class="mt-3" type="error">No cancellation requests available.</v-alert>
                </div>
            </v-container>
        </v-main>

        <CancelDialog @approval-success="handleApprovalSuccess"/>
    </v-app>
</template>

<script>
import axios from 'axios';
import NavBar from '@/components/NavBar.vue';
import { useMainStore } from '@/stores/store';
import CancelDialog from '@/components/CancelAssignmentDialog.vue';

export default {
    components: {
        NavBar,
        CancelDialog,
    },

    data() {
        return {
            cancellationRequestCollection: [],
        }
    },

    methods: {
        openCancelDialog(recruitmentID, studentID) {
            console.log("hello")
            console.log(recruitmentID);
            console.log(studentID)
            try {
                const store = useMainStore();
                store.setRecruitmentID(recruitmentID);
                store.setStudentID(studentID);
                store.setShowDialogStatus(true);
                // console.log(this.showDeleteDialog);
            } catch (error) {
                console.error('Error setting recruitment ID:', error);
                console.log("error")
            }
        },

        handleApprovalSuccess({ recruitmentID, studentID }) {
        this.cancellationRequestCollection = this.cancellationRequestCollection.filter(
            item => item.recruitmentID !== recruitmentID && item.studentID !== studentID
        );
    },
    },

    mounted() {
        const store = useMainStore();
        const staffID = store.staffID;

        axios.get(`http://localhost:5045/getCancellationRequest/${staffID}`)
            .then((response) => {
                this.cancellationRequestCollection = response.data.map((item) => ({
                    ...item,
                    expand: false
                }));
                console.log("hello");
                console.log(this.cancellationRequestCollection);
            })
            .catch((error) => {
                console.error('Error fetching cancellation requests:', error);
            })
    }
}
</script>

  <!-- <template>
    <v-app class="bg-grey-lighten-4">
      <NavBar />
  
      <v-main>
        <v-container fluid>
          <div v-for="(requestsArray, index) in cancellationRequestCollection" :key="index">
            <v-card v-for="request in requestsArray" :key="request.recruitmentID">

              <v-card-title>Recruitment ID: {{ request.recruitmentID }}</v-card-title>
              <v-card-text>Job Shift Date: {{ request.jobShiftDate }}</v-card-text>

            </v-card>
          </div>
          <div v-if="cancellationRequestCollection.length === 0">
            No cancellation requests available.
          </div>
        </v-container>
      </v-main>
    </v-app>
  </template> -->

  <!-- <template>
    <v-app class="bg-grey-lighten-4">
      <NavBar />
  
      <v-main>
        <v-container fluid>
          <v-row wrap justify="center" class="text-center">
            <v-col
              xs="12"
              sm="12"
              md="12"
              lg="10"
              v-for="(requestsArray, index) in cancellationRequestCollection"
              :key="index"
            >
              <v-card v-for="request in requestsArray" :key="request.recruitmentID">
   
                <v-card-title>Recruitment ID: {{ request.recruitmentID }}</v-card-title>
                <v-card-text>Job Shift Date: {{ request.jobShiftDate }}</v-card-text>
     
              </v-card>
            </v-col>
          </v-row>
  
          <div v-if="cancellationRequestCollection.length === 0">
            No cancellation requests available.
          </div>
        </v-container>
      </v-main>
    </v-app>
  </template> -->