<template>
  <main>
    <div id="app">
      <app-quotes-manager class="container-fluid"/>
    </div>
  </main>
</template>

<script>
import QuotesManager from './components/QuotesManager.vue';

export default {
  name: 'app',
  components: {
    AppQuotesManager: QuotesManager,
  },
};
</script>

<style>
</style>
