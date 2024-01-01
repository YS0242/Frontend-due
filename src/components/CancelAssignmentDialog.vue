<template>
    <div class="text-center">
        <div v-if="isLoading" class="loading-overlay">
            <v-progress-circular indeterminate color="primary" size="64"></v-progress-circular>
        </div>
        <v-dialog v-model="showDialogStatus" max-width="600px">
            <v-card>
                <v-card-title class="text-h5">
                    Confirm cancel this assignment?
                </v-card-title>
                <v-card-actions>
                    <v-btn color="error" @click="cancelAssignment">
                        Yes
                    </v-btn>

                    <v-btn color="green" @click="closeDialog">
                        No
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import { useMainStore } from '@/stores/store';
import axios from 'axios';

export default {
    data() {
        return {
            recruitmentID: null,
            studentID: null,
            isLoading: false,
        }
    },

    computed: {
        showDialogStatus() {
            const status = useMainStore().showDialogStatus;
            console.log("Dialog status (computed):", status); // Log dialog status
            return status;
        },
    },

    methods: {
        closeDialog() {
            const store = useMainStore();
            store.setShowDialogStatus(false);
        },

        cancelAssignment() {
            this.isLoading = true;
            const store = useMainStore();
            const recruitmentID = store.recruitmentID;
            const studentID = store.studentID;

            console.log(recruitmentID);
            console.log(studentID);
            console.log("hihihi")

            axios.post(`http://localhost:5045/cancelAssignment/${recruitmentID}/${studentID}`)
                .then(() => {
                    this.$emit('approval-success', { recruitmentID, studentID });
                    this.closeDialog();
                })
                .finally(() => {
                    this.isLoading = false;
                });
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
    z-index: 2000;
}
</style>