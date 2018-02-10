<template>
  <div>
    <h2>Quotes Added</h2>
    <div class="progress">
      <div
        class="progress-bar"
        role="progressbar"
        :style="quoteProgressStyle"
        :aria-valuenow="quoteProgress"
        aria-valuemin="0"
        aria-valuemax="100">
        {{quoteFraction}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    quoteCount: {
      type: Number,
      value: 0,
    },
    maxQuotes: {
      type: Number,
      value: 0,
    },
  },
  computed: {
    quoteFraction() {
      return `${this.quoteCount}/${this.maxQuotes}`;
    },
    quoteProgress() {
      return (this.quoteCount / this.maxQuotes) * 100;
    },
    quoteProgressStyle() {
      return {
        width: `${this.quoteProgress}%`,
      };
    },
  },
};
</script>
