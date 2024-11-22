<template>
  <div>
    <h1>Productos</h1>
    <div v-for="product in products" :key="product.id">
      <h3>{{ product.name }}</h3>
      <p>{{ product.description }}</p>
      <p>Precio: {{ product.price }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    axios.get('http://localhost:3000/api/products')
      .then(response => {
        this.products = response.data;
      })
      .catch(error => console.error(error));
  },
};
</script>
