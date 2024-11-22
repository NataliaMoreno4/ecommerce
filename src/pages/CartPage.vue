<template>
  <div class="cart-page">
    <h1>Carrito de Compras</h1>
    <div v-if="cart.length > 0">
      <div class="row" v-for="(item, index) in cart" :key="index">
        <div class="col-md-8">
          <h5>{{ item.name }}</h5>
          <p>{{ item.description }}</p>
          <p><strong>Precio:</strong> ${{ item.price }}</p>
        </div>
        <div class="col-md-4 text-end">
          <button class="btn btn-danger" @click="removeFromCart(index)">Eliminar</button>
        </div>
      </div>
      <hr>
      <h3>Total: ${{ total }}</h3>
      <router-link to="/checkout" class="btn btn-primary">Proceder al Pago</router-link>
    </div>
    <div v-else>
      <p>Tu carrito está vacío.</p>
      <router-link to="/products" class="btn btn-secondary">Explorar Productos</router-link>
    </div>
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
    removeFromCart(index) {
      this.$store.commit('removeFromCart', index);
    },
  },
};
</script>

<style>
.cart-page {
  margin: 20px;
}
</style>
