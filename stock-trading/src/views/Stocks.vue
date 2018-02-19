<template>
  <div class="container row">
    <div class="col-sm-6 col-md-4 col-lg-4 col-xl-3" v-for="stock in stocks" :key="stock.sign">
      <div class="card">
        <div class="card-header">
          {{stock.name}}
        </div>
        <div class="card-body">
          <div class="card-title">
            {{ stock.sign }}
          </div>
          <div class="card-subtitle mb-2">
            {{stock.price}}
          </div>
          <div class="card-text">
            {{stock.description}}
          </div>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <input type="number" class="form-control" placeholder="Quantity">
          </li>
          <li class="list-group-item">
            <a href="#" class="btn btn-success">Buy</a>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>


<script lang="ts">
  import Vue from 'vue';
  export default Vue.extend({
    name: 'StStocks',
    data() {
      return {
        stocks: [
          { name: 'Google', sign: 'GOOG', price: 1034, description: '' },
          { name: 'Square', sign: 'SQ', price: 44, description: '' },
          { name: 'AMD', sign: 'AMD', price: 12, description: '' },
          { name: 'Nvidia', sign: 'NVDA', price: 244, description: '' },
        ],
      };
    },
  });
</script>

<style lang="scss" scoped>
  .card {
    margin: 8px;
  }
</style>

