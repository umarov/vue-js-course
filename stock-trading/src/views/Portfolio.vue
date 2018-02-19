<template>
  <div class="container row">
    <div class="col-sm-6 col-md-4 col-lg-4 col-xl-3" v-for="stock in stocks" :key="stock.sign">
      <st-stock :stock="stock"></st-stock>
    </div>

    <div class="col-sm-6 col-md-4 col-lg-4 col-xl-3" v-if="!stocks || stocks.length === 0">
      <h4>Your portfolio is empty</h4>
    </div>
  </div>
</template>


<script lang="ts">
  import Vue from 'vue';
  import { mapGetters } from 'vuex';

  export default Vue.extend({
    name: 'StPortfolio',
    computed: {
      ...mapGetters({
        stocks: 'getOwnedStocks',
      }),
    },
  });
</script>
