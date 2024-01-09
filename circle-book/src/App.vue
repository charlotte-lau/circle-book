<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useCartStore } from '@/stores/cart';
import Banner from '@/components/Banner.vue'
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiHome } from '@mdi/js'

const cartStore = useCartStore();
const goToCart = () =>{
  console.log('goToCart..');
}
</script>

<template>
  <header>
    <Banner 
      logo="/src/assets/icons/logo.png" 
      title="Circle Book Shop" 
      :totalBooks="cartStore.count"
      :goToCart="goToCart"/> 
    <div class="wrapper">
      <nav>
        <RouterLink to="/"><svg-icon type="mdi" :path="mdiHome"></svg-icon></RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
