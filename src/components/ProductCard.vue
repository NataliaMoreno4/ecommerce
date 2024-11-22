<template>
  <div class="card">
    <img :src="product.image" alt="Product image" />
    <div class="card-body">
      <h5>{{ product.name }}</h5>
      <p>${{ product.price }}</p>
      <button @click="$emit('add-to-cart', product)">Agregar al Carrito</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['product'],
};
</script>

<style>
.card {
  width: 200px;
  margin: 10px;
}
</style>
