<script setup>
import { ref, watch, onMounted } from 'vue';
import BookItem from '../components/BookItem.vue'
import axios from 'axios';
import baseURL from '../services/api';

// loading - for indicating whether data has been finished loading
const loading = ref(true);
// books - book list 
const books = ref({});
onMounted(async ()=>{
    // get book list on mount
    console.log('onMounted',baseURL);
    const res = await axios.get(baseURL + '/books');
    // this timeout is to demo slow loading 
    setTimeout(()=>{
        console.log('fill called, book: ', res);
        if (res.status == 200){
            // success
            loading.value=false;
            books.value = res.data.books;
        }else {
            //fail 
            // TODO: pop error
        }
    },1000)  
});
</script>

<template>
    <div v-if="!loading">
        <h1>Landing Page</h1>
        <v-container class="main">
            <v-row justify="space-around">
                <BookItem v-for="book in books" :book="book"/>
            </v-row>
        </v-container>
    </div>
    <div class="loading text-center" v-else>
        <v-progress-circular
        indeterminate
        color="primary"
        ></v-progress-circular>
    </div>
    
    
</template>

<style scoped>
.main {
    width: 100%;
    position: relative;
    display: flex;
    flex-flow: row wrap;
}

.loading {
    position: fixed;
    width: 100%;
    top: 50%;
}
</style>