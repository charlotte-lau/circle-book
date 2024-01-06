<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  book: {
    id: Number,
    title: String,
    author: String,
    isbn: String,
    price: Number,
    availableStock: Number
},
currency: {
    type: String,
    default: 'NZD'
}
})
</script>

<template>
    <v-col class="v-col-3">
        <v-card class="text-center">
            <div class="d-flex justify-center">
                <img src="@/assets/book.png" width="125" height="180" />
            </div>
            <v-card-item>
                <v-card-title class="text-subtitle-1 h-60">{{  book.title  }}</v-card-title>
                <v-card-subtitle class="text-subtitle-2">{{  book.author  }}</v-card-subtitle>
            </v-card-item>
            <v-card-text class="no-pd">
                <div>{{ "$" + book.price + ' ' + currency }}</div>
                <div class="font-weight-black" :color="(book.availableStock>0)?'black':'red'">{{ (book.availableStock > 0)? "In stock": "No Stock" }}</div>
            </v-card-text>
            <v-card-actions class="d-flex flex-column">
                <v-btn class="btn-blue" block>Add to Cart</v-btn>
                <v-btn class="btn-gray" block @click="$router.push('detail/'+book.id)">Detail</v-btn>
            </v-card-actions>
        </v-card>
    </v-col>
</template>

<style scoped>
.v-card {
    padding-top: 0.3rem;
}

.v-card-actions {
    padding: 0 0.5rem;
}
.no-pd {
    padding: 0;    
}

.h-60 {
    height: 60px 
}

.btn-blue {
    background-color: #F44336;
    color: white;
}

.btn-gray {
    background-color: #999999;
    color: white;
}

button {
    margin: 5px 0 5px 0 !important;
}
</style>