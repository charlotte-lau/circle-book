<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router'
import { useCartStore } from '@/stores/cart';
import DetailItem from '../components/DetailItem.vue'
import axios from 'axios';
import baseURL from '../services/api';

const paramId = useRoute().params.id;
// store for shopping cart
const cartStore = useCartStore();
const book = ref({});
const loading = ref(true);

onMounted(async ()=>{
    // get book detail on mount
    const res = await axios.get(baseURL + '/books/' + paramId);
    if (res.status == 200){
        // success
        loading.value=false;
        book.value = res.data.book;
    }else {
        //fail - pop error
        alert('Server error in buyNow ' + res.data.message);
    }
});

const addToCart = (id) => {
    cartStore.addToCart(id);
}

const buyNow = async (id) => {
    try {
        // get book detail on mount
        const res = await axios.post(baseURL + '/books/' + paramId + '/purchase');
        if (res.status == 200){
        alert('Congratulation! You have successfully brought this book.');
            // success
            book.value = res.data.book;
        }else {
            //fail - pop error
            alert('Server error in buyNow' + res.data.message);
        }
    }catch(error) {
        alert('Server error in buyNow' + error.response.data.message);
    }

}

</script>

<template>
    <div v-if="!loading">
        <DetailItem 
        :book="book"
        :addToCart="addToCart"
        :buyNow="buyNow"
        />
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