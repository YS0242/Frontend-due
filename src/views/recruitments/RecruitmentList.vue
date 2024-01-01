<template>
    <v-app>
        <NavBar />
        <main>
            <div class="container d-flex justify-center text-center">
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col" v-for="item in recruitmentCollection" :key="item.recruitmentID">
                        <div class="card"></div>
                        <p>{{ item.recruitmentID }}</p>
                        <p>{{ item.staffID }}</p>
                        <p>{{ item.stuNumReq }}</p>
                        <p>{{ item.jobShiftDate }}</p>
                        <p>{{ item.startTime }}</p>
                        <p>{{ item.endTime }}</p>
                        <p>{{ item.jobLocation }}</p>
                        <p>{{ item.jobDescription }}</p>
                        <p>{{ item.isFCFS }}</p>
                        <p>{{ item.stuNumReqRemain }}</p>
                    </div>
                </div>
            </div>
        </main>
    </v-app>
</template>

<script>
import axios from 'axios';
import NavBar from '@/components/NavBar.vue'

export default {
    components: {
        NavBar
    },

    data() {
        return {
            recruitmentCollection: [],
        };
    },

    mounted() {
        axios.get("http://localhost:5045/recruitment/Recruitment")
            .then((response) => {
                this.recruitmentCollection = response.data;//Assign JSON into collection
            })
    }
}
</script>

<style></style>