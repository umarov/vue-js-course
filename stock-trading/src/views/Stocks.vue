<template>
  <div class="container row">
    <div class="col-sm-6 col-md-4 col-lg-4 col-xl-3" v-for="stock in stocks" :key="stock.sign">
      <st-stock :stock="stock"></st-stock>
    </div>
  </div>
</template>


<script lang="ts">
  import Vue from 'vue';
  import { mapGetters } from 'vuex';

  export default Vue.extend({
    name: 'StStocks',
    components: {
      StStock: () => import('@/components/Stock.vue'),
    },
    computed: {
      ...mapGetters({
        stocks: 'getAllStocks',
      }),
    },
  });
</script>

<style lang="scss" scoped>
  .card {
    margin: 8px;
  }
</style>

