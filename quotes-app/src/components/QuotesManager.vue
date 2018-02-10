<template>
  <div>
    <app-quotes-progress
      class="container-fluid"
      :quoteCount="quotes.length"
      :maxQuotes="MAX_QUOTES" />
    <hr />
    <app-quote-creator class="container-fluid" @quoteAdded="quoteAdded" />
    <hr />
    <app-quotes class="container-fluid" :quotes="quotes" @quoteDelete="quoteDeleted" />
  </div>
</template>

<script>
const MAX_QUOTES = 10;

export default {
  components: {
    AppQuotesProgress: () => import('./QuotesProgress.vue'),
    AppQuoteCreator: () => import('./QuoteCreator.vue'),
    AppQuotes: () => import('./Quotes/Quotes.vue'),
  },
  data() {
    return {
      quotes: [],
      MAX_QUOTES,
    };
  },
  methods: {
    quoteAdded(quote) {
      if (this.quotes.length < this.MAX_QUOTES) {
        this.quotes.push(quote);
      } else {
        // eslint-disable-next-line
        alert('You have reach the maximum number of quotes');
      }
    },
    quoteDeleted(quoteToDelete) {
      this.quotes = this.quotes.filter(quote => quote.id !== quoteToDelete.id);
    },
  },
};
</script>

<style>

</style>
