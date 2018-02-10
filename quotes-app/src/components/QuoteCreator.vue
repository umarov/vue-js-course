<template>
  <div class="quote-creator">
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text"><h3>Qoute</h3></span>
      </div>
      <textarea
        class="form-control"
        v-model="quote"
        aria-label="With textarea"
        rows="3"
        cols="50"
        >
      </textarea>
    </div>

    <button class="btn btn-primary" @click="onQuoteAdded">
      Add Quote
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quote: 'Yolo',
    };
  },
  methods: {
    onQuoteAdded() {
      if (this.quote.length > 0) {
        this.$emit('quoteAdded', { message: this.quote, id: Date.now() });
        this.quote = '';
      }
    },
  },
};
</script>


<style>
.quote-creator {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
