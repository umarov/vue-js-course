<template>
  <div class="quotes-cards">
    <app-quote
      v-for="quote in quotes"
      :quote="quote"
      :key="quote.id"
      @click.native="onQuoteDelete(quote)">
      <p class="card-text">{{quote.message}}</p>
    </app-quote>
  </div>
</template>

<script>
export default {
  components: {
    AppQuote: () => import('./Quote.vue'),
  },
  props: {
    quotes: Array,
  },
  methods: {
    onQuoteDelete(quote) {
      this.$emit('quoteDelete', quote);
    },
  },
};
</script>

<style scoped>
  .quotes-cards {
    display: flex;
    flex: row;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
</style>

