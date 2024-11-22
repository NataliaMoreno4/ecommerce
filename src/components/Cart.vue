<template>
  <div class="cart">
    <h2>Shopping Cart</h2>
    <ul>
      <li v-for="(item, index) in cartItems" :key="index">
        {{ item.name }} - ${{ item.price }} x {{ item.quantity }}
        <button @click="$emit('remove-item', item.id)">Remove</button>
      </li>
    </ul>
    <p>Total: ${{ totalPrice }}</p>
    <button 
      class="btn btn-success"
      @click="$emit('checkout')"
    >
      Proceed to Checkout
    </button>
  </div>
</template>

<script>
export default {
  props: ['cartItems'],
  computed: {
    totalPrice() {
      return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    },
  },
};
</script>

<style>
.cart {
  padding: 20px;
}
</style>
