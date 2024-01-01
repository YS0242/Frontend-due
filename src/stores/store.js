import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
    state: () => ({
        staffID: null,
        studentID: null,
        recruitmentID: null,
        showDialogStatus: null
    }),

    actions: {
        setStaffID(id){
            this.staffID = id;
            console.log(id);
        },

        setStudentID(id){
            this.studentID = id;
            console.log(id)
        },

        setRecruitmentID(id){
            this.recruitmentID = id;
            console.log("Recruitment ID set to:", id);
        },

        setShowDialogStatus(status){
            this.showDialogStatus = status;
            console.log("Status:", status);
        }
    }
})