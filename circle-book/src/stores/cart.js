import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => {
    return {
      cartList: [],
      count2: 0,
      list: {}
    }
  },
  getters: {
    count:(state) => {
      let count = 0;
      for (const values in state.list) {
        if (state.list.hasOwnProperty(values)) {
          count+=state.list[values];
        }
     }
     return count
      
    }
  },
  actions: {
    addToCart(id) {
      if (typeof(this.list[id]) != 'undefined'){
        this.list[id] += 1;
      }else {
        this.list[id] = 1;
      }
      this.cartList.push(id);
    }
  }
})
