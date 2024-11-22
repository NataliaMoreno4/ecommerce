import Vue from 'vue';
import App from './App.vue';
import router from './router';  // Importar las rutas
import store from './store';    // Si usas Vuex para gestionar el estado

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,  // Asegúrate de pasar el router aquí
  store,   // Si usas Vuex, puedes pasarlo también
}).$mount('#app');
