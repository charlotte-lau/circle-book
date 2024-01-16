<script setup>
import { ref, watch, onMounted } from 'vue';
import { useCartStore } from '@/stores/cart';
import BookItem from '../components/BookItem.vue'
import axios from 'axios';
import baseURL from '../services/api';

// loading - for indicating whether data has been finished loading
const loading = ref(true);
// books - book list 
const books = ref({});
// store for shopping cart
const cartStore = useCartStore();
onMounted(async ()=>{
    // get book list on mount
    const res = await axios.get(baseURL + '/books');
    // this timeout is to demo slow loading 
    setTimeout(()=>{
        if (import.meta.env.DEV) console.log('fill called, book: ', res);
        if (res.status == 200){
            // success
            loading.value=false;
            books.value = res.data.books;
        }else {
            //fail - pop error
            alert('Server error in buyNow' + res.data.message);
        }
    },1000)  
});

const addToCart = (id) => {
    cartStore.addToCart(id);
}
</script>

<template>
    <div v-if="!loading">
        <v-container class="main">
            <v-row justify="space-around">
                <BookItem v-for="book in books" 
                :book="book"
                :addToCart="addToCart"
                />
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
    flex-flow: column wrap;
}
@media (min-width: 1024px) {
    .main {
        width: 100%;
        position: relative;
        display: flex;
        flex-flow: row wrap;
    }
}

.loading {
    position: fixed;
    width: 100%;
    top: 50%;
}
</style>