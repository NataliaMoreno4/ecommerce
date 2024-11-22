<template>
  <div>
    <h1>Productos</h1>
    <div class="product-list">
      <ProductCard
        v-for="product in products"
        :key="product._id"
        :product="product"
        @add-to-cart="addToCart"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import ProductCard from '../components/ProductCard.vue';

export default {
  components: { ProductCard },
  computed: {
    ...mapGetters(['products']),
  },
  methods: {
    ...mapActions(['fetchProducts', 'addToCart']),
  },
  created() {
    this.fetchProducts();
  },
};
</script>

<style>
.product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
