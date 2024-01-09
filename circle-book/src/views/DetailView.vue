<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router'
import DetailItem from '../components/DetailItem.vue'
import axios from 'axios';
import baseURL from '../services/api';

const paramId = useRoute().params.id;

const book = ref({});
onMounted(async ()=>{
    // get book detail on mount
    const res = await axios.get(baseURL + '/books/' + paramId);
    if (res.status == 200){
        // success
        loading.value=false;
        book.value = res.data.book;
    }else {
        //fail 
        // TODO: pop error
    }
});
const loading = ref(true);


</script>

<template>
    <div v-if="!loading">
        <DetailItem :book="book"/>
    </div>
    <div class="loading text-center" v-else>
        <v-progress-circular
        indeterminate
        color="primary"
        ></v-progress-circular>
    </div>
    
</template>

<style scoped>
.loading {
    position: fixed;
    width: 100%;
    top: 50%;
}
</style>