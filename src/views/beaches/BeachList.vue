<template>
    <div class="container">
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col" v-for="item in beachCollection" :key="item.id">
                <div class="card">
                    <img :src="item.imageUrl" class="card-img-top" alt="image">
                    <div class="card-body">
                        <h5 class="card-title">{{ item.beachName }}</h5>
                        <p class="card-text">Location - {{ item.place }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';

const beachCollection = ref([])

onMounted(() => {
    axios.get("http://localhost:5081/Beach")
        .then((response) => {
            beachCollection.value = response.data;
        })
})
</script>

<style></style>