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
        {{stock.price | currency}}
      </div>
      <div class="card-text">
        {{stock.description}}
      </div>
    </div>
    <ul class="list-group list-group-flush" v-if="buyable">
      <li class="list-group-item">
        <input type="number" class="form-control" placeholder="Quantity" v-model="quantity" min="1" :max="shareLimit" :disabled="shareLimit < 1">
      </li>
      <li class="list-group-item" v-if="shareLimit < 1">
        <p class="text-danger font-weight-light text-center">
          You can't afford anymore shares of {{ stock.sign }}
        </p>
      </li>
      <li class="list-group-item">
        <button class="btn btn-success" :disabled="quantity < 1" @click="buy">Buy</button>
      </li>
    </ul>

    <ul class="list-group list-group-flush" v-if="sellable">
      <li class="list-group-item">
        <p>You own {{stock.quantity}} {{stock.quantity > 1 ? "shares" : "share"}}</p>
      </li>
      <li class="list-group-item">
        <input type="number" class="form-control" placeholder="Quantity" v-model="quantity" min="1" :max="stock.quantity">
      </li>
      <li class="list-group-item">
        <button class="btn btn-danger" :disabled="quantity < 1" @click="sell">
          Sell
        </button>
      </li>
    </ul>
  </div>
</template>


<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    data() {
      return {
        quantity: 0,
      };
    },
    props: {
      stock: Object,
      funds: {
        required: true,
        type: Number,
      },
      sellable: {
        type: Boolean,
        default: false,
      },
      buyable: {
        type: Boolean,
        default: false,
      },
    },
    computed: {
      shareLimit(): number {
        return Math.floor(this.funds / this.stock.price);
      },
    },
    methods: {
      sell() {
        this.$store.dispatch('sellShares', {
          quantity: this.quantity,
          sign: this.stock.sign,
        });

        this.quantity = 0;
      },
      buy() {
        this.$store.dispatch('buyShares', {
          quantity: this.quantity,
          sign: this.stock.sign,
        });

        this.quantity = 0;
      },
    },
  });
</script>


<style lang="scss" scoped>
  .card {
    margin: 8px;
  }
</style>
