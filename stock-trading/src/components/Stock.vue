<template>
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
</template>


<script lang="ts">
  import Vue from 'vue';
  export default Vue.extend({
    props: {
      stock: Object,
    },
  });
</script>


<style lang="scss" scoped>

</style>
