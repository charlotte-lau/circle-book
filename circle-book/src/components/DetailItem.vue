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
    <div class="container d-flex">
        <div class="main pa-4">
            <div  class="left">
                <img src="@/assets/book.png" width="125" height="180" />
            </div>
            <div class="right pl-4 d-flex">
                <div class="info">
                    <div class="text-h4 mb-4">{{  book.title  }} </div>
                    <div class="text-subtitle-2 text-grey-darken-1">Author {{  book.author  }} | ISBN {{  book.isbn  }}</div>
                    <div class="price">{{ "$" + book.price + ' ' + currency}}</div>
                    <div class="actions">
                        <v-btn class="btn-blue mt-2" block>Add to Cart</v-btn>
                        <v-btn class="btn-gray mt-4" block @click="">Purchase now</v-btn>
                    </div>
                </div>            
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    justify-content: center;
}
.main {
    width: 100%;
    height: 100%;
    max-width: calc(1160px - 2rem);
    position: relative;
    display: flex;
    flex-flow: row wrap;
}
.main > div {
    width: 100%;
}
.left > img {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    padding: 0 1.75rem 0 1.75rem;
}
.info {
    width: 100%;
    text-align: center;
}
.left > img {
    width: 100%;
    height: auto;
}

.main > .item > div {
    width: 50%;
}
.price {
    font-size: 1.5rem;
    line-height: 1.33333;
    font-weight: 900 !important;
    margin: 0.5rem 0;
}

@media (min-width: 750px) {
    .left {
        float: left;
        width: 50% !important;
    }
    .right {
        width: 50% !important;
    }
    .price {
        margin: 2rem 0;
    }
    .info {
        text-align: left;
    }
}
</style>