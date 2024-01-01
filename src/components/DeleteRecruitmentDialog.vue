<template>
    <div class="text-center">
        <div v-if="isLoading" class="loading-overlay">
            <v-progress-circular indeterminate color="primary" size="64"></v-progress-circular>
        </div>

        <v-dialog v-model="showDialogStatus" max-width="600px">
            <v-card>
                <v-card-title class="text-h5">
                    Confirm delete this recruitment?
                </v-card-title>
                <v-card-actions>
                    <v-btn color="green" @click="deleteRecruitment">
                        Yes
                    </v-btn>

                    <v-btn color="error" @click="closeDialog">
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
            isLoading: false,
        }
    },

    computed: {
        showDialogStatus() {
            const status = useMainStore().showDialogStatus;
            console.log("Dialog status (computed):", status);
            return status;
        },
    },

    methods: {
        closeDialog() {
            const store = useMainStore();
            store.setShowDialogStatus(false);
        },

        deleteRecruitment() {
            this.isLoading = true;
            const store = useMainStore();
            const recruitmentID = store.recruitmentID;

            console.log(recruitmentID);
            console.log("123");

            axios.delete(`http://localhost:5045/recruitment/Recruitment/${recruitmentID}`)
                .then(() => {
                    this.$emit('delete-success', recruitmentID);
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
    z-index: 1000;
}
</style>