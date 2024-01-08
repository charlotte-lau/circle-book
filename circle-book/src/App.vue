<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Banner from '@/components/Banner.vue'

const goToCart = () =>{
  console.log('goToCart..');
}
</script>

<template>
  <header>
    <Banner 
      logo="/src/assets/icons/logo.png" 
      title="Circle Book Shop" 
      :goToCart="goToCart"/> 
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
