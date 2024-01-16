<script setup>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiCart, mdiBookSearch } from '@mdi/js'

const props = defineProps({
    title: {
        type: String,
        default: 'Title'
    },
    totalBooks: {
        type: Number,
        default: 0
    },
    goToCart: {
        type: Function
    }
})
</script>

<template>
<div class="container d-flex bg pa-2">
    <div class="left">
        <img src="/src/assets/icons/logo.png"/>
        <div class="text-h4 banner pl-1">{{ title }}</div>
    </div>
    <div class="icon pr-2">        
        <div @click="goToCart"><svg-icon type="mdi" :path="mdiCart"></svg-icon>{{ totalBooks }}</div>
        
    </div>
</div>
</template>

<style scoped>
.container {
    justify-content: space-between;
}
.left {
    display: flex;
    align-items: center;
}
.banner {
    font-size: 1.9rem !important;
}
.logo {
    padding-right: 10px;
}
.icon {
    display: flex;
    justify-content: end;
    align-items: center;
}
.icon > div {
    display: flex;
    padding-left: 5px;
}

@media (min-width: 1024px) {
.icon > div {
    padding-left: 10px;
}
}
.banner {
    font-size: 2.125rem !important;
}

.bg {
    background-color: #81D4FA;
}
</style>