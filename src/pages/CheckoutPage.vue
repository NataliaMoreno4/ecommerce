<template>
  <div class="checkout-page">
    <h1>Confirmar Pedido</h1>
    <div>
      <h3>Resumen de la Orden</h3>
      <ul>
        <li v-for="item in cart" :key="item.id">
          {{ item.name }} - ${{ item.price }}
        </li>
      </ul>
      <h3>Total: ${{ total }}</h3>
    </div>
    <button class="btn btn-success" @click="confirmOrder">Confirmar Pedido</button>
  </div>
</template>

<script>
export default {
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    total() {
      return this.cart.reduce((sum, item) => sum + item.price, 0);
    },
  },
  methods: {
    confirmOrder() {
      alert('Orden confirmada. ¡Gracias por tu compra!');
      this.$store.commit('clearCart');
      this.$router.push('/');
    },
  },
};
</script>

<style>
.checkout-page {
  margin: 20px;
}
</style>
